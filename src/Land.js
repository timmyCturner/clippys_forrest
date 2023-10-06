import React, { useRef, useEffect, useMemo } from 'react';
import { useGLTF } from '@react-three/drei'
import { Water } from 'three-stdlib'
import * as THREE from 'three';
import { extend, useThree, useLoader, useFrame  } from '@react-three/fiber';
extend({ Water })

// function Ocean() {
//   const ref = useRef()
//   const gl = useThree((state) => state.gl)
//   const waterNormals = useLoader(THREE.TextureLoader, '/waternormals.jpeg')
//   waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping
//   const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), [])
//   const config = useMemo(
//     () => ({
//       textureWidth: 512,
//       textureHeight: 512,
//       waterNormals,
//       sunDirection: new THREE.Vector3(),
//       sunColor: 0xffffff,
//       waterColor: 0x001e0f,
//       distortionScale: 3.7,
//       fog: false,
//       format: gl.encoding
//     }),
//     [waterNormals]
//   )
//   useFrame((state, delta) => (ref.current.material.uniforms.time.value += delta))
//   return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />
// }
//<mesh geometry={nodes.NurbsCurve002.geometry} material={nodes.NurbsCurve002.material} position={[0, -7.927, 105.852]} rotation={[0, Math.PI / 2, 0]} />
export function Land(props) {
  const { nodes, materials } = useGLTF('/TreeExport.glb')
  const ref = useRef()
  const gl = useThree((state) => state.gl)
  const waterNormals = useLoader(THREE.TextureLoader, '/waternormals.jpeg')



  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.NurbsCurve.geometry} material={materials.Material} position={[0, -7.927, 98.063]} rotation={[0, Math.PI / 2, 0]} scale={[1, 0.125, 1]} />
      <mesh geometry={nodes.Plane001.geometry} material={materials['Material.005']} position={[0, -7.738, 0]} />
    </group>
  )
}

useGLTF.preload('/TreeExport.glb')
