import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import slopes from "../../assets/gltf/slopes/slope-23.glb";

export default function Slopes(props) {
  const { nodes, materials } = useGLTF(slopes)

  const moveUp = 10;

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['Abfahrt-23'].geometry} position={[1217.336, 2057.602 + moveUp, 1946.165]} scale={0.542} >
        <meshStandardMaterial color='#0d3572' emissive="#0d3572" emissiveIntensity={8} toneMapped={true} />
      </mesh>
    </group>
  )
}

useGLTF.preload(slopes)
// <meshBasicMaterial color='#0000FF' opacity={0.5} transparent />
