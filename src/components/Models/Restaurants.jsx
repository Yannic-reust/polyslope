import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import restaurants from "../../assets/gltf/restaurants.glb";
import { Html } from "@react-three/drei"
import ToolTipRestaurant from '../ToolTips/ToolTipRestaurant';

// no instancing used to handle clicks later
export default function Restaurants(props) {
  const { nodes, materials } = useGLTF(restaurants)
  return (
    <group {...props} dispose={null}>
      <group name="Schilthornhütte" position={[-102.681, 2387.01, 224.249]} rotation={[Math.PI, -0.838, Math.PI]} scale={3}>
        <Html >
          <ToolTipRestaurant RestaurantName="Schilthornhütte" OpeningHours="8:30 - 17:00"/>
        </Html>
        <mesh name="restaurant-mesh" geometry={nodes['restaurant-mesh'].geometry} material={materials['Dark_wood.010']} />
        <mesh name="restaurant-mesh_1" geometry={nodes['restaurant-mesh_1'].geometry} material={materials['Light_wood.010']} />
        <mesh name="restaurant-mesh_2" geometry={nodes['restaurant-mesh_2'].geometry} material={materials['Glass.011']} />
        <mesh name="restaurant-mesh_3" geometry={nodes['restaurant-mesh_3'].geometry} material={materials['grey.010']} />
        <mesh name="restaurant-mesh_4" geometry={nodes['restaurant-mesh_4'].geometry} material={materials['Black.010']} />
        <mesh name="restaurant-mesh_5" geometry={nodes['restaurant-mesh_5'].geometry} material={materials.fundament} />
      </group>

      <group name="Bistro_Birg" position={[-519.538, 2628.053, 1120.713]} rotation={[-Math.PI, 0.014, -Math.PI]} scale={3}>
        <Html >
          <ToolTipRestaurant RestaurantName="Schilthornhütte 1" OpeningHours="8:30 - 17:00"/>
        </Html>
        <mesh name="restaurant-mesh" geometry={nodes['restaurant-mesh'].geometry} material={materials['Dark_wood.010']} />
        <mesh name="restaurant-mesh_1" geometry={nodes['restaurant-mesh_1'].geometry} material={materials['Light_wood.010']} />
        <mesh name="restaurant-mesh_2" geometry={nodes['restaurant-mesh_2'].geometry} material={materials['Glass.011']} />
        <mesh name="restaurant-mesh_3" geometry={nodes['restaurant-mesh_3'].geometry} material={materials['grey.010']} />
        <mesh name="restaurant-mesh_4" geometry={nodes['restaurant-mesh_4'].geometry} material={materials['Black.010']} />
        <mesh name="restaurant-mesh_5" geometry={nodes['restaurant-mesh_5'].geometry} material={materials.fundament} />
      </group>

      <group name="Bergrestaurant_Gimmeln" position={[1297.245, 1756.945, 2401.545]} rotation={[0, -0.36, 0]} scale={3}>
        <Html >
          <ToolTipRestaurant RestaurantName="Schilthornhütte 1" OpeningHours="8:30 - 17:00"/>
        </Html>
        <mesh name="restaurant-mesh" geometry={nodes['restaurant-mesh'].geometry} material={materials['Dark_wood.010']} />
        <mesh name="restaurant-mesh_1" geometry={nodes['restaurant-mesh_1'].geometry} material={materials['Light_wood.010']} />
        <mesh name="restaurant-mesh_2" geometry={nodes['restaurant-mesh_2'].geometry} material={materials['Glass.011']} />
        <mesh name="restaurant-mesh_3" geometry={nodes['restaurant-mesh_3'].geometry} material={materials['grey.010']} />
        <mesh name="restaurant-mesh_4" geometry={nodes['restaurant-mesh_4'].geometry} material={materials['Black.010']} />
        <mesh name="restaurant-mesh_5" geometry={nodes['restaurant-mesh_5'].geometry} material={materials.fundament} />
      </group>
      
      <group name="Hotel_Restaurant_Sonnenberg" position={[1352.938, 1792.656, 960.82]} rotation={[0, -0.458, 0]} scale={3}>
        <Html >
          <ToolTipRestaurant RestaurantName="Schilthornhütte 1" OpeningHours="8:30 - 17:00"/>
        </Html>
        <mesh name="restaurant-mesh" geometry={nodes['restaurant-mesh'].geometry} material={materials['Dark_wood.010']} />
        <mesh name="restaurant-mesh_1" geometry={nodes['restaurant-mesh_1'].geometry} material={materials['Light_wood.010']} />
        <mesh name="restaurant-mesh_2" geometry={nodes['restaurant-mesh_2'].geometry} material={materials['Glass.011']} />
        <mesh name="restaurant-mesh_3" geometry={nodes['restaurant-mesh_3'].geometry} material={materials['grey.010']} />
        <mesh name="restaurant-mesh_4" geometry={nodes['restaurant-mesh_4'].geometry} material={materials['Black.010']} />
        <mesh name="restaurant-mesh_5" geometry={nodes['restaurant-mesh_5'].geometry} material={materials.fundament} />
      </group>

      <group name="Pension_Suppenalp" position={[1200.87, 1802.154, 1228.006]} rotation={[0, -1.421, 0]} scale={3}>
        <Html >
          <ToolTipRestaurant RestaurantName="Schilthornhütte 1" OpeningHours="8:30 - 17:00"/>
        </Html>
        <mesh name="restaurant-mesh" geometry={nodes['restaurant-mesh'].geometry} material={materials['Dark_wood.010']} />
        <mesh name="restaurant-mesh_1" geometry={nodes['restaurant-mesh_1'].geometry} material={materials['Light_wood.010']} />
        <mesh name="restaurant-mesh_2" geometry={nodes['restaurant-mesh_2'].geometry} material={materials['Glass.011']} />
        <mesh name="restaurant-mesh_3" geometry={nodes['restaurant-mesh_3'].geometry} material={materials['grey.010']} />
        <mesh name="restaurant-mesh_4" geometry={nodes['restaurant-mesh_4'].geometry} material={materials['Black.010']} />
        <mesh name="restaurant-mesh_5" geometry={nodes['restaurant-mesh_5'].geometry} material={materials.fundament} />
      </group>

      <group name="Restaurant_Allmendhubel" position={[1881.04, 1879.211, 890.186]} rotation={[Math.PI, -0.179, Math.PI]} scale={3}>
        <Html >
          <ToolTipRestaurant RestaurantName="Schilthornhütte 1" OpeningHours="8:30 - 17:00"/>
        </Html>
        <mesh name="restaurant-mesh" geometry={nodes['restaurant-mesh'].geometry} material={materials['Dark_wood.010']} />
        <mesh name="restaurant-mesh_1" geometry={nodes['restaurant-mesh_1'].geometry} material={materials['Light_wood.010']} />
        <mesh name="restaurant-mesh_2" geometry={nodes['restaurant-mesh_2'].geometry} material={materials['Glass.011']} />
        <mesh name="restaurant-mesh_3" geometry={nodes['restaurant-mesh_3'].geometry} material={materials['grey.010']} />
        <mesh name="restaurant-mesh_4" geometry={nodes['restaurant-mesh_4'].geometry} material={materials['Black.010']} />
        <mesh name="restaurant-mesh_5" geometry={nodes['restaurant-mesh_5'].geometry} material={materials.fundament} />
      </group>

      <group name="Schiltgrathüsi" position={[614.898, 2076.181, 1612.265]} rotation={[-Math.PI, 0.088, -Math.PI]} scale={3}>
        <Html >
          <ToolTipRestaurant RestaurantName="Schilthornhütte 1" OpeningHours="8:30 - 17:00"/>
        </Html>
        <mesh name="restaurant-mesh" geometry={nodes['restaurant-mesh'].geometry} material={materials['Dark_wood.010']} />
        <mesh name="restaurant-mesh_1" geometry={nodes['restaurant-mesh_1'].geometry} material={materials['Light_wood.010']} />
        <mesh name="restaurant-mesh_2" geometry={nodes['restaurant-mesh_2'].geometry} material={materials['Glass.011']} />
        <mesh name="restaurant-mesh_3" geometry={nodes['restaurant-mesh_3'].geometry} material={materials['grey.010']} />
        <mesh name="restaurant-mesh_4" geometry={nodes['restaurant-mesh_4'].geometry} material={materials['Black.010']} />
        <mesh name="restaurant-mesh_5" geometry={nodes['restaurant-mesh_5'].geometry} material={materials.fundament} />
      </group>

      <group name="Winteregg" position={[2492.704, 1533.412, -1103.69]} scale={3}>
        <Html >
          <ToolTipRestaurant RestaurantName="Schilthornhütte 1" OpeningHours="8:30 - 17:00"/>
        </Html>
        <mesh name="restaurant-mesh" geometry={nodes['restaurant-mesh'].geometry} material={materials['Dark_wood.010']} />
        <mesh name="restaurant-mesh_1" geometry={nodes['restaurant-mesh_1'].geometry} material={materials['Light_wood.010']} />
        <mesh name="restaurant-mesh_2" geometry={nodes['restaurant-mesh_2'].geometry} material={materials['Glass.011']} />
        <mesh name="restaurant-mesh_3" geometry={nodes['restaurant-mesh_3'].geometry} material={materials['grey.010']} />
        <mesh name="restaurant-mesh_4" geometry={nodes['restaurant-mesh_4'].geometry} material={materials['Black.010']} />
        <mesh name="restaurant-mesh_5" geometry={nodes['restaurant-mesh_5'].geometry} material={materials.fundament} />
      </group>

      <group name="Restaurant_Piz-Gloria" position={[-2219.763, 2915.514, 1627.045]} rotation={[-Math.PI, 0.083, -Math.PI]} scale={1.152}>
        <Html >
          <ToolTipRestaurant RestaurantName="Schilthornhütte 1" OpeningHours="8:30 - 17:00"/>
        </Html>
        <mesh name="restaurant360-mesh" geometry={nodes['restaurant360-mesh'].geometry} material={materials['glass.011']} />
        <mesh name="restaurant360-mesh_1" geometry={nodes['restaurant360-mesh_1'].geometry} material={materials['silver.010']} />
        <mesh name="restaurant360-mesh_2" geometry={nodes['restaurant360-mesh_2'].geometry} material={materials['black.014']} />
        <mesh name="restaurant360-mesh_3" geometry={nodes['restaurant360-mesh_3'].geometry} material={materials.tile} />
      </group>
    </group>
  )
}

useGLTF.preload(restaurants)
