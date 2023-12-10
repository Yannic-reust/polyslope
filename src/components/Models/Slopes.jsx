import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import slopes from "../../assets/gltf/slopes/slopes-transformed.glb";
import { Html } from "@react-three/drei";
import BadgeSlopes from "../ToolTips/BadgeSlopes";
import "./Slopes.css";

export default function Slopes(props) {
  const { nodes, materials } = useGLTF(slopes);

  const BLUE_SLOPE_MATERIAL = (
    <meshStandardMaterial
      color="#0c6eb4"
      opacity={0.8}
      transparent
      emissive="#0d3572"
      emissiveIntensity={8}
      toneMapped={false}
    />
  );
  const RED_SLOPE_MATERIAL = (
    <meshStandardMaterial
      color="#e4021c"
      opacity={0.8}
      transparent
      emissive="#f8161a"
      emissiveIntensity={8}
      toneMapped={false}
    />
  );
  const YELLOW_SLOPE_MATERIAL = (
    <meshStandardMaterial
      color="#fcea04"
      opacity={0.8}
      transparent
      emissive="#f8161a"
      emissiveIntensity={8}
      toneMapped={false}
    />
  );
  const BLACK_SLOPE_MATERIAL = (
    <meshStandardMaterial
      depthWrite={false}
      color="#000000"
      opacity={0.8}
      transparent
      emissive="#010103"
      emissiveIntensity={8}
      toneMapped={false}
    />
  );

  const moveUp = 5; // to remove z-fighting

  return (
    <group position={[0, 0 + moveUp, 0]} {...props} dispose={null}>
      {/* red black */}
      <group name="black-slopes">
        <group
          name="slope-9"
          position={[-599.927, 2481.36, 886.121]}
          rotation={[0, 1.078, 0]}
        >
          <Html>
            <BadgeSlopes BadgeNumber={9} BageColor="#3E3E44" />
          </Html>
          <mesh
            geometry={nodes["slope-9"].geometry}
            material={nodes["slope-9"].material}
          >
            {BLACK_SLOPE_MATERIAL}
          </mesh>
        </group>

        <group
          position={[-1726.256, 2595.291, 1278.754]}
          rotation={[0, 1.078, 0]}
          name="slope-10"
        >
          <Html>
            <BadgeSlopes BadgeNumber={10} BageColor="#3E3E44" />
          </Html>
          <mesh
            geometry={nodes["slope-10"].geometry}
            material={nodes["slope-10"].material}
          >
            {BLACK_SLOPE_MATERIAL}
          </mesh>
        </group>
        <group
          name="slope-12"
          position={[-780.699, 2481.467, 974.611]}
          rotation={[0, 1.078, 0]}
        >
          <Html>
            <BadgeSlopes BadgeNumber={12} BageColor="#3E3E44" />
          </Html>
          <mesh
            geometry={nodes["slope-12"].geometry}
            material={nodes["slope-12"].material}
          >
            {BLACK_SLOPE_MATERIAL}
          </mesh>
        </group>
        <group
          position={[135.335, 2258.611, 328.573]}
          rotation={[0, 1.078, 0]}
          name="slope-14"
        >
          <Html>
            <BadgeSlopes BadgeNumber={14} BageColor="#3E3E44" />
          </Html>
          <mesh
            geometry={nodes["slope-14"].geometry}
            material={nodes["slope-14"].material}
          >
            {BLACK_SLOPE_MATERIAL}
          </mesh>
        </group>
        <group
          name="slope-16"
          position={[1210.173, 2001.254, 472.02]}
          rotation={[0, 1.078, 0]}
        >
          <Html>
            <BadgeSlopes BadgeNumber={16} BageColor="#3E3E44" />
          </Html>
          <mesh
            geometry={nodes["slope-16"].geometry}
            material={nodes["slope-16"].material}
          >
            {BLACK_SLOPE_MATERIAL}
          </mesh>
        </group>
        <group
          name="slope-17"
          position={[576.66, 2284.289, -59.193]}
          rotation={[0, 1.078, 0]}
        >
          <Html>
            <BadgeSlopes BadgeNumber={17} BageColor="#3E3E44" />
          </Html>
          <mesh
            geometry={nodes["slope-17"].geometry}
            material={nodes["slope-17"].material}
          >
            {BLACK_SLOPE_MATERIAL}
          </mesh>
        </group>
        <group
          name="slope-21"
          position={[1418.846, 1808.084, 1433.175]}
          rotation={[0, 1.078, 0]}
        >
          <Html>
            <BadgeSlopes BadgeNumber={21} BageColor="#3E3E44" />
          </Html>
          <mesh
            geometry={nodes["slope-21"].geometry}
            material={nodes["slope-21"].material}
          >
            {BLACK_SLOPE_MATERIAL}
          </mesh>
        </group>
        <group
          name="slope-inferno"
          position={[-647.795, 2445.253, 408.311]}
          rotation={[0, 1.078, 0]}
        >
          <Html>
            <BadgeSlopes BadgeNumber={"i"} BageColor="#FFDA00" />
          </Html>
          <mesh
            geometry={nodes["slope-inferno"].geometry}
            material={nodes["slope-inferno"].material}
          >
            {BLACK_SLOPE_MATERIAL}
          </mesh>
        </group>
      </group>
      {/* yellow slopes */}
      <group name="yellow-slopes">
        <group
          name="slope-27"
          position={[844.627, 1793.474, 2268.418]}
          rotation={[0, 1.078, 0]}
        >
          <Html name="slope-1">
            <BadgeSlopes BadgeNumber={27} BageColor="#fcea04" />
          </Html>
          <mesh
            geometry={nodes["slope-27"].geometry}
            material={nodes["slope-27"].material}
          >
            {YELLOW_SLOPE_MATERIAL}
          </mesh>
        </group>
        <group
          name="slope-finel"
          position={[1374.516, 1869.451, 1642.696]}
          rotation={[0, 1.078, 0]}
        >
          <Html name="slope-1">
            <BadgeSlopes BadgeNumber={"F"} BageColor="#fcea04" />
          </Html>
          <mesh
            geometry={nodes["slope-finel"].geometry}
            material={nodes["slope-finel"].material}
          >
            {YELLOW_SLOPE_MATERIAL}
          </mesh>
        </group>
      </group>
      {/* red slopes */}
      <group name="red-slopes">
        <group
          name="slope-1"
          position={[2188.16, 1774.553, -143.673]}
          rotation={[0, 1.078, 0]}
        >
          <Html>
            <BadgeSlopes BadgeNumber={1} BageColor="#F66771" />
          </Html>
          <mesh
            geometry={nodes["slope-1"].geometry}
            material={nodes["slope-1"].material}
          >
            {RED_SLOPE_MATERIAL}
          </mesh>
        </group>

        <group
          name="slope-3"
          position={[2311.795, 1274.006, -2798.783]}
          rotation={[0, 1.078, 0]}
        >
          <Html>
            <BadgeSlopes BadgeNumber={3} BageColor="#F66771" />
          </Html>
          <mesh
            geometry={nodes["slope-3"].geometry}
            material={nodes["slope-3"].material}
          >
            {RED_SLOPE_MATERIAL}
          </mesh>
        </group>
        <group
          name="slope-5"
          position={[2188.886, 1741.278, 700.105]}
          rotation={[0, 1.078, 0]}
        >
          <Html>
            <BadgeSlopes BadgeNumber={5} BageColor="#F66771" />
          </Html>
          <mesh
            geometry={nodes["slope-5"].geometry}
            material={nodes["slope-5"].material}
          >
            {RED_SLOPE_MATERIAL}
          </mesh>
        </group>
        <group
          name="slope-13"
          position={[15.422, 2269.788, 406.245]}
          rotation={[0, 1.078, 0]}
        >
          <mesh
            geometry={nodes["slope-13"].geometry}
            material={nodes["slope-13"].material}
          >
            {RED_SLOPE_MATERIAL}
          </mesh>
        </group>
        <group>
          <mesh
            name="slope-15"
            geometry={nodes["slope-15"].geometry}
            material={nodes["slope-15"].material}
            position={[526.266, 2256.403, 142.729]}
            rotation={[0, 1.078, 0]}
          >
            {RED_SLOPE_MATERIAL}
          </mesh>
        </group>
        <group>
          <mesh
            name="slope-22"
            geometry={nodes["slope-22"].geometry}
            material={nodes["slope-22"].material}
            position={[1120.861, 1808.589, 1298.642]}
            rotation={[0, 1.078, 0]}
          >
            {RED_SLOPE_MATERIAL}
          </mesh>
        </group>
        <group>
          <mesh
            name="slope-24"
            geometry={nodes["slope-24"].geometry}
            material={nodes["slope-24"].material}
            position={[929.924, 1882.627, 2044.65]}
            rotation={[0, 1.078, 0]}
          >
            {RED_SLOPE_MATERIAL}
          </mesh>
        </group>
        <group>
          <mesh
            name="slope-25"
            geometry={nodes["slope-25"].geometry}
            material={nodes["slope-25"].material}
            position={[1505.302, 1788.034, 1801.27]}
            rotation={[0, 1.078, 0]}
          >
            {RED_SLOPE_MATERIAL}
          </mesh>
        </group>
        <group>
          <mesh
            name="slope-26"
            geometry={nodes["slope-26"].geometry}
            material={nodes["slope-26"].material}
            position={[1651.508, 1685.584, 1979.709]}
            rotation={[0, 1.078, 0]}
          >
            {RED_SLOPE_MATERIAL}
          </mesh>
        </group>
      </group>
      {/* blue slopes */}
      <group name="blue-slopes">
        <group
          name="slope-2"
          position={[2391.337, 1658.338, -414.322]}
          rotation={[0, 1.078, 0]}
        >
          <Html>
            <BadgeSlopes BadgeNumber={2} BageColor="#3FAAFD" />
          </Html>
          <mesh
            geometry={nodes["slope-2"].geometry}
            material={nodes["slope-2"].material}
          >
            {BLUE_SLOPE_MATERIAL}
          </mesh>
        </group>
        <group
          name="slope-2"
          position={[2391.337, 1658.338, -414.322]}
          rotation={[0, 1.078, 0]}
        >
           <Html>
            <BadgeSlopes BadgeNumber={2} BageColor="#3FAAFD" />
          </Html>
          <mesh
            geometry={nodes["slope-2"].geometry}
            material={nodes["slope-2"].material}
          >
            {BLUE_SLOPE_MATERIAL}
          </mesh>
        </group>

        <group
          name="slope-4"
          position={[1982.713, 1818.805, 363.415]}
          rotation={[0, 1.078, 0]}
        >
           <Html>
            <BadgeSlopes BadgeNumber={4} BageColor="#3FAAFD" />
          </Html>
          <mesh
            geometry={nodes["slope-4"].geometry}
            material={nodes["slope-4"].material}
          >
            {BLUE_SLOPE_MATERIAL}
          </mesh>
        </group>

        <group
          name="slope-6"
          position={[1738.145, 1665.918, 1472.633]}
          rotation={[0, 1.078, 0]}
        >
           <Html>
            <BadgeSlopes BadgeNumber={6} BageColor="#3FAAFD" />
          </Html>
          <mesh
            geometry={nodes["slope-6"].geometry}
            material={nodes["slope-6"].material}
          >
            {BLUE_SLOPE_MATERIAL}
          </mesh>
        </group>

        <group
          name="slope-7"
          position={[1541.271, 1744.299, 1169.914]}
          rotation={[0, 1.078, 0]}
        >
           <Html>
            <BadgeSlopes BadgeNumber={7} BageColor="#3FAAFD" />
          </Html>
          <mesh
            geometry={nodes["slope-7"].geometry}
            material={nodes["slope-7"].material}
          >
            {BLUE_SLOPE_MATERIAL}
          </mesh>
        </group>

        <group
          name="slope-8"
          position={[-220.102, 2355.949, 294.359]}
          rotation={[0, 1.078, 0]}
        >
           <Html>
            <BadgeSlopes BadgeNumber={8} BageColor="#3FAAFD" />
          </Html>
          <mesh
            geometry={nodes["slope-8"].geometry}
            material={nodes["slope-8"].material}
          >
            {BLUE_SLOPE_MATERIAL}
          </mesh>
        </group>

        <group
          name="slope-20"
          position={[769.058, 1857.64, 1181.604]}
          rotation={[0, 1.078, 0]}
        >
           <Html>
            <BadgeSlopes BadgeNumber={20} BageColor="#3FAAFD" />
          </Html>
          <mesh
            geometry={nodes["slope-20"].geometry}
            material={nodes["slope-20"].material}
          >
            {BLUE_SLOPE_MATERIAL}
          </mesh>
        </group>

        <group
          name="slope-23"
          position={[989.343, 1909.422, 1866.41]}
          rotation={[0, 1.078, 0]}
        >
           <Html>
            <BadgeSlopes BadgeNumber={23} BageColor="#3FAAFD" />
          </Html>
          <mesh
            geometry={nodes["slope-23"].geometry}
            material={nodes["slope-23"].material}
          >
            {BLUE_SLOPE_MATERIAL}
          </mesh>
        </group>

        <group
          name="slope-11"
          position={[-966.101, 2486.136, 966.423]}
          rotation={[0, 1.078, 0]}
        >
           <Html>
            <BadgeSlopes BadgeNumber={11} BageColor="#3FAAFD" />
          </Html>
          <mesh
            geometry={nodes["slope-11"].geometry}
            material={nodes["slope-11"].material}
          >
            {BLUE_SLOPE_MATERIAL}
          </mesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(slopes);
