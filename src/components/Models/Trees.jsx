import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import trees from "../../assets/gltf/trees-transformed.glb";

export default function Trees({ allowShadow }) {
  const treeShadow = allowShadow.trees;
  const { nodes, materials } = useGLTF(trees);
  return (
    <group dispose={null}>
      <instancedMesh
        args={[
          nodes.SM_Tree_fir001.geometry,
          materials["dark_green.008"],
          3334,
        ]}
        receiveShadow={false}
        castShadow={treeShadow}
        instanceMatrix={nodes.SM_Tree_fir001.instanceMatrix}
      />
      <instancedMesh
        args={[
          nodes.SM_Tree_fir001_1.geometry,
          materials["wood_dark.006"],
          3334,
        ]}
        receiveShadow={treeShadow}
        castShadow={treeShadow}
        instanceMatrix={nodes.SM_Tree_fir001_1.instanceMatrix}
      />
    </group>
  );
}

useGLTF.preload(trees);
