import React, { useRef } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import useStore from './store'
import {mapRange, lerp } from 'canvas-sketch-util/math';
import Random from 'canvas-sketch-util/random';
import * as THREE from 'three';

let offset = 0

export function Rig({ children }) {
  const group = useRef()
  const rig = useRef()
  const mutation = useStore((state) => state.mutation)
  const { fov, scale, binormal, normal, track, mouse, clock } = mutation
  const { camera } = useThree()
  let done = false;

  useFrame(() => {
    const t = mutation.t
    const pos = mutation.position.clone()
    const segments = track.tangents.length
    //console.log(track.tangents.length);
    const pickt = t * segments
    const pick = Math.floor(pickt)
    const pickNext = (pick + 1) % segments
    binormal.subVectors(track.binormals[pickNext], track.binormals[pick])
    binormal.multiplyScalar(pickt - pick).add(track.binormals[pick])
    const dir = track.parameters.path.getTangentAt(t)
    offset += (Math.max(15, 15 + -mouse.y / 20) - offset) * 0.05
    normal.copy(binormal).cross(dir)
    pos.add(normal.clone().multiplyScalar(offset))
    camera.position.copy(pos)
    let lookAt = 0

    lookAt = track.parameters.path.getPointAt((t + 30 / track.parameters.path.getLength()) % 5).multiplyScalar(scale)
    const delayFactor = 0.3; // Adjust this to control the delay effect



    camera.matrix.lookAt(camera.position, lookAt, normal)
    camera.quaternion.setFromRotationMatrix(camera.matrix)
    camera.fov += (100 - camera.fov) * 0.05
    camera.updateProjectionMatrix()
    const lightPos = track.parameters.path.getPointAt((t + 1 / track.parameters.path.getLength()) % 1).multiplyScalar(scale)
    const groupPosition = group.current.position;
    groupPosition.x += (lightPos.x - groupPosition.x) * delayFactor;
    groupPosition.y += (lightPos.y - groupPosition.y+5) * delayFactor;
    groupPosition.z += (lightPos.z - groupPosition.z) * delayFactor;
    group.current.quaternion.setFromRotationMatrix(camera.matrix)


    // group.current.position.x += (normal.x - group.current.position.x) * delayFactor;
    // group.current.position.y += (normal.x - group.current.position.y) * delayFactor;
    // group.current.position.z += (normal.z - group.current.position.z) * delayFactor-5;
  })

  return (
    <group ref={group}>
      <pointLight distance={400} position={[0, 100, -420]} intensity={5} color="indianred" />
      <group ref={rig} position={[0, 10, -20]}>
        {children}
      </group>
    </group>
  )
}
