import { Canvas as R3fCanvas } from "@react-three/fiber";
import { CameraControls, Detailed } from "@react-three/drei";
import Particle from "./Particle";
import { Suspense } from "react";

export default function CanvasTest() {
  return (
    <div className="absolute canvas-container h-screen w-screen bg-darkblue z-[-1]">
      <R3fCanvas
        camera={{
          near: 5, // stops flickering when viewed from distance
          far: 50000,
          minDistance: 0,
          maxDistance: 20000,
          position: [
           0,0,0
          ],
        }}
        shadows
      >
   <Suspense fallback={null}>
          <Particle />
        </Suspense>
        <CameraControls
         
          minDistance={10}
          maxDistance={100}
          minPolarAngle={Math.PI * 0.2}
          maxPolarAngle={Math.PI * 0.45}
          target={[0, 0, 0]} // changed y position since scene is not in center
          enableRotate
          rotateSpeed={1}
        />
       
      </R3fCanvas>
    </div>
  );
}
