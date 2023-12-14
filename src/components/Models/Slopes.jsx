import React, { useEffect, useState, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import slopes from "../../assets/gltf/slopes/slopes-transformed.glb";
import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import BadgeSlopes from "../ToolTips/BadgeSlopes";
import { useSelector } from "react-redux";
import { track } from "../../store/track/trackState";

import {
  Outline,
  Selection,
  EffectComposer,
  Select,
} from "@react-three/postprocessing";

export default function Slopes(props) {
  const { nodes, materials } = useGLTF(slopes);

  const [activeSlope, setActiveSlope] = useState(""); // which ToolTip is open

  const handleOpen = (name) => {
    if (activeSlope === name) {
      setActiveSlope("");
    } else {
      setActiveSlope(name);
    }
  };

  let tracks = useSelector((state) => state.track.value);

  const ColorBlackSlope = "#3F3F45";
  const ColorRedSlope = "#F66771";
  const ColorBlueSlope = "#58AFF5";
  const ColorYellowSlope = "#F6C76E";

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

  function SlopeComp({ geometry, material, slopeMat }) {
    return (
      <Selection>
        <EffectComposer autoClear={false}>
          <Outline blur edgeStrength={10} />
        </EffectComposer>
        <Select enabled>
          <mesh geometry={geometry} material={material}>
            {slopeMat}
          </mesh>
        </Select>
      </Selection>
    );
  }

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
          <Html zIndexRange={[activeSlope == 9 ? 100000000 : 16777271, 0]}>
            <BadgeSlopes
              BadgeNumber={9}
              BageColor={ColorBlackSlope}
              Length={
                tracks[tracks.findIndex((track) => track.mappedNumber == 9)]
                  .lengthInMeter
              }
              Status={
                tracks[tracks.findIndex((track) => track.mappedNumber == 9)]
                  .status
              }
              Name={
                tracks[tracks.findIndex((track) => track.mappedNumber == 9)]
                  .name
              }
              handle={handleOpen}
            />
          </Html>

          {activeSlope !== 9 && (
            <mesh
              geometry={nodes["slope-9"].geometry}
              material={nodes["slope-9"].material}
            >
              {BLACK_SLOPE_MATERIAL}
            </mesh>
          )}
          {activeSlope == 9 && (
            <SlopeComp
              geometry={nodes["slope-9"].geometry}
              material={nodes["slope-9"].material}
              slopeMat={BLACK_SLOPE_MATERIAL}
            />
          )}
        </group>

        <group
          position={[-1726.256, 2595.291, 1278.754]}
          rotation={[0, 1.078, 0]}
          name="slope-10"
        >
          <Html zIndexRange={[activeSlope == 10 ? 100000000 : 16777271, 0]}>
            <BadgeSlopes
              BadgeNumber={10}
              BageColor={ColorBlackSlope}
              Length={
                tracks[tracks.findIndex((track) => track.mappedNumber == 10)]
                  .lengthInMeter
              }
              Status={
                tracks[tracks.findIndex((track) => track.mappedNumber == 10)]
                  .status
              }
              Name={
                tracks[tracks.findIndex((track) => track.mappedNumber == 10)]
                  .name
              }
              handle={handleOpen}
            />
          </Html>

          {activeSlope !== 10 && (
            <mesh
              geometry={nodes["slope-10"].geometry}
              material={nodes["slope-10"].material}
            >
              {BLACK_SLOPE_MATERIAL}
            </mesh>
          )}
          {activeSlope == 10 && (
            <SlopeComp
              geometry={nodes["slope-10"].geometry}
              material={nodes["slope-10"].material}
              slopeMat={BLACK_SLOPE_MATERIAL}
            />
          )}
        </group>
        <group
          name="slope-12"
          position={[-780.699, 2481.467, 974.611]}
          rotation={[0, 1.078, 0]}
        >
          <Html zIndexRange={[activeSlope == 12 ? 100000000 : 16777271, 0]}>
            <BadgeSlopes
              BadgeNumber={12}
              BageColor={ColorBlackSlope}
              Length={
                tracks[tracks.findIndex((track) => track.mappedNumber == 12)]
                  .lengthInMeter
              }
              Status={
                tracks[tracks.findIndex((track) => track.mappedNumber == 12)]
                  .status
              }
              Name={
                tracks[tracks.findIndex((track) => track.mappedNumber == 12)]
                  .name
              }
              handle={handleOpen}
            />
          </Html>

          {activeSlope !== 12 && (
            <mesh
              geometry={nodes["slope-12"].geometry}
              material={nodes["slope-12"].material}
            >
              {BLACK_SLOPE_MATERIAL}
            </mesh>
          )}
          {activeSlope == 12 && (
            <SlopeComp
              geometry={nodes["slope-12"].geometry}
              material={nodes["slope-12"].material}
              slopeMat={BLACK_SLOPE_MATERIAL}
            />
          )}
        </group>
        <group
          position={[135.335, 2258.611, 328.573]}
          rotation={[0, 1.078, 0]}
          name="slope-14"
        >
          <Html zIndexRange={[activeSlope == 14 ? 100000000 : 16777271, 0]}>
            <BadgeSlopes
              BadgeNumber={14}
              BageColor={ColorBlackSlope}
              Length={
                tracks[tracks.findIndex((track) => track.mappedNumber == 14)]
                  .lengthInMeter
              }
              Status={
                tracks[tracks.findIndex((track) => track.mappedNumber == 14)]
                  .status
              }
              Name={
                tracks[tracks.findIndex((track) => track.mappedNumber == 14)]
                  .name
              }
              handle={handleOpen}
            />
          </Html>

          {activeSlope !== 14 && (
            <mesh
              geometry={nodes["slope-14"].geometry}
              material={nodes["slope-14"].material}
            >
              {BLACK_SLOPE_MATERIAL}
            </mesh>
          )}
          {activeSlope == 14 && (
            <SlopeComp
              geometry={nodes["slope-14"].geometry}
              material={nodes["slope-14"].material}
              slopeMat={BLACK_SLOPE_MATERIAL}
            />
          )}
        </group>
        <group
          name="slope-16"
          position={[1210.173, 2001.254, 472.02]}
          rotation={[0, 1.078, 0]}
        >
          <Html zIndexRange={[activeSlope == 16 ? 100000000 : 16777271, 0]}>
            <BadgeSlopes
              BadgeNumber={16}
              BageColor={ColorBlackSlope}
              Length={
                tracks[tracks.findIndex((track) => track.mappedNumber == 16)]
                  .lengthInMeter
              }
              Status={
                tracks[tracks.findIndex((track) => track.mappedNumber == 16)]
                  .status
              }
              Name={
                tracks[tracks.findIndex((track) => track.mappedNumber == 16)]
                  .name
              }
              handle={handleOpen}
            />
          </Html>

          {activeSlope !== 16 && (
            <mesh
              geometry={nodes["slope-16"].geometry}
              material={nodes["slope-16"].material}
            >
              {BLACK_SLOPE_MATERIAL}
            </mesh>
          )}
          {activeSlope == 16 && (
            <SlopeComp
              geometry={nodes["slope-16"].geometry}
              material={nodes["slope-16"].material}
              slopeMat={BLACK_SLOPE_MATERIAL}
            />
          )}
        </group>
        <group
          name="slope-17"
          position={[576.66, 2284.289, -59.193]}
          rotation={[0, 1.078, 0]}
        >
          <Html zIndexRange={[activeSlope == 17 ? 100000000 : 16777271, 0]}>
            <BadgeSlopes
              BadgeNumber={17}
              BageColor={ColorBlackSlope}
              Length={
                tracks[tracks.findIndex((track) => track.mappedNumber == 17)]
                  .lengthInMeter
              }
              Status={
                tracks[tracks.findIndex((track) => track.mappedNumber == 17)]
                  .status
              }
              Name={
                tracks[tracks.findIndex((track) => track.mappedNumber == 17)]
                  .name
              }
              handle={handleOpen}
            />
          </Html>

          {activeSlope !== 17 && (
            <mesh
              geometry={nodes["slope-17"].geometry}
              material={nodes["slope-17"].material}
            >
              {BLACK_SLOPE_MATERIAL}
            </mesh>
          )}
          {activeSlope == 17 && (
            <SlopeComp
              geometry={nodes["slope-17"].geometry}
              material={nodes["slope-17"].material}
              slopeMat={BLACK_SLOPE_MATERIAL}
            />
          )}
        </group>
        <group
          name="slope-21"
          position={[1418.846, 1808.084, 1433.175]}
          rotation={[0, 1.078, 0]}
        >
          <Html zIndexRange={[activeSlope == 21 ? 100000000 : 16777271, 0]}>
            <BadgeSlopes
              BadgeNumber={21}
              BageColor={ColorBlackSlope}
              Length={
                tracks[tracks.findIndex((track) => track.mappedNumber == 21)]
                  .lengthInMeter
              }
              Status={
                tracks[tracks.findIndex((track) => track.mappedNumber == 21)]
                  .status
              }
              Name={
                tracks[tracks.findIndex((track) => track.mappedNumber == 21)]
                  .name
              }
              handle={handleOpen}
            />
          </Html>

          {activeSlope !== 21 && (
            <mesh
              geometry={nodes["slope-21"].geometry}
              material={nodes["slope-21"].material}
            >
              {BLACK_SLOPE_MATERIAL}
            </mesh>
          )}
          {activeSlope == 21 && (
            <SlopeComp
              geometry={nodes["slope-21"].geometry}
              material={nodes["slope-21"].material}
              slopeMat={BLACK_SLOPE_MATERIAL}
            />
          )}
        </group>
        <group
          name="slope-inferno"
          position={[-647.795, 2445.253, 408.311]}
          rotation={[0, 1.078, 0]}
        >
          <Html zIndexRange={[activeSlope == "i" ? 100000000 : 16777271, 0]}>
            <BadgeSlopes
              BadgeNumber={"i"}
              BageColor="#686868"
              Length={
                tracks[tracks.findIndex((track) => track.name == "Inferno")]
                  .lengthInMeter
              }
              Status={
                tracks[tracks.findIndex((track) => track.name == "Inferno")]
                  .status
              }
              Name={
                tracks[tracks.findIndex((track) => track.name == "Inferno")]
                  .name
              }
              handle={handleOpen}
            />
          </Html>
          {activeSlope !== "i" && (
            <mesh
              geometry={nodes["slope-inferno"].geometry}
              material={nodes["slope-inferno"].material}
            >
              {BLACK_SLOPE_MATERIAL}
            </mesh>
          )}
          {activeSlope == "i" && (
            <SlopeComp
              geometry={nodes["slope-inferno"].geometry}
              material={nodes["slope-inferno"].material}
              slopeMat={BLACK_SLOPE_MATERIAL}
            />
          )}
        </group>
      </group>
      {/* yellow slopes */}
      <group name="yellow-slopes">
        <group
          name="slope-27"
          position={[844.627, 1793.474, 2268.418]}
          rotation={[0, 1.078, 0]}
        >
          <Html
            zIndexRange={[activeSlope == 27 ? 100000000 : 16777271, 0]}
            name="slope-1"
          >
            <BadgeSlopes
              BadgeNumber={27}
              BageColor={ColorYellowSlope}
              Length={
                tracks[tracks.findIndex((track) => track.mappedNumber == 27)]
                  .lengthInMeter
              }
              Status={
                tracks[tracks.findIndex((track) => track.mappedNumber == 27)]
                  .status
              }
              Name={
                tracks[tracks.findIndex((track) => track.mappedNumber == 27)]
                  .name
              }
              handle={handleOpen}
            />
          </Html>

          {activeSlope !== 27 && (
            <mesh
              geometry={nodes["slope-27"].geometry}
              material={nodes["slope-27"].material}
            >
              {YELLOW_SLOPE_MATERIAL}
            </mesh>
          )}
          {activeSlope == 27 && (
            <SlopeComp
              geometry={nodes["slope-27"].geometry}
              material={nodes["slope-27"].material}
              slopeMat={YELLOW_SLOPE_MATERIAL}
            />
          )}
        </group>
        <group
          name="slope-finel"
          position={[1374.516, 1869.451, 1642.696]}
          rotation={[0, 1.078, 0]}
        >
          <Html
            zIndexRange={[activeSlope == "F" ? 100000000 : 16777271, 0]}
            name="slope-1"
          >
            <BadgeSlopes
              BadgeNumber={"F"}
              BageColor={ColorYellowSlope}
              Length={
                tracks[tracks.findIndex((track) => track.name == "23b Finel")]
                  .lengthInMeter
              }
              Status={
                tracks[tracks.findIndex((track) => track.name == "23b Finel")]
                  .status
              }
              Name={
                tracks[tracks.findIndex((track) => track.name == "23b Finel")]
                  .name
              }
              handle={handleOpen}
            />
          </Html>
          {activeSlope !== "F" && (
            <mesh
              geometry={nodes["slope-finel"].geometry}
              material={nodes["slope-finel"].material}
            >
              {YELLOW_SLOPE_MATERIAL}
            </mesh>
          )}
          {activeSlope == "F" && (
            <SlopeComp
              geometry={nodes["slope-finel"].geometry}
              material={nodes["slope-finel"].material}
              slopeMat={YELLOW_SLOPE_MATERIAL}
            />
          )}
        </group>
      </group>
      {/* red slopes */}
      <group name="red-slopes">
        <group
          name="slope-1"
          position={[2188.16, 1774.553, -143.673]}
          rotation={[0, 1.078, 0]}
        >
          <Html zIndexRange={[activeSlope == 1 ? 100000000 : 16777271, 0]}>
            <BadgeSlopes
              BadgeNumber={1}
              BageColor={ColorRedSlope}
              Length={
                tracks[tracks.findIndex((track) => track.mappedNumber == 1)]
                  .lengthInMeter
              }
              Status={
                tracks[tracks.findIndex((track) => track.mappedNumber == 1)]
                  .status
              }
              Name={
                tracks[tracks.findIndex((track) => track.mappedNumber == 1)]
                  .name
              }
              handle={handleOpen}
            />
          </Html>

          {activeSlope !== 1 && (
            <mesh
              geometry={nodes["slope-1"].geometry}
              material={nodes["slope-1"].material}
            >
              {RED_SLOPE_MATERIAL}
            </mesh>
          )}
          {activeSlope == 1 && (
            <SlopeComp
              geometry={nodes["slope-1"].geometry}
              material={nodes["slope-1"].material}
              hovered={activeSlope == "1"}
              slopeMat={RED_SLOPE_MATERIAL}
            />
          )}
        </group>

        <group
          name="slope-3"
          position={[2311.795, 1274.006, -2798.783]}
          rotation={[0, 1.078, 0]}
        >
          <Html zIndexRange={[activeSlope == 3 ? 100000000 : 16777271, 0]}>
            <BadgeSlopes
              BadgeNumber={3}
              BageColor={ColorRedSlope}
              Length={
                tracks[tracks.findIndex((track) => track.mappedNumber == 3)]
                  .lengthInMeter
              }
              Status={
                tracks[tracks.findIndex((track) => track.mappedNumber == 3)]
                  .status
              }
              Name={
                tracks[tracks.findIndex((track) => track.mappedNumber == 3)]
                  .name
              }
              handle={handleOpen}
            />
          </Html>

          {activeSlope !== 3 && (
            <mesh
              geometry={nodes["slope-3"].geometry}
              material={nodes["slope-3"].material}
            >
              {RED_SLOPE_MATERIAL}
            </mesh>
          )}
          {activeSlope == 3 && (
            <SlopeComp
              geometry={nodes["slope-3"].geometry}
              material={nodes["slope-3"].material}
              hovered={activeSlope == "3"}
              slopeMat={RED_SLOPE_MATERIAL}
            />
          )}
        </group>
        <group
          name="slope-5"
          position={[2188.886, 1741.278, 700.105]}
          rotation={[0, 1.078, 0]}
        >
          <Html zIndexRange={[activeSlope == 5 ? 100000000 : 16777271, 0]}>
            <BadgeSlopes
              BadgeNumber={5}
              BageColor={ColorRedSlope}
              Length={
                tracks[tracks.findIndex((track) => track.mappedNumber == 5)]
                  .lengthInMeter
              }
              Status={
                tracks[tracks.findIndex((track) => track.mappedNumber == 5)]
                  .status
              }
              Name={
                tracks[tracks.findIndex((track) => track.mappedNumber == 5)]
                  .name
              }
              handle={handleOpen}
            />
          </Html>

          {activeSlope !== 3 && (
            <mesh
              geometry={nodes["slope-5"].geometry}
              material={nodes["slope-5"].material}
            >
              {RED_SLOPE_MATERIAL}
            </mesh>
          )}
          {activeSlope == 5 && (
            <SlopeComp
              geometry={nodes["slope-5"].geometry}
              material={nodes["slope-5"].material}
              hovered={activeSlope == "5"}
              slopeMat={RED_SLOPE_MATERIAL}
            />
          )}
        </group>
        <group
          name="slope-13"
          position={[15.422, 2269.788, 406.245]}
          rotation={[0, 1.078, 0]}
        >
          <Html zIndexRange={[activeSlope == 13 ? 100000000 : 16777271, 0]}>
            <BadgeSlopes
              BadgeNumber={13}
              BageColor={ColorRedSlope}
              Length={
                tracks[tracks.findIndex((track) => track.mappedNumber == 13)]
                  .lengthInMeter
              }
              Status={
                tracks[tracks.findIndex((track) => track.mappedNumber == 13)]
                  .status
              }
              Name={
                tracks[tracks.findIndex((track) => track.mappedNumber == 13)]
                  .name
              }
              handle={handleOpen}
            />
          </Html>

          {activeSlope !== 13 && (
            <mesh
              geometry={nodes["slope-13"].geometry}
              material={nodes["slope-13"].material}
            >
              {RED_SLOPE_MATERIAL}
            </mesh>
          )}
          {activeSlope == 13 && (
            <SlopeComp
              geometry={nodes["slope-13"].geometry}
              material={nodes["slope-13"].material}
              hovered={activeSlope == "13"}
              slopeMat={RED_SLOPE_MATERIAL}
            />
          )}
        </group>
        <group
          name="slope-15"
          position={[526.266, 2256.403, 142.729]}
          rotation={[0, 1.078, 0]}
        >
          <Html zIndexRange={[activeSlope == 15 ? 100000000 : 16777271, 0]}>
            <BadgeSlopes
              BadgeNumber={15}
              BageColor={ColorRedSlope}
              Length={
                tracks[tracks.findIndex((track) => track.mappedNumber == 15)]
                  .lengthInMeter
              }
              Status={
                tracks[tracks.findIndex((track) => track.mappedNumber == 15)]
                  .status
              }
              Name={
                tracks[tracks.findIndex((track) => track.mappedNumber == 15)]
                  .name
              }
              handle={handleOpen}
            />
          </Html>

          {activeSlope !== 15 && (
            <mesh
              geometry={nodes["slope-15"].geometry}
              material={nodes["slope-15"].material}
            >
              {RED_SLOPE_MATERIAL}
            </mesh>
          )}
          {activeSlope == 15 && (
            <SlopeComp
              geometry={nodes["slope-15"].geometry}
              material={nodes["slope-15"].material}
              hovered={activeSlope == "15"}
              slopeMat={RED_SLOPE_MATERIAL}
            />
          )}
        </group>
        <group
          name="slope-22"
          position={[1120.861, 1808.589, 1298.642]}
          rotation={[0, 1.078, 0]}
        >
          <Html zIndexRange={[activeSlope == 22 ? 100000000 : 16777271, 0]}>
            <BadgeSlopes
              BadgeNumber={22}
              BageColor={ColorRedSlope}
              Length={
                tracks[tracks.findIndex((track) => track.mappedNumber == 22)]
                  .lengthInMeter
              }
              Status={
                tracks[tracks.findIndex((track) => track.mappedNumber == 22)]
                  .status
              }
              Name={
                tracks[tracks.findIndex((track) => track.mappedNumber == 22)]
                  .name
              }
              handle={handleOpen}
            />
          </Html>

          {activeSlope !== 22 && (
            <mesh
              geometry={nodes["slope-22"].geometry}
              material={nodes["slope-22"].material}
            >
              {RED_SLOPE_MATERIAL}
            </mesh>
          )}
          {activeSlope == 22 && (
            <SlopeComp
              geometry={nodes["slope-22"].geometry}
              material={nodes["slope-22"].material}
              hovered={activeSlope == "22"}
              slopeMat={RED_SLOPE_MATERIAL}
            />
          )}
        </group>
        <group
          name="slope-24"
          position={[929.924, 1882.627, 2044.65]}
          rotation={[0, 1.078, 0]}
        >
          <Html zIndexRange={[activeSlope == 24 ? 100000000 : 16777271, 0]}>
            <BadgeSlopes
              BadgeNumber={24}
              BageColor={ColorRedSlope}
              Length={
                tracks[tracks.findIndex((track) => track.mappedNumber == 24)]
                  .lengthInMeter
              }
              Status={
                tracks[tracks.findIndex((track) => track.mappedNumber == 24)]
                  .status
              }
              Name={
                tracks[tracks.findIndex((track) => track.mappedNumber == 24)]
                  .name
              }
              handle={handleOpen}
            />
          </Html>

          {activeSlope !== 24 && (
            <mesh
              geometry={nodes["slope-24"].geometry}
              material={nodes["slope-24"].material}
            >
              {RED_SLOPE_MATERIAL}
            </mesh>
          )}
          {activeSlope == 24 && (
            <SlopeComp
              geometry={nodes["slope-24"].geometry}
              material={nodes["slope-24"].material}
              hovered={activeSlope == "24"}
              slopeMat={RED_SLOPE_MATERIAL}
            />
          )}
        </group>
        <group
          name="slope-25"
          position={[1505.302, 1788.034, 1801.27]}
          rotation={[0, 1.078, 0]}
        >
          <Html zIndexRange={[activeSlope == 25 ? 100000000 : 16777271, 0]}>
            <BadgeSlopes
              BadgeNumber={25}
              BageColor={ColorRedSlope}
              Length={
                tracks[tracks.findIndex((track) => track.mappedNumber == 25)]
                  .lengthInMeter
              }
              Status={
                tracks[tracks.findIndex((track) => track.mappedNumber == 25)]
                  .status
              }
              Name={
                tracks[tracks.findIndex((track) => track.mappedNumber == 25)]
                  .name
              }
              handle={handleOpen}
            />
          </Html>

          {activeSlope !== 25 && (
            <mesh
              geometry={nodes["slope-25"].geometry}
              material={nodes["slope-25"].material}
            >
              {RED_SLOPE_MATERIAL}
            </mesh>
          )}
          {activeSlope == 25 && (
            <SlopeComp
              geometry={nodes["slope-25"].geometry}
              material={nodes["slope-25"].material}
              hovered={activeSlope == "25"}
              slopeMat={RED_SLOPE_MATERIAL}
            />
          )}
        </group>
        <group
          name="slope-26"
          position={[1651.508, 1685.584, 1979.709]}
          rotation={[0, 1.078, 0]}
        >
          <Html zIndexRange={[activeSlope == 26 ? 100000000 : 16777271, 0]}>
            <BadgeSlopes
              BadgeNumber={26}
              BageColor={ColorRedSlope}
              Length={
                tracks[tracks.findIndex((track) => track.mappedNumber == 26)]
                  .lengthInMeter
              }
              Status={
                tracks[tracks.findIndex((track) => track.mappedNumber == 26)]
                  .status
              }
              Name={
                tracks[tracks.findIndex((track) => track.mappedNumber == 26)]
                  .name
              }
              handle={handleOpen}
            />
          </Html>

          {activeSlope !== 26 && (
            <mesh
              geometry={nodes["slope-26"].geometry}
              material={nodes["slope-26"].material}
            >
              {RED_SLOPE_MATERIAL}
            </mesh>
          )}
          {activeSlope == 26 && (
            <SlopeComp
              geometry={nodes["slope-26"].geometry}
              material={nodes["slope-26"].material}
              hovered={activeSlope == "26"}
              slopeMat={RED_SLOPE_MATERIAL}
            />
          )}
        </group>
      </group>
      {/* blue slopes */}
      <group name="blue-slopes">
        <group
          name="slope-2"
          position={[2391.337, 1658.338, -414.322]}
          rotation={[0, 1.078, 0]}
        >
          <Html zIndexRange={[activeSlope == 2 ? 100000000 : 16777271, 0]}>
            <BadgeSlopes
              BadgeNumber={2}
              BageColor={ColorBlueSlope}
              Length={
                tracks[tracks.findIndex((track) => track.mappedNumber == 2)]
                  .lengthInMeter
              }
              Status={
                tracks[tracks.findIndex((track) => track.mappedNumber == 2)]
                  .status
              }
              Name={
                tracks[tracks.findIndex((track) => track.mappedNumber == 2)]
                  .name
              }
              handle={handleOpen}
            />
          </Html>

          {activeSlope !== 2 && (
            <mesh
              geometry={nodes["slope-2"].geometry}
              material={nodes["slope-2"].material}
            >
              {BLUE_SLOPE_MATERIAL}
            </mesh>
          )}
          {activeSlope == 2 && (
            <SlopeComp
              geometry={nodes["slope-2"].geometry}
              material={nodes["slope-2"].material}
              hovered={activeSlope == "2"}
              slopeMat={BLUE_SLOPE_MATERIAL}
            />
          )}
        </group>
        <group
          name="slope-4"
          position={[1982.713, 1818.805, 363.415]}
          rotation={[0, 1.078, 0]}
        >
          <Html zIndexRange={[activeSlope == 4 ? 100000000 : 16777271, 0]}>
            <BadgeSlopes
              BadgeNumber={4}
              BageColor={ColorBlueSlope}
              Length={
                tracks[tracks.findIndex((track) => track.mappedNumber == 4)]
                  .lengthInMeter
              }
              Status={
                tracks[tracks.findIndex((track) => track.mappedNumber == 4)]
                  .status
              }
              Name={
                tracks[tracks.findIndex((track) => track.mappedNumber == 4)]
                  .name
              }
              handle={handleOpen}
            />
          </Html>

          {activeSlope !== 4 && (
            <mesh
              geometry={nodes["slope-4"].geometry}
              material={nodes["slope-4"].material}
            >
              {BLUE_SLOPE_MATERIAL}
            </mesh>
          )}
          {activeSlope == 4 && (
            <SlopeComp
              geometry={nodes["slope-4"].geometry}
              material={nodes["slope-4"].material}
              hovered={activeSlope == "4"}
              slopeMat={BLUE_SLOPE_MATERIAL}
            />
          )}
        </group>

        <group
          name="slope-6"
          position={[1738.145, 1665.918, 1472.633]}
          rotation={[0, 1.078, 0]}
        >
          <Html zIndexRange={[activeSlope == 6 ? 100000000 : 16777271, 0]}>
            <BadgeSlopes
              BadgeNumber={6}
              BageColor={ColorBlueSlope}
              Length={
                tracks[tracks.findIndex((track) => track.mappedNumber == 6)]
                  .lengthInMeter
              }
              Status={
                tracks[tracks.findIndex((track) => track.mappedNumber == 6)]
                  .status
              }
              Name={
                tracks[tracks.findIndex((track) => track.mappedNumber == 6)]
                  .name
              }
              handle={handleOpen}
            />
          </Html>
          {activeSlope !== 6 && (
            <mesh
              geometry={nodes["slope-6"].geometry}
              material={nodes["slope-6"].material}
            >
              {BLUE_SLOPE_MATERIAL}
            </mesh>
          )}
          {activeSlope == 6 && (
              <SlopeComp
              geometry={nodes["slope-6"].geometry}
              material={nodes["slope-6"].material}
              hovered={activeSlope == "6"}
              slopeMat={BLUE_SLOPE_MATERIAL}
            
           />
          )}
        </group>

        <group
          name="slope-7"
          position={[1541.271, 1744.299, 1169.914]}
          rotation={[0, 1.078, 0]}
        >
          <Html zIndexRange={[activeSlope == 7 ? 100000000 : 16777271, 0]}>
            <BadgeSlopes
              BadgeNumber={7}
              BageColor={ColorBlueSlope}
              Length={
                tracks[tracks.findIndex((track) => track.mappedNumber == 7)]
                  .lengthInMeter
              }
              Status={
                tracks[tracks.findIndex((track) => track.mappedNumber == 7)]
                  .status
              }
              Name={
                tracks[tracks.findIndex((track) => track.mappedNumber == 7)]
                  .name
              }
              handle={handleOpen}
            />
          </Html>
          {activeSlope !== 7 && (
            <mesh
              geometry={nodes["slope-7"].geometry}
              material={nodes["slope-7"].material}
            >
              {BLUE_SLOPE_MATERIAL}
            </mesh>
          )}
          {activeSlope == 7 && (
              <SlopeComp
              geometry={nodes["slope-7"].geometry}
              material={nodes["slope-7"].material}
              hovered={activeSlope == "7"}
              slopeMat={BLUE_SLOPE_MATERIAL}
            
           />
          )}
        </group>

        <group
          name="slope-8"
          position={[-220.102, 2355.949, 294.359]}
          rotation={[0, 1.078, 0]}
        >
          <Html zIndexRange={[activeSlope == 8 ? 100000000 : 16777271, 0]}>
            <BadgeSlopes
              BadgeNumber={8}
              BageColor={ColorBlueSlope}
              Length={
                tracks[tracks.findIndex((track) => track.mappedNumber == 8)]
                  .lengthInMeter
              }
              Status={
                tracks[tracks.findIndex((track) => track.mappedNumber == 8)]
                  .status
              }
              Name={
                tracks[tracks.findIndex((track) => track.mappedNumber == 8)]
                  .name
              }
              handle={handleOpen}
            />
          </Html>
          {activeSlope !== 8 && (
            <mesh
              geometry={nodes["slope-8"].geometry}
              material={nodes["slope-8"].material}
            >
              {BLUE_SLOPE_MATERIAL}
            </mesh>
          )}
          {activeSlope == 8 && (
              <SlopeComp
              geometry={nodes["slope-8"].geometry}
              material={nodes["slope-8"].material}
              hovered={activeSlope == "8"}
              slopeMat={BLUE_SLOPE_MATERIAL}
            
           />
          )}
        </group>

        <group
          name="slope-20"
          position={[769.058, 1857.64, 1181.604]}
          rotation={[0, 1.078, 0]}
        >
          <Html zIndexRange={[activeSlope == 20 ? 100000000 : 16777271, 0]}>
            <BadgeSlopes
              BadgeNumber={20}
              BageColor={ColorBlueSlope}
              Length={
                tracks[tracks.findIndex((track) => track.mappedNumber == 20)]
                  .lengthInMeter
              }
              Status={
                tracks[tracks.findIndex((track) => track.mappedNumber == 20)]
                  .status
              }
              Name={
                tracks[tracks.findIndex((track) => track.mappedNumber == 20)]
                  .name
              }
              handle={handleOpen}
            />
          </Html>


          {activeSlope !== 20 && (
            <mesh
              geometry={nodes["slope-20"].geometry}
              material={nodes["slope-20"].material}
            >
              {BLUE_SLOPE_MATERIAL}
            </mesh>
          )}
          {activeSlope == 20 && (
              <SlopeComp
              geometry={nodes["slope-20"].geometry}
              material={nodes["slope-20"].material}
              hovered={activeSlope == "20"}
              slopeMat={BLUE_SLOPE_MATERIAL}
            
           />
          )}

         
        </group>

        <group
          name="slope-23"
          position={[989.343, 1909.422, 1866.41]}
          rotation={[0, 1.078, 0]}
        >
          <Html zIndexRange={[activeSlope == 23 ? 100000000 : 16777271, 0]}>
            <BadgeSlopes
              BadgeNumber={23}
              BageColor={ColorBlueSlope}
              Length={
                tracks[tracks.findIndex((track) => track.mappedNumber == 23)]
                  .lengthInMeter
              }
              Status={
                tracks[tracks.findIndex((track) => track.mappedNumber == 23)]
                  .status
              }
              Name={
                tracks[tracks.findIndex((track) => track.mappedNumber == 23)]
                  .name
              }
              handle={handleOpen}
            />
          </Html>
          {activeSlope !== 23 && (
            <mesh
              geometry={nodes["slope-23"].geometry}
              material={nodes["slope-23"].material}
            >
              {BLUE_SLOPE_MATERIAL}
            </mesh>
          )}
          {activeSlope == 23 && (
              <SlopeComp
              geometry={nodes["slope-23"].geometry}
              material={nodes["slope-23"].material}
              hovered={activeSlope == "23"}
              slopeMat={BLUE_SLOPE_MATERIAL}
            
           />
          )}

        
        </group>

        <group
          name="slope-11"
          position={[-966.101, 2486.136, 966.423]}
          rotation={[0, 1.078, 0]}
        >
          <Html zIndexRange={[activeSlope == 11 ? 100000000 : 16777271, 0]}>
            <BadgeSlopes
              BadgeNumber={11}
              BageColor={ColorBlueSlope}
              Length={
                tracks[tracks.findIndex((track) => track.mappedNumber == 11)]
                  .lengthInMeter
              }
              Status={
                tracks[tracks.findIndex((track) => track.mappedNumber == 11)]
                  .status
              }
              Name={
                tracks[tracks.findIndex((track) => track.mappedNumber == 11)]
                  .name
              }
              handle={handleOpen}
            />
          </Html>
          {activeSlope !== 11 && (
            <mesh
              geometry={nodes["slope-11"].geometry}
              material={nodes["slope-11"].material}
            >
              {BLUE_SLOPE_MATERIAL}
            </mesh>
          )}
          {activeSlope == 11 && (
              <SlopeComp
              geometry={nodes["slope-11"].geometry}
              material={nodes["slope-11"].material}
              hovered={activeSlope == "11"}
              slopeMat={BLUE_SLOPE_MATERIAL}
            
           />
          )}
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(slopes);
