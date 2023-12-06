import React, { useRef, useState  } from 'react'
import { useGLTF } from '@react-three/drei'
import restaurants from "../../assets/gltf/restaurants.glb";
import { Html } from "@react-three/drei"
import ToolTipRestaurant from '../ToolTips/ToolTipRestaurant';

// no instancing used to handle clicks later
export default function Restaurants({controls}) {

  const schilthornRef = useRef();
  const schilthornRef1 = useRef();
  const schilthornRef2 = useRef();
  const schilthornRef3 = useRef();
  const schilthornRef4 = useRef();
  const schilthornRef5 = useRef();
  const schilthornRef6 = useRef();
  const schilthornRef7 = useRef();
  const schilthornRef8 = useRef();
  const [activeMesh, setActiveMesh] = useState(null);

  function focus(objRef) {
    if (activeMesh == objRef) {
      controls.current.setLookAt(5500, 6000, 0, 0, 0, 0, true);
    } else {
      let obj = objRef.current;
      let x = obj.position.x;
      let y = obj.position.y;
      let z = obj.position.z;
      controls.current.setLookAt( x + 200, y + 400, z + 200, x, y, z, true );
      setActiveMesh(objRef);
    }
  }

  const { nodes, materials } = useGLTF(restaurants)

  return (
    <group dispose={null}>
      <group ref={schilthornRef} position={[-102.681, 2387.01, 224.249]} rotation={[Math.PI, -0.838, Math.PI]} scale={3}>
        <Html >
          <ToolTipRestaurant meshRef={schilthornRef} event={focus} RestaurantName="Schilthornhütte" OpeningHours="8:30 - 17:00"/>
        </Html>
        <mesh geometry={nodes['restaurant-mesh'].geometry} material={materials['Dark_wood.010']} />
        <mesh geometry={nodes['restaurant-mesh_1'].geometry} material={materials['Light_wood.010']} />
        <mesh geometry={nodes['restaurant-mesh_2'].geometry} material={materials['Glass.011']} />
        <mesh geometry={nodes['restaurant-mesh_3'].geometry} material={materials['grey.010']} />
        <mesh geometry={nodes['restaurant-mesh_4'].geometry} material={materials['Black.010']} />
        <mesh geometry={nodes['restaurant-mesh_5'].geometry} material={materials.fundament} />
      </group>
      <group ref={schilthornRef1} position={[-482.707, 2626.613, 1121.244]} rotation={[0, 0.047, 0]} scale={3}>
        <Html >
        <ToolTipRestaurant meshRef={schilthornRef1} event={focus} RestaurantName="Schilthornhütte 1" OpeningHours="8:30 - 17:00"/>
        </Html>
        <mesh geometry={nodes['restaurant-mesh'].geometry} material={materials['Dark_wood.010']} />
        <mesh geometry={nodes['restaurant-mesh_1'].geometry} material={materials['Light_wood.010']} />
        <mesh geometry={nodes['restaurant-mesh_2'].geometry} material={materials['Glass.011']} />
        <mesh geometry={nodes['restaurant-mesh_3'].geometry} material={materials['grey.010']} />
        <mesh geometry={nodes['restaurant-mesh_4'].geometry} material={materials['Black.010']} />
        <mesh geometry={nodes['restaurant-mesh_5'].geometry} material={materials.fundament} />
      </group>
      <group ref={schilthornRef2} position={[1297.245, 1756.945, 2401.545]} rotation={[0, -0.36, 0]} scale={3}>
        <Html >
         <ToolTipRestaurant meshRef={schilthornRef2} event={focus} RestaurantName="Schilthornhütte 2" OpeningHours="8:30 - 17:00"/>
        </Html>
        <mesh geometry={nodes['restaurant-mesh'].geometry} material={materials['Dark_wood.010']} />
        <mesh geometry={nodes['restaurant-mesh_1'].geometry} material={materials['Light_wood.010']} />
        <mesh geometry={nodes['restaurant-mesh_2'].geometry} material={materials['Glass.011']} />
        <mesh geometry={nodes['restaurant-mesh_3'].geometry} material={materials['grey.010']} />
        <mesh geometry={nodes['restaurant-mesh_4'].geometry} material={materials['Black.010']} />
        <mesh geometry={nodes['restaurant-mesh_5'].geometry} material={materials.fundament} />
      </group>
      <group ref={schilthornRef3} position={[1352.938, 1792.656, 960.82]} rotation={[0, -0.458, 0]} scale={3}>
        <Html >
         <ToolTipRestaurant meshRef={schilthornRef3} event={focus} RestaurantName="Schilthornhütte 3" OpeningHours="8:30 - 17:00"/>
        </Html>
        <mesh geometry={nodes['restaurant-mesh'].geometry} material={materials['Dark_wood.010']} />
        <mesh geometry={nodes['restaurant-mesh_1'].geometry} material={materials['Light_wood.010']} />
        <mesh geometry={nodes['restaurant-mesh_2'].geometry} material={materials['Glass.011']} />
        <mesh geometry={nodes['restaurant-mesh_3'].geometry} material={materials['grey.010']} />
        <mesh geometry={nodes['restaurant-mesh_4'].geometry} material={materials['Black.010']} />
        <mesh geometry={nodes['restaurant-mesh_5'].geometry} material={materials.fundament} />
      </group>
      <group ref={schilthornRef4} position={[1200.87, 1802.154, 1228.006]} rotation={[0, -1.421, 0]} scale={3}>
        <Html >
         <ToolTipRestaurant meshRef={schilthornRef4} event={focus} RestaurantName="Schilthornhütte 4" OpeningHours="8:30 - 17:00"/>
        </Html>
        <mesh geometry={nodes['restaurant-mesh'].geometry} material={materials['Dark_wood.010']} />
        <mesh geometry={nodes['restaurant-mesh_1'].geometry} material={materials['Light_wood.010']} />
        <mesh geometry={nodes['restaurant-mesh_2'].geometry} material={materials['Glass.011']} />
        <mesh geometry={nodes['restaurant-mesh_3'].geometry} material={materials['grey.010']} />
        <mesh geometry={nodes['restaurant-mesh_4'].geometry} material={materials['Black.010']} />
        <mesh geometry={nodes['restaurant-mesh_5'].geometry} material={materials.fundament} />
      </group>
      <group ref={schilthornRef5} position={[1899.663, 1870.255, 877.93]} rotation={[Math.PI, -0.179, Math.PI]} scale={3}>
        <Html >
         <ToolTipRestaurant meshRef={schilthornRef5} event={focus} RestaurantName="Schilthornhütte 5" OpeningHours="8:30 - 17:00"/>
        </Html>
        <mesh geometry={nodes['restaurant-mesh'].geometry} material={materials['Dark_wood.010']} />
        <mesh geometry={nodes['restaurant-mesh_1'].geometry} material={materials['Light_wood.010']} />
        <mesh geometry={nodes['restaurant-mesh_2'].geometry} material={materials['Glass.011']} />
        <mesh geometry={nodes['restaurant-mesh_3'].geometry} material={materials['grey.010']} />
        <mesh geometry={nodes['restaurant-mesh_4'].geometry} material={materials['Black.010']} />
        <mesh geometry={nodes['restaurant-mesh_5'].geometry} material={materials.fundament} />
      </group>
      <group ref={schilthornRef6} position={[614.898, 2076.181, 1612.265]} rotation={[-Math.PI, 0.088, -Math.PI]} scale={3}>
        <Html >
         <ToolTipRestaurant meshRef={schilthornRef6} event={focus} RestaurantName="Schilthornhütte 6" OpeningHours="8:30 - 17:00"/>
        </Html>
        <mesh geometry={nodes['restaurant-mesh'].geometry} material={materials['Dark_wood.010']} />
        <mesh geometry={nodes['restaurant-mesh_1'].geometry} material={materials['Light_wood.010']} />
        <mesh geometry={nodes['restaurant-mesh_2'].geometry} material={materials['Glass.011']} />
        <mesh geometry={nodes['restaurant-mesh_3'].geometry} material={materials['grey.010']} />
        <mesh geometry={nodes['restaurant-mesh_4'].geometry} material={materials['Black.010']} />
        <mesh geometry={nodes['restaurant-mesh_5'].geometry} material={materials.fundament} />
      </group>
      <group ref={schilthornRef7} position={[-2217.465, 2916.482, 1634.611]} rotation={[-Math.PI, 0.445, -Math.PI]} scale={3}>
        <Html >
         <ToolTipRestaurant meshRef={schilthornRef7} event={focus} RestaurantName="Schilthornhütte 7" OpeningHours="8:30 - 17:00"/>
        </Html>
        <mesh geometry={nodes['restaurant-mesh'].geometry} material={materials['Dark_wood.010']} />
        <mesh geometry={nodes['restaurant-mesh_1'].geometry} material={materials['Light_wood.010']} />
        <mesh geometry={nodes['restaurant-mesh_2'].geometry} material={materials['Glass.011']} />
        <mesh geometry={nodes['restaurant-mesh_3'].geometry} material={materials['grey.010']} />
        <mesh geometry={nodes['restaurant-mesh_4'].geometry} material={materials['Black.010']} />
        <mesh geometry={nodes['restaurant-mesh_5'].geometry} material={materials.fundament} />
      </group>
      <group ref={schilthornRef8} position={[2492.704, 1533.412, -1103.69]} scale={3}>
        <Html >
        <ToolTipRestaurant meshRef={schilthornRef8} event={focus} RestaurantName="Schilthornhütte 8" OpeningHours="8:30 - 17:00"/>
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
