/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 TreeExport.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/TreeExport.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.NurbsCurve.geometry} material={materials.Material} position={[0, -7.927, 98.063]} rotation={[0, Math.PI / 2, 0]} scale={[1, 0.125, 1]} />
      <mesh geometry={nodes.Plane001.geometry} material={materials['Material.005']} position={[0, -7.738, 0]} />
    </group>
  )
}

useGLTF.preload('/TreeExport.glb')