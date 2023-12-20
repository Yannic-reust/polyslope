import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import restaurants from "../../assets/gltf/restaurants.glb";
import { Html } from "@react-three/drei";
import ToolTipRestaurant from "../ToolTips/ToolTipRestaurant";

export default function Restaurants({allowShadow, refsToUse, setFocusObject}) {

  const restaurantShadow = allowShadow.buildings;
  const [activeMesh, setActiveMesh] = useState(null);
  const { nodes, materials } = useGLTF(restaurants);

  const [activeRestaurant, setActiveRestaurant] = useState(""); // which ToolTip is open

  // sets the active restaurant to open ToolTip
  const handleOpen = (name) => {
    setActiveRestaurant(name);
  };

  // no instancing used to handle clicks later

  return (
    <group dispose={null} >
      <group
        ref={refsToUse[0]}
        name="Schilthornhütte"
        position={[-102.681, 2387.01, 224.249]}
        rotation={[Math.PI, -0.838, Math.PI]}
        scale={3}
      >
        <Html
          zIndexRange={[
            activeRestaurant == "Schilthornhütte" ? 100000000 : 16777271,
            0,
          ]}
        >
          <ToolTipRestaurant
            setFocusObject={setFocusObject}
            meshRef={refsToUse[0]}
            handle={handleOpen}
            restaurant={{
              name: "Schilthornhütte",
              days: "Mo - So",
              website: "https://www.schilthornhuette.com/",
              contact: "+41 33 855 50 53",
            }}
          />
        </Html>
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh"].geometry}
          material={materials["Dark_wood.010"]}
        />
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh_1"].geometry}
          material={materials["Light_wood.010"]}
        />
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh_2"].geometry}
          material={materials["Glass.011"]}
        />
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh_3"].geometry}
          material={materials["grey.010"]}
        />
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh_4"].geometry}
          material={materials["Black.010"]}
        />
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh_5"].geometry}
          material={materials.fundament}
        />
      </group>
      <group
        ref={refsToUse[1]}
        name="Bistro_Birg"
        position={[-482.707, 2626.613, 1121.244]}
        rotation={[0, 0.047, 0]}
        scale={3}
      >
        <Html
          zIndexRange={[
            activeRestaurant == "Bistro Birg" ? 100000000 : 16777271,
            0,
          ]}
        >
          <ToolTipRestaurant
            setFocusObject={setFocusObject}
            meshRef={refsToUse[1]}
            handle={handleOpen}
            restaurant={{
              name: "Bistro Birg",
              days: "Mo - So",
              hours: "08:00 - 16:00",
              website: "https://schilthorn.ch/21/de/Bistro_Birg",
              contact: "+41 33 826 00 07",
            }}
          />
        </Html>
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh"].geometry}
          material={materials["Dark_wood.010"]}
        />
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh_1"].geometry}
          material={materials["Light_wood.010"]}
        />
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh_2"].geometry}
          material={materials["Glass.011"]}
        />
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh_3"].geometry}
          material={materials["grey.010"]}
        />
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh_4"].geometry}
          material={materials["Black.010"]}
        />
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh_5"].geometry}
          material={materials.fundament}
        />
      </group>
      <group
        ref={refsToUse[2]}
        name="Bergrestaurant_Gimmeln"
        position={[1297.245, 1756.945, 2401.545]}
        rotation={[0, -0.36, 0]}
        scale={3}
      >
        <Html
          zIndexRange={[
            activeRestaurant == "Restaurant Gimmelen" ? 100000000 : 16777271,
            0,
          ]}
        >
          <ToolTipRestaurant
            setFocusObject={setFocusObject}
            meshRef={refsToUse[2]}
            handle={handleOpen}
            restaurant={{
              name: "Restaurant Gimmelen",
              contact: "+41 33 856 21 41",
            }}
          />
        </Html>
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh"].geometry}
          material={materials["Dark_wood.010"]}
        />
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh_1"].geometry}
          material={materials["Light_wood.010"]}
        />
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh_2"].geometry}
          material={materials["Glass.011"]}
        />
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh_3"].geometry}
          material={materials["grey.010"]}
        />
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh_4"].geometry}
          material={materials["Black.010"]}
        />
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh_5"].geometry}
          material={materials.fundament}
        />
      </group>
      <group
        ref={refsToUse[3]}
        name="Hotel_Restaurant_Sonnenberg"
        position={[1352.938, 1792.656, 960.82]}
        rotation={[0, -0.458, 0]}
        scale={3}
      >
        <Html
          zIndexRange={[
            activeRestaurant == "Hotel Sonnenberg" ? 100000000 : 16777271,
            0,
          ]}
        >
          <ToolTipRestaurant
            setFocusObject={setFocusObject}
            meshRef={refsToUse[3]}
            handle={handleOpen}
            restaurant={{
              name: "Hotel Sonnenberg",
              days: "Mo - So",
              contact: "+41 33 855 11 27",
              website: "https://www.restaurant-sonnenberg.ch/",
            }}
          />
        </Html>
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh"].geometry}
          material={materials["Dark_wood.010"]}
        />
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh_1"].geometry}
          material={materials["Light_wood.010"]}
        />
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh_2"].geometry}
          material={materials["Glass.011"]}
        />
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh_3"].geometry}
          material={materials["grey.010"]}
        />
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh_4"].geometry}
          material={materials["Black.010"]}
        />
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh_5"].geometry}
          material={materials.fundament}
        />
      </group>

      <group
        ref={refsToUse[4]}
        name="Pension_Suppenalp"
        position={[1200.87, 1802.154, 1228.006]}
        rotation={[0, -1.421, 0]}
        scale={3}
      >
        <Html
          zIndexRange={[
            activeRestaurant == "Pension Suppenalp" ? 100000000 : 16777271,
            0,
          ]}
        >
          <ToolTipRestaurant
            setFocusObject={setFocusObject}
            meshRef={refsToUse[4]}
            handle={handleOpen}
            restaurant={{
              name: "Pension Suppenalp",
              days: "Mo - So",
              website: "https://www.suppenalp.ch/",
              contact: "+41 33 855 17 26",
            }}
          />
        </Html>
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh"].geometry}
          material={materials["Dark_wood.010"]}
        />
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh_1"].geometry}
          material={materials["Light_wood.010"]}
        />
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh_2"].geometry}
          material={materials["Glass.011"]}
        />
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh_3"].geometry}
          material={materials["grey.010"]}
        />
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh_4"].geometry}
          material={materials["Black.010"]}
        />
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh_5"].geometry}
          material={materials.fundament}
        />
      </group>
      <group
        name="Restaurant_Allmendhubel"
        ref={refsToUse[5]}
        position={[1899.663, 1870.255, 877.93]}
        rotation={[Math.PI, -0.179, Math.PI]}
        scale={3}
      >
        <Html
          zIndexRange={[
            activeRestaurant == "Allmendhubel" ? 100000000 : 16777271,
            0,
          ]}
        >
          <ToolTipRestaurant
            setFocusObject={setFocusObject}
            meshRef={refsToUse[5]}
            handle={handleOpen}
            restaurant={{
              name: "Allmendhubel",
              days: "Mo - So",
              hours: "09:00 - 17:00",
              website:
                "https://schilthorn.ch/25/de/Panorama_Restaurant_Allmendhubel",
              contact: "+41 33 855 25 12",
            }}
          />
        </Html>
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh"].geometry}
          material={materials["Dark_wood.010"]}
        />
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh_1"].geometry}
          material={materials["Light_wood.010"]}
        />
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh_2"].geometry}
          material={materials["Glass.011"]}
        />
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh_3"].geometry}
          material={materials["grey.010"]}
        />
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh_4"].geometry}
          material={materials["Black.010"]}
        />
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh_5"].geometry}
          material={materials.fundament}
        />
      </group>
      <group
        name="Schiltgrathüsi"
        ref={refsToUse[6]}
        position={[614.898, 2076.181, 1612.265]}
        rotation={[-Math.PI, 0.088, -Math.PI]}
        scale={3}
      >
        <Html
          zIndexRange={[
            activeRestaurant == "Schiltgrathüsi" ? 100000000 : 16777271,
            0,
          ]}
        >
          <ToolTipRestaurant
            setFocusObject={setFocusObject}
            meshRef={refsToUse[6]}
            handle={handleOpen}
            restaurant={{
              name: "Schiltgrathüsi",
              days: "Mo - So",
              website:
                "https://jungfrauregion.swiss/de/sommer/essen-und-uebernachten/gastronomie/schiltgrathuesi-bergrestaurant/",
              contact: "+41 79 742 44 55",
            }}
          />
        </Html>
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh"].geometry}
          material={materials["Dark_wood.010"]}
        />
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh_1"].geometry}
          material={materials["Light_wood.010"]}
        />
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh_2"].geometry}
          material={materials["Glass.011"]}
        />
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh_3"].geometry}
          material={materials["grey.010"]}
        />
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh_4"].geometry}
          material={materials["Black.010"]}
        />
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh_5"].geometry}
          material={materials.fundament}
        />
      </group>
      <group
        name="Winteregg"
        ref={refsToUse[7]}
        position={[2492.704, 1533.412, -1103.69]}
        rotation={[-Math.PI, 0.445, -Math.PI]}
        scale={3}
      >
        <Html
          zIndexRange={[
            activeRestaurant == "Winteregg" ? 100000000 : 16777271,
            0,
          ]}
        >
          <ToolTipRestaurant
            setFocusObject={setFocusObject}
            meshRef={refsToUse[7]}
            handle={handleOpen}
            restaurant={{
              name: "Winteregg",
              days: "Mo - So",
              website:
                "https://jungfrauregion.swiss/de/sommer/essen-und-uebernachten/gastronomie/winteregg-bergrestaurant/",
              contact: "+41 33 828 70 90",
            }}
          />
        </Html>
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh"].geometry}
          material={materials["Dark_wood.010"]}
        />
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh_1"].geometry}
          material={materials["Light_wood.010"]}
        />
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh_2"].geometry}
          material={materials["Glass.011"]}
        />
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh_3"].geometry}
          material={materials["grey.010"]}
        />
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh_4"].geometry}
          material={materials["Black.010"]}
        />
        <mesh
          castShadow={restaurantShadow}
          receiveShadow={restaurantShadow}
          geometry={nodes["restaurant-mesh_5"].geometry}
          material={materials.fundament}
        />
      </group>
      <group
        name="Restaurant_Piz-Gloria"
        ref={refsToUse[8]}
        position={[-2217.465, 2916.482, 1634.611]}
       
        scale={3}
      >
        <Html
          zIndexRange={[
            activeRestaurant == "360° Piz Gloria" ? 100000000 : 16777271,
            0,
          ]}
        >
          <ToolTipRestaurant
            setFocusObject={setFocusObject}
            meshRef={refsToUse[8]}
            handle={handleOpen}
            restaurant={{
              name: "360° Piz Gloria",
              days: "Mo - So",
              website:
                "https://jungfrauregion.swiss/de/winter/essen-und-uebernachten/gastronomie/drehrestaurant-schilthorn-piz-gloria/",
              contact: "+41 33 826 00 07",
            }}
          />
        </Html>
        <mesh castShadow={restaurantShadow} receiveShadow={restaurantShadow} name="restaurant360-mesh" geometry={nodes['restaurant360-mesh'].geometry} material={materials['glass.011']} />
        <mesh castShadow={restaurantShadow} receiveShadow={restaurantShadow} name="restaurant360-mesh_1" geometry={nodes['restaurant360-mesh_1'].geometry} material={materials['silver.010']} />
        <mesh castShadow={restaurantShadow} receiveShadow={restaurantShadow} name="restaurant360-mesh_2" geometry={nodes['restaurant360-mesh_2'].geometry} material={materials['black.014']} />
        <mesh castShadow={restaurantShadow} receiveShadow={restaurantShadow} name="restaurant360-mesh_3" geometry={nodes['restaurant360-mesh_3'].geometry} material={materials.tile} />
      </group>
    </group>
  );
}

useGLTF.preload(restaurants);
