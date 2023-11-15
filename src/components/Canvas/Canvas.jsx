import { Canvas as R3fCanvas } from "@react-three/fiber";
import { OrbitControls, Detailed } from '@react-three/drei';

//component imports
import Light from "./Light";
import LandscapeLow from "./LandscapeLow";
import LandscapeMedium from "./LandscapeMedium";
import LandscapeHigh from "./LandscapeHigh";


const Canvas = () => {
    return ( 
        <div className="absolute canvas-container h-screen w-screen bg-darkblue z-[-1]">
            <R3fCanvas 
                camera={{
                    far: 50000, 
                    position: [6000, 2000, -6000],
                    minDistance: 300,
                    maxDistance: 300000
                }}
            >
                <Light distance={8000}/>
                <Detailed distances={[0, 450, 600]}>
                    <LandscapeHigh />
                    <LandscapeMedium />
                    <LandscapeLow />
                </Detailed>
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