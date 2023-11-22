import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import restaurants from "../../assets/gltf/restaurants.glb";
import { Html } from "@react-three/drei"
import ToolTipRestaurant from '../Tooltips/ToolTipRestaurant';

// no instancing used to handle clicks later
export default function Restaurants(props) {
  const { nodes, materials } = useGLTF(restaurants)
  return (
    <group {...props} dispose={null}>
      <group position={[-102.681, 2387.01, 224.249]} rotation={[Math.PI, -0.838, Math.PI]} scale={3}>
        <Html >
          <ToolTipRestaurant RestaurantName="Schilthornhütte" OpeingHours="8:30 - 17:00"/>
        </Html>
        <mesh geometry={nodes['restaurant-mesh'].geometry} material={materials['Dark_wood.010']} />
        <mesh geometry={nodes['restaurant-mesh_1'].geometry} material={materials['Light_wood.010']} />
        <mesh geometry={nodes['restaurant-mesh_2'].geometry} material={materials['Glass.011']} />
        <mesh geometry={nodes['restaurant-mesh_3'].geometry} material={materials['grey.010']} />
        <mesh geometry={nodes['restaurant-mesh_4'].geometry} material={materials['Black.010']} />
        <mesh geometry={nodes['restaurant-mesh_5'].geometry} material={materials.fundament} />
      </group>
      <group position={[-482.707, 2626.613, 1121.244]} rotation={[0, 0.047, 0]} scale={3}>
        <Html >
        <ToolTipRestaurant RestaurantName="Schilthornhütte 1" OpeingHours="8:30 - 17:00"/>
        </Html>
        <mesh geometry={nodes['restaurant-mesh'].geometry} material={materials['Dark_wood.010']} />
        <mesh geometry={nodes['restaurant-mesh_1'].geometry} material={materials['Light_wood.010']} />
        <mesh geometry={nodes['restaurant-mesh_2'].geometry} material={materials['Glass.011']} />
        <mesh geometry={nodes['restaurant-mesh_3'].geometry} material={materials['grey.010']} />
        <mesh geometry={nodes['restaurant-mesh_4'].geometry} material={materials['Black.010']} />
        <mesh geometry={nodes['restaurant-mesh_5'].geometry} material={materials.fundament} />
      </group>
      <group position={[1297.245, 1756.945, 2401.545]} rotation={[0, -0.36, 0]} scale={3}>
        <Html >
         <ToolTipRestaurant RestaurantName="Schilthornhütte 1" OpeingHours="8:30 - 17:00"/>
        </Html>
        <mesh geometry={nodes['restaurant-mesh'].geometry} material={materials['Dark_wood.010']} />
        <mesh geometry={nodes['restaurant-mesh_1'].geometry} material={materials['Light_wood.010']} />
        <mesh geometry={nodes['restaurant-mesh_2'].geometry} material={materials['Glass.011']} />
        <mesh geometry={nodes['restaurant-mesh_3'].geometry} material={materials['grey.010']} />
        <mesh geometry={nodes['restaurant-mesh_4'].geometry} material={materials['Black.010']} />
        <mesh geometry={nodes['restaurant-mesh_5'].geometry} material={materials.fundament} />
      </group>
      <group position={[1352.938, 1792.656, 960.82]} rotation={[0, -0.458, 0]} scale={3}>
        <Html >
         <ToolTipRestaurant RestaurantName="Schilthornhütte 1" OpeingHours="8:30 - 17:00"/>
        </Html>
        <mesh geometry={nodes['restaurant-mesh'].geometry} material={materials['Dark_wood.010']} />
        <mesh geometry={nodes['restaurant-mesh_1'].geometry} material={materials['Light_wood.010']} />
        <mesh geometry={nodes['restaurant-mesh_2'].geometry} material={materials['Glass.011']} />
        <mesh geometry={nodes['restaurant-mesh_3'].geometry} material={materials['grey.010']} />
        <mesh geometry={nodes['restaurant-mesh_4'].geometry} material={materials['Black.010']} />
        <mesh geometry={nodes['restaurant-mesh_5'].geometry} material={materials.fundament} />
      </group>
      <group position={[1200.87, 1802.154, 1228.006]} rotation={[0, -1.421, 0]} scale={3}>
        <Html >
         <ToolTipRestaurant RestaurantName="Schilthornhütte 1" OpeingHours="8:30 - 17:00"/>
        </Html>
        <mesh geometry={nodes['restaurant-mesh'].geometry} material={materials['Dark_wood.010']} />
        <mesh geometry={nodes['restaurant-mesh_1'].geometry} material={materials['Light_wood.010']} />
        <mesh geometry={nodes['restaurant-mesh_2'].geometry} material={materials['Glass.011']} />
        <mesh geometry={nodes['restaurant-mesh_3'].geometry} material={materials['grey.010']} />
        <mesh geometry={nodes['restaurant-mesh_4'].geometry} material={materials['Black.010']} />
        <mesh geometry={nodes['restaurant-mesh_5'].geometry} material={materials.fundament} />
      </group>
      <group position={[1899.663, 1870.255, 877.93]} rotation={[Math.PI, -0.179, Math.PI]} scale={3}>
        <Html >
         <ToolTipRestaurant RestaurantName="Schilthornhütte 1" OpeingHours="8:30 - 17:00"/>
        </Html>
        <mesh geometry={nodes['restaurant-mesh'].geometry} material={materials['Dark_wood.010']} />
        <mesh geometry={nodes['restaurant-mesh_1'].geometry} material={materials['Light_wood.010']} />
        <mesh geometry={nodes['restaurant-mesh_2'].geometry} material={materials['Glass.011']} />
        <mesh geometry={nodes['restaurant-mesh_3'].geometry} material={materials['grey.010']} />
        <mesh geometry={nodes['restaurant-mesh_4'].geometry} material={materials['Black.010']} />
        <mesh geometry={nodes['restaurant-mesh_5'].geometry} material={materials.fundament} />
      </group>
      <group position={[614.898, 2076.181, 1612.265]} rotation={[-Math.PI, 0.088, -Math.PI]} scale={3}>
        <Html >
         <ToolTipRestaurant RestaurantName="Schilthornhütte 1" OpeingHours="8:30 - 17:00"/>
        </Html>
        <mesh geometry={nodes['restaurant-mesh'].geometry} material={materials['Dark_wood.010']} />
        <mesh geometry={nodes['restaurant-mesh_1'].geometry} material={materials['Light_wood.010']} />
        <mesh geometry={nodes['restaurant-mesh_2'].geometry} material={materials['Glass.011']} />
        <mesh geometry={nodes['restaurant-mesh_3'].geometry} material={materials['grey.010']} />
        <mesh geometry={nodes['restaurant-mesh_4'].geometry} material={materials['Black.010']} />
        <mesh geometry={nodes['restaurant-mesh_5'].geometry} material={materials.fundament} />
      </group>
      <group position={[-2217.465, 2916.482, 1634.611]} rotation={[-Math.PI, 0.445, -Math.PI]} scale={3}>
        <Html >
         <ToolTipRestaurant RestaurantName="Schilthornhütte 1" OpeingHours="8:30 - 17:00"/>
        </Html>
        <mesh geometry={nodes['restaurant-mesh'].geometry} material={materials['Dark_wood.010']} />
        <mesh geometry={nodes['restaurant-mesh_1'].geometry} material={materials['Light_wood.010']} />
        <mesh geometry={nodes['restaurant-mesh_2'].geometry} material={materials['Glass.011']} />
        <mesh geometry={nodes['restaurant-mesh_3'].geometry} material={materials['grey.010']} />
        <mesh geometry={nodes['restaurant-mesh_4'].geometry} material={materials['Black.010']} />
        <mesh geometry={nodes['restaurant-mesh_5'].geometry} material={materials.fundament} />
      </group>
      <group position={[2492.704, 1533.412, -1103.69]} scale={3}>
        <Html >
        <ToolTipRestaurant RestaurantName="Schilthornhütte 1" OpeingHours="8:30 - 17:00"/>
        </Html>
        <mesh geometry={nodes['restaurant-mesh'].geometry} material={materials['Dark_wood.010']} />
        <mesh geometry={nodes['restaurant-mesh_1'].geometry} material={materials['Light_wood.010']} />
        <mesh geometry={nodes['restaurant-mesh_2'].geometry} material={materials['Glass.011']} />
        <mesh geometry={nodes['restaurant-mesh_3'].geometry} material={materials['grey.010']} />
        <mesh geometry={nodes['restaurant-mesh_4'].geometry} material={materials['Black.010']} />
        <mesh geometry={nodes['restaurant-mesh_5'].geometry} material={materials.fundament} />
      </group>
    </group>
  )
}

useGLTF.preload(restaurants)