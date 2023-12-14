import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import easterEgg from "../../assets/gltf/easter-egg-transformed.glb"


export default function EasterEgg() {
  const { nodes, materials } = useGLTF(easterEgg)

  return (
    <group>
      <mesh geometry={nodes.santa.geometry} material={materials.PaletteMaterial001} position={[-1476.03, 2022.34, -1198.825]} rotation={[-0.045, -0.133, 3.039]} scale={28.374} />
      <mesh geometry={nodes.snowman.geometry} material={materials.PaletteMaterial002} position={[-1489.641, 2026.327, -1213.691]} rotation={[-2.982, -0.433, -3.055]} scale={2} />
    </group>
  )
}

useGLTF.preload(easterEgg)
