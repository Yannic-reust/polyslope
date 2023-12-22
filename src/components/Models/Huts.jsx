import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import hutsGimmelwald from "../../assets/gltf/huts/huts_gimmelwald-transformed.glb"
import hutsMuerren from "../../assets/gltf/huts/huts_muerren-transformed.glb"
import hutsValley from "../../assets/gltf/huts/huts_valley-transformed.glb"
import hutsLauterbrunnen from "../../assets/gltf/huts/huts_lauterbrunnen-transformed.glb"
import hutsStechelberg from "../../assets/gltf/huts/huts_stechelberg-transformed.glb"
import { Html } from "@react-three/drei"
import ToolTipHuts from '../ToolTips/ToolTipHuts';

export default function Huts({allowShadow}) {
  const { nodes: nodesGimmelwald, materials } = useGLTF(hutsGimmelwald)
  const { nodes: nodesMuerren } = useGLTF(hutsMuerren)
  const { nodes: nodesValley } = useGLTF(hutsValley)
  const { nodes: nodesLauterbrunnen } = useGLTF(hutsLauterbrunnen)
  const { nodes: nodesStechelberg } = useGLTF(hutsStechelberg)
  const hutsShadow = allowShadow.buldings;

  return (
    <group dispose={null}>
      <group name="gimmelwald" position={[2046.596, 1368.151, 2825.399]}>
        <Html >
          <ToolTipHuts name={"Gimmelwald"} />
        </Html>
        <instancedMesh castShadow={hutsShadow} receiveShadow={false} args={[nodesGimmelwald['hut-mesh'].geometry, materials.PaletteMaterial001, 33]} instanceMatrix={nodesGimmelwald['hut-mesh'].instanceMatrix} />
        <instancedMesh castShadow={hutsShadow} receiveShadow={false} args={[nodesGimmelwald['hut-mesh_1'].geometry, materials.PaletteMaterial001, 33]} instanceMatrix={nodesGimmelwald['hut-mesh_1'].instanceMatrix} />
        <instancedMesh castShadow={hutsShadow} receiveShadow={false} args={[nodesGimmelwald['hut-mesh_2'].geometry, materials.PaletteMaterial001, 33]} instanceMatrix={nodesGimmelwald['hut-mesh_2'].instanceMatrix} />
        <instancedMesh castShadow={hutsShadow} receiveShadow={false} args={[nodesGimmelwald['hut-mesh_3'].geometry, materials.PaletteMaterial001, 33]} instanceMatrix={nodesGimmelwald['hut-mesh_3'].instanceMatrix} />
        <instancedMesh castShadow={hutsShadow} receiveShadow={false} args={[nodesGimmelwald['hut-mesh_4'].geometry, materials.PaletteMaterial001, 33]} instanceMatrix={nodesGimmelwald['hut-mesh_4'].instanceMatrix} />
        <instancedMesh castShadow={hutsShadow} receiveShadow={false} args={[nodesGimmelwald['hut-mesh_5'].geometry, materials.PaletteMaterial001, 33]} instanceMatrix={nodesGimmelwald['hut-mesh_5'].instanceMatrix} />
      </group>

      <group name="muerren" position={[2105.647, 1613.495, 1378.599]}>
        <Html >
          <ToolTipHuts name={"Mürren"} />
        </Html>
        <instancedMesh castShadow={hutsShadow} receiveShadow={false} args={[nodesMuerren['hut-mesh'].geometry, materials.PaletteMaterial001, 24]} name="hut-mesh" instanceMatrix={nodesMuerren['hut-mesh'].instanceMatrix} />
        <instancedMesh castShadow={hutsShadow} receiveShadow={false} args={[nodesMuerren['hut-mesh_1'].geometry, materials.PaletteMaterial001, 24]} name="hut-mesh_1" instanceMatrix={nodesMuerren['hut-mesh_1'].instanceMatrix} />
        <instancedMesh castShadow={hutsShadow} receiveShadow={false} args={[nodesMuerren['hut-mesh_2'].geometry, materials.PaletteMaterial001, 24]} name="hut-mesh_2" instanceMatrix={nodesMuerren['hut-mesh_2'].instanceMatrix} />
        <instancedMesh castShadow={hutsShadow} receiveShadow={false} args={[nodesMuerren['hut-mesh_3'].geometry, materials.PaletteMaterial001, 24]} name="hut-mesh_3" instanceMatrix={nodesMuerren['hut-mesh_3'].instanceMatrix} />
        <instancedMesh castShadow={hutsShadow} receiveShadow={false} args={[nodesMuerren['hut-mesh_4'].geometry, materials.PaletteMaterial001, 24]} name="hut-mesh_4" instanceMatrix={nodesMuerren['hut-mesh_4'].instanceMatrix} />
        <instancedMesh castShadow={hutsShadow} receiveShadow={false} args={[nodesMuerren['hut-mesh_5'].geometry, materials.PaletteMaterial001, 24]} name="hut-mesh_5" instanceMatrix={nodesMuerren['hut-mesh_5'].instanceMatrix} />
      </group>

      <group name="lauterbrunnen" position={[3531.484, 761.98, -2131.687]}>
        <Html >
          <ToolTipHuts name={"Lauterbrunnen"} />
        </Html>
        <instancedMesh castShadow={hutsShadow} receiveShadow={false} args={[nodesLauterbrunnen['hut-mesh'].geometry, materials.PaletteMaterial001, 27]} name="hut-mesh" instanceMatrix={nodesLauterbrunnen['hut-mesh'].instanceMatrix} />
        <instancedMesh castShadow={hutsShadow} receiveShadow={false} args={[nodesLauterbrunnen['hut-mesh_1'].geometry, materials.PaletteMaterial001, 27]} name="hut-mesh_1" instanceMatrix={nodesLauterbrunnen['hut-mesh_1'].instanceMatrix} />
        <instancedMesh castShadow={hutsShadow} receiveShadow={false} args={[nodesLauterbrunnen['hut-mesh_2'].geometry, materials.PaletteMaterial001, 27]} name="hut-mesh_2" instanceMatrix={nodesLauterbrunnen['hut-mesh_2'].instanceMatrix} />
        <instancedMesh castShadow={hutsShadow} receiveShadow={false} args={[nodesLauterbrunnen['hut-mesh_3'].geometry, materials.PaletteMaterial001, 27]} name="hut-mesh_3" instanceMatrix={nodesLauterbrunnen['hut-mesh_3'].instanceMatrix} />
        <instancedMesh castShadow={hutsShadow} receiveShadow={false} args={[nodesLauterbrunnen['hut-mesh_4'].geometry, materials.PaletteMaterial001, 27]} name="hut-mesh_4" instanceMatrix={nodesLauterbrunnen['hut-mesh_4'].instanceMatrix} />
        <instancedMesh castShadow={hutsShadow} receiveShadow={false} args={[nodesLauterbrunnen['hut-mesh_5'].geometry, materials.PaletteMaterial001, 27]} name="hut-mesh_5" instanceMatrix={nodesLauterbrunnen['hut-mesh_5'].instanceMatrix} />
      </group>

      <group name="stechelberg" position={[2904.081, 825.909, 2027.938]}>
        <Html >
          <ToolTipHuts name={"Stechelberg"} />
        </Html>
        <instancedMesh castShadow={hutsShadow} receiveShadow={false} args={[nodesStechelberg['hut-mesh'].geometry, materials.PaletteMaterial001, 20]} name="hut-mesh" instanceMatrix={nodesStechelberg['hut-mesh'].instanceMatrix} />
        <instancedMesh castShadow={hutsShadow} receiveShadow={false} args={[nodesStechelberg['hut-mesh_1'].geometry, materials.PaletteMaterial001, 20]} name="hut-mesh_1" instanceMatrix={nodesStechelberg['hut-mesh_1'].instanceMatrix} />
        <instancedMesh castShadow={hutsShadow} receiveShadow={false} args={[nodesStechelberg['hut-mesh_2'].geometry, materials.PaletteMaterial001, 20]} name="hut-mesh_2" instanceMatrix={nodesStechelberg['hut-mesh_2'].instanceMatrix} />
        <instancedMesh castShadow={hutsShadow} receiveShadow={false} args={[nodesStechelberg['hut-mesh_3'].geometry, materials.PaletteMaterial001, 20]} name="hut-mesh_3" instanceMatrix={nodesStechelberg['hut-mesh_3'].instanceMatrix} />
        <instancedMesh castShadow={hutsShadow} receiveShadow={false} args={[nodesStechelberg['hut-mesh_4'].geometry, materials.PaletteMaterial001, 20]} name="hut-mesh_4" instanceMatrix={nodesStechelberg['hut-mesh_4'].instanceMatrix} />
        <instancedMesh castShadow={hutsShadow} receiveShadow={false} args={[nodesStechelberg['hut-mesh_5'].geometry, materials.PaletteMaterial001, 20]} name="hut-mesh_5" instanceMatrix={nodesStechelberg['hut-mesh_5'].instanceMatrix} />
      </group>

      <group name="valley" position={[3521.734, 795.864, -59.887]}>
        <instancedMesh castShadow={hutsShadow} receiveShadow={false} args={[nodesValley['hut-mesh'].geometry, materials.PaletteMaterial001, 24]} name="hut-mesh" instanceMatrix={nodesValley['hut-mesh'].instanceMatrix} />
        <instancedMesh castShadow={hutsShadow} receiveShadow={false} args={[nodesValley['hut-mesh_1'].geometry, materials.PaletteMaterial001, 24]} name="hut-mesh_1" instanceMatrix={nodesValley['hut-mesh_1'].instanceMatrix} />
        <instancedMesh castShadow={hutsShadow} receiveShadow={false} args={[nodesValley['hut-mesh_2'].geometry, materials.PaletteMaterial001, 24]} name="hut-mesh_2" instanceMatrix={nodesValley['hut-mesh_2'].instanceMatrix} />
        <instancedMesh castShadow={hutsShadow} receiveShadow={false} args={[nodesValley['hut-mesh_3'].geometry, materials.PaletteMaterial001, 24]} name="hut-mesh_3" instanceMatrix={nodesValley['hut-mesh_3'].instanceMatrix} />
        <instancedMesh castShadow={hutsShadow} receiveShadow={false} args={[nodesValley['hut-mesh_4'].geometry, materials.PaletteMaterial001, 24]} name="hut-mesh_4" instanceMatrix={nodesValley['hut-mesh_4'].instanceMatrix} />
        <instancedMesh castShadow={hutsShadow} receiveShadow={false} args={[nodesValley['hut-mesh_5'].geometry, materials.PaletteMaterial001, 24]} name="hut-mesh_5" instanceMatrix={nodesValley['hut-mesh_5'].instanceMatrix} />
      </group>
      
    </group>
  )
}

useGLTF.preload([hutsGimmelwald, hutsMuerren, hutsValley])
