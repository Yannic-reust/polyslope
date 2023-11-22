import { Canvas as R3fCanvas } from "@react-three/fiber";
import { OrbitControls, Detailed } from '@react-three/drei';

//component imports
import Light from "./Light";
import LandscapeLow from "../Landscapes/LandscapeLow";
import LandscapeHigh from "../Landscapes/LandscapeHigh";
import LandscapeMed from "../Landscapes/LandscapeMed";
import Trees from "../Models/Trees";
import Restaurants from "../Models/Restaurants";
import Lifts from "../Models/Lifts";
import Slopes from "../Models/Slope-23";


const Canvas = () => {
    return ( 
        <div className="absolute canvas-container h-screen w-screen bg-darkblue z-[-1]">
            <R3fCanvas 
                camera={{
                    near: 5, // stops flickering when viewed from distance
                    far: 50000, 
                    position: [6000, 6000, 0],
                    minDistance: 3000,
                    maxDistance: 300000
                }}
            >
                <Light distance={8000}/>
                <Detailed distances={[0, 4500, 6000]}>
                    <LandscapeHigh />
                    <LandscapeMed />
                    <LandscapeLow />
                </Detailed>
                <Restaurants />
                <Lifts />
                <Trees />
                <Slopes />
                <OrbitControls 
                    minDistance={300} 
                    maxDistance={20000}
                    minPolarAngle={Math.PI * 0.2}
                    maxPolarAngle={Math.PI * 0.45}
                />
            </R3fCanvas>
        </div>
     );
}
 
export default Canvas;