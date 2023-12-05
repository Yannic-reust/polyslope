import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import slopes from "../../assets/gltf/slopes/slopes-transformed.glb";

export default function Slopes(props) {
   const { nodes, materials } = useGLTF(slopes)

   const BLUE_SLOPE_MATERIAL = <meshStandardMaterial color='#0c6eb4' opacity={0.8} transparent emissive="#0d3572" emissiveIntensity={8} toneMapped={false} />
   const RED_SLOPE_MATERIAL = <meshStandardMaterial color='#e4021c' opacity={0.8} transparent emissive="#f8161a" emissiveIntensity={8} toneMapped={false} />
   const YELLOW_SLOPE_MATERIAL = <meshStandardMaterial color='#fcea04' opacity={0.8} transparent emissive="#f8161a" emissiveIntensity={8} toneMapped={false} />
   const BLACK_SLOPE_MATERIAL = <meshStandardMaterial depthWrite={false} color='#000000' opacity={0.8} transparent emissive="#010103" emissiveIntensity={8} toneMapped={false} />

   const moveUp = 5; // to remove z-fighting

  return (
   <group position={[0,0 + moveUp,0]} {...props} dispose={null}>
      <mesh name="slope-9" geometry={nodes['slope-9'].geometry} material={nodes['slope-9'].material} position={[917.82, 3483.2, 4437.9]} rotation={[0, 1.078, 0]}>
        { BLACK_SLOPE_MATERIAL }
      </mesh>
      <mesh name="slope-10" geometry={nodes['slope-10'].geometry} material={nodes['slope-10'].material} position={[917.82, 3483.2, 4437.9]} rotation={[0, 1.078, 0]} >
        { BLACK_SLOPE_MATERIAL }
      </mesh>
      <mesh name="slope-12" geometry={nodes['slope-12'].geometry} material={nodes['slope-12'].material} position={[917.82, 3483.2, 4437.9]} rotation={[0, 1.078, 0]} >
        { BLACK_SLOPE_MATERIAL }
      </mesh>
      <mesh name="slope-14" geometry={nodes['slope-14'].geometry} material={nodes['slope-14'].material} position={[917.82, 3483.2, 4437.9]} rotation={[0, 1.078, 0]} >
        { BLACK_SLOPE_MATERIAL }
      </mesh>
      <mesh name="slope-16" geometry={nodes['slope-16'].geometry} material={nodes['slope-16'].material} position={[917.82, 3483.2, 4437.9]} rotation={[0, 1.078, 0]} >
        { BLACK_SLOPE_MATERIAL }
      </mesh>
      <mesh name="slope-17" geometry={nodes['slope-17'].geometry} material={nodes['slope-17'].material} position={[917.82, 3483.2, 4437.9]} rotation={[0, 1.078, 0]} >
        { BLACK_SLOPE_MATERIAL }
      </mesh>
      <mesh name="slope-21" geometry={nodes['slope-21'].geometry} material={nodes['slope-21'].material} position={[917.82, 3483.2, 4437.9]} rotation={[0, 1.078, 0]} >
        { BLACK_SLOPE_MATERIAL }
      </mesh>
      <mesh name="slope-27" geometry={nodes['slope-27'].geometry} material={nodes['slope-27'].material} position={[917.82, 3483.2, 4437.9]} rotation={[0, 1.078, 0]} >
        { YELLOW_SLOPE_MATERIAL }
      </mesh>
      <mesh name="slope-finel" geometry={nodes['slope-finel'].geometry} material={nodes['slope-finel'].material} position={[917.82, 3483.2, 4437.9]} rotation={[0, 1.078, 0]} >
        { YELLOW_SLOPE_MATERIAL }
      </mesh>
      <mesh name="slope-1" geometry={nodes['slope-1'].geometry} material={nodes['slope-1'].material} position={[917.82, 3483.2, 4437.9]} rotation={[0, 1.078, 0]} >
        { RED_SLOPE_MATERIAL }
      </mesh>
      <mesh name="slope-3" geometry={nodes['slope-3'].geometry} material={nodes['slope-3'].material} position={[917.82, 3483.2, 4437.9]} rotation={[0, 1.078, 0]} >
        { RED_SLOPE_MATERIAL }
      </mesh>
      <mesh name="slope-5" geometry={nodes['slope-5'].geometry} material={nodes['slope-5'].material} position={[917.82, 3483.2, 4437.9]} rotation={[0, 1.078, 0]} >
        { RED_SLOPE_MATERIAL }
      </mesh>
      <mesh name="slope-13" geometry={nodes['slope-13'].geometry} material={nodes['slope-13'].material} position={[917.82, 3483.2, 4437.9]} rotation={[0, 1.078, 0]} >
        { RED_SLOPE_MATERIAL }
      </mesh>
      <mesh name="slope-15" geometry={nodes['slope-15'].geometry} material={nodes['slope-15'].material} position={[917.82, 3483.2, 4437.9]} rotation={[0, 1.078, 0]} >
        { RED_SLOPE_MATERIAL }
      </mesh>
      <mesh name="slope-22" geometry={nodes['slope-22'].geometry} material={nodes['slope-22'].material} position={[917.82, 3483.2, 4437.9]} rotation={[0, 1.078, 0]} >
        { RED_SLOPE_MATERIAL }
      </mesh>
      <mesh name="slope-24" geometry={nodes['slope-24'].geometry} material={nodes['slope-24'].material} position={[917.82, 3483.2, 4437.9]} rotation={[0, 1.078, 0]} >
        { RED_SLOPE_MATERIAL }
      </mesh>
      <mesh name="slope-25" geometry={nodes['slope-25'].geometry} material={nodes['slope-25'].material} position={[917.82, 3483.2, 4437.9]} rotation={[0, 1.078, 0]} >
        { RED_SLOPE_MATERIAL }
      </mesh>
      <mesh name="slope-26" geometry={nodes['slope-26'].geometry} material={nodes['slope-26'].material} position={[917.82, 3483.2, 4437.9]} rotation={[0, 1.078, 0]} >
        { RED_SLOPE_MATERIAL }
      </mesh>
      <mesh name="slope-2" geometry={nodes['slope-2'].geometry} material={materials['SVGMat.002']} position={[917.82, 3483.2, 4437.9]} rotation={[0, 1.078, 0]} >
        { BLUE_SLOPE_MATERIAL }
      </mesh>
      <mesh name="slope-4" geometry={nodes['slope-4'].geometry} material={nodes['slope-4'].material} position={[917.82, 3483.2, 4437.9]} rotation={[0, 1.078, 0]} >
        { BLUE_SLOPE_MATERIAL }
      </mesh>
      <mesh name="slope-6" geometry={nodes['slope-6'].geometry} material={nodes['slope-6'].material} position={[917.82, 3483.2, 4437.9]} rotation={[0, 1.078, 0]} >
        { BLUE_SLOPE_MATERIAL }
      </mesh>
      <mesh name="slope-7" geometry={nodes['slope-7'].geometry} material={nodes['slope-7'].material} position={[917.82, 3483.2, 4437.9]} rotation={[0, 1.078, 0]} >
        { BLUE_SLOPE_MATERIAL }
      </mesh>
      <mesh name="slope-8" geometry={nodes['slope-8'].geometry} material={nodes['slope-8'].material} position={[917.82, 3483.2, 4437.9]} rotation={[0, 1.078, 0]} >
        { BLUE_SLOPE_MATERIAL }
      </mesh>
      <mesh name="slope-20" geometry={nodes['slope-20'].geometry} material={nodes['slope-20'].material} position={[917.82, 3483.2, 4437.9]} rotation={[0, 1.078, 0]} >
        { BLUE_SLOPE_MATERIAL }
      </mesh>
      <mesh name="slope-23" geometry={nodes['slope-23'].geometry} material={nodes['slope-23'].material} position={[917.82, 3483.2, 4437.9]} rotation={[0, 1.078, 0]} >
        { BLUE_SLOPE_MATERIAL }
      </mesh>
      <mesh name="slope-11" geometry={nodes['slope-11'].geometry} material={nodes['slope-11'].material} position={[917.82, 3483.2, 4437.9]} rotation={[0, 1.078, 0]} >
        { BLUE_SLOPE_MATERIAL }
      </mesh>
    </group>
  )
}

useGLTF.preload(slopes)
// <meshBasicMaterial color='#0000FF' opacity={0.5} transparent />
