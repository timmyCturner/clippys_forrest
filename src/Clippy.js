import React, { useRef, useEffect, useMemo } from 'react';
import {  useThree,useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three';
import {mapRange, lerp } from 'canvas-sketch-util/math';
import Random from 'canvas-sketch-util/random';
import useStore from './store'

function runAnimation(t){
  return (t>0.1&&t<0.2)||(t>0.3&&t<0.4)||(t>0.5&&t<0.6)||(t>0.7&&t<0.8)
}


export function Clippy(props) {
  const group = useRef()
  const eyes = useRef()
  const { nodes, materials, animations } = useGLTF('/Clippy.glb')
  const mutation = useStore((state) => state.mutation)
  const { actions } = useAnimations(animations, group)
  const { clock, mouse} = mutation
  const { camera } = useThree()
  //   Object.entries(actions).forEach(([key, value]) => {
  //     if(key=="BodyAction.001")
  //      console.log(key)
  // });
  //console.log(actions);



  useFrame((state) => {

    if(group.current){
      const cameraPosition = camera.position;
   const cameraLookAt = camera.getWorldDirection(new THREE.Vector3()); // Get camera's look-at direction

   //const desiredPosition = cameraPosition.clone().add(cameraLookAt);

   //console.log(desiredPosition,cameraLookAt);
   // const delayFactor = 0.00001; // Adjust this to control the delay effect
   //
   // // Interpolate the object's position towards the desired position with a delay
   // group.current.position.x += (cameraLookAt.x - group.current.position.x) * delayFactor;
   // group.current.position.y += (cameraLookAt.y - group.current.position.y) * delayFactor;
   // group.current.position.z += (cameraLookAt.y - group.current.position.z) * delayFactor;
   //group.current.position.y += (desiredPosition.y - group.current.position.y) * delayFactor;

    //group.current.position.z = Math.sin(clock.getElapsedTime() * 0.01) * Math.PI * -5;
    //console.log(group.current.position);
    }

    if (actions && nodes.Bone004 && nodes.Bone005){
      const duration = animations[0].duration;
      let direction = 1;
      const t = mutation.t

      Object.entries(actions).forEach(([key, value]) => {

         actions[key].timeScale = 2

         if(key.includes("Body")){
            if(key=="BodyAction.001"){
               actions[key].loop = THREE.LoopOnce
               if (runAnimation(t)){
                 actions[key].play()

               }
             }
             else{
               actions[key].loop = THREE.LoopPingPong
               if (!runAnimation(t)){
                 actions[key].play()
               }
               else{
                 //console.log('hit');
                 actions[key].stop()
               }
             }
         }
         else{
           actions[key].loop = THREE.LoopPingPong
           actions[key].play()
           if (runAnimation(t)){
             actions[key].timeScale = 0.5
           }

         }

    });

    if (eyes.current){
        const off = Random.noise1D(state.clock.elapsedTime, 0.25);
        const tOff = mapRange(off, -1, 1, 0, 1);
        //const tOff = -1+(1/mapRange(0.5, -1, 1, 0, 1, true));
        eyes.current.rotation.z = lerp((-0.05), (.125), tOff);
        eyes.current.rotation.y = lerp((-0.25), (0.25), tOff);
      }
    }
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene" position={[0, 2, 0]}>
        <group name="Paper" position={[-0.138, 0.032, 0.877]} rotation={[-Math.PI/2, 0, 0]} scale={[0.625, 0.392, 0.392]}>
          <primitive object={nodes.Bone_1} />
          <skinnedMesh name="Clip_mesh" geometry={nodes.Clip_mesh.geometry} material={materials.Clippy_mat} skeleton={nodes.Clip_mesh.skeleton} />
        </group>
        <group name="Body" position={[-0.326, 0.87, 0.696]} rotation={[-Math.PI, 0, 0]} scale={0.3}>
          <primitive object={nodes.Bone} />
          <skinnedMesh name="Paper_mesh" geometry={nodes.Paper_mesh.geometry} material={materials.Paper_mat} skeleton={nodes.Paper_mesh.skeleton} />
        </group>
        <group ref={eyes} position={[0, 0, 0]}>
          <mesh name="Brows_mesh" geometry={nodes.Brows_mesh.geometry} material={materials.Brows_mat} position={[0, -0.065, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.4} />
          <group name="Eyes_mesh" position={[-0.224, 1.09, 0.855]} rotation={[1.593, 0, 0]} scale={0.4}>
            <mesh name="Mesh003" geometry={nodes.Mesh003.geometry} material={materials.Eyes_mat} />
            <mesh name="Mesh003_1" geometry={nodes.Mesh003_1.geometry} material={materials.Iris_mat} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Clippy.glb')
