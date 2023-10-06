import React from 'react'
import useStore from '../store'

export default function Track() {
  const { scale, track } = useStore((state) => state.mutation)


  return (
    <mesh scale={[scale, scale, scale]} geometry={track}>
      <meshStandardMaterial Material emissiveIntensity={2} emissive="#AAB9C9"   color="#3D4D5C" />
    </mesh>
  )
}

// blackRainbow: [
//   '#05070A',
//   '#1E2A3A',
//   '#3D4D5C',
//   '#6E879C',
//   '#AAB9C9',
//   '#CED8E4',
//   '#E4EBF1'
// ],
