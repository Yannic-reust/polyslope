import { Point, Points } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const Particle = () => {
  const initialPositions = useRef([]);

  if (initialPositions.current.length === 0) {
    for (let i = 0; i < 1400; i++) {
      initialPositions.current.push([
        THREE.MathUtils.randFloatSpread(10),
        THREE.MathUtils.randFloatSpread(10),
        THREE.MathUtils.randFloatSpread(10), // Add a third dimension for Z
      ]);
    }
  }

  // Create an array to store individual speeds for each particle
  const [speeds, setSpeeds] = useState(
    Array.from({ length: 1400 }, () => THREE.MathUtils.randFloat(0.01, 0.1))
  );

  const clock = new THREE.Clock();
  useFrame(() => {
    if (clock.getElapsedTime() > 0.01) {
      // Update the position of each particle based on its speed in all three dimensions
      const newPositions = initialPositions.current.map((position, i) => [
        position[0],
        position[1] - speeds[i],
        position[2], // Retain the Z position
      ]);

      // Update speeds and reset the clock
      setSpeeds((prevSpeeds) =>
        prevSpeeds.map(() => THREE.MathUtils.randFloat(0.001, 0.025))
      );
      clock.start();

      // Update positions
      initialPositions.current = newPositions;
    }
  });

  return (
    <group>
      <Points limit={14000}>
        <pointsMaterial vertexColors size={0.12} />
        {initialPositions.current.map((position, i) => (
          <Point
            key={i}
            position={[position[0], position[1], position[2]]}
            color={[255, 255, 255]}
          />
        ))}
      </Points>
    </group>
  );
};

export default Particle;
