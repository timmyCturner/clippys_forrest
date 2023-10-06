import * as THREE from 'three';
import React, { useRef, useEffect, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import Random from 'canvas-sketch-util/random';
import { lerp, mapRange } from 'canvas-sketch-util/math';

const radiusVariance = () => Random.range(0.2, 1);

function FatLine({ curve, width, color, speed}) {
  const material = useRef();


  useFrame((state) => {
    material.current.uniforms.dashOffset.value -= speed;
    const off = Random.noise1D(state.clock.elapsedTime, 20);

      material.current.uniforms.lineWidth.value =
        width * mapRange(1, 0.2, 0.4, 0.1, 2, true);

  });

  return (
    <mesh>
      <meshLine attach="geometry" points={curve} />
      <meshLineMaterial
        attach="material"
        ref={material}
        transparent
        depthTest={true}
        depthWrite = {false}
        lineWidth={width}
        color={color}
        dashArray={0.1}
        dashRatio={0.95}
      />
    </mesh>
  );
}

export function Sparks({position, mouse, count, colors, radius = 10 }) {
  //console.log(colors);
  const lines = useMemo(
    () =>
      new Array(count).fill().map((_, index) => {
        const angle = (index / 20) * Math.PI * 2;
        const pos = new THREE.Vector3(
          Math.sin(angle) * radius*30 * radiusVariance(),
          0,
          Math.cos(angle) * radius*20 * radiusVariance()

        );
        const points = new Array(30).fill().map((_, index) => {
          const angle = (index / 20) * Math.PI * 2;
          return pos
            .add(
              new THREE.Vector3(
                Math.sin(angle) * radius * radiusVariance(),
                -index/10,
                Math.cos(angle) * radius * radiusVariance()

              )
            )
            .clone();
        });
        const curve = new THREE.CatmullRomCurve3(points).getPoints(1000);
        return {
          color: colors[parseInt(colors.length * Math.random())],
          width: Math.max(0.1, (0.2 * index) / 10),
          speed: Math.max(0.001, 0.004 * Math.random()),
          curve,
        };
      }),
    [count]
  );

  const ref = useRef();
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x = lerp(
        ref.current.rotation.x,
        0 + mouse.current[1] / aspect / 200,
        0.1
      );
      ref.current.rotation.y = lerp(
        ref.current.rotation.y,
        0 + mouse.current[0] / aspect / 400,
        0.1
      );
    }
  });

  return (
    <group ref={ref} position = {position}>
      <group position={[-radius * 2, -radius, -10]} scale={[5, 11, 5]}>
        {lines.map((props, index) => (
          <FatLine key={index} {...props} />
        ))}
      </group>
    </group>
  );
}
