import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import lifts from "../../assets/gltf/lifts.glb";
import ToolTipLifts from '../ToolTips/ToolTipLifts';
import { Html } from "@react-three/drei"
import { useCursor, Outlines, AccumulativeShadows, RandomizedLight, OrbitControls, Bounds, Environment } from '@react-three/drei'
import { Selection, Select, EffectComposer, Outline } from '@react-three/postprocessing'

export const LiftType = {
  Gondola: 'Gondel',
  CableCar: 'Kabine',
  Chair: "Sessellift",
  Tram: "Standseilbahn",
  Drag: "Schlepplift"
}

export default function Lifts(props) {
  const { nodes, materials } = useGLTF(lifts)

  return (
    <group {...props} dispose={null}>
        <group name="Schiltgrad" position={[1254.171, 1945.201, 1642.685]}>
          <Html>
            <ToolTipLifts lift={{ name: "Schiltgrad", type: LiftType.Chair, capacity: "4", length: "1522 m" }} />
          </Html>
          <group name="Connection_Schiltgrad" position={[-1254.171, -1945.201, -1642.685]}>
            <group name="Cable-Bottom009" position={[2033.391, 1582.532, 1692.852]} />
            <group name="Cable-Top009" position={[721.021, 2064.886, 1608.361]} />
            <Select enabled={true}>
            <mesh name="Cable009" geometry={nodes.Cable009.geometry} material={materials['Material.016']} position={[1254.171, 1945.201, 1642.685]} />
            </Select>
          </group>
          <group name="Schiltgrad_Bottom" position={[793.847, -379.49, 50.833]} rotation={[-3.097, 0.098, -2.971]} scale={2}>
            <mesh name="stop-mesh" geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
            <mesh name="stop-mesh_1" geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
            <mesh name="stop-mesh_2" geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
            <mesh name="stop-mesh_3" geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
          </group>
          <group name="Schiltgrad_Top" position={[-552.375, 108.844, -37.55]} rotation={[0.107, -0.104, -0.159]} scale={2}>
            <mesh name="stop-mesh" geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
            <mesh name="stop-mesh_1" geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
            <mesh name="stop-mesh_2" geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
            <mesh name="stop-mesh_3" geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
          </group>
          <group name="Tower_Single_Schiltgrad_1" position={[368.197, -203.725, 31.802]} rotation={[0, -0.087, -0.249]} scale={2}>
            <mesh name="tower-single-mesh" geometry={nodes['tower-single-mesh'].geometry} material={materials['silver.007']} />
            <mesh name="tower-single-mesh_1" geometry={nodes['tower-single-mesh_1'].geometry} material={materials['black.005']} />
            <mesh name="tower-single-mesh_2" geometry={nodes['tower-single-mesh_2'].geometry} material={materials['dark-silver.002']} />
          </group>
          <group name="Tower_Single_Schiltgrad_2" position={[118.699, -77.126, 15.638]} rotation={[0, -0.087, -0.249]} scale={2}>
            <mesh name="tower-single-mesh" geometry={nodes['tower-single-mesh'].geometry} material={materials['silver.007']} />
            <mesh name="tower-single-mesh_1" geometry={nodes['tower-single-mesh_1'].geometry} material={materials['black.005']} />
            <mesh name="tower-single-mesh_2" geometry={nodes['tower-single-mesh_2'].geometry} material={materials['dark-silver.002']} />
          </group>
          <group name="Tower_Single_Schiltgrad_3" position={[-123.795, 23.243, 0.211]} rotation={[0, -0.087, -0.087]} scale={2}>
            <mesh name="tower-single-mesh" geometry={nodes['tower-single-mesh'].geometry} material={materials['silver.007']} />
            <mesh name="tower-single-mesh_1" geometry={nodes['tower-single-mesh_1'].geometry} material={materials['black.005']} />
            <mesh name="tower-single-mesh_2" geometry={nodes['tower-single-mesh_2'].geometry} material={materials['dark-silver.002']} />
          </group>
          <group name="Tower_Single_Schiltgrad_4" position={[-320.026, 70.947, -12.221]} rotation={[0, -0.062, -0.046]} scale={2}>
            <mesh name="tower-single-mesh" geometry={nodes['tower-single-mesh'].geometry} material={materials['silver.007']} />
            <mesh name="tower-single-mesh_1" geometry={nodes['tower-single-mesh_1'].geometry} material={materials['black.005']} />
            <mesh name="tower-single-mesh_2" geometry={nodes['tower-single-mesh_2'].geometry} material={materials['dark-silver.002']} />
          </group>
        </group>
      <group name="Gimmeln" position={[1000.522, 1915.129, 2011.707]}>
        <Html>
          <ToolTipLifts lift={{ name: "Gimmeln", type: LiftType.Drag, capacity: "2", length: "1100 m", hours: "09:00 - 16:30" }} />
        </Html>
        <group name="Connection_Gimmeln" position={[-1000.522, -1915.129, -2011.707]}>
          <mesh name="Cable002" geometry={nodes.Cable002.geometry} material={materials['Material.008']} position={[1000.522, 1915.129, 2011.707]} >
          <Outlines
            toneMapped={false}
            polygonOffset
            polygonOffsetFactor={0}
            transparent
            opacity={1}
            color="white"
            angle={Math.PI}
            thickness={4}
          />
          </mesh>
        </group>
        <mesh name="Gimmeln_Bottom" geometry={nodes.Gimmeln_Bottom.geometry} material={materials['silver.003']} position={[331.159, -174.702, 340.568]} rotation={[3.056, 0.764, -2.956]} scale={2}>
          <group name="Cable-Bottom002" position={[0.294, 10.682, -0.068]} rotation={[-3.082, -0.766, -2.966]} scale={0.5} />
          <Outlines
            toneMapped={false}
            polygonOffset
            polygonOffsetFactor={1}
            transparent
            opacity={1}
            color="white"
            angle={Math.PI}
            thickness={2}
          />
        </mesh>
        <mesh name="Gimmeln_Top" geometry={nodes.Gimmeln_Top.geometry} material={materials['silver.003']} position={[-337.375, 133.764, -348.63]} rotation={[0.186, -0.782, -0.225]} scale={2}>
          <group name="Cable-Top002" position={[0.294, 10.704, -0.061]} rotation={[-0.447, 0.687, 0.464]} scale={0.5} />
        </mesh>
      </group>
      <group name="Riggli" position={[-223.132, 2473.788, 604.987]}>
        <Html>
          <ToolTipLifts lift={{ name: "Demo", type: LiftType.Chair, capacity: "4", length: "1522 m" }} />
        </Html>
        <group name="Connection_Riggli" position={[223.132, -2473.788, -604.987]}>
          <group name="Cable-Bottom006" position={[-50.918, 2331.259, 312.306]} />
          <group name="Cable-Top006" position={[-479.212, 2610.586, 1039.556]} />
          <mesh name="Cable006" geometry={nodes.Cable006.geometry} material={materials['Material.013']} position={[-224.912, 2475.518, 607.751]} />
        </group>
        <group name="Riggli_Bottom" position={[181.559, -156.727, -306.721]} rotation={[Math.PI, -0.977, -3.108]} scale={2}>
          <mesh name="stop-mesh" geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
          <mesh name="stop-mesh_1" geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
          <mesh name="stop-mesh_2" geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
          <mesh name="stop-mesh_3" geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
        </group>
        <group name="Rigli_Top" position={[-264.822, 127.763, 452.585]} rotation={[-0.323, 1.019, 0.046]} scale={2}>
          <mesh name="stop-mesh" geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
          <mesh name="stop-mesh_1" geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
          <mesh name="stop-mesh_2" geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
          <mesh name="stop-mesh_3" geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
        </group>
        <group name="Tower_Single_Riggli" position={[5.204, -25.477, 7.364]} rotation={[0, 1.057, -0.136]} scale={2}>
          <mesh name="tower-single-mesh" geometry={nodes['tower-single-mesh'].geometry} material={materials['silver.007']} />
          <mesh name="tower-single-mesh_1" geometry={nodes['tower-single-mesh_1'].geometry} material={materials['black.005']} />
          <mesh name="tower-single-mesh_2" geometry={nodes['tower-single-mesh_2'].geometry} material={materials['dark-silver.002']} />
        </group>
      </group>
      <group name="Muttleren" position={[225.145, 2298.642, 322.65]}>
        <Html>
          <ToolTipLifts lift={{ name: "Demo", type: LiftType.Chair, capacity: "4", length: "1522 m" }} />
        </Html>
        <group name="Connection_Muttleren" position={[-225.145, -2298.642, -322.65]}>
          <group name="Cable-Bottom007" position={[364.428, 2196.587, 525.701]} />
          <group name="Cable-Top007" position={[85.862, 2400.697, 119.6]} />
          <mesh name="Cable007" geometry={nodes.Cable007.geometry} material={materials['Material.014']} position={[225.145, 2298.642, 322.65]} />
        </group>
        <group name="Muttleren_Bottom" position={[148.344, -117.173, 216.322]} rotation={[Math.PI, 0.976, -3.054]} scale={2}>
          <mesh name="stop-mesh" geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
          <mesh name="stop-mesh_1" geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
          <mesh name="stop-mesh_2" geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
          <mesh name="stop-mesh_3" geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
        </group>
        <group name="Muttleren_Top" position={[-148.815, 88.031, -217.18]} rotation={[0, -0.976, 0.021]} scale={2}>
          <mesh name="stop-mesh" geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
          <mesh name="stop-mesh_1" geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
          <mesh name="stop-mesh_2" geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
          <mesh name="stop-mesh_3" geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
        </group>
      </group>
      <group name="Kandahar" position={[769.546, 2272.899, 260.332]}>
        <Html>
          <ToolTipLifts lift={{ name: "Demo", type: LiftType.Chair, capacity: "4", length: "1522 m" }} />
        </Html>
        <group name="Connection_Kandahar" position={[-769.546, -2272.899, -260.332]}>
          <group name="Cable-Bottom008" position={[983.886, 2156.163, 317.211]} />
          <group name="Cable-Top008" position={[118.185, 2394.448, 86.796]} />
          <mesh name="Cable008" geometry={nodes.Cable008.geometry} material={materials['Material.015']} />
        </group>
        <group name="Kandahar_Bottom" position={[231.663, -129.796, 61.385]} rotation={[3.139, 0.252, 3.1]} scale={2}>
          <mesh name="stop-mesh" geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
          <mesh name="stop-mesh_1" geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
          <mesh name="stop-mesh_2" geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
          <mesh name="stop-mesh_3" geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
        </group>
        <group name="Kandahar_Top" position={[-669.539, 109.468, -177.076]} rotation={[-0.088, -0.25, -0.111]} scale={2}>
          <mesh name="stop-mesh" geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
          <mesh name="stop-mesh_1" geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
          <mesh name="stop-mesh_2" geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
          <mesh name="stop-mesh_3" geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
        </group>
        <group name="Tower_Single_Kandahar" position={[-4.196, -25.7, 7.203]} rotation={[0, -0.258, -0.078]} scale={2}>
          <mesh name="tower-single-mesh" geometry={nodes['tower-single-mesh'].geometry} material={materials['silver.007']} />
          <mesh name="tower-single-mesh_1" geometry={nodes['tower-single-mesh_1'].geometry} material={materials['black.005']} />
          <mesh name="tower-single-mesh_2" geometry={nodes['tower-single-mesh_2'].geometry} material={materials['dark-silver.002']} />
        </group>
      </group>
      <group name="Mürren-Allmendhubel" position={[2108.395, 1737.734, 1079.673]}>
        <Html>
          <ToolTipLifts lift={{ name: "Mürren-Allmendhubel", type: LiftType.Tram, capacity: "65", length: "551 m", hours: "09:00 - 17:00" }} />
        </Html>
        <group name="Connection_Mürren-Allmendhubel" position={[-2108.395, -1737.734, -1079.673]}>
          <group name="Cable-Bottom001" position={[2221.532, 1616.309, 1237.213]} />
          <group name="Cable-Top001" position={[1995.259, 1859.158, 922.134]} />
          <mesh name="Cable001" geometry={nodes.Cable001.geometry} material={materials['Material.009']} position={[2108.395, 1737.734, 1079.673]} />
        </group>
        <group name="Mürren-Allmendhubel_Bottom" position={[122.526, -137.449, 169.601]} rotation={[3.134, 0.895, -2.998]} scale={2}>
          <mesh name="stop-mesh" geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
          <mesh name="stop-mesh_1" geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
          <mesh name="stop-mesh_2" geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
          <mesh name="stop-mesh_3" geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
        </group>
        <group name="Mürren-Allmendhubel_Top" position={[-125.17, 112.075, -173.457]} rotation={[-0.024, -0.943, -0.247]} scale={2}>
          <mesh name="stop-mesh" geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
          <mesh name="stop-mesh_1" geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
          <mesh name="stop-mesh_2" geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
          <mesh name="stop-mesh_3" geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
        </group>
      </group>
      <group name="Allmendhubel" position={[1913.083, 1872.925, 835.692]}>
        <Html>
          <ToolTipLifts lift={{ name: "Allmendhubel", type: LiftType.Drag, capacity: "1", length: "239 m", hours: "09:00 - 16:30" }} />
        </Html>
        <group name="Connection_Allmendhubel" position={[-1913.083, -1872.925, -835.692]}>
          <group name="Cable-Bottom015" position={[2038.584, 1849.471, 822.441]} />
          <group name="Cable-Top015" position={[1787.581, 1896.379, 848.943]} />
          <mesh name="Cable015" geometry={nodes.Cable015.geometry} material={materials['Material.023']} position={[1913.083, 1872.925, 835.692]} />
        </group>
        <mesh name="Allmendhubel_Bottom" geometry={nodes.Allmendhubel_Bottom.geometry} material={materials['silver.003']} position={[126.093, -44.952, -13.232]} rotation={[Math.PI, -0.078, Math.PI]} scale={2} />
        <mesh name="Allmendhubel_Top" geometry={nodes.Allmendhubel_Top.geometry} material={materials['silver.003']} position={[-126.083, 1.898, 13.356]} rotation={[0, 0.078, 0]} scale={2} />
      </group>
      <group name="Allmiboden" position={[1854.261, 1832.072, 719.743]}>
        <Html>
          <ToolTipLifts lift={{ name: "Demo", type: LiftType.Chair, capacity: "4", length: "1522 m" }} />
        </Html>
        <group name="Connection_Allmidboden" position={[-1854.261, -1832.072, -719.743]}>
          <group name="Cable-Bottom004" position={[1906.819, 1768.217, 636.226]} />
          <group name="Cable-Top004" position={[1801.704, 1873.397, 803.26]} />
          <mesh name="Cable004" geometry={nodes.Cable004.geometry} material={materials['Material.011']} position={[1854.261, 1832.124, 719.743]} />
        </group>
        <group name="Allmiboden_Bottom" position={[62.378, -77.272, -97.798]} rotation={[Math.PI, -0.964, Math.PI]} scale={2}>
          <mesh name="stop-mesh" geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
          <mesh name="stop-mesh_1" geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
          <mesh name="stop-mesh_2" geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
          <mesh name="stop-mesh_3" geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
        </group>
        <group name="Allmiboden_Top" position={[-63.346, 31.988, 100.371]} rotation={[0, 1.009, -0.233]} scale={2}>
          <mesh name="stop-mesh" geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
          <mesh name="stop-mesh_1" geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
          <mesh name="stop-mesh_2" geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
          <mesh name="stop-mesh_3" geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
        </group>
        <group name="Tower_Single_Allmiboden" position={[-22.625, 7.865, 51.584]} rotation={[0, 1.009, 0]} scale={2}>
          <mesh name="tower-single-mesh" geometry={nodes['tower-single-mesh'].geometry} material={materials['silver.007']} />
          <mesh name="tower-single-mesh_1" geometry={nodes['tower-single-mesh_1'].geometry} material={materials['black.005']} />
          <mesh name="tower-single-mesh_2" geometry={nodes['tower-single-mesh_2'].geometry} material={materials['dark-silver.002']} />
        </group>
      </group>
      <group name="Maulerhubel" position={[1884.768, 1869.85, 335.395]}>
        <Html>
          <ToolTipLifts lift={{ name: "Demo", type: LiftType.Chair, capacity: "4", length: "1522 m" }} />
        </Html>
        <group name="Connection_Maulerhubel" position={[-1884.768, -1869.85, -335.395]}>
          <group name="Cable-Bottom003" position={[1957.09, 1767.881, 596.766]} />
          <group name="Cable-Top003" position={[1841.948, 1896.765, 179.28]} />
          <mesh name="Cable003" geometry={nodes.Cable003.geometry} material={materials['Material.010']} position={[1884.768, 1869.85, 335.395]} />
        </group>
        <group name="Maulerhubel_Bottom" position={[76.246, -116.175, 277.589]} rotation={[Math.PI, 1.333, -3.095]} scale={2}>
          <mesh name="stop-mesh" geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
          <mesh name="stop-mesh_1" geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
          <mesh name="stop-mesh_2" geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
          <mesh name="stop-mesh_3" geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
        </group>
        <group name="Maulerhubel_Top" position={[-47.741, 14.099, -173.35]} rotation={[0.003, -1.318, -0.042]} scale={2}>
          <mesh name="stop-mesh" geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
          <mesh name="stop-mesh_1" geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
          <mesh name="stop-mesh_2" geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
          <mesh name="stop-mesh_3" geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
        </group>
        <group name="Tower_Single_Maulerhubel" position={[-8.543, -25.611, -0.807]} rotation={[0, -1.297, -0.113]} scale={2}>
          <mesh name="tower-single-mesh" geometry={nodes['tower-single-mesh'].geometry} material={materials['silver.007']} />
          <mesh name="tower-single-mesh_1" geometry={nodes['tower-single-mesh_1'].geometry} material={materials['black.005']} />
          <mesh name="tower-single-mesh_2" geometry={nodes['tower-single-mesh_2'].geometry} material={materials['dark-silver.002']} />
        </group>
      </group>
      <group name="Winteregg" position={[2127.418, 1770.693, -469.038]}>
        <Html>
          <ToolTipLifts lift={{ name: "Winteregg", type: LiftType.Chair, capacity: "4", length: "1386 m", hours: "09:00 - 16:30" }} />
        </Html>
        <group name="Connection_Winteregg" position={[-2127.418, -1770.693, 469.038]}>
          <group name="Cable-Bottom005" position={[2421.388, 1542.816, -1038.767]} />
          <group name="Cable-Top005" position={[1838.519, 1894.801, 90.8]} />
          <mesh name="Cable005" geometry={nodes.Cable005.geometry} material={materials['Material.012']} position={[2127.418, 1770.693, -469.038]} />
        </group>
        <group name="Winteregg_Bottom" position={[301.516, -242.89, -583.744]} rotation={[-Math.PI, -1.081, -3.042]} scale={2}>
          <mesh name="stop-mesh" geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
          <mesh name="stop-mesh_1" geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
          <mesh name="stop-mesh_2" geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
          <mesh name="stop-mesh_3" geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
        </group>
        <group name="Winteregg_Top" position={[-298.176, 114.745, 577.668]} rotation={[0, 1.088, -0.237]} scale={2}>
          <mesh name="stop-mesh" geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
          <mesh name="stop-mesh_1" geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
          <mesh name="stop-mesh_2" geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
          <mesh name="stop-mesh_3" geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
        </group>
        <group name="Winteregg_Tower_Single" position={[4.072, -25.747, 6.792]} rotation={[0.124, 1.069, -0.211]} scale={2}>
          <mesh name="tower-single-mesh" geometry={nodes['tower-single-mesh'].geometry} material={materials['silver.007']} />
          <mesh name="tower-single-mesh_1" geometry={nodes['tower-single-mesh_1'].geometry} material={materials['black.005']} />
          <mesh name="tower-single-mesh_2" geometry={nodes['tower-single-mesh_2'].geometry} material={materials['dark-silver.002']} />
        </group>
      </group>
      <group name="Lauterbrunnen-Grütschalp" position={[2668.008, 1106.142, -2902.455]}>
        <Html>
          <ToolTipLifts lift={{ name: "Lauterbrunnen-Grütschalp", type: LiftType.Gondola, capacity: "100", length: "1432 m", hours: "09:00 - 16:30" }} />
        </Html>
        <group name="Connection_Lauterbrunnen-Grütschalp" position={[-2668.008, -1106.142, 2902.455]}>
          <group name="Cable-Bottom010" position={[3287.64, 762.449, -3046.012]} />
          <group name="Cable-Top010" position={[2048.377, 1449.835, -2758.896]} />
          <mesh name="Cable010" geometry={nodes.Cable010.geometry} material={materials['Material.018']} position={[2668.008, 1106.142, -2902.455]} />
        </group>
        <group name="Gondola_Lauterbrunnen-Grütschalp" rotation={[0, 0.214, 0]}>
          <mesh name="gondola-mesh" geometry={nodes['gondola-mesh'].geometry} material={materials['Material.017']} />
          <mesh name="gondola-mesh_1" geometry={nodes['gondola-mesh_1'].geometry} material={materials['silver.008']} />
          <mesh name="gondola-mesh_2" geometry={nodes['gondola-mesh_2'].geometry} material={materials['glass.001']} />
          <mesh name="gondola-mesh_3" geometry={nodes['gondola-mesh_3'].geometry} material={materials['black.006']} />
          <mesh name="gondola-mesh_4" geometry={nodes['gondola-mesh_4'].geometry} material={materials.white} />
        </group>
        <group name="Lauterbrunnen-Grütschalp_Bottom" position={[628.846, -358.022, -144.027]} rotation={[Math.PI, -0.214, Math.PI]}>
          <mesh name="gondolastation-mesh" geometry={nodes['gondolastation-mesh'].geometry} material={materials.roof} />
          <mesh name="gondolastation-mesh_1" geometry={nodes['gondolastation-mesh_1'].geometry} material={materials['white.001']} />
          <mesh name="gondolastation-mesh_2" geometry={nodes['gondolastation-mesh_2'].geometry} material={materials.glass} />
          <mesh name="gondolastation-mesh_3" geometry={nodes['gondolastation-mesh_3'].geometry} material={materials.sliver} />
        </group>
        <group name="Lauterbrunnen-Grütschalp_Top" position={[-627.552, 328.305, 147.451]} rotation={[-0.009, 0.214, 0.036]}>
          <mesh name="gondolastation-mesh" geometry={nodes['gondolastation-mesh'].geometry} material={materials.roof} />
          <mesh name="gondolastation-mesh_1" geometry={nodes['gondolastation-mesh_1'].geometry} material={materials['white.001']} />
          <mesh name="gondolastation-mesh_2" geometry={nodes['gondolastation-mesh_2'].geometry} material={materials.glass} />
          <mesh name="gondolastation-mesh_3" geometry={nodes['gondolastation-mesh_3'].geometry} material={materials.sliver} />
        </group>
      </group>
      <group name="Gimmelwald-Mürren" position={[2179.761, 1467.188, 2160.75]}>
        <Html>
          <ToolTipLifts lift={{ name: "Gimmelwald-Mürren", type: LiftType.Gondola, capacity: "100", length: "1198 m", hours: "08:30 - 16:30" }} />
        </Html>
        <group name="Connection_Gimmelwald-Mürren" position={[-2179.761, -1467.188, -2160.75]}>
          <group name="Cable-Bottom012" position={[2255.797, 1337.189, 2742.378]} />
          <group name="Cable-Top012" position={[2103.726, 1597.186, 1579.122]} />
          <mesh name="Cable012" geometry={nodes.Cable012.geometry} material={materials['Material.020']} position={[2179.761, 1467.188, 2160.75]} />
        </group>
        <group name="Gimmelwald-Mürren_Top" position={[-79.937, 116.552, -592.734]} rotation={[-0.026, -1.409, -0.201]}>
          <mesh name="gondolastation-mesh" geometry={nodes['gondolastation-mesh'].geometry} material={materials.roof} />
          <mesh name="gondolastation-mesh_1" geometry={nodes['gondolastation-mesh_1'].geometry} material={materials['white.001']} />
          <mesh name="gondolastation-mesh_2" geometry={nodes['gondolastation-mesh_2'].geometry} material={materials.glass} />
          <mesh name="gondolastation-mesh_3" geometry={nodes['gondolastation-mesh_3'].geometry} material={materials.sliver} />
        </group>
        <group name="Gimmelwald-Mürren_Bottom" position={[76.119, -144.599, 590.485]} rotation={[-Math.PI, 1.412, -Math.PI]}>
          <mesh name="gondolastation-mesh_4" geometry={nodes['gondolastation-mesh_4'].geometry} material={materials.roof} />
          <mesh name="gondolastation-mesh_5" geometry={nodes['gondolastation-mesh_5'].geometry} material={materials['white.001']} />
          <mesh name="gondolastation-mesh_6" geometry={nodes['gondolastation-mesh_6'].geometry} material={materials.glass} />
          <mesh name="gondolastation-mesh_7" geometry={nodes['gondolastation-mesh_7'].geometry} material={materials.sliver} />
        </group>
        <group name="Gondola_Gimmelwald-Mürren" rotation={[0, -1.412, 0]}>
          <mesh name="gondola-mesh-flat" geometry={nodes['gondola-mesh-flat'].geometry} material={materials['Material.025']} />
          <mesh name="gondola-mesh-flat_1" geometry={nodes['gondola-mesh-flat_1'].geometry} material={materials['silver.012']} />
          <mesh name="gondola-mesh-flat_2" geometry={nodes['gondola-mesh-flat_2'].geometry} material={materials['glass.003']} />
          <mesh name="gondola-mesh-flat_3" geometry={nodes['gondola-mesh-flat_3'].geometry} material={materials['black.008']} />
          <mesh name="gondola-mesh-flat_4" geometry={nodes['gondola-mesh-flat_4'].geometry} material={materials['white.003']} />
        </group>
      </group>
      <group name="Mürren-Birg" position={[812.659, 2119.946, 1316.6]}>
        <Html>
          <ToolTipLifts lift={{ name: "Mürren-Birg", type: LiftType.Gondola, capacity: "75", length: "2780 m", hours: "09:00 - 16:30" }} />
        </Html>
        <group name="Connection_Mürren-Birg" position={[-812.659, -2119.946, -1316.6]}>
          <group name="Cable-Bottom013" position={[2067, 1604.069, 1541.511]} />
          <group name="Cable-Top013" position={[-441.682, 2635.822, 1091.689]} />
          <mesh name="Cable013" geometry={nodes.Cable013.geometry} material={materials['Material.021']} position={[812.659, 2119.946, 1316.6]} />
        </group>
        <group name="Gondola_Mürren-Birg" rotation={[0, -0.202, 0]}>
          <mesh name="gondola-mesh" geometry={nodes['gondola-mesh'].geometry} material={materials['Material.017']} />
          <mesh name="gondola-mesh_1" geometry={nodes['gondola-mesh_1'].geometry} material={materials['silver.008']} />
          <mesh name="gondola-mesh_2" geometry={nodes['gondola-mesh_2'].geometry} material={materials['glass.001']} />
          <mesh name="gondola-mesh_3" geometry={nodes['gondola-mesh_3'].geometry} material={materials['black.006']} />
          <mesh name="gondola-mesh_4" geometry={nodes['gondola-mesh_4'].geometry} material={materials.white} />
        </group>
        <group name="Mürren-Birg_Bottom" position={[1261.994, -531.33, 227.749]} rotation={[Math.PI, 0.202, -3.072]}>
          <mesh name="gondolastation-mesh" geometry={nodes['gondolastation-mesh'].geometry} material={materials.roof} />
          <mesh name="gondolastation-mesh_1" geometry={nodes['gondolastation-mesh_1'].geometry} material={materials['white.001']} />
          <mesh name="gondolastation-mesh_2" geometry={nodes['gondolastation-mesh_2'].geometry} material={materials.glass} />
          <mesh name="gondolastation-mesh_3" geometry={nodes['gondolastation-mesh_3'].geometry} material={materials.sliver} />
        </group>
        <group name="Mürren-Birg_Top" position={[-1263.607, 500.422, -224.707]} rotation={[0, -0.201, 0]}>
          <mesh name="gondolastation-mesh" geometry={nodes['gondolastation-mesh'].geometry} material={materials.roof} />
          <mesh name="gondolastation-mesh_1" geometry={nodes['gondolastation-mesh_1'].geometry} material={materials['white.001']} />
          <mesh name="gondolastation-mesh_2" geometry={nodes['gondolastation-mesh_2'].geometry} material={materials.glass} />
          <mesh name="gondolastation-mesh_3" geometry={nodes['gondolastation-mesh_3'].geometry} material={materials.sliver} />
        </group>
      </group>
      <group name="Birg-Schilthorn" position={[-1392.33, 2783.364, 1380.52]}>
        <Html>
          <ToolTipLifts lift={{ name: "Birg-Schilthorn", type: LiftType.Gondola, capacity: "100", length: "1766 m", hours: "08:30 - 16:30" }} />
        </Html>
        <group name="Connection_Birg-Schilthorn" position={[1392.33, -2783.364, -1380.52]}>
          <group name="Cable-Bottom014" position={[-603.522, 2636.906, 1124.383]} />
          <group name="Cable-Top014" position={[-2181.137, 2929.823, 1636.656]} />
          <mesh name="Cable014" geometry={nodes.Cable014.geometry} material={materials['Material.022']} position={[-1392.33, 2783.364, 1380.52]} />
        </group>
        <group name="Mürren-Birg-Schilthorn" position={[798.312, -161.543, -257.644]} rotation={[Math.PI, -0.305, Math.PI]}>
          <mesh name="gondolastation-mesh" geometry={nodes['gondolastation-mesh'].geometry} material={materials.roof} />
          <mesh name="gondolastation-mesh_1" geometry={nodes['gondolastation-mesh_1'].geometry} material={materials['white.001']} />
          <mesh name="gondolastation-mesh_2" geometry={nodes['gondolastation-mesh_2'].geometry} material={materials.glass} />
          <mesh name="gondolastation-mesh_3" geometry={nodes['gondolastation-mesh_3'].geometry} material={materials.sliver} />
        </group>
        <group name="Gondola_Birg-Schilthorn" rotation={[0, 0.303, 0]}>
          <mesh name="gondola-mesh-flat" geometry={nodes['gondola-mesh-flat'].geometry} material={materials['Material.025']} />
          <mesh name="gondola-mesh-flat_1" geometry={nodes['gondola-mesh-flat_1'].geometry} material={materials['silver.012']} />
          <mesh name="gondola-mesh-flat_2" geometry={nodes['gondola-mesh-flat_2'].geometry} material={materials['glass.003']} />
          <mesh name="gondola-mesh-flat_3" geometry={nodes['gondola-mesh-flat_3'].geometry} material={materials['black.008']} />
          <mesh name="gondola-mesh-flat_4" geometry={nodes['gondola-mesh-flat_4'].geometry} material={materials['white.003']} />
        </group>
      </group>
      <group name="Stechelberg-Gimmelwald" position={[2599.527, 1083.709, 2283.661]}>
        <Html>
          <ToolTipLifts lift={{ name: "Stechelberg-Gimmelwald", type: LiftType.Gondola, capacity: "100", length: "1188 m", hours: "08:30 - 16:30" }} />
        </Html>
        <group name="Connection_Stechelberg-Gimmelwald" position={[-2599.527, -1083.709, -2283.661]}>
          <group name="Cable-Bottom011" position={[2900.822, 827.203, 1852.812]} />
          <group name="Cable-Top011" position={[2298.233, 1326.147, 2714.51]} />
          <mesh name="Cable011" geometry={nodes.Cable011.geometry} material={materials['Material.019']} position={[2599.527, 1083.709, 2283.661]} />
        </group>
        <group name="Tower_Single_Stechelberg-Gimmelwald" position={[-255.352, 195.859, 379.559]} rotation={[0, 0.955, -0.262]} scale={2}>
          <mesh name="tower-single-mesh" geometry={nodes['tower-single-mesh'].geometry} material={materials['silver.007']} />
          <mesh name="tower-single-mesh_1" geometry={nodes['tower-single-mesh_1'].geometry} material={materials['black.005']} />
          <mesh name="tower-single-mesh_2" geometry={nodes['tower-single-mesh_2'].geometry} material={materials['dark-silver.002']} />
        </group>
        <group name="Gondola_Stechelberg-Gimmelwald" position={[0, 0.449, 0]} rotation={[0, 0.962, 0]}>
          <mesh name="gondola-mesh" geometry={nodes['gondola-mesh'].geometry} material={materials['Material.017']} />
          <mesh name="gondola-mesh_1" geometry={nodes['gondola-mesh_1'].geometry} material={materials['silver.008']} />
          <mesh name="gondola-mesh_2" geometry={nodes['gondola-mesh_2'].geometry} material={materials['glass.001']} />
          <mesh name="gondola-mesh_3" geometry={nodes['gondola-mesh_3'].geometry} material={materials['black.006']} />
          <mesh name="gondola-mesh_4" geometry={nodes['gondola-mesh_4'].geometry} material={materials.white} />
        </group>
        <group name="Stechelberg-Gimmelwald_Bottom" position={[307.619, -271.554, -437.713]} rotation={[Math.PI, -0.967, Math.PI]}>
          <mesh name="gondolastation-mesh_8" geometry={nodes['gondolastation-mesh_8'].geometry} material={materials.roof} />
          <mesh name="gondolastation-mesh_9" geometry={nodes['gondolastation-mesh_9'].geometry} material={materials['white.001']} />
          <mesh name="gondolastation-mesh_10" geometry={nodes['gondolastation-mesh_10'].geometry} material={materials.glass} />
          <mesh name="gondolastation-mesh_11" geometry={nodes['gondolastation-mesh_11'].geometry} material={materials.sliver} />
        </group>
        <group name="Stechelberg-Gimmelwald_Top" position={[-304.691, 226.419, 439.544]} rotation={[0, 0.967, 0]}>
          <mesh name="gondolastation-mesh_12" geometry={nodes['gondolastation-mesh_12'].geometry} material={materials.roof} />
          <mesh name="gondolastation-mesh_13" geometry={nodes['gondolastation-mesh_13'].geometry} material={materials['white.001']} />
          <mesh name="gondolastation-mesh_14" geometry={nodes['gondolastation-mesh_14'].geometry} material={materials.glass} />
          <mesh name="gondolastation-mesh_15" geometry={nodes['gondolastation-mesh_15'].geometry} material={materials.sliver} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(lifts)
