import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import trees from "../../assets/gltf/treesCut-transformed.glb";

export default function Trees(props) {
  const { nodes, materials } = useGLTF(trees)
  return (
    <group {...props} dispose={null}>
      <instancedMesh args={[nodes.SM_Tree_fir001.geometry, materials['dark_green.008'], 3464]} instanceMatrix={nodes.SM_Tree_fir001.instanceMatrix} />
      <instancedMesh args={[nodes.SM_Tree_fir001_1.geometry, materials['wood_dark.006'], 3464]} instanceMatrix={nodes.SM_Tree_fir001_1.instanceMatrix} />
    </group>
  )
}

useGLTF.preload(trees)
