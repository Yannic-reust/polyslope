import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import slopes from "../../assets/gltf/slopes/slopes.glb";

export default function Slopes(props) {
  const { nodes, materials } = useGLTF(slopes)

  const moveUp = 10; // to remove z-fighting

  return (
    <group position={[0,0 + moveUp,0]} {...props} dispose={null}>
     <mesh geometry={nodes['Abfahrt-23'].geometry} material={materials['Material.003']} position={[1217.336, 2057.602, 1946.165]} scale={0.542} >
        <meshStandardMaterial color='#0d3572' opacity={0.8} transparent emissive="#0d3572" emissiveIntensity={8} toneMapped={false} />
     </mesh>

     <mesh geometry={nodes['Abfahrt-15'].geometry} material={materials['Material.010']} position={[158.751, 2856.949, 102.661]} rotation={[-Math.PI, 1.439, -Math.PI]} scale={0.542} >
        <meshStandardMaterial color='#f8161a' opacity={0.8} transparent emissive="#f8161a" emissiveIntensity={8} toneMapped={false} />
     </mesh>
     <mesh geometry={nodes['Abfahrt-10'].geometry} material={materials['Material.009']} position={[-2111.764, 2941.232, 1629.646]} rotation={[-Math.PI, 1.439, -Math.PI]} scale={0.542} >
        <meshStandardMaterial color='#010103' opacity={0.8} transparent emissive="#010103" emissiveIntensity={8} toneMapped={false} />
     </mesh>
     <mesh geometry={nodes['Abfahrt-3'].geometry} material={materials['Material.012']} position={[2459.159, 1629.303, -1147.965]} rotation={[-Math.PI, 0.129, -Math.PI]} scale={0.542} >
        <meshStandardMaterial color='#f8161a' opacity={0.8} transparent emissive="#f8161a" emissiveIntensity={8} toneMapped={false} />
     </mesh>
   </group>
  )
}

useGLTF.preload(slopes)
// <meshBasicMaterial color='#0000FF' opacity={0.5} transparent />
