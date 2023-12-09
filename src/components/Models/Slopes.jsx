import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import slopes from "../../assets/gltf/slopes/slopes-transformed.glb";
import {  useSelector } from 'react-redux';


export default function Slopes(props) {

  const slope = useSelector((state) => state.slopesActive.value);

  const { nodes, materials } = useGLTF(slopes)

   const BLUE_SLOPE_MATERIAL = <meshStandardMaterial color='#0c6eb4' opacity={0.8} transparent emissive="#0d3572" emissiveIntensity={8} toneMapped={false} />
   const RED_SLOPE_MATERIAL = <meshStandardMaterial color='#e4021c' opacity={0.8} transparent emissive="#f8161a" emissiveIntensity={8} toneMapped={false} />
   const YELLOW_SLOPE_MATERIAL = <meshStandardMaterial color='#fcea04' opacity={0.8} transparent emissive="#f8161a" emissiveIntensity={8} toneMapped={false} />
   const BLACK_SLOPE_MATERIAL = <meshStandardMaterial depthWrite={false} color='#000000' opacity={0.8} transparent emissive="#010103" emissiveIntensity={8} toneMapped={false} />

   const moveUp = 5; // to remove z-fighting

  return (
   <group position={[0,0 + moveUp,0]} {...props} dispose={null}>
      {slope.includes("Schwarz") ? (
            <group name="black-slopes">
            <mesh name="slope-9" geometry={nodes['slope-9'].geometry} material={nodes['slope-9'].material} position={[-599.927, 2481.36, 886.121]} rotation={[0, 1.078, 0]} >
              { BLACK_SLOPE_MATERIAL }
            </mesh>
            <mesh name="slope-10" geometry={nodes['slope-10'].geometry} material={nodes['slope-10'].material} position={[-1726.256, 2595.291, 1278.754]} rotation={[0, 1.078, 0]} >
              { BLACK_SLOPE_MATERIAL }
            </mesh>
            <mesh name="slope-12" geometry={nodes['slope-12'].geometry} material={nodes['slope-12'].material} position={[-780.699, 2481.467, 974.611]} rotation={[0, 1.078, 0]} >
              { BLACK_SLOPE_MATERIAL }
            </mesh>
            <mesh name="slope-14" geometry={nodes['slope-14'].geometry} material={nodes['slope-14'].material} position={[135.335, 2258.611, 328.573]} rotation={[0, 1.078, 0]} >
              { BLACK_SLOPE_MATERIAL }
            </mesh>
            <mesh name="slope-16" geometry={nodes['slope-16'].geometry} material={nodes['slope-16'].material} position={[1210.173, 2001.254, 472.02]} rotation={[0, 1.078, 0]} >
              { BLACK_SLOPE_MATERIAL }
            </mesh>
            <mesh name="slope-17" geometry={nodes['slope-17'].geometry} material={nodes['slope-17'].material} position={[576.66, 2284.289, -59.193]} rotation={[0, 1.078, 0]} >
              { BLACK_SLOPE_MATERIAL }
            </mesh>
            <mesh name="slope-21" geometry={nodes['slope-21'].geometry} material={nodes['slope-21'].material} position={[1418.846, 1808.084, 1433.175]} rotation={[0, 1.078, 0]} >
              { BLACK_SLOPE_MATERIAL }
            </mesh>
            <mesh name="slope-inferno" geometry={nodes['slope-inferno'].geometry} material={nodes['slope-inferno'].material} position={[-647.795, 2445.253, 408.311]} rotation={[0, 1.078, 0]} >
              { BLACK_SLOPE_MATERIAL }
            </mesh>
          </group>  
          ) :""}
     
     {slope.includes("Gelb") ? (
      <group name="yelllow-slopes">
        <mesh name="slope-27" geometry={nodes['slope-27'].geometry} material={nodes['slope-27'].material} position={[844.627, 1793.474, 2268.418]} rotation={[0, 1.078, 0]} >
          { YELLOW_SLOPE_MATERIAL }
        </mesh>
        <mesh name="slope-finel" geometry={nodes['slope-finel'].geometry} material={nodes['slope-finel'].material} position={[1374.516, 1869.451, 1642.696]} rotation={[0, 1.078, 0]} >
          { YELLOW_SLOPE_MATERIAL }
        </mesh>
      </group>
    ) :""}
    {slope.includes("Rot") ? (
      <group name="yelllow-slopes">
        <mesh name="slope-1" geometry={nodes['slope-1'].geometry} material={nodes['slope-1'].material} position={[2188.16, 1774.553, -143.673]} rotation={[0, 1.078, 0]} >
          { RED_SLOPE_MATERIAL }
        </mesh>
        <mesh name="slope-3" geometry={nodes['slope-3'].geometry} material={nodes['slope-3'].material} position={[2311.795, 1274.006, -2798.783]} rotation={[0, 1.078, 0]} >
          { RED_SLOPE_MATERIAL }
        </mesh>
        <mesh name="slope-5" geometry={nodes['slope-5'].geometry} material={nodes['slope-5'].material} position={[2188.886, 1741.278, 700.105]} rotation={[0, 1.078, 0]} >
          { RED_SLOPE_MATERIAL }
        </mesh>
        <mesh name="slope-13" geometry={nodes['slope-13'].geometry} material={nodes['slope-13'].material} position={[15.422, 2269.788, 406.245]} rotation={[0, 1.078, 0]} >
          { RED_SLOPE_MATERIAL }
        </mesh>
        <mesh name="slope-15" geometry={nodes['slope-15'].geometry} material={nodes['slope-15'].material} position={[526.266, 2256.403, 142.729]} rotation={[0, 1.078, 0]} >
          { RED_SLOPE_MATERIAL }
        </mesh>
        <mesh name="slope-22" geometry={nodes['slope-22'].geometry} material={nodes['slope-22'].material} position={[1120.861, 1808.589, 1298.642]} rotation={[0, 1.078, 0]} >
          { RED_SLOPE_MATERIAL }
        </mesh>
        <mesh name="slope-24" geometry={nodes['slope-24'].geometry} material={nodes['slope-24'].material} position={[929.924, 1882.627, 2044.65]} rotation={[0, 1.078, 0]} >
          { RED_SLOPE_MATERIAL }
        </mesh>
        <mesh name="slope-25" geometry={nodes['slope-25'].geometry} material={nodes['slope-25'].material} position={[1505.302, 1788.034, 1801.27]} rotation={[0, 1.078, 0]} >
          { RED_SLOPE_MATERIAL }
        </mesh>
        <mesh name="slope-26" geometry={nodes['slope-26'].geometry} material={nodes['slope-26'].material} position={[1651.508, 1685.584, 1979.709]} rotation={[0, 1.078, 0]} >
          { RED_SLOPE_MATERIAL }
        </mesh>
      </group>
    ) :""}
    {slope.includes("Blau") ? (
      <group name="yelllow-slopes">
        <mesh name="slope-2" geometry={nodes['slope-2'].geometry} material={nodes['slope-2'].material} position={[2391.337, 1658.338, -414.322]} rotation={[0, 1.078, 0]} >
          { BLUE_SLOPE_MATERIAL }
        </mesh>
        <mesh name="slope-4" geometry={nodes['slope-4'].geometry} material={nodes['slope-4'].material} position={[1982.713, 1818.805, 363.415]} rotation={[0, 1.078, 0]} >
          { BLUE_SLOPE_MATERIAL }
        </mesh>
        <mesh name="slope-6" geometry={nodes['slope-6'].geometry} material={nodes['slope-6'].material} position={[1738.145, 1665.918, 1472.633]} rotation={[0, 1.078, 0]} >
          { BLUE_SLOPE_MATERIAL }
        </mesh>
        <mesh name="slope-7" geometry={nodes['slope-7'].geometry} material={nodes['slope-7'].material} position={[1541.271, 1744.299, 1169.914]} rotation={[0, 1.078, 0]} >
          { BLUE_SLOPE_MATERIAL }
        </mesh>
        <mesh name="slope-8" geometry={nodes['slope-8'].geometry} material={nodes['slope-8'].material} position={[-220.102, 2355.949, 294.359]} rotation={[0, 1.078, 0]} >
          { BLUE_SLOPE_MATERIAL }
        </mesh>
        <mesh name="slope-20" geometry={nodes['slope-20'].geometry} material={nodes['slope-20'].material} position={[769.058, 1857.64, 1181.604]} rotation={[0, 1.078, 0]} >
          { BLUE_SLOPE_MATERIAL }
        </mesh>
        <mesh name="slope-23" geometry={nodes['slope-23'].geometry} material={nodes['slope-23'].material} position={[989.343, 1909.422, 1866.41]} rotation={[0, 1.078, 0]} >
          { BLUE_SLOPE_MATERIAL }
        </mesh>
        <mesh name="slope-11" geometry={nodes['slope-11'].geometry} material={nodes['slope-11'].material} position={[-966.101, 2486.136, 966.423]} rotation={[0, 1.078, 0]} >
          { BLUE_SLOPE_MATERIAL }
        </mesh>
      </group>
       ) :""}
    </group>
  )
}

useGLTF.preload(slopes)
