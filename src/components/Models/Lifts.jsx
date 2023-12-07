import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import lifts from "../../assets/gltf/lifts.glb";
import ToolTipLifts from '../ToolTips/ToolTipLifts';
import { Html } from "@react-three/drei"

export default function Lifts(props) {
  const { nodes, materials } = useGLTF(lifts)
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group name="Schiltgrad_Bottom" position={[2048.018, 1565.711, 1693.519]} rotation={[-3.097, 0.098, -2.971]} scale={2}>
          <mesh name="stop-mesh" geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
          <mesh name="stop-mesh_1" geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
          <mesh name="stop-mesh_2" geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
          <mesh name="stop-mesh_3" geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
        </group>
        <group name="Schiltgrad_Top" position={[701.796, 2054.045, 1605.136]} rotation={[0.107, -0.104, -0.159]} scale={2}>
          <mesh name="stop-mesh" geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
          <mesh name="stop-mesh_1" geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
          <mesh name="stop-mesh_2" geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
          <mesh name="stop-mesh_3" geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
        </group>
        <group name="Riggli_Bottom" position={[-41.572, 2317.061, 298.266]} rotation={[Math.PI, -0.977, -3.108]} scale={2}>
          <mesh name="stop-mesh" geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
          <mesh name="stop-mesh_1" geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
          <mesh name="stop-mesh_2" geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
          <mesh name="stop-mesh_3" geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
        </group>
        <group name="Rigli_Top" position={[-487.953, 2601.551, 1057.572]} rotation={[-0.323, 1.019, 0.046]} scale={2}>
          <mesh name="stop-mesh" geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
          <mesh name="stop-mesh_1" geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
          <mesh name="stop-mesh_2" geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
          <mesh name="stop-mesh_3" geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
        </group>
        <group name="Muttleren_Top" position={[76.33, 2386.673, 105.47]} rotation={[0, -0.976, 0.021]} scale={2}>
          <mesh name="stop-mesh" geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
          <mesh name="stop-mesh_1" geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
          <mesh name="stop-mesh_2" geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
          <mesh name="stop-mesh_3" geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
        </group>
        <group name="Muttleren_Bottom" position={[373.489, 2181.469, 538.972]} rotation={[Math.PI, 0.976, -3.054]} scale={2}>
          <mesh name="stop-mesh" geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
          <mesh name="stop-mesh_1" geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
          <mesh name="stop-mesh_2" geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
          <mesh name="stop-mesh_3" geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
        </group>
        <group name="Kandahar_Top" position={[100.007, 2382.367, 83.256]} rotation={[-0.088, -0.25, -0.111]} scale={2}>
          <mesh name="stop-mesh" geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
          <mesh name="stop-mesh_1" geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
          <mesh name="stop-mesh_2" geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
          <mesh name="stop-mesh_3" geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
        </group>
        <group name="Kandahar_Bottom" position={[1001.208, 2143.103, 321.718]} rotation={[3.139, 0.252, 3.1]} scale={2}>
          <mesh name="stop-mesh" geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
          <mesh name="stop-mesh_1" geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
          <mesh name="stop-mesh_2" geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
          <mesh name="stop-mesh_3" geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
        </group>
        <group name="Mürren-Allmendhubel_Top" position={[1983.225, 1849.808, 906.216]} rotation={[-0.024, -0.943, -0.247]} scale={2}>
          <mesh name="stop-mesh" geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
          <mesh name="stop-mesh_1" geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
          <mesh name="stop-mesh_2" geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
          <mesh name="stop-mesh_3" geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
        </group>
        <group name="Mürren-Allmendhubel_Bottom" position={[2230.921, 1600.285, 1249.275]} rotation={[3.134, 0.895, -2.998]} scale={2}>
          <Html >
            <ToolTipLifts LiftName="Mürren" OpeningHours="8:30 - 17:00" lastDescent="16:30"/>
          </Html>
          <mesh name="stop-mesh" geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
          <mesh name="stop-mesh_1" geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
          <mesh name="stop-mesh_2" geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
          <mesh name="stop-mesh_3" geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
        </group>
        <group name="Allmiboden_Bottom" position={[1916.639, 1754.8, 621.945]} rotation={[Math.PI, -0.964, Math.PI]} scale={2}>
          <mesh name="stop-mesh" geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
          <mesh name="stop-mesh_1" geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
          <mesh name="stop-mesh_2" geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
          <mesh name="stop-mesh_3" geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
        </group>
        <group name="Allmiboden_Top" position={[1790.382, 1864.06, 819.779]} rotation={[0, 0.964, -0.233]} scale={2}>
          <mesh name="stop-mesh" geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
          <mesh name="stop-mesh_1" geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
          <mesh name="stop-mesh_2" geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
          <mesh name="stop-mesh_3" geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
        </group>
        <group name="Maulerhubel_Bottom" position={[1961.015, 1753.676, 612.984]} rotation={[Math.PI, 1.333, -3.095]} scale={2}>
          <mesh name="stop-mesh" geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
          <mesh name="stop-mesh_1" geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
          <mesh name="stop-mesh_2" geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
          <mesh name="stop-mesh_3" geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
        </group>
        <group name="Maulerhubel_Top" position={[1837.027, 1883.949, 162.045]} rotation={[0.003, -1.318, -0.042]} scale={2}>
          <mesh name="stop-mesh" geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
          <mesh name="stop-mesh_1" geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
          <mesh name="stop-mesh_2" geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
          <mesh name="stop-mesh_3" geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
        </group>
        <group name="Winteregg_Bottom" position={[2428.935, 1527.802, -1052.782]} rotation={[Math.PI, -1.081, -3.042]} scale={2}>
          <mesh name="stop-mesh" geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
          <mesh name="stop-mesh_1" geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
          <mesh name="stop-mesh_2" geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
          <mesh name="stop-mesh_3" geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
        </group>
        <group name="Winteregg_Top" position={[1829.242, 1885.437, 108.63]} rotation={[0, 1.081, -0.237]} scale={2}>
          <mesh name="stop-mesh" geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
          <mesh name="stop-mesh_1" geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
          <mesh name="stop-mesh_2" geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
          <mesh name="stop-mesh_3" geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
        </group>
        <mesh name="Gimmeln_Bottom" geometry={nodes.Gimmeln_Bottom.geometry} material={materials['silver.003']} position={[1331.681, 1740.427, 2352.274]} rotation={[3.056, 0.764, -2.956]} scale={2} />
        <mesh name="Gimmeln_Top" geometry={nodes.Gimmeln_Top.geometry} material={materials['silver.003']} position={[663.148, 2048.893, 1663.077]} rotation={[0.186, -0.782, -0.225]} scale={2} />
        <mesh name="Allmendhubel_Bottom" geometry={nodes.Allmendhubel_Bottom.geometry} material={materials['silver.003']} position={[2039.175, 1831.076, 822.459]} rotation={[Math.PI, -0.078, Math.PI]} scale={2} />
        <mesh name="Allmendhubel_Top" geometry={nodes.Allmendhubel_Top.geometry} material={materials['silver.003']} position={[1787, 1874.823, 849.048]} rotation={[0, 0.078, 0]} scale={2} />
        <group name="Lauterbrunnen-Grütschalp_Bottom" position={[3296.839, 747.252, -3046.425]} rotation={[3.081, -0.246, -3.123]}>
          <mesh name="gondolastation-mesh" geometry={nodes['gondolastation-mesh'].geometry} material={materials.roof} />
          <mesh name="gondolastation-mesh_1" geometry={nodes['gondolastation-mesh_1'].geometry} material={materials['white.001']} />
          <mesh name="gondolastation-mesh_2" geometry={nodes['gondolastation-mesh_2'].geometry} material={materials.glass} />
          <mesh name="gondolastation-mesh_3" geometry={nodes['gondolastation-mesh_3'].geometry} material={materials.sliver} />
        </group>
        <group name="Lauterbrunnen-Grütschalp_Top" position={[2040.457, 1434.447, -2755.003]} rotation={[-0.009, 0.214, 0.036]}>
          <mesh name="gondolastation-mesh" geometry={nodes['gondolastation-mesh'].geometry} material={materials.roof} />
          <mesh name="gondolastation-mesh_1" geometry={nodes['gondolastation-mesh_1'].geometry} material={materials['white.001']} />
          <mesh name="gondolastation-mesh_2" geometry={nodes['gondolastation-mesh_2'].geometry} material={materials.glass} />
          <mesh name="gondolastation-mesh_3" geometry={nodes['gondolastation-mesh_3'].geometry} material={materials.sliver} />
        </group>
        <group name="Stechelberg-Mürren_Bottom" position={[2907.146, 812.155, 1845.948]} rotation={[Math.PI, -0.967, Math.PI]}>
          <mesh name="gondolastation-mesh" geometry={nodes['gondolastation-mesh'].geometry} material={materials.roof} />
          <mesh name="gondolastation-mesh_1" geometry={nodes['gondolastation-mesh_1'].geometry} material={materials['white.001']} />
          <mesh name="gondolastation-mesh_2" geometry={nodes['gondolastation-mesh_2'].geometry} material={materials.glass} />
          <mesh name="gondolastation-mesh_3" geometry={nodes['gondolastation-mesh_3'].geometry} material={materials.sliver} />
        </group>
        <group name="Stechelberg-Mürren_Middle-1" position={[2289.806, 1312.29, 2730.488]} rotation={[0.251, 0.934, -0.323]}>
          <mesh name="gondolastation-mesh" geometry={nodes['gondolastation-mesh'].geometry} material={materials.roof} />
          <mesh name="gondolastation-mesh_1" geometry={nodes['gondolastation-mesh_1'].geometry} material={materials['white.001']} />
          <mesh name="gondolastation-mesh_2" geometry={nodes['gondolastation-mesh_2'].geometry} material={materials.glass} />
          <mesh name="gondolastation-mesh_3" geometry={nodes['gondolastation-mesh_3'].geometry} material={materials.sliver} />
        </group>
        <group name="Stechelberg-Mürren_Middle-2" position={[2255.875, 1320.658, 2751.235]} rotation={[2.447, 1.357, -2.411]}>
          <mesh name="gondolastation-mesh" geometry={nodes['gondolastation-mesh'].geometry} material={materials.roof} />
          <mesh name="gondolastation-mesh_1" geometry={nodes['gondolastation-mesh_1'].geometry} material={materials['white.001']} />
          <mesh name="gondolastation-mesh_2" geometry={nodes['gondolastation-mesh_2'].geometry} material={materials.glass} />
          <mesh name="gondolastation-mesh_3" geometry={nodes['gondolastation-mesh_3'].geometry} material={materials.sliver} />
        </group>
        <group name="Stechelberg-Mürren_Top" position={[2099.773, 1582.192, 1567.745]} rotation={[-0.026, -1.409, -0.201]}>
          <mesh name="gondolastation-mesh" geometry={nodes['gondolastation-mesh'].geometry} material={materials.roof} />
          <mesh name="gondolastation-mesh_1" geometry={nodes['gondolastation-mesh_1'].geometry} material={materials['white.001']} />
          <mesh name="gondolastation-mesh_2" geometry={nodes['gondolastation-mesh_2'].geometry} material={materials.glass} />
          <mesh name="gondolastation-mesh_3" geometry={nodes['gondolastation-mesh_3'].geometry} material={materials.sliver} />
        </group>
        <group name="Mürren-Schilthorn_Bottom" position={[2071.79, 1588.106, 1538.378]} rotation={[-2.937, 0.211, -3.115]}>
          <mesh name="gondolastation-mesh" geometry={nodes['gondolastation-mesh'].geometry} material={materials.roof} />
          <mesh name="gondolastation-mesh_1" geometry={nodes['gondolastation-mesh_1'].geometry} material={materials['white.001']} />
          <mesh name="gondolastation-mesh_2" geometry={nodes['gondolastation-mesh_2'].geometry} material={materials.glass} />
          <mesh name="gondolastation-mesh_3" geometry={nodes['gondolastation-mesh_3'].geometry} material={materials.sliver} />
        </group>
        <group name="Mürren-Schilthorn_Middle-1" position={[-450.836, 2619.493, 1094.169]} rotation={[-0.254, -0.198, -0.037]}>
          <mesh name="gondolastation-mesh" geometry={nodes['gondolastation-mesh'].geometry} material={materials.roof} />
          <mesh name="gondolastation-mesh_1" geometry={nodes['gondolastation-mesh_1'].geometry} material={materials['white.001']} />
          <mesh name="gondolastation-mesh_2" geometry={nodes['gondolastation-mesh_2'].geometry} material={materials.glass} />
          <mesh name="gondolastation-mesh_3" geometry={nodes['gondolastation-mesh_3'].geometry} material={materials.sliver} />
        </group>
        <group name="Mürren-Schilthorn_Middle-2" position={[-589.76, 2617.77, 1114.689]} rotation={[2.908, -0.354, -3.103]}>
          <mesh name="gondolastation-mesh" geometry={nodes['gondolastation-mesh'].geometry} material={materials.roof} />
          <mesh name="gondolastation-mesh_1" geometry={nodes['gondolastation-mesh_1'].geometry} material={materials['white.001']} />
          <mesh name="gondolastation-mesh_2" geometry={nodes['gondolastation-mesh_2'].geometry} material={materials.glass} />
          <mesh name="gondolastation-mesh_3" geometry={nodes['gondolastation-mesh_3'].geometry} material={materials.sliver} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(lifts)
