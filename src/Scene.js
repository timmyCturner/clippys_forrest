import shallow from 'zustand/shallow';
import * as THREE from 'three';
import React, { Suspense } from 'react'
import { OrbitControls, CameraShake, Environment, Sky } from '@react-three/drei';
import { Clippy } from './Clippy';
import { Cloud } from './Cloud';
import { Land } from './LandFull';
import { Rig } from './Rig';
import { Sparks } from './Sparks';
import { PortalTotal } from './PortalTotal';
import Track from './3d/Track'
import Rings from './Rings'
import { useEffect  } from 'react';
import  useStore  from './store';

const colors = {

  malevolentIllusion: [
    '#9ac069',
    '#a8de77',
    '#b4df86',
    '#c0d998',
    '#c6eead',
    '#c9f9c6',
  ],
  sunnyRainbow: [
    '#431C0D',
    '#6E3907',
    '#A85604',
    '#FFB600',
    '#FFD200',
    '#FFE74C',
    '#FFED7D'
  ],
  blackRainbow: [
    '#05070A',
    '#1E2A3A',
    '#3D4D5C',
    '#6E879C',
    '#AAB9C9',
    '#CED8E4',
    '#E4EBF1'
  ],
};



function generateCloudRing(center, radius, cloudCount,xI,zI, ...cloudProps) {
  const cloudRing = [];
  for (let i = 0; i < cloudCount; i++) {
    const angle = (i / cloudCount) * Math.PI * 2;
    const x = center[0] + Math.random() * radius*xI * Math.cos(angle);
    const y = center[1];
    const z = center[2] + Math.random() * radius *zI* Math.sin(angle);
    //console.log(cloudProps[0].speed);
    cloudRing.push(
      <Cloud key={i} position={[x, y, z]} speed = {cloudProps[0].speed} color = {cloudProps[0].color} opacity = {cloudProps[0].opacity}
      segments = {cloudProps[0].segments} depth = {cloudProps[0].depth} depthTest = {cloudProps[0].depthTest} scaleRatio={true} {...cloudProps}/>
    );
  }
  return cloudRing;
}


export function Scene({ init = true, mouse, cameraRef }) {


  //const light = new THREE.PointLight(0xffffff, 1, 50); // White light at full intensity
  //light.position.set(0, -100,-10);
  const color = "#9abcc9"
  return (

    <>
      <OrbitControls
        makeDefault
        enablePan={true}
        enableRotate={true}
        enableZoom={true}
      />



      <ambientLight  intensity={3} color="#ffffff" />
      <directionalLight  intensity={2} color="#ffffff" />
      <group >


         <Suspense fallback={null}>
         {generateCloudRing([-2000, -290, 0], 500, 50,5,1, { speed: 0.2, opacity: 0.25, segments: 5, size:10, depthTest: false, depth: 1, color: color })}
         {generateCloudRing([-4500, -300, 0], 300, 20,1.5,2, { speed: 0.2, opacity: 0.25, segments: 5, size:10, depthTest: false, depth: 1, color: color })}






        </Suspense>
        <Rig>
        <Clippy scale = {5.5} position={[0,0,0]}/>
        </Rig>

          <PortalTotal colors = {colors}  mouse = {mouse} />
          <Sparks count={40} mouse={mouse} colors={colors.blackRainbow} position = {[-200,100,0]}/>
          <Sparks count={30} mouse={mouse} colors={colors.sunnyRainbow} position = {[-1100,0,0]}/>
          <Sparks count={60} mouse={mouse} colors={colors.sunnyRainbow} position = {[-2200,0,0]}/>
          <Sparks count={100} mouse={mouse} colors={colors.sunnyRainbow} position = {[-3300,100,0]}/>
          <Land  scale = {22}  position={[-1800,-225,0]} rotation={[Math.PI, -Math.PI / 2, Math.PI]}/>
          <Rings />
          <Track />



      </group>

    </>
  );
}
