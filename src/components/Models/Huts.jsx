import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import hutsGimmelwald from "../../assets/gltf/huts/huts_gimmelwald-transformed.glb"
import hutsMuerren from "../../assets/gltf/huts/huts_muerren-transformed.glb"
import hutsValley from "../../assets/gltf/huts/huts_valley-transformed.glb"
import { Html } from "@react-three/drei"
import ToolTipHuts from '../ToolTips/ToolTipHuts';

export default function Huts(props) {
  const { nodes: nodesGimmelwald, materials } = useGLTF(hutsGimmelwald)
  const { nodes: nodesMuerren } = useGLTF(hutsMuerren)
  const { nodes: nodesValley } = useGLTF(hutsValley)

  return (
    <group {...props} dispose={null}>
      <group name="gimmelwald" position={[2046.596, 1368.151, 2825.399]}>
        <Html >
          <ToolTipHuts name={"Gimmelwald"} />
        </Html>
        <instancedMesh args={[nodesGimmelwald['hut-mesh'].geometry, materials.PaletteMaterial001, 33]} instanceMatrix={nodesGimmelwald['hut-mesh'].instanceMatrix} />
        <instancedMesh args={[nodesGimmelwald['hut-mesh_1'].geometry, materials.PaletteMaterial001, 33]} instanceMatrix={nodesGimmelwald['hut-mesh_1'].instanceMatrix} />
        <instancedMesh args={[nodesGimmelwald['hut-mesh_2'].geometry, materials.PaletteMaterial001, 33]} instanceMatrix={nodesGimmelwald['hut-mesh_2'].instanceMatrix} />
        <instancedMesh args={[nodesGimmelwald['hut-mesh_3'].geometry, materials.PaletteMaterial001, 33]} instanceMatrix={nodesGimmelwald['hut-mesh_3'].instanceMatrix} />
        <instancedMesh args={[nodesGimmelwald['hut-mesh_4'].geometry, materials.PaletteMaterial001, 33]} instanceMatrix={nodesGimmelwald['hut-mesh_4'].instanceMatrix} />
        <instancedMesh args={[nodesGimmelwald['hut-mesh_5'].geometry, materials.PaletteMaterial001, 33]} instanceMatrix={nodesGimmelwald['hut-mesh_5'].instanceMatrix} />
      </group>

      <group name="muerren" position={[2105.647, 1613.495, 1378.599]}>
        <Html >
          <ToolTipHuts name={"Mürren"} />
        </Html>
        <instancedMesh args={[nodesMuerren['hut-mesh'].geometry, materials.PaletteMaterial001, 24]} name="hut-mesh" instanceMatrix={nodesMuerren['hut-mesh'].instanceMatrix} />
        <instancedMesh args={[nodesMuerren['hut-mesh_1'].geometry, materials.PaletteMaterial001, 24]} name="hut-mesh_1" instanceMatrix={nodesMuerren['hut-mesh_1'].instanceMatrix} />
        <instancedMesh args={[nodesMuerren['hut-mesh_2'].geometry, materials.PaletteMaterial001, 24]} name="hut-mesh_2" instanceMatrix={nodesMuerren['hut-mesh_2'].instanceMatrix} />
        <instancedMesh args={[nodesMuerren['hut-mesh_3'].geometry, materials.PaletteMaterial001, 24]} name="hut-mesh_3" instanceMatrix={nodesMuerren['hut-mesh_3'].instanceMatrix} />
        <instancedMesh args={[nodesMuerren['hut-mesh_4'].geometry, materials.PaletteMaterial001, 24]} name="hut-mesh_4" instanceMatrix={nodesMuerren['hut-mesh_4'].instanceMatrix} />
        <instancedMesh args={[nodesMuerren['hut-mesh_5'].geometry, materials.PaletteMaterial001, 24]} name="hut-mesh_5" instanceMatrix={nodesMuerren['hut-mesh_5'].instanceMatrix} />
      </group>

      <group name="valley" position={[3521.734, 795.864, -59.887]}>
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
