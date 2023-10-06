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
  const { nodes, materials } = useGLTF('/TreeExportForrest.glb')
  const ref = useRef()




  return (
    <group {...props} dispose={null} rotation={[Math.PI, Math.PI/2 , Math.PI]}>
      <mesh geometry={nodes.NurbsCurve.geometry} material={materials.Material} position={[0, -7.807, 98.063]} rotation={[0, Math.PI / 2, 0]} scale={[1, 0.125, 1]} />
      <mesh geometry={nodes.Plane001.geometry} material={materials['Material.005']} position={[0, -7.738, 0]} />
      <group position={[-85.319, 1.36, 80.803]} rotation={[-0.173, 0, -2.867]} scale={0.9}>
        <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-73.522, 6.266, 89.62]} rotation={[-0.208, 0, -2.906]} scale={0.9}>
        <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-70.008, 1.692, 57.769]} rotation={[-0.126, 0, -2.902]} scale={0.9}>
        <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-64.349, 0.179, 2.277]} rotation={[0.004, 0, -2.9]} scale={0.9}>
        <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-47.04, 5.166, 48.846]} rotation={[-0.124, 0, -2.962]} scale={0.9}>
        <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-54.114, 2.121, 2.372]} rotation={[0.004, 0, -2.96]} scale={0.9}>
        <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-29.482, 7.959, 55.729]} rotation={[-0.123, 0, -3.034]} scale={0.9}>
        <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-13.857, 13.226, 85.914]} rotation={[-0.196, 0, -3.113]} scale={0.9}>
        <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-13.363, 6.551, 34.086]} rotation={[-0.073, 0, -3.112]} scale={0.9}>
        <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-1.529, 10.578, 70.061]} rotation={[-0.16, 0, -3.135]} scale={0.9}>
        <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[4.27, 6.236, 22.492]} rotation={[-0.034, 0, -3.135]} scale={0.9}>
        <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[14.134, 10.454, 69.387]} rotation={[-0.16, 0, 3.135]} scale={0.9}>
        <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[37.66, 10.645, 73.67]} rotation={[-0.16, 0, 3.114]} scale={0.9}>
        <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[34.778, 8.194, 55.894]} rotation={[-0.122, 0, 3.114]} scale={0.9}>
        <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[56.196, 9.244, 76.758]} rotation={[-0.161, 0, 3.035]} scale={0.9}>
        <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[50.981, 5.346, 41.722]} rotation={[-0.074, 0, 3.032]} scale={0.9}>
        <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[70.681, 10.306, 95.103]} rotation={[-0.202, 0, 2.965]} scale={0.9}>
        <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[58.065, 3.686, 29.861]} rotation={[-0.036, 0, 2.96]} scale={0.9}>
        <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[82.501, 0.374, 51.901]} rotation={[-0.126, 0, 2.902]} scale={0.9}>
        <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[94.076, 1.638, 80.109]} rotation={[-0.173, 0, 2.868]} scale={0.9}>
        <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[90.986, -3.789, 21.46]} rotation={[-0.031, 0, 2.876]} scale={0.9}>
        <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-88.694, -1.101, 66.344]} rotation={[-0.173, 0, -2.867]} scale={0.9}>
        <mesh geometry={nodes.Cylinder001.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder001_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-74.887, 8.195, 96.201]} rotation={[-0.208, 0, -2.906]} scale={0.9}>
        <mesh geometry={nodes.Cylinder001.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder001_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-71.808, 0.197, 38.396]} rotation={[-0.077, 0, -2.901]} scale={0.9}>
        <mesh geometry={nodes.Cylinder001.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder001_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-63.644, 7.871, 82.874]} rotation={[-0.203, 0, -2.965]} scale={0.9}>
        <mesh geometry={nodes.Cylinder001.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder001_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-53.454, 6.473, 63.425]} rotation={[-0.124, 0, -2.962]} scale={0.9}>
        <mesh geometry={nodes.Cylinder001.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder001_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-65.096, 0.73, 11.479]} rotation={[0.004, 0, -2.96]} scale={0.9}>
        <mesh geometry={nodes.Cylinder001.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder001_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-33.09, 8.203, 57.703]} rotation={[-0.123, 0, -3.034]} scale={0.9}>
        <mesh geometry={nodes.Cylinder001.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder001_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-19.553, 10.028, 67.797]} rotation={[-0.16, 0, -3.113]} scale={0.9}>
        <mesh geometry={nodes.Cylinder001.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder001_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-21.358, 7.087, 43.037]} rotation={[-0.073, 0, -3.112]} scale={0.9}>
        <mesh geometry={nodes.Cylinder001.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder001_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-8.54, 8.3, 53.397]} rotation={[-0.123, 0, -3.135]} scale={0.9}>
        <mesh geometry={nodes.Cylinder001.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder001_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-4.608, 6.257, 23.881]} rotation={[-0.034, 0, -3.135]} scale={0.9}>
        <mesh geometry={nodes.Cylinder001.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder001_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[2.633, 7.725, 47.879]} rotation={[-0.074, 0, 3.135]} scale={0.9}>
        <mesh geometry={nodes.Cylinder001.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder001_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[22.325, 10.375, 69.878]} rotation={[-0.16, 0, 3.114]} scale={0.9}>
        <mesh geometry={nodes.Cylinder001.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder001_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[26.564, 6.661, 37.971]} rotation={[-0.073, 0, 3.114]} scale={0.9}>
        <mesh geometry={nodes.Cylinder001.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder001_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[37.273, 7.786, 55.181]} rotation={[-0.123, 0, 3.034]} scale={0.9}>
        <mesh geometry={nodes.Cylinder001.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder001_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[39.634, 5.745, 35.386]} rotation={[-0.074, 0, 3.032]} scale={0.9}>
        <mesh geometry={nodes.Cylinder001.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder001_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[59.442, 5.909, 63.15]} rotation={[-0.124, 0, 2.962]} scale={0.9}>
        <mesh geometry={nodes.Cylinder001.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder001_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[65.999, 1.155, 5.81]} rotation={[0.004, 0, 2.96]} scale={0.9}>
        <mesh geometry={nodes.Cylinder001.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder001_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[75.154, 2.336, 59.93]} rotation={[-0.126, 0, 2.902]} scale={0.9}>
        <mesh geometry={nodes.Cylinder001.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder001_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[89.384, -1.522, 57.919]} rotation={[-0.127, 0, 2.867]} scale={0.9}>
        <mesh geometry={nodes.Cylinder001.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder001_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[86.279, -3.487, 20.99]} rotation={[-0.031, 0, 2.876]} scale={0.9}>
        <mesh geometry={nodes.Cylinder001.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder001_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-86.727, -3.782, 48.65]} rotation={[-0.127, 0, -2.866]} scale={[0.004, 0.004, 0.005]}>
        <mesh geometry={nodes['����������������000_Color1003'].geometry} material={materials['Color1.003']} />
        <mesh geometry={nodes['����������������000_Color1003_1'].geometry} material={materials['Color2.004']} />
        <mesh geometry={nodes['����������������000_Color1003_2'].geometry} material={materials['Color2.003']} />
      </group>
      <group position={[-69.076, 0.824, 48.023]} rotation={[-0.126, 0, -2.902]} scale={0.005}>
        <mesh geometry={nodes['����������������000_Color1003'].geometry} material={materials['Color1.003']} />
        <mesh geometry={nodes['����������������000_Color1003_1'].geometry} material={materials['Color2.004']} />
        <mesh geometry={nodes['����������������000_Color1003_2'].geometry} material={materials['Color2.003']} />
      </group>
      <group position={[-71.968, -1.868, 21.069]} rotation={[-0.037, 0, -2.9]} scale={0.005}>
        <mesh geometry={nodes['����������������000_Color1003'].geometry} material={materials['Color1.003']} />
        <mesh geometry={nodes['����������������000_Color1003_1'].geometry} material={materials['Color2.004']} />
        <mesh geometry={nodes['����������������000_Color1003_2'].geometry} material={materials['Color2.003']} />
      </group>
      <group position={[-47.59, 7.76, 66.283]} rotation={[-0.165, 0, -2.963]} scale={0.005}>
        <mesh geometry={nodes['����������������000_Color1003'].geometry} material={materials['Color1.003']} />
        <mesh geometry={nodes['����������������000_Color1003_1'].geometry} material={materials['Color2.004']} />
        <mesh geometry={nodes['����������������000_Color1003_2'].geometry} material={materials['Color2.003']} />
      </group>
      <group position={[-58.203, 2.615, 41.731]} rotation={[-0.075, 0, -2.961]} scale={[0.005, 0.004, 0.004]}>
        <mesh geometry={nodes['����������������000_Color1003'].geometry} material={materials['Color1.003']} />
        <mesh geometry={nodes['����������������000_Color1003_1'].geometry} material={materials['Color2.004']} />
        <mesh geometry={nodes['����������������000_Color1003_2'].geometry} material={materials['Color2.003']} />
      </group>
      <group position={[-46.122, 3.247, 3.422]} rotation={[0.004, 0, -2.96]} scale={[0.005, 0.004, 0.005]}>
        <mesh geometry={nodes['����������������000_Color1003'].geometry} material={materials['Color1.003']} />
        <mesh geometry={nodes['����������������000_Color1003_1'].geometry} material={materials['Color2.004']} />
        <mesh geometry={nodes['����������������000_Color1003_2'].geometry} material={materials['Color2.003']} />
      </group>
      <group position={[-35.617, 4.528, 12.456]} rotation={[-0.035, 0, -3.032]} scale={0.005}>
        <mesh geometry={nodes['����������������000_Color1003'].geometry} material={materials['Color1.003']} />
        <mesh geometry={nodes['����������������000_Color1003_1'].geometry} material={materials['Color2.004']} />
        <mesh geometry={nodes['����������������000_Color1003_2'].geometry} material={materials['Color2.003']} />
      </group>
      <group position={[-11.502, 7.902, 45.771]} rotation={[-0.122, 0, -3.112]} scale={0.005}>
        <mesh geometry={nodes['����������������000_Color1003'].geometry} material={materials['Color1.003']} />
        <mesh geometry={nodes['����������������000_Color1003_1'].geometry} material={materials['Color2.004']} />
        <mesh geometry={nodes['����������������000_Color1003_2'].geometry} material={materials['Color2.003']} />
      </group>
      <group position={[-11.93, 6.323, 23.249]} rotation={[-0.034, 0, -3.112]} scale={0.005}>
        <mesh geometry={nodes['����������������000_Color1003'].geometry} material={materials['Color1.003']} />
        <mesh geometry={nodes['����������������000_Color1003_1'].geometry} material={materials['Color2.004']} />
        <mesh geometry={nodes['����������������000_Color1003_2'].geometry} material={materials['Color2.003']} />
      </group>
      <group position={[-5.75, 6.028, 11.801]} rotation={[-0.034, 0, -3.135]} scale={0.005}>
        <mesh geometry={nodes['����������������000_Color1003'].geometry} material={materials['Color1.003']} />
        <mesh geometry={nodes['����������������000_Color1003_1'].geometry} material={materials['Color2.004']} />
        <mesh geometry={nodes['����������������000_Color1003_2'].geometry} material={materials['Color2.003']} />
      </group>
      <group position={[1.907, 6.113, 1.646]} rotation={[0.004, 0, -3.135]} scale={[0.004, 0.005, 0.005]}>
        <mesh geometry={nodes['����������������000_Color1003'].geometry} material={materials['Color1.003']} />
        <mesh geometry={nodes['����������������000_Color1003_1'].geometry} material={materials['Color2.004']} />
        <mesh geometry={nodes['����������������000_Color1003_2'].geometry} material={materials['Color2.003']} />
      </group>
      <group position={[7.806, 7.83, 43.695]} rotation={[-0.074, 0, 3.135]} scale={[0.005, 0.004, 0.005]}>
        <mesh geometry={nodes['����������������000_Color1003'].geometry} material={materials['Color1.003']} />
        <mesh geometry={nodes['����������������000_Color1003_1'].geometry} material={materials['Color2.004']} />
        <mesh geometry={nodes['����������������000_Color1003_2'].geometry} material={materials['Color2.003']} />
      </group>
      <group position={[38.228, 8.453, 53.045]} rotation={[-0.122, 0, 3.114]} scale={[0.004, 0.005, 0.004]}>
        <mesh geometry={nodes['����������������000_Color1003'].geometry} material={materials['Color1.003']} />
        <mesh geometry={nodes['����������������000_Color1003_1'].geometry} material={materials['Color2.004']} />
        <mesh geometry={nodes['����������������000_Color1003_2'].geometry} material={materials['Color2.003']} />
      </group>
      <group position={[36.647, 5.742, 14.55]} rotation={[-0.034, 0, 3.114]} scale={0.005}>
        <mesh geometry={nodes['����������������000_Color1003'].geometry} material={materials['Color1.003']} />
        <mesh geometry={nodes['����������������000_Color1003_1'].geometry} material={materials['Color2.004']} />
        <mesh geometry={nodes['����������������000_Color1003_2'].geometry} material={materials['Color2.003']} />
      </group>
      <group position={[49.266, 7.268, 51.385]} rotation={[-0.123, 0, 3.034]} scale={0.005}>
        <mesh geometry={nodes['����������������000_Color1003'].geometry} material={materials['Color1.003']} />
        <mesh geometry={nodes['����������������000_Color1003_1'].geometry} material={materials['Color2.004']} />
        <mesh geometry={nodes['����������������000_Color1003_2'].geometry} material={materials['Color2.003']} />
      </group>
      <group position={[53.025, 4.322, 15.629]} rotation={[-0.034, 0, 3.032]} scale={0.005}>
        <mesh geometry={nodes['����������������000_Color1003'].geometry} material={materials['Color1.003']} />
        <mesh geometry={nodes['����������������000_Color1003_1'].geometry} material={materials['Color2.004']} />
        <mesh geometry={nodes['����������������000_Color1003_2'].geometry} material={materials['Color2.003']} />
      </group>
      <group position={[63.943, 2.861, 19.168]} rotation={[-0.036, 0, 2.96]} scale={0.005}>
        <mesh geometry={nodes['����������������000_Color1003'].geometry} material={materials['Color1.003']} />
        <mesh geometry={nodes['����������������000_Color1003_1'].geometry} material={materials['Color2.004']} />
        <mesh geometry={nodes['����������������000_Color1003_2'].geometry} material={materials['Color2.003']} />
      </group>
      <group position={[82.153, 5.24, 75.246]} rotation={[-0.169, 0, 2.903]} scale={0.004}>
        <mesh geometry={nodes['����������������000_Color1003'].geometry} material={materials['Color1.003']} />
        <mesh geometry={nodes['����������������000_Color1003_1'].geometry} material={materials['Color2.004']} />
        <mesh geometry={nodes['����������������000_Color1003_2'].geometry} material={materials['Color2.003']} />
      </group>
      <group position={[84.445, 0.113, 44.148]} rotation={[-0.077, 0, 2.901]} scale={0.005}>
        <mesh geometry={nodes['����������������000_Color1003'].geometry} material={materials['Color1.003']} />
        <mesh geometry={nodes['����������������000_Color1003_1'].geometry} material={materials['Color2.004']} />
        <mesh geometry={nodes['����������������000_Color1003_2'].geometry} material={materials['Color2.003']} />
      </group>
      <group position={[92.318, -2.239, 38.865]} rotation={[-0.08, 0, 2.867]} scale={0.005}>
        <mesh geometry={nodes['����������������000_Color1003'].geometry} material={materials['Color1.003']} />
        <mesh geometry={nodes['����������������000_Color1003_1'].geometry} material={materials['Color2.004']} />
        <mesh geometry={nodes['����������������000_Color1003_2'].geometry} material={materials['Color2.003']} />
      </group>
      <group position={[100.226, -5.535, 19.798]} rotation={[-0.031, 0, 2.876]} scale={0.005}>
        <mesh geometry={nodes['����������������000_Color1003'].geometry} material={materials['Color1.003']} />
        <mesh geometry={nodes['����������������000_Color1003_1'].geometry} material={materials['Color2.004']} />
        <mesh geometry={nodes['����������������000_Color1003_2'].geometry} material={materials['Color2.003']} />
      </group>
      <group position={[-86.391, -4.904, 37.222]} rotation={[3.111, 0, -0.266]} scale={0.103}>
        <mesh geometry={nodes.Mesh005.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh005_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[-73.748, 0.357, 59.132]} rotation={[3.015, 0, -0.24]} scale={0.103}>
        <mesh geometry={nodes.Mesh005.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh005_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[-77.484, -2.621, 33.129]} rotation={[3.105, 0, -0.241]} scale={0.103}>
        <mesh geometry={nodes.Mesh005.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh005_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[-55.06, 7.417, 79.955]} rotation={[2.977, 0, -0.179]} scale={0.103}>
        <mesh geometry={nodes.Mesh005.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh005_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[-47.778, 3.746, 34.231]} rotation={[3.106, 0, -0.181]} scale={0.103}>
        <mesh geometry={nodes.Mesh005.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh005_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[-38.147, 8.961, 74.594]} rotation={[2.98, 0, -0.107]} scale={0.103}>
        <mesh geometry={nodes.Mesh005.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh005_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[-34.026, 5.365, 34.718]} rotation={[3.107, 0, -0.109]} scale={0.103}>
        <mesh geometry={nodes.Mesh005.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh005_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[-22.394, 9.083, 67.308]} rotation={[3.019, 0, -0.029]} scale={0.103}>
        <mesh geometry={nodes.Mesh005.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh005_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[-15.281, 6.19, 30.209]} rotation={[3.108, 0, -0.029]} scale={0.103}>
        <mesh geometry={nodes.Mesh005.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh005_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[-10.09, 6.392, 32.781]} rotation={[3.108, 0, -0.006]} scale={0.103}>
        <mesh geometry={nodes.Mesh005.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh005_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[6.609, 11.078, 77.683]} rotation={[2.982, 0, 0.007]} scale={0.103}>
        <mesh geometry={nodes.Mesh005.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh005_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[36.613, 14.533, 99.095]} rotation={[2.946, 0, 0.028]} scale={0.103}>
        <mesh geometry={nodes.Mesh005.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh005_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[28.001, 8.013, 57.467]} rotation={[3.019, 0, 0.028]} scale={0.103}>
        <mesh geometry={nodes.Mesh005.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh005_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[23.172, 5.995, 13.182]} rotation={[-3.138, 0, 0.028]} scale={0.103}>
        <mesh geometry={nodes.Mesh005.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh005_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[52.898, 7.132, 65.226]} rotation={[3.019, 0, 0.108]} scale={0.103}>
        <mesh geometry={nodes.Mesh005.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh005_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[53.918, 3.864, 21.87]} rotation={[3.107, 0, 0.11]} scale={0.103}>
        <mesh geometry={nodes.Mesh005.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh005_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[72.448, 1.185, 36.608]} rotation={[3.106, 0, 0.181]} scale={0.103}>
        <mesh geometry={nodes.Mesh005.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh005_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[87.995, 1.266, 73.32]} rotation={[2.973, 0, 0.239]} scale={0.103}>
        <mesh geometry={nodes.Mesh005.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh005_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[83.108, -1.599, 30.422]} rotation={[3.105, 0, 0.242]} scale={0.103}>
        <mesh geometry={nodes.Mesh005.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh005_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[97.704, -4.491, 47.031]} rotation={[3.062, 0, 0.274]} scale={0.103}>
        <mesh geometry={nodes.Mesh005.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh005_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[97.06, -5.469, 17.819]} rotation={[-3.14, 0, 0.259]} scale={0.103}>
        <mesh geometry={nodes.Mesh005.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh005_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[-86.619, -4.31, 24.016]} rotation={[-1.569, -0.258, 0]} scale={[0.081, 0.108, 0.081]}>
        <mesh geometry={nodes.Tree1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree1_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[-82.735, -0.571, 64.247]} rotation={[-1.697, -0.24, 0]} scale={[0.081, 0.108, 0.081]}>
        <mesh geometry={nodes.Tree1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree1_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[-75.832, -1.585, 18.421]} rotation={[-1.567, -0.242, 0]} scale={[0.081, 0.108, 0.081]}>
        <mesh geometry={nodes.Tree1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree1_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[-59.036, 6.074, 74.769]} rotation={[-1.736, -0.179, 0]} scale={[0.081, 0.108, 0.081]}>
        <mesh geometry={nodes.Tree1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree1_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[-64.141, 1.432, 35.135]} rotation={[-1.606, -0.181, 0]} scale={[0.081, 0.108, 0.081]}>
        <mesh geometry={nodes.Tree1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree1_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[-49.35, 6.149, 62.692]} rotation={[-1.694, -0.108, 0]} scale={[0.081, 0.108, 0.081]}>
        <mesh geometry={nodes.Tree1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree1_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[-39.104, 4.818, 20.204]} rotation={[-1.567, -0.11, 0]} scale={[0.081, 0.108, 0.081]}>
        <mesh geometry={nodes.Tree1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree1_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[-25.318, 6.717, 46.93]} rotation={[-1.644, -0.029, 0]} scale={[0.081, 0.108, 0.081]}>
        <mesh geometry={nodes.Tree1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree1_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[-23.224, 6.022, 32.114]} rotation={[-1.605, -0.029, 0]} scale={[0.081, 0.108, 0.081]}>
        <mesh geometry={nodes.Tree1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree1_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[-0.609, 6.209, 28.449]} rotation={[-1.605, -0.006, 0]} scale={[0.081, 0.108, 0.081]}>
        <mesh geometry={nodes.Tree1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree1_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[11.272, 9.787, 73.219]} rotation={[-1.73, 0.007, 0]} scale={[0.081, 0.108, 0.081]}>
        <mesh geometry={nodes.Tree1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree1_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[26.378, 13.025, 93.808]} rotation={[-1.767, 0.028, 0]} scale={[0.081, 0.108, 0.081]}>
        <mesh geometry={nodes.Tree1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree1_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[21.591, 7.938, 59.584]} rotation={[-1.693, 0.028, 0]} scale={[0.081, 0.108, 0.081]}>
        <mesh geometry={nodes.Tree1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree1_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[46.192, 12.089, 96.441]} rotation={[-1.769, 0.105, 0]} scale={[0.081, 0.108, 0.081]}>
        <mesh geometry={nodes.Tree1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree1_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[48.527, 5.841, 57.882]} rotation={[-1.694, 0.108, 0]} scale={[0.081, 0.108, 0.081]}>
        <mesh geometry={nodes.Tree1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree1_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[57.912, 10.534, 96.637]} rotation={[-1.773, 0.177, 0]} scale={[0.081, 0.108, 0.081]}>
        <mesh geometry={nodes.Tree1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree1_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[59.227, 2.31, 25.643]} rotation={[-1.606, 0.181, 0]} scale={[0.081, 0.108, 0.081]}>
        <mesh geometry={nodes.Tree1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree1_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[81.524, 3.326, 85.325]} rotation={[-1.74, 0.239, 0]} scale={[0.081, 0.108, 0.081]}>
        <mesh geometry={nodes.Tree1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree1_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[77.894, -1.689, 21.863]} rotation={[-1.567, 0.242, 0]} scale={[0.081, 0.108, 0.081]}>
        <mesh geometry={nodes.Tree1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree1_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[94.055, -4.803, 48.547]} rotation={[-1.651, 0.274, 0]} scale={[0.081, 0.108, 0.081]}>
        <mesh geometry={nodes.Tree1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree1_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[-90.378, 1.374, 80.803]} rotation={[-0.173, 0, -2.867]} scale={1.2}>
        <mesh geometry={nodes.Cylinder006.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder006_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-90.146, -4.783, 25.781]} rotation={[-0.03, 0, -2.876]} scale={1.2}>
        <mesh geometry={nodes.Cylinder006.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder006_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-76.275, 6.772, 89.267]} rotation={[-0.208, 0, -2.905]} scale={1.2}>
        <mesh geometry={nodes.Cylinder006.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder006_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-69.408, 0.193, 2.277]} rotation={[0.004, 0, -2.9]} scale={1.2}>
        <mesh geometry={nodes.Cylinder006.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder006_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-69.532, 4.299, -48.22]} rotation={[0.126, 0, -2.902]} scale={1.2}>
        <mesh geometry={nodes.Cylinder006.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder006_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-59.5, 4.071, 50.813]} rotation={[-0.124, 0, -2.962]} scale={1.2}>
        <mesh geometry={nodes.Cylinder006.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder006_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-52.214, 3.606, 23.509]} rotation={[-0.036, 0, -2.961]} scale={1.2}>
        <mesh geometry={nodes.Cylinder006.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder006_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-54.049, 6.321, -41.573]} rotation={[0.124, 0, -2.962]} scale={1.2}>
        <mesh geometry={nodes.Cylinder006.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder006_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-35.509, 5.925, 34.113]} rotation={[-0.074, 0, -3.033]} scale={1.2}>
        <mesh geometry={nodes.Cylinder006.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder006_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-40.833, 5.156, -9.923]} rotation={[0.042, 0, -3.032]} scale={1.2}>
        <mesh geometry={nodes.Cylinder006.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder006_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-17.708, 13.231, 85.694]} rotation={[-0.196, 0, -3.113]} scale={1.2}>
        <mesh geometry={nodes.Cylinder006.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder006_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-24.619, 5.881, 21.395]} rotation={[-0.034, 0, -3.112]} scale={1.2}>
        <mesh geometry={nodes.Cylinder006.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder006_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-18.04, 7.148, -22.084]} rotation={[0.08, 0, -3.112]} scale={1.2}>
        <mesh geometry={nodes.Cylinder006.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder006_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-3.945, 8.658, 55.935]} rotation={[-0.123, 0, -3.135]} scale={1.2}>
        <mesh geometry={nodes.Cylinder006.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder006_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-1.125, 7.055, -19.181]} rotation={[0.079, 0, -3.135]} scale={1.2}>
        <mesh geometry={nodes.Cylinder006.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder006_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-5.463, 8.859, -38.38]} rotation={[0.123, 0, -3.135]} scale={1.2}>
        <mesh geometry={nodes.Cylinder006.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder006_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[12.372, 9.566, 63.749]} rotation={[-0.123, 0, 3.135]} scale={1.2}>
        <mesh geometry={nodes.Cylinder006.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder006_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[1.341, 6.21, -2.251]} rotation={[0.042, 0, 3.135]} scale={1.2}>
        <mesh geometry={nodes.Cylinder006.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder006_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[25.878, 12.384, 82.583]} rotation={[-0.196, 0, 3.114]} scale={1.2}>
        <mesh geometry={nodes.Cylinder006.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder006_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[21.108, 9.322, 62.991]} rotation={[-0.122, 0, 3.114]} scale={1.2}>
        <mesh geometry={nodes.Cylinder006.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder006_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[18.945, 6.039, 21.072]} rotation={[-0.034, 0, 3.114]} scale={1.2}>
        <mesh geometry={nodes.Cylinder006.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder006_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[20.986, 8.144, -34.127]} rotation={[0.122, 0, 3.114]} scale={1.2}>
        <mesh geometry={nodes.Cylinder006.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder006_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[46.997, 5.531, 45.639]} rotation={[-0.074, 0, 3.032]} scale={1.2}>
        <mesh geometry={nodes.Cylinder006.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder006_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[35.773, 5.31, 0.115]} rotation={[0.042, 0, 3.032]} scale={1.2}>
        <mesh geometry={nodes.Cylinder006.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder006_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[54.71, 12.24, 94.822]} rotation={[-0.202, 0, 2.965]} scale={1.2}>
        <mesh geometry={nodes.Cylinder006.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder006_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[56.139, 2.696, 4.805]} rotation={[0.004, 0, 2.96]} scale={1.2}>
        <mesh geometry={nodes.Cylinder006.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder006_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[54.569, 3.838, -17.491]} rotation={[0.083, 0, 2.961]} scale={1.2}>
        <mesh geometry={nodes.Cylinder006.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder006_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[71.577, 7.043, 85.012]} rotation={[-0.208, 0, 2.905]} scale={1.2}>
        <mesh geometry={nodes.Cylinder006.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder006_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[71.194, 1.356, 46.453]} rotation={[-0.077, 0, 2.901]} scale={1.2}>
        <mesh geometry={nodes.Cylinder006.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder006_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[77.74, -0.961, -17.881]} rotation={[0.085, 0, 2.901]} scale={1.2}>
        <mesh geometry={nodes.Cylinder006.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder006_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[96.962, 2.771, 96.056]} rotation={[-0.213, 0, 2.87]} scale={1.2}>
        <mesh geometry={nodes.Cylinder006.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder006_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[88.99, -4.515, 23.943]} rotation={[-0.031, 0, 2.876]} scale={1.2}>
        <mesh geometry={nodes.Cylinder006.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder006_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[85.642, -3.198, -13.651]} rotation={[0.041, 0, 2.873]} scale={1.2}>
        <mesh geometry={nodes.Cylinder006.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder006_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[90.249, 0.144, -54.465]} rotation={[0.178, 0, 2.869]} scale={1.2}>
        <mesh geometry={nodes.Cylinder006.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder006_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-89.583, -3.038, 49.939]} rotation={[-0.127, 0, -2.866]} scale={1.2}>
        <mesh geometry={nodes.Cylinder007.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder007_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-88.455, -4.57, -0.068]} rotation={[0.04, 0, -2.873]} scale={1.2}>
        <mesh geometry={nodes.Cylinder007.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder007_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-74.161, 3.817, 70.79]} rotation={[-0.169, 0, -2.903]} scale={1.2}>
        <mesh geometry={nodes.Cylinder007.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder007_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-80.236, -2.478, 2.522]} rotation={[0.004, 0, -2.9]} scale={1.2}>
        <mesh geometry={nodes.Cylinder007.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder007_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-71.66, 1.92, -33.592]} rotation={[0.126, 0, -2.902]} scale={1.2}>
        <mesh geometry={nodes.Cylinder007.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder007_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-67.233, 3.82, 60.116]} rotation={[-0.124, 0, -2.962]} scale={1.2}>
        <mesh geometry={nodes.Cylinder007.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder007_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-52.278, 3.709, -6.684]} rotation={[0.044, 0, -2.96]} scale={1.2}>
        <mesh geometry={nodes.Cylinder007.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder007_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-56.289, 6.306, -44.724]} rotation={[0.124, 0, -2.962]} scale={1.2}>
        <mesh geometry={nodes.Cylinder007.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder007_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-40.211, 6.063, 42.994]} rotation={[-0.074, 0, -3.033]} scale={1.2}>
        <mesh geometry={nodes.Cylinder007.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder007_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-44.596, 5.899, -26.968]} rotation={[0.081, 0, -3.033]} scale={1.2}>
        <mesh geometry={nodes.Cylinder007.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder007_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-23.102, 10.624, 71.833]} rotation={[-0.16, 0, -3.113]} scale={1.2}>
        <mesh geometry={nodes.Cylinder007.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder007_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-32.706, 5.475, 15.42]} rotation={[0.004, 0, -3.112]} scale={1.2}>
        <mesh geometry={nodes.Cylinder007.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder007_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-29.777, 7.114, -25.966]} rotation={[0.08, 0, -3.112]} scale={1.2}>
        <mesh geometry={nodes.Cylinder007.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder007_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-8.537, 6.953, 37.982]} rotation={[-0.074, 0, -3.135]} scale={1.2}>
        <mesh geometry={nodes.Cylinder007.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder007_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-14.96, 7.425, -24.949]} rotation={[0.079, 0, -3.135]} scale={1.2}>
        <mesh geometry={nodes.Cylinder007.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder007_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-12.703, 9.598, -44.763]} rotation={[0.123, 0, -3.135]} scale={1.2}>
        <mesh geometry={nodes.Cylinder007.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder007_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[5.908, 9.492, 62.798]} rotation={[-0.123, 0, 3.135]} scale={1.2}>
        <mesh geometry={nodes.Cylinder007.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder007_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[12.877, 6.465, -10.112]} rotation={[0.042, 0, 3.135]} scale={1.2}>
        <mesh geometry={nodes.Cylinder007.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder007_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[21.673, 13.974, 90.004]} rotation={[-0.196, 0, 3.114]} scale={1.2}>
        <mesh geometry={nodes.Cylinder007.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder007_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[20.82, 6.998, 40.858]} rotation={[-0.073, 0, 3.114]} scale={1.2}>
        <mesh geometry={nodes.Cylinder007.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder007_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[17.092, 6.076, 20.634]} rotation={[-0.034, 0, 3.114]} scale={1.2}>
        <mesh geometry={nodes.Cylinder007.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder007_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[32.475, 11.766, -61.159]} rotation={[0.168, 0, 3.114]} scale={1.2}>
        <mesh geometry={nodes.Cylinder007.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder007_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[35.606, 6.837, 46.359]} rotation={[-0.074, 0, 3.032]} scale={1.2}>
        <mesh geometry={nodes.Cylinder007.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder007_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[38.654, 5.185, -4.448]} rotation={[0.042, 0, 3.032]} scale={1.2}>
        <mesh geometry={nodes.Cylinder007.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder007_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[68.47, 9.429, 93.286]} rotation={[-0.202, 0, 2.965]} scale={1.2}>
        <mesh geometry={nodes.Cylinder007.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder007_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[63.201, 2.122, -15.869]} rotation={[0.044, 0, 2.96]} scale={1.2}>
        <mesh geometry={nodes.Cylinder007.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder007_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[53.268, 5.898, -36.921]} rotation={[0.124, 0, 2.962]} scale={1.2}>
        <mesh geometry={nodes.Cylinder007.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder007_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[71.272, 6.399, 81.579]} rotation={[-0.208, 0, 2.905]} scale={1.2}>
        <mesh geometry={nodes.Cylinder007.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder007_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[81.078, -2.63, 19.252]} rotation={[-0.037, 0, 2.9]} scale={1.2}>
        <mesh geometry={nodes.Cylinder007.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder007_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[71.436, 1.175, -24.719]} rotation={[0.085, 0, 2.901]} scale={1.2}>
        <mesh geometry={nodes.Cylinder007.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder007_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[94.002, -2.176, 66.302]} rotation={[-0.173, 0, 2.868]} scale={1.2}>
        <mesh geometry={nodes.Cylinder007.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder007_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[86.28, -4.034, 14.505]} rotation={[0.002, 0, 2.883]} scale={1.2}>
        <mesh geometry={nodes.Cylinder007.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder007_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[87.466, -2.746, -26.059]} rotation={[0.088, 0, 2.867]} scale={1.2}>
        <mesh geometry={nodes.Cylinder007.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder007_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[93.384, 0.85, -63.331]} rotation={[0.178, 0, 2.869]} scale={1.2}>
        <mesh geometry={nodes.Cylinder007.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder007_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-93.443, -5.201, 36.859]} rotation={[-0.08, 0, -2.866]} scale={0.006}>
        <mesh geometry={nodes['����������������000_Color1002'].geometry} material={materials['Color1.002']} />
        <mesh geometry={nodes['����������������000_Color1002_1'].geometry} material={materials['Color2.002']} />
      </group>
      <group position={[-90.589, -1.438, -45.281]} rotation={[0.129, 0, -2.868]} scale={0.006}>
        <mesh geometry={nodes['����������������000_Color1002'].geometry} material={materials['Color1.002']} />
        <mesh geometry={nodes['����������������000_Color1002_1'].geometry} material={materials['Color2.002']} />
      </group>
      <group position={[-79.399, -1.014, 41.998]} rotation={[-0.077, 0, -2.901]} scale={0.006}>
        <mesh geometry={nodes['����������������000_Color1002'].geometry} material={materials['Color1.002']} />
        <mesh geometry={nodes['����������������000_Color1002_1'].geometry} material={materials['Color2.002']} />
      </group>
      <group position={[-70.935, 0.264, -9.679]} rotation={[0.045, 0, -2.9]} scale={0.006}>
        <mesh geometry={nodes['����������������000_Color1002'].geometry} material={materials['Color1.002']} />
        <mesh geometry={nodes['����������������000_Color1002_1'].geometry} material={materials['Color2.002']} />
      </group>
      <group position={[-66.243, 6.853, 78.441]} rotation={[-0.165, 0, -2.963]} scale={0.006}>
        <mesh geometry={nodes['����������������000_Color1002'].geometry} material={materials['Color1.002']} />
        <mesh geometry={nodes['����������������000_Color1002_1'].geometry} material={materials['Color2.002']} />
      </group>
      <group position={[-53.35, 3.422, 24.19]} rotation={[-0.036, 0, -2.961]} scale={0.006}>
        <mesh geometry={nodes['����������������000_Color1002'].geometry} material={materials['Color1.002']} />
        <mesh geometry={nodes['����������������000_Color1002_1'].geometry} material={materials['Color2.002']} />
      </group>
      <group position={[-60.232, 2.619, -15.136]} rotation={[0.044, 0, -2.96]} scale={0.006}>
        <mesh geometry={nodes['����������������000_Color1002'].geometry} material={materials['Color1.002']} />
        <mesh geometry={nodes['����������������000_Color1002_1'].geometry} material={materials['Color2.002']} />
      </group>
      <group position={[-54.345, 9.495, -61.975]} rotation={[0.173, 0, -2.963]} scale={0.006}>
        <mesh geometry={nodes['����������������000_Color1002'].geometry} material={materials['Color1.002']} />
        <mesh geometry={nodes['����������������000_Color1002_1'].geometry} material={materials['Color2.002']} />
      </group>
      <group position={[-36.236, 5.564, 27.951]} rotation={[-0.035, 0, -3.032]} scale={0.006}>
        <mesh geometry={nodes['����������������000_Color1002'].geometry} material={materials['Color1.002']} />
        <mesh geometry={nodes['����������������000_Color1002_1'].geometry} material={materials['Color2.002']} />
      </group>
      <group position={[-48.244, 10.534, -63.346]} rotation={[0.169, 0, -3.035]} scale={0.006}>
        <mesh geometry={nodes['����������������000_Color1002'].geometry} material={materials['Color1.002']} />
        <mesh geometry={nodes['����������������000_Color1002_1'].geometry} material={materials['Color2.002']} />
      </group>
      <group position={[-22.115, 6.777, 38.442]} rotation={[-0.073, 0, -3.112]} scale={0.006}>
        <mesh geometry={nodes['����������������000_Color1002'].geometry} material={materials['Color1.002']} />
        <mesh geometry={nodes['����������������000_Color1002_1'].geometry} material={materials['Color2.002']} />
      </group>
      <group position={[-33.227, 5.538, -0.136]} rotation={[0.042, 0, -3.112]} scale={0.006}>
        <mesh geometry={nodes['����������������000_Color1002'].geometry} material={materials['Color1.002']} />
        <mesh geometry={nodes['����������������000_Color1002_1'].geometry} material={materials['Color2.002']} />
      </group>
      <group position={[-19.562, 8.72, -38.514]} rotation={[0.122, 0, -3.112]} scale={0.006}>
        <mesh geometry={nodes['����������������000_Color1002'].geometry} material={materials['Color1.002']} />
        <mesh geometry={nodes['����������������000_Color1002_1'].geometry} material={materials['Color2.002']} />
      </group>
      <group position={[-4.153, 6.117, 19.197]} rotation={[-0.034, 0, -3.135]} scale={0.006}>
        <mesh geometry={nodes['����������������000_Color1002'].geometry} material={materials['Color1.002']} />
        <mesh geometry={nodes['����������������000_Color1002_1'].geometry} material={materials['Color2.002']} />
      </group>
      <group position={[-9.14, 7.395, -24.104]} rotation={[0.079, 0, -3.135]} scale={0.006}>
        <mesh geometry={nodes['����������������000_Color1002'].geometry} material={materials['Color1.002']} />
        <mesh geometry={nodes['����������������000_Color1002_1'].geometry} material={materials['Color2.002']} />
      </group>
      <group position={[11.469, 12.867, 83.548]} rotation={[-0.196, 0, 3.135]} scale={0.006}>
        <mesh geometry={nodes['����������������000_Color1002'].geometry} material={materials['Color1.002']} />
        <mesh geometry={nodes['����������������000_Color1002_1'].geometry} material={materials['Color2.002']} />
      </group>
      <group position={[5.239, 7.115, 39.896]} rotation={[-0.074, 0, 3.135]} scale={0.006}>
        <mesh geometry={nodes['����������������000_Color1002'].geometry} material={materials['Color1.002']} />
        <mesh geometry={nodes['����������������000_Color1002_1'].geometry} material={materials['Color2.002']} />
      </group>
      <group position={[5.32, 6.122, -0.772]} rotation={[0.042, 0, 3.135]} scale={0.006}>
        <mesh geometry={nodes['����������������000_Color1002'].geometry} material={materials['Color1.002']} />
        <mesh geometry={nodes['����������������000_Color1002_1'].geometry} material={materials['Color2.002']} />
      </group>
      <group position={[25.759, 11.833, 79.752]} rotation={[-0.16, 0, 3.114]} scale={0.006}>
        <mesh geometry={nodes['����������������000_Color1002'].geometry} material={materials['Color1.002']} />
        <mesh geometry={nodes['����������������000_Color1002_1'].geometry} material={materials['Color2.002']} />
      </group>
      <group position={[17.13, 7.258, 42.983]} rotation={[-0.073, 0, 3.114]} scale={0.006}>
        <mesh geometry={nodes['����������������000_Color1002'].geometry} material={materials['Color1.002']} />
        <mesh geometry={nodes['����������������000_Color1002_1'].geometry} material={materials['Color2.002']} />
      </group>
      <group position={[30.282, 5.594, 7.856]} rotation={[0.004, 0, 3.114]} scale={0.006}>
        <mesh geometry={nodes['����������������000_Color1002'].geometry} material={materials['Color1.002']} />
        <mesh geometry={nodes['����������������000_Color1002_1'].geometry} material={materials['Color2.002']} />
      </group>
      <group position={[43.704, 11.444, 84.289]} rotation={[-0.198, 0, 3.037]} scale={0.006}>
        <mesh geometry={nodes['����������������000_Color1002'].geometry} material={materials['Color1.002']} />
        <mesh geometry={nodes['����������������000_Color1002_1'].geometry} material={materials['Color2.002']} />
      </group>
      <group position={[37.496, 5.061, 16.76]} rotation={[-0.034, 0, 3.032]} scale={0.006}>
        <mesh geometry={nodes['����������������000_Color1002'].geometry} material={materials['Color1.002']} />
        <mesh geometry={nodes['����������������000_Color1002_1'].geometry} material={materials['Color2.002']} />
      </group>
      <group position={[44.655, 6.078, -29.026]} rotation={[0.08, 0, 3.033]} scale={0.006}>
        <mesh geometry={nodes['����������������000_Color1002'].geometry} material={materials['Color1.002']} />
        <mesh geometry={nodes['����������������000_Color1002_1'].geometry} material={materials['Color2.002']} />
      </group>
      <group position={[61.399, 1.708, 10.556]} rotation={[0.004, 0, 2.96]} scale={0.006}>
        <mesh geometry={nodes['����������������000_Color1002'].geometry} material={materials['Color1.002']} />
        <mesh geometry={nodes['����������������000_Color1002_1'].geometry} material={materials['Color2.002']} />
      </group>
      <group position={[64.562, 2.496, -23.383]} rotation={[0.083, 0, 2.961]} scale={0.006}>
        <mesh geometry={nodes['����������������000_Color1002'].geometry} material={materials['Color1.002']} />
        <mesh geometry={nodes['����������������000_Color1002_1'].geometry} material={materials['Color2.002']} />
      </group>
      <group position={[57.893, 5.994, -44.465]} rotation={[0.124, 0, 2.962]} scale={0.006}>
        <mesh geometry={nodes['����������������000_Color1002'].geometry} material={materials['Color1.002']} />
        <mesh geometry={nodes['����������������000_Color1002_1'].geometry} material={materials['Color2.002']} />
      </group>
      <group position={[74.218, 1.482, 54.269]} rotation={[-0.126, 0, 2.902]} scale={0.006}>
        <mesh geometry={nodes['����������������000_Color1002'].geometry} material={materials['Color1.002']} />
        <mesh geometry={nodes['����������������000_Color1002_1'].geometry} material={materials['Color2.002']} />
      </group>
      <group position={[75.143, -1.248, 12.045]} rotation={[0.004, 0, 2.9]} scale={0.006}>
        <mesh geometry={nodes['����������������000_Color1002'].geometry} material={materials['Color1.002']} />
        <mesh geometry={nodes['����������������000_Color1002_1'].geometry} material={materials['Color2.002']} />
      </group>
      <group position={[71.954, 2.123, -35.653]} rotation={[0.126, 0, 2.902]} scale={0.006}>
        <mesh geometry={nodes['����������������000_Color1002'].geometry} material={materials['Color1.002']} />
        <mesh geometry={nodes['����������������000_Color1002_1'].geometry} material={materials['Color2.002']} />
      </group>
      <group position={[90.457, -1.619, 62.848]} rotation={[-0.127, 0, 2.867]} scale={0.006}>
        <mesh geometry={nodes['����������������000_Color1002'].geometry} material={materials['Color1.002']} />
        <mesh geometry={nodes['����������������000_Color1002_1'].geometry} material={materials['Color2.002']} />
      </group>
      <group position={[88.971, -4.507, -4.727]} rotation={[0.041, 0, 2.873]} scale={0.006}>
        <mesh geometry={nodes['����������������000_Color1002'].geometry} material={materials['Color1.002']} />
        <mesh geometry={nodes['����������������000_Color1002_1'].geometry} material={materials['Color2.002']} />
      </group>
      <group position={[95.072, -4.766, -27.517]} rotation={[0.088, 0, 2.867]} scale={0.006}>
        <mesh geometry={nodes['����������������000_Color1002'].geometry} material={materials['Color1.002']} />
        <mesh geometry={nodes['����������������000_Color1002_1'].geometry} material={materials['Color2.002']} />
      </group>
      <group position={[-91.849, -3.817, 48.462]} rotation={[1.491, -1.295, -Math.PI / 2]} scale={0.137}>
        <mesh geometry={nodes.Mesh001.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh001_1.geometry} material={materials['Color2.002']} />
      </group>
      <group position={[-92.253, -2.042, -44.238]} rotation={[1.7, -1.297, -Math.PI / 2]} scale={0.137}>
        <mesh geometry={nodes.Mesh001.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh001_1.geometry} material={materials['Color2.002']} />
      </group>
      <group position={[-82.828, -1.682, 44.228]} rotation={[1.494, -1.331, -Math.PI / 2]} scale={0.137}>
        <mesh geometry={nodes.Mesh001.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh001_1.geometry} material={materials['Color2.002']} />
      </group>
      <group position={[-76.056, -0.197, -22.112]} rotation={[1.656, -1.33, -Math.PI / 2]} scale={0.137}>
        <mesh geometry={nodes.Mesh001.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh001_1.geometry} material={materials['Color2.002']} />
      </group>
      <group position={[-53.252, 6.536, 61.376]} rotation={[1.446, -1.391, -Math.PI / 2]} scale={0.137}>
        <mesh geometry={nodes.Mesh001.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh001_1.geometry} material={materials['Color2.002']} />
      </group>
      <group position={[-60.16, 2.073, 21.339]} rotation={[1.535, -1.39, -Math.PI / 2]} scale={0.137}>
        <mesh geometry={nodes.Mesh001.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh001_1.geometry} material={materials['Color2.002']} />
      </group>
      <group position={[-56.941, 4.933, -34.704]} rotation={[1.695, -1.391, -Math.PI / 2]} scale={0.137}>
        <mesh geometry={nodes.Mesh001.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh001_1.geometry} material={materials['Color2.002']} />
      </group>
      <group position={[-45.435, 10.028, 77.789]} rotation={[1.409, -1.464, -Math.PI / 2]} scale={0.137}>
        <mesh geometry={nodes.Mesh001.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh001_1.geometry} material={materials['Color2.002']} />
      </group>
      <group position={[-37.503, 5.055, 9.044]} rotation={[1.575, -1.461, -Math.PI / 2]} scale={0.137}>
        <mesh geometry={nodes.Mesh001.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh001_1.geometry} material={materials['Color2.002']} />
      </group>
      <group position={[-50.437, 8.455, -52.621]} rotation={[1.74, -1.464, -Math.PI / 2]} scale={0.137}>
        <mesh geometry={nodes.Mesh001.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh001_1.geometry} material={materials['Color2.002']} />
      </group>
      <group position={[-32.337, 6.651, 40.825]} rotation={[1.497, -1.541, -Math.PI / 2]} scale={0.137}>
        <mesh geometry={nodes.Mesh001.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh001_1.geometry} material={materials['Color2.002']} />
      </group>
      <group position={[-19.182, 5.98, -0.816]} rotation={[1.613, -1.541, -Math.PI / 2]} scale={0.137}>
        <mesh geometry={nodes.Mesh001.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh001_1.geometry} material={materials['Color2.002']} />
      </group>
      <group position={[-27.681, 9.179, -44.196]} rotation={[1.693, -1.542, -Math.PI / 2]} scale={0.137}>
        <mesh geometry={nodes.Mesh001.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh001_1.geometry} material={materials['Color2.002']} />
      </group>
      <group position={[-15.419, 6.207, 23.968]} rotation={[1.537, -1.564, -1.571]} scale={0.137}>
        <mesh geometry={nodes.Mesh001.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh001_1.geometry} material={materials['Color2.002']} />
      </group>
      <group position={[-3.877, 7.12, -20.218]} rotation={[1.65, -1.564, -1.571]} scale={0.137}>
        <mesh geometry={nodes.Mesh001.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh001_1.geometry} material={materials['Color2.002']} />
      </group>
      <group position={[14.285, 9.695, 64.811]} rotation={[-1.73, -1.564, 1.571]} scale={0.137}>
        <mesh geometry={nodes.Mesh001.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh001_1.geometry} material={materials['Color2.002']} />
      </group>
      <group position={[15.678, 5.951, 15.101]} rotation={[-1.567, -1.564, 1.571]} scale={0.137}>
        <mesh geometry={nodes.Mesh001.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh001_1.geometry} material={materials['Color2.002']} />
      </group>
      <group position={[13.967, 12.142, -60.664]} rotation={[-1.403, -1.564, 1.571]} scale={0.137}>
        <mesh geometry={nodes.Mesh001.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh001_1.geometry} material={materials['Color2.002']} />
      </group>
      <group position={[26.948, 10.674, 72.77]} rotation={[-1.731, -1.543, 1.571]} scale={0.137}>
        <mesh geometry={nodes.Mesh001.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh001_1.geometry} material={materials['Color2.002']} />
      </group>
      <group position={[29.169, 5.876, 24.701]} rotation={[-1.605, -1.543, Math.PI / 2]} scale={0.137}>
        <mesh geometry={nodes.Mesh001.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh001_1.geometry} material={materials['Color2.002']} />
      </group>
      <group position={[28.729, 5.619, 12.472]} rotation={[-1.567, -1.543, 1.571]} scale={0.137}>
        <mesh geometry={nodes.Mesh001.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh001_1.geometry} material={materials['Color2.002']} />
      </group>
      <group position={[34.047, 7.496, 51.256]} rotation={[-1.694, -1.463, Math.PI / 2]} scale={0.137}>
        <mesh geometry={nodes.Mesh001.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh001_1.geometry} material={materials['Color2.002']} />
      </group>
      <group position={[49.88, 3.689, 16.672]} rotation={[-1.605, -1.461, Math.PI / 2]} scale={0.137}>
        <mesh geometry={nodes.Mesh001.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh001_1.geometry} material={materials['Color2.002']} />
      </group>
      <group position={[51.486, 6.892, -42.545]} rotation={[-1.448, -1.463, Math.PI / 2]} scale={0.137}>
        <mesh geometry={nodes.Mesh001.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh001_1.geometry} material={materials['Color2.002']} />
      </group>
      <group position={[56.704, 2.6, 3.079]} rotation={[-1.567, -1.389, Math.PI / 2]} scale={0.137}>
        <mesh geometry={nodes.Mesh001.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh001_1.geometry} material={materials['Color2.002']} />
      </group>
      <group position={[68.274, 2.505, -31.623]} rotation={[-1.488, -1.391, Math.PI / 2]} scale={0.137}>
        <mesh geometry={nodes.Mesh001.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh001_1.geometry} material={materials['Color2.002']} />
      </group>
      <group position={[57.782, 5.417, -39.684]} rotation={[-1.446, -1.391, Math.PI / 2]} scale={0.137}>
        <mesh geometry={nodes.Mesh001.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh001_1.geometry} material={materials['Color2.002']} />
      </group>
      <group position={[78.682, -0.432, 47.076]} rotation={[-1.648, -1.33, Math.PI / 2]} scale={0.137}>
        <mesh geometry={nodes.Mesh001.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh001_1.geometry} material={materials['Color2.002']} />
      </group>
      <group position={[73.724, -0.761, -1.813]} rotation={[-1.526, -1.329, Math.PI / 2]} scale={0.137}>
        <mesh geometry={nodes.Mesh001.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh001_1.geometry} material={materials['Color2.002']} />
      </group>
      <group position={[85.089, -0.83, -37.899]} rotation={[-1.445, -1.331, Math.PI / 2]} scale={0.137}>
        <mesh geometry={nodes.Mesh001.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh001_1.geometry} material={materials['Color2.002']} />
      </group>
      <group position={[86.149, -3.608, 27.741]} rotation={[-1.602, -1.305, Math.PI / 2]} scale={0.137}>
        <mesh geometry={nodes.Mesh001.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh001_1.geometry} material={materials['Color2.002']} />
      </group>
      <group position={[94.399, -5.958, -5.436]} rotation={[-1.53, -1.302, Math.PI / 2]} scale={0.137}>
        <mesh geometry={nodes.Mesh001.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh001_1.geometry} material={materials['Color2.002']} />
      </group>
      <group position={[86.432, -0.95, -39.86]} rotation={[-1.442, -1.298, Math.PI / 2]} scale={0.137}>
        <mesh geometry={nodes.Mesh001.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh001_1.geometry} material={materials['Color2.002']} />
      </group>
      <group position={[-87.951, -2.707, 48.587]} rotation={[-1.651, -0.275, -Math.PI]} scale={[0.108, 0.144, 0.108]}>
        <mesh geometry={nodes.Tree003.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree003_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[-96.195, -0.794, -58.753]} rotation={[-1.393, -0.273, -Math.PI]} scale={[0.108, 0.144, 0.108]}>
        <mesh geometry={nodes.Tree003.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree003_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[-76.737, -1.303, 26.504]} rotation={[-1.608, -0.241, Math.PI]} scale={[0.108, 0.144, 0.108]}>
        <mesh geometry={nodes.Tree003.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree003_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[-76.184, 0.502, -30.677]} rotation={[-1.486, -0.24, Math.PI]} scale={[0.108, 0.144, 0.108]}>
        <mesh geometry={nodes.Tree003.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree003_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[-65.482, 4.036, 59.287]} rotation={[-1.695, -0.18, Math.PI]} scale={[0.108, 0.144, 0.108]}>
        <mesh geometry={nodes.Tree003.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree003_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[-66.84, 0.883, 22.301]} rotation={[-1.606, -0.181, Math.PI]} scale={[0.108, 0.144, 0.108]}>
        <mesh geometry={nodes.Tree003.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree003_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[-57.795, 4.979, -36.322]} rotation={[-1.446, -0.18, Math.PI]} scale={[0.108, 0.144, 0.108]}>
        <mesh geometry={nodes.Tree003.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree003_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[-43.633, 5.371, 38.698]} rotation={[-1.644, -0.109, Math.PI]} scale={[0.108, 0.144, 0.108]}>
        <mesh geometry={nodes.Tree003.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree003_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[-41.373, 4.634, 7.876]} rotation={[-1.567, -0.11, -Math.PI]} scale={[0.108, 0.144, 0.108]}>
        <mesh geometry={nodes.Tree003.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree003_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[-18.361, 12.786, 83.543]} rotation={[-1.767, -0.029, Math.PI]} scale={[0.108, 0.144, 0.108]}>
        <mesh geometry={nodes.Tree003.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree003_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[-23.212, 5.766, 16.802]} rotation={[-1.605, -0.029, -Math.PI]} scale={[0.108, 0.144, 0.108]}>
        <mesh geometry={nodes.Tree003.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree003_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[-25.081, 6.177, -9.654]} rotation={[-1.529, -0.029, Math.PI]} scale={[0.108, 0.144, 0.108]}>
        <mesh geometry={nodes.Tree003.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree003_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[-29.857, 9.238, -45.196]} rotation={[-1.448, -0.029, Math.PI]} scale={[0.108, 0.144, 0.108]}>
        <mesh geometry={nodes.Tree003.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree003_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[-6.476, 6.035, 8.851]} rotation={[-1.567, -0.006, -Math.PI]} scale={[0.108, 0.144, 0.108]}>
        <mesh geometry={nodes.Tree003.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree003_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[-3.864, 7.928, -30.391]} rotation={[-1.491, -0.006, Math.PI]} scale={[0.108, 0.144, 0.108]}>
        <mesh geometry={nodes.Tree003.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree003_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[4.455, 11.017, 72.608]} rotation={[-1.73, 0.007, -Math.PI]} scale={[0.108, 0.144, 0.108]}>
        <mesh geometry={nodes.Tree003.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree003_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[6.801, 6.063, 1.304]} rotation={[-1.567, 0.006, -Math.PI]} scale={[0.108, 0.144, 0.108]}>
        <mesh geometry={nodes.Tree003.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree003_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[28.386, 13.983, 90.995]} rotation={[-1.767, 0.028, -Math.PI]} scale={[0.108, 0.144, 0.108]}>
        <mesh geometry={nodes.Tree003.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree003_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[26.013, 11.417, 77.216]} rotation={[-1.731, 0.028, -Math.PI]} scale={[0.108, 0.144, 0.108]}>
        <mesh geometry={nodes.Tree003.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree003_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[30.183, 5.796, 23.176]} rotation={[-1.605, 0.028, -Math.PI]} scale={[0.108, 0.144, 0.108]}>
        <mesh geometry={nodes.Tree003.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree003_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[29.877, 5.756, -2.546]} rotation={[-1.529, 0.028, -Math.PI]} scale={[0.108, 0.144, 0.108]}>
        <mesh geometry={nodes.Tree003.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree003_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[35.697, 6.204, 37.91]} rotation={[-1.645, 0.109, -Math.PI]} scale={[0.108, 0.144, 0.108]}>
        <mesh geometry={nodes.Tree003.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree003_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[47.127, 4.027, 5.472]} rotation={[-1.567, 0.11, Math.PI]} scale={[0.108, 0.144, 0.108]}>
        <mesh geometry={nodes.Tree003.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree003_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[45.012, 7.114, -38.622]} rotation={[-1.448, 0.108, -Math.PI]} scale={[0.108, 0.144, 0.108]}>
        <mesh geometry={nodes.Tree003.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree003_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[56.834, 2.549, 9.655]} rotation={[-1.567, 0.181, Math.PI]} scale={[0.108, 0.144, 0.108]}>
        <mesh geometry={nodes.Tree003.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree003_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[68.003, 2.331, -28.946]} rotation={[-1.488, 0.18, -Math.PI]} scale={[0.108, 0.144, 0.108]}>
        <mesh geometry={nodes.Tree003.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree003_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[75.226, 6.456, 86.499]} rotation={[-1.778, 0.236, -Math.PI]} scale={[0.108, 0.144, 0.108]}>
        <mesh geometry={nodes.Tree003.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree003_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[72.539, 0.689, 42.072]} rotation={[-1.648, 0.24, Math.PI]} scale={[0.108, 0.144, 0.108]}>
        <mesh geometry={nodes.Tree003.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree003_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[69.684, 0.618, -10.383]} rotation={[-1.526, 0.242, -Math.PI]} scale={[0.108, 0.144, 0.108]}>
        <mesh geometry={nodes.Tree003.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree003_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[80.771, 2.438, -53.322]} rotation={[-1.394, 0.238, -Math.PI]} scale={[0.108, 0.144, 0.108]}>
        <mesh geometry={nodes.Tree003.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree003_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[84.859, -3.466, 22.05]} rotation={[-1.602, 0.265, -Math.PI]} scale={[0.108, 0.144, 0.108]}>
        <mesh geometry={nodes.Tree003.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree003_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[93.689, -5.671, -7.916]} rotation={[-1.53, 0.269, -Math.PI]} scale={[0.108, 0.144, 0.108]}>
        <mesh geometry={nodes.Tree003.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree003_1.geometry} material={materials['Color2.001']} />
      </group>
      <group position={[90.006, -1.01, -47.204]} rotation={[-1.442, 0.273, -Math.PI]} scale={[0.108, 0.144, 0.108]}>
        <mesh geometry={nodes.Tree003.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Tree003_1.geometry} material={materials['Color2.001']} />
      </group>
      <mesh geometry={nodes.Box001035.geometry} material={materials['Material.003']} position={[94.596, 4.576, -81.644]} rotation={[-1.311, -1.302, Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box001036.geometry} material={materials['Material.003']} position={[-78.816, 11.173, -91.054]} rotation={[1.824, -1.338, -Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box001037.geometry} material={materials['Material.003']} position={[-35.371, 18.11, -90.903]} rotation={[1.812, -1.469, -Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box001038.geometry} material={materials['Material.003']} position={[-30.718, 15.755, -80.297]} rotation={[1.809, -1.542, -1.571]} scale={0.137} />
      <mesh geometry={nodes.Box001039.geometry} material={materials['Material.003']} position={[33.435, 17.163, -86.292]} rotation={[-1.332, -1.544, Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box001040.geometry} material={materials['Material.003']} position={[51.114, 16.658, -91.586]} rotation={[-1.33, -1.468, Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box001041.geometry} material={materials['Material.003']} position={[81.188, 10.129, -89.192]} rotation={[-1.318, -1.338, Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box001042.geometry} material={materials['Material.003']} position={[-88.401, -2.975, -26.631]} rotation={[1.659, -1.295, -Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box001043.geometry} material={materials['Material.003']} position={[-86.153, -0.975, -39.149]} rotation={[1.7, -1.297, -Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box001044.geometry} material={materials['Material.003']} position={[-72.445, -0.559, 3.115]} rotation={[1.575, -1.329, -Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box001045.geometry} material={materials['Material.003']} position={[-73.635, -0.532, -6.75]} rotation={[1.616, -1.329, -Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box001046.geometry} material={materials['Material.003']} position={[-80.954, 3.063, -57.149]} rotation={[1.747, -1.333, -Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box001047.geometry} material={materials['Material.003']} position={[-78.228, 7.774, -76.938]} rotation={[1.787, -1.335, -Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box001048.geometry} material={materials['Material.003']} position={[-68.251, 1.661, -21.643]} rotation={[1.654, -1.391, -Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box001049.geometry} material={materials['Material.003']} position={[-64.647, 3.519, -34.672]} rotation={[1.695, -1.391, -Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box001050.geometry} material={materials['Material.003']} position={[-66.683, 10.753, -78.704]} rotation={[1.781, -1.394, -Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box001051.geometry} material={materials['Material.003']} position={[-49.609, 4.496, -16.426]} rotation={[1.651, -1.462, -Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box001052.geometry} material={materials['Material.003']} position={[-38.19, 7.903, -39.145]} rotation={[1.694, -1.463, -Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box001053.geometry} material={materials['Material.003']} position={[-50.411, 9.607, -59.308]} rotation={[1.74, -1.464, -Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box001054.geometry} material={materials['Material.003']} position={[-26.616, 5.667, 11.971]} rotation={[1.575, -1.541, -1.571]} scale={0.137} />
      <mesh geometry={nodes.Box001055.geometry} material={materials['Material.003']} position={[-18.873, 8.089, -33.23]} rotation={[1.693, -1.542, -Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box001056.geometry} material={materials['Material.003']} position={[-26.817, 10.41, -52.309]} rotation={[1.739, -1.542, -Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box001057.geometry} material={materials['Material.003']} position={[-27.175, 13.318, -68.39]} rotation={[1.775, -1.542, -Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box001058.geometry} material={materials['Material.003']} position={[-9.164, 6.311, -5.848]} rotation={[1.613, -1.564, -1.571]} scale={0.137} />
      <mesh geometry={nodes.Box001059.geometry} material={materials['Material.003']} position={[-11.769, 9.682, -45.396]} rotation={[1.693, -1.564, -1.571]} scale={0.137} />
      <mesh geometry={nodes.Box001060.geometry} material={materials['Material.003']} position={[-15.349, 11.264, -55.536]} rotation={[1.739, -1.564, -1.571]} scale={0.137} />
      <mesh geometry={nodes.Box001061.geometry} material={materials['Material.003']} position={[2.917, 6.539, -10.356]} rotation={[-1.529, -1.564, 1.571]} scale={0.137} />
      <mesh geometry={nodes.Box001062.geometry} material={materials['Material.003']} position={[0.52, 7.032, -18.852]} rotation={[-1.491, -1.564, 1.571]} scale={0.137} />
      <mesh geometry={nodes.Box001063.geometry} material={materials['Material.003']} position={[8.037, 9.949, -47.366]} rotation={[-1.448, -1.564, 1.571]} scale={0.137} />
      <mesh geometry={nodes.Box001064.geometry} material={materials['Material.003']} position={[16.173, 13.96, -69.983]} rotation={[-1.367, -1.564, 1.571]} scale={0.137} />
      <mesh geometry={nodes.Box001065.geometry} material={materials['Material.003']} position={[25.819, 9.328, -44.855]} rotation={[-1.448, -1.543, 1.571]} scale={0.137} />
      <mesh geometry={nodes.Box001066.geometry} material={materials['Material.003']} position={[19.715, 15.065, -75.743]} rotation={[-1.367, -1.543, 1.571]} scale={0.137} />
      <mesh geometry={nodes.Box001067.geometry} material={materials['Material.003']} position={[39.253, 5.193, -6.203]} rotation={[-1.528, -1.461, Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box001068.geometry} material={materials['Material.003']} position={[34.909, 7.99, -36.769]} rotation={[-1.448, -1.463, Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box001069.geometry} material={materials['Material.003']} position={[52.789, 3.925, -13.486]} rotation={[-1.527, -1.39, Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box001070.geometry} material={materials['Material.003']} position={[55.262, 4.796, -30.654]} rotation={[-1.488, -1.391, Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box001071.geometry} material={materials['Material.003']} position={[61.268, 4.193, -34.999]} rotation={[-1.446, -1.391, Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box001072.geometry} material={materials['Material.003']} position={[62.96, 11.36, -78.297]} rotation={[-1.36, -1.394, Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box001073.geometry} material={materials['Material.003']} position={[76.85, -1.364, -5.584]} rotation={[-1.526, -1.329, Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box001074.geometry} material={materials['Material.003']} position={[69.206, 3.849, -43.934]} rotation={[-1.445, -1.331, Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box001075.geometry} material={materials['Material.003']} position={[81.377, 1.699, -50.015]} rotation={[-1.394, -1.333, Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box001076.geometry} material={materials['Material.003']} position={[90.362, -4.743, -8.232]} rotation={[-1.53, -1.302, Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box001077.geometry} material={materials['Material.003']} position={[90.151, -0.834, -48.877]} rotation={[-1.442, -1.298, Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box001078.geometry} material={materials['Material.003']} position={[92.517, 1.026, -62.944]} rotation={[-1.393, -1.298, Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box001079.geometry} material={materials['Material.003']} position={[92.423, 4.172, -77.266]} rotation={[-1.35, -1.299, Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box004023.geometry} material={materials['Material.003']} position={[-93.282, 8.492, -95.051]} rotation={[1.83, -1.302, -Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box004024.geometry} material={materials['Material.003']} position={[-81.386, 10.309, -90.137]} rotation={[1.824, -1.338, -Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box004025.geometry} material={materials['Material.003']} position={[-48.182, 16.781, -90.93]} rotation={[1.812, -1.469, -Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box004026.geometry} material={materials['Material.003']} position={[-1.422, 16.477, -81.152]} rotation={[1.809, -1.564, -Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box004027.geometry} material={materials['Material.003']} position={[33.37, 16.727, -84.494]} rotation={[-1.332, -1.544, Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box004028.geometry} material={materials['Material.003']} position={[41.126, 15.007, -80.604]} rotation={[-1.33, -1.468, Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box004029.geometry} material={materials['Material.003']} position={[-91.057, -5.277, 4.881]} rotation={[1.573, -1.313, -Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box004030.geometry} material={materials['Material.003']} position={[-94.895, -5.002, -24.529]} rotation={[1.659, -1.295, -Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box004031.geometry} material={materials['Material.003']} position={[-93.927, -2.603, -43.558]} rotation={[1.7, -1.297, -Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box004032.geometry} material={materials['Material.003']} position={[-83.241, -3.241, 7.983]} rotation={[1.575, -1.329, -Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box004033.geometry} material={materials['Material.003']} position={[-81.047, -0.799, -29.411]} rotation={[1.656, -1.33, -Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box004034.geometry} material={materials['Material.003']} position={[-70.314, 4.354, -49.681]} rotation={[1.747, -1.333, -Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box004035.geometry} material={materials['Material.003']} position={[-63.644, 1.555, -5.071]} rotation={[1.614, -1.39, -Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box004036.geometry} material={materials['Material.003']} position={[-56.258, 4.004, -23.441]} rotation={[1.654, -1.391, -Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box004037.geometry} material={materials['Material.003']} position={[-53.483, 6.967, -45.912]} rotation={[1.695, -1.391, -Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box004038.geometry} material={materials['Material.003']} position={[-54.446, 12.904, -78.381]} rotation={[1.781, -1.394, -Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box004039.geometry} material={materials['Material.003']} position={[-35.521, 6.205, -18.441]} rotation={[1.651, -1.462, -Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box004040.geometry} material={materials['Material.003']} position={[-34.415, 9.339, -47.461]} rotation={[1.694, -1.463, -Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box004041.geometry} material={materials['Material.003']} position={[-50.66, 10.177, -62.776]} rotation={[1.74, -1.464, -Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box004042.geometry} material={materials['Material.003']} position={[-28.143, 5.75, -1.62]} rotation={[1.613, -1.541, -Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box004043.geometry} material={materials['Material.003']} position={[-20.594, 9.814, -47.649]} rotation={[1.693, -1.542, -Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box004044.geometry} material={materials['Material.003']} position={[-18.058, 10.76, -52.839]} rotation={[1.739, -1.542, -Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box004045.geometry} material={materials['Material.003']} position={[-23.041, 15.091, -76.37]} rotation={[1.775, -1.542, -Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box004046.geometry} material={materials['Material.003']} position={[-9.904, 6.767, -16.263]} rotation={[1.65, -1.564, -1.571]} scale={0.137} />
      <mesh geometry={nodes.Box004047.geometry} material={materials['Material.003']} position={[-8.24, 8.893, -38.8]} rotation={[1.693, -1.564, -1.571]} scale={0.137} />
      <mesh geometry={nodes.Box004048.geometry} material={materials['Material.003']} position={[-9.903, 15.45, -76.996]} rotation={[1.774, -1.564, -1.571]} scale={0.137} />
      <mesh geometry={nodes.Box004049.geometry} material={materials['Material.003']} position={[0.058, 6.445, -7.689]} rotation={[-1.529, -1.564, 1.571]} scale={0.137} />
      <mesh geometry={nodes.Box004050.geometry} material={materials['Material.003']} position={[14.844, 7.621, -27.412]} rotation={[-1.491, -1.564, 1.571]} scale={0.137} />
      <mesh geometry={nodes.Box004051.geometry} material={materials['Material.003']} position={[6.327, 11.185, -54.721]} rotation={[-1.403, -1.564, 1.571]} scale={0.137} />
      <mesh geometry={nodes.Box004052.geometry} material={materials['Material.003']} position={[22.33, 5.926, -1.548]} rotation={[-1.529, -1.543, Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box004053.geometry} material={materials['Material.003']} position={[24.864, 9.495, -45.995]} rotation={[-1.448, -1.543, 1.571]} scale={0.137} />
      <mesh geometry={nodes.Box004054.geometry} material={materials['Material.003']} position={[29.907, 13.293, -68.555]} rotation={[-1.367, -1.543, 1.571]} scale={0.137} />
      <mesh geometry={nodes.Box004055.geometry} material={materials['Material.003']} position={[35.156, 6.039, -15.519]} rotation={[-1.528, -1.461, Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box004056.geometry} material={materials['Material.003']} position={[48.471, 10.428, -62.759]} rotation={[-1.401, -1.464, Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box004057.geometry} material={materials['Material.003']} position={[63.815, 1.585, -6.152]} rotation={[-1.527, -1.39, Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box004058.geometry} material={materials['Material.003']} position={[54.793, 3.998, -19.924]} rotation={[-1.488, -1.391, Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box004059.geometry} material={materials['Material.003']} position={[59.607, 6.3, -49.092]} rotation={[-1.398, -1.392, Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box004060.geometry} material={materials['Material.003']} position={[68.288, 9.251, -72.983]} rotation={[-1.36, -1.394, Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box004061.geometry} material={materials['Material.003']} position={[82.75, -2.001, -20.167]} rotation={[-1.486, -1.33, Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box004062.geometry} material={materials['Material.003']} position={[76.206, 0.742, -33.027]} rotation={[-1.445, -1.331, Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box004063.geometry} material={materials['Material.003']} position={[70.112, 7.913, -68.365]} rotation={[-1.355, -1.335, Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box004064.geometry} material={materials['Material.003']} position={[90.309, -4.736, -8.044]} rotation={[-1.53, -1.302, Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box004065.geometry} material={materials['Material.003']} position={[92.172, -2.938, -37.023]} rotation={[-1.442, -1.298, Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box004066.geometry} material={materials['Material.003']} position={[95.039, -1.207, -54.513]} rotation={[-1.393, -1.298, Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Box004067.geometry} material={materials['Material.003']} position={[91.377, 4.379, -76.866]} rotation={[-1.35, -1.299, Math.PI / 2]} scale={0.137} />
      <mesh geometry={nodes.Tree_5001.geometry} material={materials['Material.001']} position={[-96.606, 6.858, -92.444]} rotation={[0.741, -1.034, -2.595]} scale={1.2} />
      <mesh geometry={nodes.Tree_5002.geometry} material={materials['Material.001']} position={[-86.17, 8.759, -88.679]} rotation={[0.679, -1.05, -2.659]} scale={1.2} />
      <mesh geometry={nodes.Tree_5003.geometry} material={materials['Material.001']} position={[-34.025, 17.273, -86.932]} rotation={[0.294, -1.1, -3.079]} scale={1.2} />
      <mesh geometry={nodes.Tree_5004.geometry} material={materials['Material.001']} position={[-13.397, 16.9, -83.23]} rotation={[0.251, -1.1, -3.127]} scale={1.2} />
      <mesh geometry={nodes.Tree_5005.geometry} material={materials['Material.001']} position={[31.602, 16.272, -82.425]} rotation={[0.186, -1.1, 3.082]} scale={1.2} />
      <mesh geometry={nodes.Tree_5006.geometry} material={materials['Material.001']} position={[42.651, 16.485, -87.277]} rotation={[0.043, -1.09, 2.919]} scale={1.2} />
      <mesh geometry={nodes.Tree_5007.geometry} material={materials['Material.001']} position={[-85.59, -3.82, 2.926]} rotation={[0.467, -1.039, -2.614]} scale={1.2} />
      <mesh geometry={nodes.Tree_5008.geometry} material={materials['Material.001']} position={[-89.26, -2.722, -32.289]} rotation={[0.579, -1.031, -2.584]} scale={1.2} />
      <mesh geometry={nodes.Tree_5009.geometry} material={materials['Material.001']} position={[-94.341, -2.2, -47.547]} rotation={[0.617, -1.032, -2.587]} scale={1.2} />
      <mesh geometry={nodes.Tree_5010.geometry} material={materials['Material.001']} position={[-74.618, -1.118, 8.861]} rotation={[0.444, -1.046, -2.643]} scale={1.2} />
      <mesh geometry={nodes.Tree_5011.geometry} material={materials['Material.001']} position={[-79.256, -1.231, -19.245]} rotation={[0.523, -1.047, -2.646]} scale={1.2} />
      <mesh geometry={nodes.Tree_5012.geometry} material={materials['Material.001']} position={[-80.368, 7.658, -78.801]} rotation={[0.647, -1.049, -2.654]} scale={1.2} />
      <mesh geometry={nodes.Tree_5013.geometry} material={materials['Material.001']} position={[-66.152, 1.297, -9.693]} rotation={[0.384, -1.069, -2.758]} scale={1.2} />
      <mesh geometry={nodes.Tree_5014.geometry} material={materials['Material.001']} position={[-55.262, 4.31, -24.946]} rotation={[0.422, -1.07, -2.759]} scale={1.2} />
      <mesh geometry={nodes.Tree_5015.geometry} material={materials['Material.001']} position={[-60.244, 6.037, -48.336]} rotation={[0.509, -1.07, -2.763]} scale={1.2} />
      <mesh geometry={nodes.Tree_5016.geometry} material={materials['Material.001']} position={[-38.132, 5, 5.481]} rotation={[0.216, -1.089, -2.903]} scale={1.2} />
      <mesh geometry={nodes.Tree_5017.geometry} material={materials['Material.001']} position={[-37.123, 7.047, -31.12]} rotation={[0.29, -1.089, -2.906]} scale={1.2} />
      <mesh geometry={nodes.Tree_5018.geometry} material={materials['Material.001']} position={[-34.644, 8.978, -44.731]} rotation={[0.331, -1.089, -2.907]} scale={1.2} />
      <mesh geometry={nodes.Tree_5019.geometry} material={materials['Material.001']} position={[-44.814, 10.923, -63.459]} rotation={[0.408, -1.09, -2.915]} scale={1.2} />
      <mesh geometry={nodes.Tree_5020.geometry} material={materials['Material.001']} position={[-32.48, 5.978, -10.095]} rotation={[0.1, -1.1, -3.077]} scale={1.2} />
      <mesh geometry={nodes.Tree_5021.geometry} material={materials['Material.001']} position={[-24.64, 9.828, -48.493]} rotation={[0.225, -1.1, -3.077]} scale={1.2} />
      <mesh geometry={nodes.Tree_5022.geometry} material={materials['Material.001']} position={[-19.26, 11.115, -55.147]} rotation={[0.225, -1.1, -3.077]} scale={1.2} />
      <mesh geometry={nodes.Tree_5023.geometry} material={materials['Material.001']} position={[-27.021, 14.371, -73.456]} rotation={[0.261, -1.1, -3.078]} scale={1.2} />
      <mesh geometry={nodes.Tree_5024.geometry} material={materials['Material.001']} position={[-15.663, 6.963, -19.194]} rotation={[0.092, -1.1, -3.127]} scale={1.2} />
      <mesh geometry={nodes.Tree_5025.geometry} material={materials['Material.001']} position={[-10.432, 9.618, -44.806]} rotation={[0.135, -1.1, -3.127]} scale={1.2} />
      <mesh geometry={nodes.Tree_5026.geometry} material={materials['Material.001']} position={[-0.783, 15.165, -75.32]} rotation={[0.217, -1.1, -3.127]} scale={1.2} />
      <mesh geometry={nodes.Tree_5027.geometry} material={materials['Material.001']} position={[6.782, 6.485, -9.659]} rotation={[0.029, -1.1, 3.128]} scale={1.2} />
      <mesh geometry={nodes.Tree_5028.geometry} material={materials['Material.001']} position={[11.855, 9.609, -44.813]} rotation={[0.11, -1.1, 3.127]} scale={1.2} />
      <mesh geometry={nodes.Tree_5029.geometry} material={materials['Material.001']} position={[13.023, 10.483, -50.836]} rotation={[0.155, -1.1, 3.127]} scale={1.2} />
      <mesh geometry={nodes.Tree_5030.geometry} material={materials['Material.001']} position={[23.125, 5.947, -2.594]} rotation={[-0.013, -1.1, 3.08]} scale={1.2} />
      <mesh geometry={nodes.Tree_5031.geometry} material={materials['Material.001']} position={[23.671, 9.251, -43.736]} rotation={[0.068, -1.1, 3.08]} scale={1.2} />
      <mesh geometry={nodes.Tree_5032.geometry} material={materials['Material.001']} position={[27.519, 12.672, -65.235]} rotation={[0.15, -1.1, 3.081]} scale={1.2} />
      <mesh geometry={nodes.Tree_5033.geometry} material={materials['Material.001']} position={[36.016, 5.576, -6.795]} rotation={[-0.17, -1.089, 2.903]} scale={1.2} />
      <mesh geometry={nodes.Tree_5034.geometry} material={materials['Material.001']} position={[47.328, 12.63, -72.796]} rotation={[0.003, -1.09, 2.914]} scale={1.2} />
      <mesh geometry={nodes.Tree_5035.geometry} material={materials['Material.001']} position={[60.15, 2.489, -11.457]} rotation={[-0.297, -1.069, 2.757]} scale={1.2} />
      <mesh geometry={nodes.Tree_5036.geometry} material={materials['Material.001']} position={[55.973, 4.562, -29.388]} rotation={[-0.256, -1.07, 2.759]} scale={1.2} />
      <mesh geometry={nodes.Tree_5037.geometry} material={materials['Material.001']} position={[52.513, 7.958, -51.117]} rotation={[-0.163, -1.07, 2.762]} scale={1.2} />
      <mesh geometry={nodes.Tree_5038.geometry} material={materials['Material.001']} position={[58.998, 11.889, -77.41]} rotation={[-0.122, -1.071, 2.766]} scale={1.2} />
      <mesh geometry={nodes.Tree_5039.geometry} material={materials['Material.001']} position={[83.513, -2.447, -17.182]} rotation={[-0.353, -1.047, 2.646]} scale={1.2} />
      <mesh geometry={nodes.Tree_5040.geometry} material={materials['Material.001']} position={[77.789, 2.19, -47.525]} rotation={[-0.311, -1.047, 2.647]} scale={1.2} />
      <mesh geometry={nodes.Tree_5041.geometry} material={materials['Material.001']} position={[74.504, 8.774, -77.261]} rotation={[-0.215, -1.049, 2.653]} scale={1.2} />
      <mesh geometry={nodes.Tree_5042.geometry} material={materials['Material.001']} position={[91.332, -4.78, -14.047]} rotation={[-0.44, -1.034, 2.596]} scale={1.2} />
      <mesh geometry={nodes.Tree_5043.geometry} material={materials['Material.001']} position={[95.747, -3.15, -43.139]} rotation={[-0.358, -1.032, 2.589]} scale={1.2} />
      <mesh geometry={nodes.Tree_5044.geometry} material={materials['Material.001']} position={[91.805, 0.57, -59.287]} rotation={[-0.309, -1.032, 2.589]} scale={1.2} />
      <mesh geometry={nodes.Tree_5045.geometry} material={materials['Material.001']} position={[90.248, 2.251, -65.935]} rotation={[-0.265, -1.033, 2.59]} scale={1.2} />
      <mesh geometry={nodes.Tree_6001.geometry} material={materials['Material.001']} position={[-97.621, 6.627, -92.656]} rotation={[0.226, 0.12, -2.87]} scale={1.2} />
      <mesh geometry={nodes.Tree_6002.geometry} material={materials['Material.001']} position={[-59.682, 13.749, -85.589]} rotation={[0.225, 0.123, -2.966]} scale={1.2} />
      <mesh geometry={nodes.Tree_6003.geometry} material={materials['Material.001']} position={[-19.472, 17.695, -86.92]} rotation={[0.235, 0.125, -3.113]} scale={1.2} />
      <mesh geometry={nodes.Tree_6004.geometry} material={materials['Material.001']} position={[-7.744, 18.737, -90.649]} rotation={[0.237, 0.125, -3.135]} scale={1.2} />
      <mesh geometry={nodes.Tree_6005.geometry} material={materials['Material.001']} position={[25.336, 18.766, -91.966]} rotation={[0.242, 0.125, 3.115]} scale={1.2} />
      <mesh geometry={nodes.Tree_6006.geometry} material={materials['Material.001']} position={[69.333, 13.701, -92.241]} rotation={[0.268, 0.123, 2.966]} scale={1.2} />
      <mesh geometry={nodes.Tree_6007.geometry} material={materials['Material.001']} position={[-93.128, -5.21, -16.433]} rotation={[0.007, 0.12, -2.871]} scale={1.2} />
      <mesh geometry={nodes.Tree_6008.geometry} material={materials['Material.001']} position={[-90.044, -3.352, -27.633]} rotation={[0.054, 0.12, -2.864]} scale={1.2} />
      <mesh geometry={nodes.Tree_6009.geometry} material={materials['Material.001']} position={[-87.812, 1.04, -55.672]} rotation={[0.144, 0.12, -2.866]} scale={1.2} />
      <mesh geometry={nodes.Tree_6010.geometry} material={materials['Material.001']} position={[-69.365, 0.162, 12.775]} rotation={[-0.026, 0.121, -2.898]} scale={1.2} />
      <mesh geometry={nodes.Tree_6011.geometry} material={materials['Material.001']} position={[-73.937, 0.849, -28.273]} rotation={[0.055, 0.121, -2.899]} scale={1.2} />
      <mesh geometry={nodes.Tree_6012.geometry} material={materials['Material.001']} position={[-85.142, 3.92, -67.151]} rotation={[0.186, 0.121, -2.904]} scale={1.2} />
      <mesh geometry={nodes.Tree_6013.geometry} material={materials['Material.001']} position={[-59.553, 2.082, 0.042]} rotation={[0.021, 0.123, -2.959]} scale={1.2} />
      <mesh geometry={nodes.Tree_6014.geometry} material={materials['Material.001']} position={[-66.881, 4.22, -43.548]} rotation={[0.102, 0.123, -2.961]} scale={1.2} />
      <mesh geometry={nodes.Tree_6015.geometry} material={materials['Material.001']} position={[-60.495, 7.943, -59.514]} rotation={[0.151, 0.123, -2.962]} scale={1.2} />
      <mesh geometry={nodes.Tree_6016.geometry} material={materials['Material.001']} position={[-49.478, 3.709, 16.18]} rotation={[-0.01, 0.124, -3.031]} scale={1.2} />
      <mesh geometry={nodes.Tree_6017.geometry} material={materials['Material.001']} position={[-41.181, 5.827, -21.457]} rotation={[0.067, 0.124, -3.032]} scale={1.2} />
      <mesh geometry={nodes.Tree_6018.geometry} material={materials['Material.001']} position={[-48.689, 6.046, -33.376]} rotation={[0.109, 0.124, -3.033]} scale={1.2} />
      <mesh geometry={nodes.Tree_6019.geometry} material={materials['Material.001']} position={[-46.577, 12.852, -73.573]} rotation={[0.193, 0.124, -3.037]} scale={1.2} />
      <mesh geometry={nodes.Tree_6020.geometry} material={materials['Material.001']} position={[-24.116, 5.858, -1.366]} rotation={[0.038, 0.125, -3.112]} scale={1.2} />
      <mesh geometry={nodes.Tree_6021.geometry} material={materials['Material.001']} position={[-25.992, 10.168, -50.738]} rotation={[0.164, 0.125, -3.112]} scale={1.2} />
      <mesh geometry={nodes.Tree_6022.geometry} material={materials['Material.001']} position={[-32.409, 11.673, -60.745]} rotation={[0.164, 0.125, -3.112]} scale={1.2} />
      <mesh geometry={nodes.Tree_6023.geometry} material={materials['Material.001']} position={[-28.061, 13.966, -71.647]} rotation={[0.2, 0.125, -3.112]} scale={1.2} />
      <mesh geometry={nodes.Tree_6024.geometry} material={materials['Material.001']} position={[-8.951, 7.845, -29.754]} rotation={[0.079, 0.125, -3.135]} scale={1.2} />
      <mesh geometry={nodes.Tree_6025.geometry} material={materials['Material.001']} position={[-13.525, 11.004, -53.931]} rotation={[0.167, 0.125, -3.135]} scale={1.2} />
      <mesh geometry={nodes.Tree_6026.geometry} material={materials['Material.001']} position={[6.859, 6.053, 3.749]} rotation={[0.005, 0.125, 3.135]} scale={1.2} />
      <mesh geometry={nodes.Tree_6027.geometry} material={materials['Material.001']} position={[5.923, 6.161, -1.794]} rotation={[0.043, 0.125, 3.135]} scale={1.2} />
      <mesh geometry={nodes.Tree_6028.geometry} material={materials['Material.001']} position={[13.285, 8.722, -37.679]} rotation={[0.123, 0.125, 3.135]} scale={1.2} />
      <mesh geometry={nodes.Tree_6029.geometry} material={materials['Material.001']} position={[10.812, 10.83, -52.796]} rotation={[0.169, 0.125, 3.135]} scale={1.2} />
      <mesh geometry={nodes.Tree_6030.geometry} material={materials['Material.001']} position={[26.927, 5.955, -5.31]} rotation={[0.045, 0.125, 3.113]} scale={1.2} />
      <mesh geometry={nodes.Tree_6031.geometry} material={materials['Material.001']} position={[31.365, 10.257, -52.087]} rotation={[0.171, 0.125, 3.114]} scale={1.2} />
      <mesh geometry={nodes.Tree_6032.geometry} material={materials['Material.001']} position={[27.229, 13.607, -69.711]} rotation={[0.207, 0.125, 3.114]} scale={1.2} />
      <mesh geometry={nodes.Tree_6033.geometry} material={materials['Material.001']} position={[43.724, 5.761, -23.838]} rotation={[0.094, 0.124, 3.032]} scale={1.2} />
      <mesh geometry={nodes.Tree_6034.geometry} material={materials['Material.001']} position={[41.158, 13.403, -73.333]} rotation={[0.219, 0.124, 3.036]} scale={1.2} />
      <mesh geometry={nodes.Tree_6035.geometry} material={materials['Material.001']} position={[58.249, 3.727, -24.3]} rotation={[0.105, 0.123, 2.96]} scale={1.2} />
      <mesh geometry={nodes.Tree_6036.geometry} material={materials['Material.001']} position={[61.147, 3.042, -22.44]} rotation={[0.105, 0.123, 2.96]} scale={1.2} />
      <mesh geometry={nodes.Tree_6037.geometry} material={materials['Material.001']} position={[69.521, 6.726, -61.898]} rotation={[0.195, 0.123, 2.962]} scale={1.2} />
      <mesh geometry={nodes.Tree_6038.geometry} material={materials['Material.001']} position={[77.987, -1.943, 10.228]} rotation={[0.034, 0.121, 2.898]} scale={1.2} />
      <mesh geometry={nodes.Tree_6039.geometry} material={materials['Material.001']} position={[73.35, 0.419, -21.37]} rotation={[0.115, 0.121, 2.899]} scale={1.2} />
      <mesh geometry={nodes.Tree_6040.geometry} material={materials['Material.001']} position={[73.542, 3.323, -48.215]} rotation={[0.156, 0.121, 2.9]} scale={1.2} />
      <mesh geometry={nodes.Tree_6041.geometry} material={materials['Material.001']} position={[86.391, -4.068, 15.93]} rotation={[0.034, 0.121, 2.881]} scale={1.2} />
      <mesh geometry={nodes.Tree_6042.geometry} material={materials['Material.001']} position={[91.704, -5.102, -8.518]} rotation={[0.074, 0.12, 2.871]} scale={1.2} />
      <mesh geometry={nodes.Tree_6043.geometry} material={materials['Material.001']} position={[88.601, -0.624, -47.143]} rotation={[0.162, 0.12, 2.867]} scale={1.2} />
      <mesh geometry={nodes.Tree_6044.geometry} material={materials['Material.001']} position={[87.696, 1.799, -59.625]} rotation={[0.212, 0.12, 2.867]} scale={1.2} />
      <mesh geometry={nodes.Tree_6045.geometry} material={materials['Material.001']} position={[94.205, 1.775, -68.874]} rotation={[0.255, 0.12, 2.868]} scale={1.2} />
      <mesh geometry={nodes.Tree_7001.geometry} material={materials['Material.001']} position={[-94.684, 4.568, -81.782]} rotation={[0.26, 0, -2.872]} scale={1.2} />
      <mesh geometry={nodes.Tree_7002.geometry} material={materials['Material.001']} position={[-58.353, 14.668, -88.291]} rotation={[0.247, 0, -2.968]} scale={1.2} />
      <mesh geometry={nodes.Tree_7003.geometry} material={materials['Material.001']} position={[-24.73, 16.715, -83.519]} rotation={[0.238, 0, -3.113]} scale={1.2} />
      <mesh geometry={nodes.Tree_7004.geometry} material={materials['Material.001']} position={[-15.086, 16.718, -82.528]} rotation={[0.238, 0, -3.135]} scale={1.2} />
      <mesh geometry={nodes.Tree_7005.geometry} material={materials['Material.001']} position={[47.272, 14.461, -81.052]} rotation={[0.241, 0, 3.039]} scale={1.2} />
      <mesh geometry={nodes.Tree_7006.geometry} material={materials['Material.001']} position={[64.331, 12.544, -84.086]} rotation={[0.247, 0, 2.967]} scale={1.2} />
      <mesh geometry={nodes.Tree_7007.geometry} material={materials['Material.001']} position={[-94.41, -5.988, -4.885]} rotation={[0.04, 0, -2.873]} scale={1.2} />
      <mesh geometry={nodes.Tree_7008.geometry} material={materials['Material.001']} position={[-95.444, -4.276, -34.032]} rotation={[0.129, 0, -2.868]} scale={1.2} />
      <mesh geometry={nodes.Tree_7009.geometry} material={materials['Material.001']} position={[-93.454, 0.506, -61.635]} rotation={[0.178, 0, -2.868]} scale={1.2} />
      <mesh geometry={nodes.Tree_7010.geometry} material={materials['Material.001']} position={[-82.897, -2.688, -9.57]} rotation={[0.045, 0, -2.9]} scale={1.2} />
      <mesh geometry={nodes.Tree_7011.geometry} material={materials['Material.001']} position={[-71.227, 1.816, -31.828]} rotation={[0.085, 0, -2.901]} scale={1.2} />
      <mesh geometry={nodes.Tree_7012.geometry} material={materials['Material.001']} position={[-74.068, 8.19, -74.173]} rotation={[0.216, 0, -2.906]} scale={1.2} />
      <mesh geometry={nodes.Tree_7013.geometry} material={materials['Material.001']} position={[-58.572, 3.571, -23.32]} rotation={[0.083, 0, -2.961]} scale={1.2} />
      <mesh geometry={nodes.Tree_7014.geometry} material={materials['Material.001']} position={[-68.757, 3.938, -44.036]} rotation={[0.124, 0, -2.962]} scale={1.2} />
      <mesh geometry={nodes.Tree_7015.geometry} material={materials['Material.001']} position={[-69.428, 6.661, -61.515]} rotation={[0.173, 0, -2.963]} scale={1.2} />
      <mesh geometry={nodes.Tree_7016.geometry} material={materials['Material.001']} position={[-46.614, 4.042, 11.592]} rotation={[0.004, 0, -3.032]} scale={1.2} />
      <mesh geometry={nodes.Tree_7017.geometry} material={materials['Material.001']} position={[-46.234, 5.873, -28.85]} rotation={[0.081, 0, -3.033]} scale={1.2} />
      <mesh geometry={nodes.Tree_7018.geometry} material={materials['Material.001']} position={[-50.679, 8.49, -52.977]} rotation={[0.169, 0, -3.035]} scale={1.2} />
      <mesh geometry={nodes.Tree_7019.geometry} material={materials['Material.001']} position={[-23.319, 5.754, 14.379]} rotation={[0.004, 0, -3.112]} scale={1.2} />
      <mesh geometry={nodes.Tree_7020.geometry} material={materials['Material.001']} position={[-30.882, 6.938, -24.169]} rotation={[0.08, 0, -3.112]} scale={1.2} />
      <mesh geometry={nodes.Tree_7021.geometry} material={materials['Material.001']} position={[-31.437, 10.356, -52.805]} rotation={[0.168, 0, -3.112]} scale={1.2} />
      <mesh geometry={nodes.Tree_7022.geometry} material={materials['Material.001']} position={[-29.952, 14.008, -72.118]} rotation={[0.204, 0, -3.113]} scale={1.2} />
      <mesh geometry={nodes.Tree_7023.geometry} material={materials['Material.001']} position={[-3.074, 6.052, 10.02]} rotation={[0.004, 0, -3.135]} scale={1.2} />
      <mesh geometry={nodes.Tree_7024.geometry} material={materials['Material.001']} position={[-0.689, 7.198, -20.946]} rotation={[0.079, 0, -3.135]} scale={1.2} />
      <mesh geometry={nodes.Tree_7025.geometry} material={materials['Material.001']} position={[-1.285, 11.953, -59.049]} rotation={[0.168, 0, -3.135]} scale={1.2} />
      <mesh geometry={nodes.Tree_7026.geometry} material={materials['Material.001']} position={[6.659, 6.024, 11.342]} rotation={[0.004, 0, 3.135]} scale={1.2} />
      <mesh geometry={nodes.Tree_7027.geometry} material={materials['Material.001']} position={[4.588, 6.491, -9.462]} rotation={[0.042, 0, 3.135]} scale={1.2} />
      <mesh geometry={nodes.Tree_7028.geometry} material={materials['Material.001']} position={[0.95, 9.915, -46.717]} rotation={[0.123, 0, 3.135]} scale={1.2} />
      <mesh geometry={nodes.Tree_7029.geometry} material={materials['Material.001']} position={[10.519, 11.807, -58.555]} rotation={[0.168, 0, 3.135]} scale={1.2} />
      <mesh geometry={nodes.Tree_7030.geometry} material={materials['Material.001']} position={[24.382, 7.397, -27.399]} rotation={[0.079, 0, 3.114]} scale={1.2} />
      <mesh geometry={nodes.Tree_7031.geometry} material={materials['Material.001']} position={[24.592, 10.128, -50.19]} rotation={[0.168, 0, 3.114]} scale={1.2} />
      <mesh geometry={nodes.Tree_7032.geometry} material={materials['Material.001']} position={[20.928, 14.342, -72.408]} rotation={[0.204, 0, 3.114]} scale={1.2} />
      <mesh geometry={nodes.Tree_7033.geometry} material={materials['Material.001']} position={[46.786, 5.523, -25.053]} rotation={[0.08, 0, 3.033]} scale={1.2} />
      <mesh geometry={nodes.Tree_7034.geometry} material={materials['Material.001']} position={[50.276, 13.165, -76.844]} rotation={[0.206, 0, 3.037]} scale={1.2} />
      <mesh geometry={nodes.Tree_7035.geometry} material={materials['Material.001']} position={[59.297, 3.652, -25.712]} rotation={[0.083, 0, 2.961]} scale={1.2} />
      <mesh geometry={nodes.Tree_7036.geometry} material={materials['Material.001']} position={[52.464, 7.364, -47.477]} rotation={[0.124, 0, 2.962]} scale={1.2} />
      <mesh geometry={nodes.Tree_7037.geometry} material={materials['Material.001']} position={[60.881, 8.035, -60.359]} rotation={[0.173, 0, 2.963]} scale={1.2} />
      <mesh geometry={nodes.Tree_7038.geometry} material={materials['Material.001']} position={[71.879, 0.129, -11.555]} rotation={[0.045, 0, 2.9]} scale={1.2} />
      <mesh geometry={nodes.Tree_7039.geometry} material={materials['Material.001']} position={[74.719, -0.003, -20.375]} rotation={[0.085, 0, 2.901]} scale={1.2} />
      <mesh geometry={nodes.Tree_7040.geometry} material={materials['Material.001']} position={[71.35, 4.885, -54.029]} rotation={[0.176, 0, 2.904]} scale={1.2} />
      <mesh geometry={nodes.Tree_7041.geometry} material={materials['Material.001']} position={[93.022, -5.797, 7.32]} rotation={[0.002, 0, 2.883]} scale={1.2} />
      <mesh geometry={nodes.Tree_7042.geometry} material={materials['Material.001']} position={[91.618, -3.71, -28.431]} rotation={[0.088, 0, 2.867]} scale={1.2} />
      <mesh geometry={nodes.Tree_7043.geometry} material={materials['Material.001']} position={[88.584, -1.816, -37.847]} rotation={[0.129, 0, 2.869]} scale={1.2} />
      <mesh geometry={nodes.Tree_7044.geometry} material={materials['Material.001']} position={[92.411, -0.194, -55.995]} rotation={[0.178, 0, 2.869]} scale={1.2} />
      <mesh geometry={nodes.bark057.geometry} material={materials['Color1.001']} position={[-79.452, 9.776, -86.252]} rotation={[0.253, 0, -2.909]} scale={0.006} />
      <mesh geometry={nodes.bark058.geometry} material={materials['Color1.001']} position={[-46.675, 15.433, -84.826]} rotation={[0.241, 0, -3.04]} scale={0.006} />
      <mesh geometry={nodes.bark059.geometry} material={materials['Color1.001']} position={[-17.191, 19.08, -92.355]} rotation={[0.238, 0, -3.113]} scale={0.006} />
      <mesh geometry={nodes.bark060.geometry} material={materials['Color1.001']} position={[15.033, 17.453, -85.554]} rotation={[0.238, 0, 3.135]} scale={0.006} />
      <mesh geometry={nodes.bark061.geometry} material={materials['Color1.001']} position={[50.802, 15.624, -87.274]} rotation={[0.241, 0, 3.039]} scale={0.006} />
      <mesh geometry={nodes.bark062.geometry} material={materials['Color1.001']} position={[85.226, 7.796, -84.027]} rotation={[0.253, 0, 2.909]} scale={0.006} />
      <mesh geometry={nodes.bark063.geometry} material={materials['Color1.001']} position={[-85.22, -3.259, -9.967]} rotation={[0.04, 0, -2.873]} scale={0.006} />
      <mesh geometry={nodes.bark064.geometry} material={materials['Color1.001']} position={[-95.76, -4.424, -33.583]} rotation={[0.129, 0, -2.868]} scale={0.006} />
      <mesh geometry={nodes.bark065.geometry} material={materials['Color1.001']} position={[-88.767, 1.113, -57.585]} rotation={[0.178, 0, -2.868]} scale={0.006} />
      <mesh geometry={nodes.bark066.geometry} material={materials['Color1.001']} position={[-77.234, -1.335, -8.628]} rotation={[0.045, 0, -2.9]} scale={0.006} />
      <mesh geometry={nodes.bark067.geometry} material={materials['Color1.001']} position={[-72.822, 0.153, -16.872]} rotation={[0.085, 0, -2.901]} scale={0.006} />
      <mesh geometry={nodes.bark068.geometry} material={materials['Color1.001']} position={[-81.125, 4.565, -65.567]} rotation={[0.216, 0, -2.906]} scale={0.006} />
      <mesh geometry={nodes.bark069.geometry} material={materials['Color1.001']} position={[-64.253, 2.049, -17.515]} rotation={[0.083, 0, -2.961]} scale={0.006} />
      <mesh geometry={nodes.bark070.geometry} material={materials['Color1.001']} position={[-55.403, 5.934, -40.461]} rotation={[0.124, 0, -2.962]} scale={0.006} />
      <mesh geometry={nodes.bark071.geometry} material={materials['Color1.001']} position={[-57.076, 9.884, -66.444]} rotation={[0.211, 0, -2.965]} scale={0.006} />
      <mesh geometry={nodes.bark072.geometry} material={materials['Color1.001']} position={[-40.809, 5.294, -13.107]} rotation={[0.042, 0, -3.032]} scale={0.006} />
      <mesh geometry={nodes.bark073.geometry} material={materials['Color1.001']} position={[-46.821, 5.672, -27.16]} rotation={[0.081, 0, -3.033]} scale={0.006} />
      <mesh geometry={nodes.bark074.geometry} material={materials['Color1.001']} position={[-45.997, 10.186, -59.904]} rotation={[0.169, 0, -3.035]} scale={0.006} />
      <mesh geometry={nodes.bark075.geometry} material={materials['Color1.001']} position={[-31.124, 5.527, 13.978]} rotation={[0.004, 0, -3.112]} scale={0.006} />
      <mesh geometry={nodes.bark076.geometry} material={materials['Color1.001']} position={[-30.569, 6.538, -19.042]} rotation={[0.08, 0, -3.112]} scale={0.006} />
      <mesh geometry={nodes.bark077.geometry} material={materials['Color1.001']} position={[-26.797, 11.102, -56.39]} rotation={[0.168, 0, -3.112]} scale={0.006} />
      <mesh geometry={nodes.bark078.geometry} material={materials['Color1.001']} position={[-17.747, 14.558, -73.033]} rotation={[0.204, 0, -3.113]} scale={0.006} />
      <mesh geometry={nodes.bark079.geometry} material={materials['Color1.001']} position={[-7.25, 6.628, -13.138]} rotation={[0.042, 0, -3.135]} scale={0.006} />
      <mesh geometry={nodes.bark080.geometry} material={materials['Color1.001']} position={[-11.739, 6.959, -18.831]} rotation={[0.079, 0, -3.135]} scale={0.006} />
      <mesh geometry={nodes.bark081.geometry} material={materials['Color1.001']} position={[-0.66, 12.538, -62.474]} rotation={[0.168, 0, -3.135]} scale={0.006} />
      <mesh geometry={nodes.bark082.geometry} material={materials['Color1.001']} position={[5.155, 6.382, -6.957]} rotation={[0.042, 0, 3.135]} scale={0.006} />
      <mesh geometry={nodes.bark083.geometry} material={materials['Color1.001']} position={[6.238, 7.361, -23.457]} rotation={[0.079, 0, 3.135]} scale={0.006} />
      <mesh geometry={nodes.bark084.geometry} material={materials['Color1.001']} position={[15.02, 8.308, -34.414]} rotation={[0.123, 0, 3.135]} scale={0.006} />
      <mesh geometry={nodes.bark085.geometry} material={materials['Color1.001']} position={[6.799, 10.867, -52.862]} rotation={[0.168, 0, 3.135]} scale={0.006} />
      <mesh geometry={nodes.bark086.geometry} material={materials['Color1.001']} position={[19.238, 6.827, -18.439]} rotation={[0.079, 0, 3.114]} scale={0.006} />
      <mesh geometry={nodes.bark087.geometry} material={materials['Color1.001']} position={[27.28, 11.517, -58.828]} rotation={[0.168, 0, 3.114]} scale={0.006} />
      <mesh geometry={nodes.bark088.geometry} material={materials['Color1.001']} position={[31.138, 14.056, -72.408]} rotation={[0.204, 0, 3.114]} scale={0.006} />
      <mesh geometry={nodes.bark089.geometry} material={materials['Color1.001']} position={[46.239, 6.834, -37.439]} rotation={[0.123, 0, 3.034]} scale={0.006} />
      <mesh geometry={nodes.bark090.geometry} material={materials['Color1.001']} position={[68.349, 1.14, -14.959]} rotation={[0.044, 0, 2.96]} scale={0.006} />
      <mesh geometry={nodes.bark091.geometry} material={materials['Color1.001']} position={[57.636, 3.53, -20.563]} rotation={[0.083, 0, 2.961]} scale={0.006} />
      <mesh geometry={nodes.bark092.geometry} material={materials['Color1.001']} position={[52.547, 7.396, -47.853]} rotation={[0.124, 0, 2.962]} scale={0.006} />
      <mesh geometry={nodes.bark093.geometry} material={materials['Color1.001']} position={[54.111, 9.728, -62.972]} rotation={[0.173, 0, 2.963]} scale={0.006} />
      <mesh geometry={nodes.bark094.geometry} material={materials['Color1.001']} position={[72.688, -0.319, -5.98]} rotation={[0.045, 0, 2.9]} scale={0.006} />
      <mesh geometry={nodes.bark095.geometry} material={materials['Color1.001']} position={[77.306, 1.821, -43.678]} rotation={[0.126, 0, 2.902]} scale={0.006} />
      <mesh geometry={nodes.bark096.geometry} material={materials['Color1.001']} position={[84.776, 2.558, -59.526]} rotation={[0.176, 0, 2.904]} scale={0.006} />
      <mesh geometry={nodes.bark097.geometry} material={materials['Color1.001']} position={[89.138, -4.64, -2.635]} rotation={[0.041, 0, 2.873]} scale={0.006} />
      <mesh geometry={nodes.bark098.geometry} material={materials['Color1.001']} position={[92.909, -4.176, -27.284]} rotation={[0.088, 0, 2.867]} scale={0.006} />
      <mesh geometry={nodes.bark099.geometry} material={materials['Color1.001']} position={[90.01, -2.495, -35.713]} rotation={[0.129, 0, 2.869]} scale={0.006} />
      <mesh geometry={nodes.bark100.geometry} material={materials['Color1.001']} position={[93.624, 0.816, -63.52]} rotation={[0.178, 0, 2.869]} scale={0.006} />
      <mesh geometry={nodes.Tree057.geometry} material={materials['Material.001']} position={[-78.454, 10.284, -87.27]} rotation={[-1.318, -0.233, -Math.PI]} scale={[0.108, 0.144, 0.108]} />
      <mesh geometry={nodes.Tree058.geometry} material={materials['Material.001']} position={[-43.812, 15.544, -84.049]} rotation={[-1.33, -0.102, Math.PI]} scale={[0.108, 0.144, 0.108]} />
      <mesh geometry={nodes.Tree059.geometry} material={materials['Material.001']} position={[-22.248, 16.605, -82.766]} rotation={[-1.332, -0.028, -Math.PI]} scale={[0.108, 0.144, 0.108]} />
      <mesh geometry={nodes.Tree060.geometry} material={materials['Material.001']} position={[1.401, 17.969, -87.315]} rotation={[-1.333, 0.006, Math.PI]} scale={[0.108, 0.144, 0.108]} />
      <mesh geometry={nodes.Tree061.geometry} material={materials['Material.001']} position={[50.833, 16.657, -91.463]} rotation={[-1.33, 0.102, Math.PI]} scale={[0.108, 0.144, 0.108]} />
      <mesh geometry={nodes.Tree062.geometry} material={materials['Material.001']} position={[80.537, 9.856, -87.526]} rotation={[-1.318, 0.233, -Math.PI]} scale={[0.108, 0.144, 0.108]} />
      <mesh geometry={nodes.Tree063.geometry} material={materials['Material.001']} position={[-91.939, -4.665, -18.844]} rotation={[-1.483, -0.276, Math.PI]} scale={[0.108, 0.144, 0.108]} />
      <mesh geometry={nodes.Tree064.geometry} material={materials['Material.001']} position={[-90.865, -1.822, -42.914]} rotation={[-1.442, -0.274, Math.PI]} scale={[0.108, 0.144, 0.108]} />
      <mesh geometry={nodes.Tree065.geometry} material={materials['Material.001']} position={[-94.707, 1.258, -67.302]} rotation={[-1.35, -0.272, -Math.PI]} scale={[0.108, 0.144, 0.108]} />
      <mesh geometry={nodes.Tree066.geometry} material={materials['Material.001']} position={[-72.168, 0.199, -15.035]} rotation={[-1.526, -0.241, Math.PI]} scale={[0.108, 0.144, 0.108]} />
      <mesh geometry={nodes.Tree067.geometry} material={materials['Material.001']} position={[-75.906, 2.528, -46.63]} rotation={[-1.445, -0.24, Math.PI]} scale={[0.108, 0.144, 0.108]} />
      <mesh geometry={nodes.Tree068.geometry} material={materials['Material.001']} position={[-75.387, 6.582, -68.297]} rotation={[-1.355, -0.236, Math.PI]} scale={[0.108, 0.144, 0.108]} />
      <mesh geometry={nodes.Tree069.geometry} material={materials['Material.001']} position={[-55.765, 3.895, -21.025]} rotation={[-1.488, -0.18, Math.PI]} scale={[0.108, 0.144, 0.108]} />
      <mesh geometry={nodes.Tree070.geometry} material={materials['Material.001']} position={[-55.71, 5.161, -34.728]} rotation={[-1.446, -0.18, Math.PI]} scale={[0.108, 0.144, 0.108]} />
      <mesh geometry={nodes.Tree071.geometry} material={materials['Material.001']} position={[-56.371, 11.959, -75.584]} rotation={[-1.36, -0.177, Math.PI]} scale={[0.108, 0.144, 0.108]} />
      <mesh geometry={nodes.Tree072.geometry} material={materials['Material.001']} position={[-40.603, 5.973, -22.478]} rotation={[-1.49, -0.108, Math.PI]} scale={[0.108, 0.144, 0.108]} />
      <mesh geometry={nodes.Tree073.geometry} material={materials['Material.001']} position={[-48.389, 5.724, -29.898]} rotation={[-1.49, -0.108, Math.PI]} scale={[0.108, 0.144, 0.108]} />
      <mesh geometry={nodes.Tree074.geometry} material={materials['Material.001']} position={[-46.432, 9.796, -57.904]} rotation={[-1.401, -0.106, Math.PI]} scale={[0.108, 0.144, 0.108]} />
      <mesh geometry={nodes.Tree075.geometry} material={materials['Material.001']} position={[-28.373, 5.634, 7.128]} rotation={[-1.567, -0.029, Math.PI]} scale={[0.108, 0.144, 0.108]} />
      <mesh geometry={nodes.Tree076.geometry} material={materials['Material.001']} position={[-22.041, 8.382, -36.361]} rotation={[-1.448, -0.029, Math.PI]} scale={[0.108, 0.144, 0.108]} />
      <mesh geometry={nodes.Tree077.geometry} material={materials['Material.001']} position={[-24.618, 10.062, -49.869]} rotation={[-1.403, -0.029, -Math.PI]} scale={[0.108, 0.144, 0.108]} />
      <mesh geometry={nodes.Tree078.geometry} material={materials['Material.001']} position={[-27.031, 15.026, -76.619]} rotation={[-1.367, -0.029, -Math.PI]} scale={[0.108, 0.144, 0.108]} />
      <mesh geometry={nodes.Tree079.geometry} material={materials['Material.001']} position={[-16.274, 6.411, -9.33]} rotation={[-1.529, -0.006, Math.PI]} scale={[0.108, 0.144, 0.108]} />
      <mesh geometry={nodes.Tree080.geometry} material={materials['Material.001']} position={[-10.623, 8.337, -34.414]} rotation={[-1.448, -0.007, Math.PI]} scale={[0.108, 0.144, 0.108]} />
      <mesh geometry={nodes.Tree081.geometry} material={materials['Material.001']} position={[-0.449, 12.618, -62.941]} rotation={[-1.403, -0.007, -Math.PI]} scale={[0.108, 0.144, 0.108]} />
      <mesh geometry={nodes.Tree082.geometry} material={materials['Material.001']} position={[7.916, 6.578, -12.047]} rotation={[-1.529, 0.006, -Math.PI]} scale={[0.108, 0.144, 0.108]} />
      <mesh geometry={nodes.Tree083.geometry} material={materials['Material.001']} position={[13.46, 7.866, -30.381]} rotation={[-1.491, 0.006, Math.PI]} scale={[0.108, 0.144, 0.108]} />
      <mesh geometry={nodes.Tree084.geometry} material={materials['Material.001']} position={[15.778, 8.56, -36.498]} rotation={[-1.448, 0.006, Math.PI]} scale={[0.108, 0.144, 0.108]} />
      <mesh geometry={nodes.Tree085.geometry} material={materials['Material.001']} position={[1.73, 13.364, -66.637]} rotation={[-1.367, 0.006, -Math.PI]} scale={[0.108, 0.144, 0.108]} />
      <mesh geometry={nodes.Tree086.geometry} material={materials['Material.001']} position={[23.547, 8.42, -36.95]} rotation={[-1.448, 0.028, -Math.PI]} scale={[0.108, 0.144, 0.108]} />
      <mesh geometry={nodes.Tree087.geometry} material={materials['Material.001']} position={[30.692, 12.576, -65.203]} rotation={[-1.367, 0.027, -Math.PI]} scale={[0.108, 0.144, 0.108]} />
      <mesh geometry={nodes.Tree088.geometry} material={materials['Material.001']} position={[34.753, 5.359, 14.074]} rotation={[-1.567, 0.11, Math.PI]} scale={[0.108, 0.144, 0.108]} />
      <mesh geometry={nodes.Tree089.geometry} material={materials['Material.001']} position={[40.225, 7.108, -34.325]} rotation={[-1.448, 0.108, -Math.PI]} scale={[0.108, 0.144, 0.108]} />
      <mesh geometry={nodes.Tree090.geometry} material={materials['Material.001']} position={[53.387, 3.649, -9.635]} rotation={[-1.527, 0.181, -Math.PI]} scale={[0.108, 0.144, 0.108]} />
      <mesh geometry={nodes.Tree091.geometry} material={materials['Material.001']} position={[67.775, 1.878, -23.025]} rotation={[-1.488, 0.18, -Math.PI]} scale={[0.108, 0.144, 0.108]} />
      <mesh geometry={nodes.Tree092.geometry} material={materials['Material.001']} position={[62.031, 5.161, -43.861]} rotation={[-1.446, 0.18, -Math.PI]} scale={[0.108, 0.144, 0.108]} />
      <mesh geometry={nodes.Tree093.geometry} material={materials['Material.001']} position={[63.98, 8.61, -66.332]} rotation={[-1.36, 0.177, -Math.PI]} scale={[0.108, 0.144, 0.108]} />
      <mesh geometry={nodes.Tree094.geometry} material={materials['Material.001']} position={[70.032, 0.523, -10.187]} rotation={[-1.526, 0.242, -Math.PI]} scale={[0.108, 0.144, 0.108]} />
      <mesh geometry={nodes.Tree095.geometry} material={materials['Material.001']} position={[76.472, 2.516, -47.538]} rotation={[-1.445, 0.24, -Math.PI]} scale={[0.108, 0.144, 0.108]} />
      <mesh geometry={nodes.Tree096.geometry} material={materials['Material.001']} position={[72.671, 4.697, -54.802]} rotation={[-1.394, 0.238, -Math.PI]} scale={[0.108, 0.144, 0.108]} />
      <mesh geometry={nodes.Tree097.geometry} material={materials['Material.001']} position={[91.7, -4.832, -15.319]} rotation={[-1.53, 0.269, -Math.PI]} scale={[0.108, 0.144, 0.108]} />
      <mesh geometry={nodes.Tree098.geometry} material={materials['Material.001']} position={[93.516, -4.322, -27.56]} rotation={[-1.483, 0.275, -Math.PI]} scale={[0.108, 0.144, 0.108]} />
      <mesh geometry={nodes.Tree099.geometry} material={materials['Material.001']} position={[94.926, -3.414, -39.347]} rotation={[-1.442, 0.273, -Math.PI]} scale={[0.108, 0.144, 0.108]} />
      <mesh geometry={nodes.Tree100.geometry} material={materials['Material.001']} position={[90.076, 5.08, -78.342]} rotation={[-1.35, 0.272, -Math.PI]} scale={[0.108, 0.144, 0.108]} />
    </group>
  )
}

useGLTF.preload('/TreeExportForrest.glb')
