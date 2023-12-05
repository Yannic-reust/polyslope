import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import hutsGimmelwald from "../../assets/gltf/huts/huts-gimmelwald-transformed.glb"
import hutsMuerren from "../../assets/gltf/huts/huts-muerren-transformed.glb"
import hutsValley from "../../assets/gltf/huts/huts-valley-transformed.glb"

export default function Huts(props) {
  const { nodes: nodesGimmelwald, materials } = useGLTF(hutsGimmelwald)
  const { nodes: nodesMuerren } = useGLTF(hutsMuerren)
  const { nodes: nodesValley } = useGLTF(hutsValley)

  return (
    <group {...props} dispose={null}>
      <group {...props} dispose={null}>
        <instancedMesh args={[nodesGimmelwald['hut-mesh'].geometry, materials.PaletteMaterial001, 33]} instanceMatrix={nodesGimmelwald['hut-mesh'].instanceMatrix} />
        <instancedMesh args={[nodesGimmelwald['hut-mesh_1'].geometry, materials.PaletteMaterial001, 33]} instanceMatrix={nodesGimmelwald['hut-mesh_1'].instanceMatrix} />
        <instancedMesh args={[nodesGimmelwald['hut-mesh_2'].geometry, materials.PaletteMaterial001, 33]} instanceMatrix={nodesGimmelwald['hut-mesh_2'].instanceMatrix} />
        <instancedMesh args={[nodesGimmelwald['hut-mesh_3'].geometry, materials.PaletteMaterial001, 33]} instanceMatrix={nodesGimmelwald['hut-mesh_3'].instanceMatrix} />
        <instancedMesh args={[nodesGimmelwald['hut-mesh_4'].geometry, materials.PaletteMaterial001, 33]} instanceMatrix={nodesGimmelwald['hut-mesh_4'].instanceMatrix} />
        <instancedMesh args={[nodesGimmelwald['hut-mesh_5'].geometry, materials.PaletteMaterial001, 33]} instanceMatrix={nodesGimmelwald['hut-mesh_5'].instanceMatrix} />
      </group>

      <group {...props} dispose={null}>
        <instancedMesh args={[nodesMuerren['hut-mesh'].geometry, materials.PaletteMaterial001, 25]} instanceMatrix={nodesMuerren['hut-mesh'].instanceMatrix} />
        <instancedMesh args={[nodesMuerren['hut-mesh_1'].geometry, materials.PaletteMaterial001, 25]} instanceMatrix={nodesMuerren['hut-mesh_1'].instanceMatrix} />
        <instancedMesh args={[nodesMuerren['hut-mesh_2'].geometry, materials.PaletteMaterial001, 25]} instanceMatrix={nodesMuerren['hut-mesh_2'].instanceMatrix} />
        <instancedMesh args={[nodesMuerren['hut-mesh_3'].geometry, materials.PaletteMaterial001, 25]} instanceMatrix={nodesMuerren['hut-mesh_3'].instanceMatrix} />
        <instancedMesh args={[nodesMuerren['hut-mesh_4'].geometry, materials.PaletteMaterial001, 25]} instanceMatrix={nodesMuerren['hut-mesh_4'].instanceMatrix} />
        <instancedMesh args={[nodesMuerren['hut-mesh_5'].geometry, materials.PaletteMaterial001, 25]} instanceMatrix={nodesMuerren['hut-mesh_5'].instanceMatrix} />
      </group>

      <group {...props} dispose={null}>
        <instancedMesh args={[nodesValley['hut-mesh'].geometry, materials.PaletteMaterial001, 61]} instanceMatrix={nodesValley['hut-mesh'].instanceMatrix} />
        <instancedMesh args={[nodesValley['hut-mesh_1'].geometry, materials.PaletteMaterial001, 61]} instanceMatrix={nodesValley['hut-mesh_1'].instanceMatrix} />
        <instancedMesh args={[nodesValley['hut-mesh_2'].geometry, materials.PaletteMaterial001, 61]} instanceMatrix={nodesValley['hut-mesh_2'].instanceMatrix} />
        <instancedMesh args={[nodesValley['hut-mesh_3'].geometry, materials.PaletteMaterial001, 61]} instanceMatrix={nodesValley['hut-mesh_3'].instanceMatrix} />
        <instancedMesh args={[nodesValley['hut-mesh_4'].geometry, materials.PaletteMaterial001, 61]} instanceMatrix={nodesValley['hut-mesh_4'].instanceMatrix} />
        <instancedMesh args={[nodesValley['hut-mesh_5'].geometry, materials.PaletteMaterial001, 61]} instanceMatrix={nodesValley['hut-mesh_5'].instanceMatrix} />
      </group>
      

    </group>
  )
}

useGLTF.preload([hutsGimmelwald, hutsMuerren, hutsValley])
