import { Canvas as R3fCanvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Detailed } from '@react-three/drei';
import { useEffect } from "react";

//component imports
import Light from "./Light";
import LandscapeLow from "../Landscapes/LandscapeLow";
import LandscapeHigh from "../Landscapes/LandscapeHigh";
import LandscapeMed from "../Landscapes/LandscapeMed";
import Trees from "../Models/Trees";
import Restaurants from "../Models/Restaurants";
import Lifts from "../Models/Lifts";
import Slopes from "../Models/Slopes";
import Huts from "../Models/Huts";
import EasterEgg from "../Models/EasterEgg";
import Loading from "./Loading";


const Canvas = ({setLoading}) => {

    return ( 
        <div className="absolute canvas-container h-screen w-screen bg-darkblue z-[-1]">
            <R3fCanvas 
                camera={{
                    near: 5, // stops flickering when viewed from distance
                    far: 50000,
                    position: [5500, 6000, 0],
                    minDistance: 3000,
                    maxDistance: 300000,
                }}
            >
                <Light />
                <Detailed distances={[0, 4500, 6000]}>
                    <LandscapeHigh />
                    <LandscapeMed />
                    <LandscapeLow />
                </Detailed>
                <Detailed distances={[0, 4500, 6000]}>
                    <EasterEgg />
                    <group></group>
                    <group></group>
                </Detailed>
                <Restaurants />
                <Lifts />
                <Slopes />  
                <Trees />
                <Huts />
                <OrbitControls 
                    minDistance={300} 
                    maxDistance={20000}
                    minPolarAngle={Math.PI * 0.2}
                    maxPolarAngle={Math.PI * 0.45}
                    target={[0,0,-637.425]} // changed y position since scene is not in center
                />
                <Loading setLoading={setLoading} />
            </R3fCanvas>
        </div>
     );
}
 
export default Canvas;