/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 trees.glb --instance 
Files: trees.glb [2.71MB] > trees-transformed.glb [429.68KB] (84%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/trees-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <instancedMesh args={[nodes.Cylinder001.geometry, materials['dark_green.002'], 10000]} instanceMatrix={nodes.Cylinder001.instanceMatrix} />
      <instancedMesh args={[nodes.Cylinder001_1.geometry, materials.wood_dark, 10000]} instanceMatrix={nodes.Cylinder001_1.instanceMatrix} />
    </group>
  )
}

useGLTF.preload('/trees-transformed.glb')
