import * as THREE from 'three'
import  GrannyKnot  from './3d/CustomKnot'
import { addEffect } from '@react-three/fiber'
import create from 'zustand'
import { useGLTF } from '@react-three/drei'
import { mapRange } from 'canvas-sketch-util/math';
import song from "./3d/Editor.mp3";
// import * as audio from './audio'
function runAnimation(t){
  return (t>0.1&&t<0.2)||(t>0.3&&t<0.4)||(t>0.5&&t<0.6)||(t>0.7&&t<0.8)
}
let guid = 1

const useStore = create((set, get) => {

  let spline = new GrannyKnot()
  let audio= new Audio(song)
  let isPlaying = false
  //const { nodes, materials } = useGLTF('/path.glb')

  //console.log(spline,traverse(nodes));
  let track = new THREE.TubeGeometry(spline, 1750, 1, 10, false)
  const box = new THREE.Box3()
  let initStart = false;
  let startTime = Date.now()

  return {
    sound: false,
    camera: undefined,
    points: 0,
    init: false,
    audio: audio,
    isPlaying: isPlaying,
    setInit: () =>
      set(() => {
        initStart=true
        startTime = Date.now()
        if (!isPlaying){
          audio.play();
        }
        //console.log(initStart=true);
        return { init: true };
      }),
      // Main function to handle both play and pause operations

    mutation: {
      t: 0,
      position: new THREE.Vector3(),
      startTime: Date.now(),
      rings: randomRings(10, track),
      particles: null,
      track: track,
      scale: 1,
      fov: 40,
      hits: false,
      looptime: 40 * 1000,
      binormal: new THREE.Vector3(),
      normal: new THREE.Vector3(),
      clock: new THREE.Clock(false),
      mouse: new THREE.Vector2(-250, 50),
      speedFactor:1,
      // Re-usable objects
      dummy: new THREE.Object3D(),
    },

    actions: {
      init(camera) {
        //console.log(camera);
        const { mutation, actions } = get()

        set({ camera })
        mutation.clock.start()
        //actions.toggleSound(get().sound)

        const animate = () => {
          const time = Date.now();
          //console.log(initStart);
          let t = 0;
          if(initStart)
             t = (mutation.t = ((time - mutation.startTime) % mutation.looptime) / mutation.looptime);


          if (t >= 0.95) {
            console.log('done!');
            // Animation has reached the end
            return;
          }

          // Your animation logic here
          mutation.position = track.parameters.path.getPointAt(t);
          mutation.position.multiplyScalar(mutation.scale);

          // Request the next frame
          requestAnimationFrame(animate);
        };

        // Start the animation

          animate();

      },
      // updateMouse({ clientX: x, clientY: y }) {
      //   get().mutation.mouse.set(x - window.innerWidth / 2, y - window.innerHeight / 2)
      // },
      test(data) {
        box.min.copy(data.offset)
        box.max.copy(data.offset)
        box.expandByScalar(data.size * data.scale)
        data.hit.set(10000, 10000, 10000)
        const result = get().mutation.ray.intersectBox(box, data.hit)
        data.distance = get().mutation.ray.origin.distanceTo(data.hit)
        return result
      }
    }
  }
})




function randomRings(count, track) {
  let temp = []
  let t = 0.2
  for (let i = 0; i < count; i++) {
    t += 0.08
    const pos = track.parameters.path.getPointAt(t)
    pos.multiplyScalar(1)
    const segments = track.tangents.length
    const pickt = t * segments
    const pick = Math.floor(pickt)
    const lookAt = track.parameters.path.getPointAt((t + 1 / track.parameters.path.getLength()) % 1).multiplyScalar(15)
    const matrix = new THREE.Matrix4().lookAt(pos, lookAt, track.binormals[pick])
    temp.push([pos.toArray(), matrix])
  }
  return temp
}

export default useStore
// export { audio, playAudio }
