import { Point, Points } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const SnowFlackes = () => {
  const initialPositions = useRef([]);

  if (initialPositions.current.length === 0) {
    for (let i = 0; i < 1800; i++) {
      initialPositions.current.push([
        THREE.MathUtils.randFloatSpread(10) * 800,
        THREE.MathUtils.randFloatSpread(10),
        THREE.MathUtils.randFloatSpread(10) * 800 - 600, // Add a third dimension for Z
      ]);
    }
  }

  // Create an array to store individual speeds for each particle
  const [speeds, setSpeeds] = useState(
    Array.from({ length: 1400 }, () => THREE.MathUtils.randFloat(0.01, 0.1))
  );

  const clock = new THREE.Clock();
  useFrame(() => {
    if (clock.getElapsedTime() > 0.1) {
      // Update the position of each particle based on its speed in all three dimensions
      const newPositions = initialPositions.current.map((position, i) => [
        position[0],
        updatePostionZ(position[1], speeds[i]),
        position[2],
      ]);

      // Update speeds and reset the clock
      setSpeeds((prevSpeeds) =>
        prevSpeeds.map(() => THREE.MathUtils.randFloat(0.01, 0.025))
      );
      clock.start();
      // console.log(newPositions[1])
      // Update positions
      initialPositions.current = newPositions;
    }
  });

  const updatePostionZ = (i, e) => {
    if (i - e <= -5) {
      return 1;
    } else {
      return i - e;
    }
  };

  return (
    <group>
      <Points limit={1800}>
        <pointsMaterial vertexColors size={30} />
        {initialPositions.current.map((position, i) => (
          <Point
            key={i}
            position={[position[0], position[1] * 400 + 3000, position[2]]}
            color={[255, 255, 255]}
          />
        ))}
      </Points>
    </group>
  );
};

export default SnowFlackes;
