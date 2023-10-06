import logo from './logo.svg';
import './App.css';
import { Scene } from './Scene';
import React, {useCallback, useRef,useState,useEffect } from 'react';
import { Canvas, extend  } from '@react-three/fiber';
import * as THREE from 'three'
import useStore from './store'
import { EffectComposer, Bloom } from  '@react-three/postprocessing'
import * as meshline from './MeshLine';
import './styles.css';
import TextDisplay from './TextDisplay'
import { Environment } from '@react-three/drei';

extend(meshline);

// <EffectComposer>
//   <Bloom mipmapBlur luminanceThreshold={0.75} radius={1.1} />
// </EffectComposer>
function App() {


  //console.log(state.didLoad);
  const cameraRef = useRef();
  const init = useStore((state) => state.init);
  const setInit = useStore((state) => state.setInit);
  const { fov } = useStore((state) => state.mutation)
  const actions = useStore((state) => state.actions)
  const mouse = useRef([0, 0]);

  //console.log(didLoadAll,);
  const onMouseMove = useCallback(
    ({ clientX: x, clientY: y }) =>
      (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]),
    []
  );
  // const [displayText, setDisplayText] = useState('');
  // const textToDisplay = "This is the text to be displayed.";
  // const displaySpeed = 100; // Adjust the speed (in milliseconds)
  // const initialDelay = 2000; // Adjust the initial delay (in milliseconds)
  //
  // const displayTextOverTime = (currentIndex) => {
  //   if (currentIndex < textToDisplay.length) {
  //     setDisplayText((prevText) => prevText + textToDisplay[currentIndex]);
  //
  //     setTimeout(() => {
  //       displayTextOverTime(currentIndex + 1);
  //     }, displaySpeed);
  //   }
  // };
  //
  // useEffect(() => {
  //   const delayTimer = setTimeout(() => {
  //     displayTextOverTime(0);
  //   }, initialDelay);
  //
  //   return () => {
  //     clearTimeout(delayTimer);
  //   };
  // }, [initialDelay]);


  return (

    <div onPointerMove={actions.updateMouse} onClick={actions.shoot} style={{ width: '100vw', height: '100vh' }}>

    <Canvas
      linear
      mode="concurrent"
      dpr={[1, 1.5]}
      gl={{ antialias: false }}
      camera={{ position: [0, 0, 100], near: 1, far: 10000, fov }}
      onCreated={({ gl, camera }) => {
        actions.init(camera)
        gl.setClearColor(new THREE.Color('#175d65'))
      }}>

              <group>
                <Scene mouse={mouse} cameraRef={cameraRef} />
              </group>

              

              <EffectComposer>
              <Bloom
                luminanceThreshold={0.6} // Adjust this threshold to control what parts of the scene glow
                luminanceSmoothing={0.9}
                intensity={2} // Increase this value to make the bloom effect more intense
                radius={0.75} // Adjust the radius to control the size of the bloom
              />
            </EffectComposer>
      </Canvas>




      {!init && (
        <div className="overlay">
          <div>
            <h1>Clippy</h1>
            {true ? (
              <button onClick={() => setInit(true)}>Play</button>
            ) : (
              <div className="loader">Loading…</div>
            )}
          </div>
        </div>
      )}
      <TextDisplay/>
    </div>
  );
}

export default App;
