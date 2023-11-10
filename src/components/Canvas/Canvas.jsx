import { Canvas as R3fCanvas } from "@react-three/fiber";
import { OrbitControls, Detailed } from '@react-three/drei';

//component imports
import Light from "./Light";
import LandscapeLow from "./LandscapeLow";
import LandscapeMedium from "./LandscapeMedium";
import LandscapeHigh from "./LandscapeHigh";


const Canvas = () => {
    return ( 
        <div className="canvas-container h-screen w-screen"
            style={{backgroundColor: "rgb(52,52,62)", 
                    zIndex: -1, 
                    position: "absolute"}}>
            <R3fCanvas 
                camera={{
                    far: 5000, 
                    position: [600, 200, -600],
                    minDistance: 300,
                    maxDistance: 3000
                }}
            >
                <Light distance={800}/>
                <Detailed distances={[0, 450, 600]}>
                    <LandscapeHigh />
                    <LandscapeMedium />
                    <LandscapeLow />
                </Detailed>
                <OrbitControls 
                    minDistance={300} 
                    maxDistance={2000}
                    minPolarAngle={Math.PI * 0.2}
                    maxPolarAngle={Math.PI * 0.45}
                />
            </R3fCanvas>
        </div>
     );
}
 
export default Canvas;