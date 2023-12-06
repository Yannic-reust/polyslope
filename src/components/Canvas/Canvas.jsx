import { Canvas as R3fCanvas } from "@react-three/fiber";
import { CameraControls, Detailed } from '@react-three/drei';
import { useRef } from "react";

//component imports
import SetUpControls from "./SetUpControls";
import Light from "./Light";
import LandscapeLow from "../Landscapes/LandscapeLow";
import LandscapeHigh from "../Landscapes/LandscapeHigh";
import LandscapeMed from "../Landscapes/LandscapeMed";
import Trees from "../Models/Trees";
import Restaurants from "../Models/Restaurants";
import Lifts from "../Models/Lifts";
import Slopes from "../Models/Slopes";
 


const Canvas = () => {

    const ref = useRef();
    const controlerRef = useRef();

    return ( 
        <div className="absolute canvas-container h-screen w-screen bg-darkblue z-[-1]">
            <R3fCanvas 
                camera={{
                    near: 5, // stops flickering when viewed from distance
                    far: 50000,
                    position: [5500, 6000, 0],
                    minDistance: 3000,
                    maxDistance: 300000
                }}
            >
                <CameraControls 
                    ref={controlerRef}
                    minDistance={300} 
                    maxDistance={20000}
                    minPolarAngle={Math.PI * 0.2}
                    maxPolarAngle={Math.PI * 0.45}
                    enableRotate
                    rotateSpeed={1}
                    target={[0,0,-637.425]}
                />
                <Light distance={8000}/>
                <Detailed distances={[0, 4500, 6000]}>
                    <LandscapeHigh />
                    <LandscapeMed />
                    <LandscapeLow view={controlerRef} />
                </Detailed>
                <Restaurants controls={controlerRef} />
                <Lifts />
                <Trees />
                <Slopes />
                <SetUpControls controls={controlerRef}/>
            </R3fCanvas>
        </div>
     );
}

 
export default Canvas;