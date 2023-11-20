import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import trees from "../../assets/gltf/trees-transformed.glb";

export default function Trees(props) {
  const { nodes, materials } = useGLTF(trees)
  return (
    <group {...props} dispose={null}>
      <instancedMesh args={[nodes.SM_Tree_fir003.geometry, materials['dark_green.008'], 6372]} instanceMatrix={nodes.SM_Tree_fir003.instanceMatrix} />
      <instancedMesh args={[nodes.SM_Tree_fir003_1.geometry, materials['wood_dark.006'], 6372]} instanceMatrix={nodes.SM_Tree_fir003_1.instanceMatrix} />
    </group>
  )
}

useGLTF.preload(trees)
