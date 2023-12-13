import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import lifts from "../../assets/gltf/lifts.glb";
import ToolTipLifts from '../ToolTips/ToolTipLifts';
import { Html } from "@react-three/drei"

export default function Lifts({allowShadow, refsToUse, setFocusObject}) {
  const liftShadow = allowShadow.buildings;
  const { nodes, materials } = useGLTF(lifts)
  return (
    <group dispose={null}>
      <group ref={refsToUse[0]} position={[2048.018, 1565.711, 1693.519]} rotation={[-3.097, 0.098, -2.971]} scale={2}>
        <Html >
          <ToolTipLifts meshRef={refsToUse[0]} setFocusObject={setFocusObject} LiftName="Schilthornhütte" OpeningHours="8:30 - 17:00" lastDescent="16:30"/>
        </Html>
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
      </group>
      <group position={[701.796, 2054.045, 1605.136]} rotation={[0.107, -0.104, -0.159]} scale={2}>
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
      </group>
      <group position={[1331.681, 1740.427, 2352.274]} rotation={[3.056, 0.764, -2.956]} scale={2}>
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
      </group>
      <group position={[637.409, 2047.945, 1675.034]} rotation={[0.186, -0.782, -0.225]} scale={2}>
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
      </group>
      <group position={[-41.572, 2317.061, 298.266]} rotation={[Math.PI, -0.977, -3.108]} scale={2}>
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
      </group>
      <group position={[-511.266, 2601.551, 1064.501]} rotation={[-0.309, 0.991, 0.03]} scale={2}>
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
      </group>
      <group position={[76.33, 2386.673, 105.47]} rotation={[0, -0.976, 0.021]} scale={2}>
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
      </group>
      <group position={[373.489, 2181.469, 538.972]} rotation={[Math.PI, 0.976, -3.054]} scale={2}>
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
      </group>
      <group position={[131.933, 2378.16, 97.6]} rotation={[-0.088, -0.25, -0.111]} scale={2}>
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
      </group>
      <group position={[1001.208, 2143.103, 321.718]} rotation={[3.139, 0.252, 3.1]} scale={2}>
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
      </group>
      <group position={[1972.948, 1850.212, 891.083]} rotation={[0, -0.973, 0]} scale={2}>
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
      </group>
      <group position={[2230.921, 1600.285, 1249.275]} rotation={[3.134, 0.895, -2.998]} scale={2}>
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
      </group>
      <group position={[2039.175, 1830.038, 822.459]} rotation={[Math.PI, -0.078, Math.PI]} scale={2}>
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
      </group>
      <group position={[1787, 1874.823, 849.048]} rotation={[0, 0.078, 0]} scale={2}>
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
      </group>
      <group position={[1920.058, 1754.8, 621.623]} rotation={[Math.PI, -0.964, Math.PI]} scale={2}>
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
      </group>
      <group position={[1790.382, 1864.06, 819.779]} rotation={[0, 0.964, -0.233]} scale={2}>
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
      </group>
      <group position={[1957.836, 1753.676, 613.753]} rotation={[Math.PI, 1.333, -3.095]} scale={2}>
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
      </group>
      <group position={[1837.027, 1883.949, 162.045]} rotation={[0.003, -1.318, -0.042]} scale={2}>
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
      </group>
      <group position={[2428.935, 1527.802, -1052.782]} rotation={[Math.PI, -1.081, -3.042]} scale={2}>
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
      </group>
      <group position={[1829.242, 1885.437, 108.63]} rotation={[0, 1.081, -0.237]} scale={2}>
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
      </group>
      <group position={[3296.819, 746.154, -3046.353]} rotation={[-3.129, -0.245, -3.106]} scale={2}>
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
      </group>
      <group position={[2040.457, 1434.447, -2755.003]} rotation={[-0.009, 0.214, 0.036]} scale={2}>
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
      </group>
      <group position={[2907.146, 812.155, 1845.948]} rotation={[Math.PI, -0.967, Math.PI]} scale={2}>
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
      </group>
      <group position={[2289.392, 1310.138, 2730.514]} rotation={[0, 0.967, -0.119]} scale={2}>
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
      </group>
      <group position={[2255.945, 1320.229, 2751.203]} rotation={[2.934, 1.407, -2.89]} scale={2}>
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
      </group>
      <group position={[2099.773, 1582.192, 1567.745]} rotation={[0.433, -1.407, 0.252]} scale={2}>
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
      </group>
      <group position={[2071.79, 1588.106, 1538.378]} rotation={[3.127, 0.201, -3.07]} scale={2}>
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
      </group>
      <group position={[-451.393, 2620.495, 1093.793]} rotation={[0.003, -0.201, 0.014]} scale={2}>
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
      </group>
      <group position={[-2144.711, 2898.797, 1640.69]} rotation={[0.021, 0.282, -0.397]} scale={2}>
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh'].geometry} material={materials.silver_dark} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_1'].geometry} material={materials['black.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_2'].geometry} material={materials['silver.002']} />
        <mesh castShadow={liftShadow} receiveShadow={liftShadow} geometry={nodes['stop-mesh_3'].geometry} material={materials.red} />
      </group>
    </group>
  )
}

useGLTF.preload(lifts)
