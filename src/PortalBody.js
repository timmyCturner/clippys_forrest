import * as THREE from 'three';
import React, { useRef, useMemo, useEffect  } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import {useGLTF, MeshTransmissionMaterial, } from '@react-three/drei';

  export function PortalBody(props) {
    const { nodes, materials } = useGLTF('/Torus.glb')

  //const config = useContr
    const config = {
      meshPhysicalMaterial: false,
      transmissionSampler: true,
      backside: true,
      samples: 8,//{ value: 32, min: 1, max: 32, step: 1 },
      resolution: 2048,//{ value: 2048, min: 256, max: 2048, step: 256 },
      transmission:0.9,// { value: 1, min: 0, max: 5 },
      roughness: 0.1,//{ value: 0.0, min: 0, max: 1, step: 0.01 },
      thickness: 5.5,//{ value: 3.5, min: 0, max: 10, step: 0.01 },
      ior: 2,//{ value: 1, min: 1, max: 5, step: 0.01 },
      chromaticAberration: 0.4,//{ value: 0.04, min: 0, max: 1 },
      anisotropy: 0.0,//{ value: 0.0, min: 0, max: 1, step: 0.01 },
      distortion: 0.9,//{ value: 0.0, min: 0, max: 1, step: 0.01 },
      distortionScale: 0.05,//{ value: 0.3, min: 0.01, max: 1, step: 0.01 },
      temporalDistortion:0.9,// { value: 0.5, min: 0, max: 1, step: 0.01 },
      clearcoat: 0.15,//{ value: 0, min: 0, max: 1 },
      attenuationDistance: 0.95,//{ value: 0.5, min: 0, max: 10, step: 0.01 },
      attenuationColor: '#FFFFFF',
      color: '#f35a33',
      bg: '#FFFFFF'
    }



    return (
      <group dispose={null} scale = {30} >
        <mesh geometry={nodes.Torus.geometry} material={materials.Rock}  rotation = {[Math.PI/2,0,0]}/>
        <mesh>
          <circleGeometry />
          {config.meshPhysicalMaterial ? <meshPhysicalMaterial {...config} /> : <MeshTransmissionMaterial background={new THREE.Color(config.bg)} {...config} />}
        </mesh>
        <mesh  position = {[0,0,0]}>
          <circleGeometry />
          <meshBasicMaterial color={0xdddddd} /> {/* Gray color */}
        </mesh>


      </group>
    )
  }
useGLTF.preload('/Torus.glb')
