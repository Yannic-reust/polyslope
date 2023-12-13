import { useRef, useState } from "react";
import { useFrame } from '@react-three/fiber'

//component imports
import Sun from "./Sun";


const Light = ({distance}) => {

    const directionalLightRef = useRef();
    /*
    //ligth helper
    useHelper(directionalLightRef, DirectionalLightHelper, 50, "white");
    */

    const [angle, setAngle] = useState(2);

    useFrame(() => {
        if (angle > 0) {
            setAngle(angle - 0.005);
        }
    })

    //calculate light position based of current time and sun position
    /*
    let date = new Date();
    let time = date.getHours();
    let angle = -((360 / 24) * time);
    angle = 0;
    */
    let lightX = Math.sin(angle) * distance;
    let lightY = Math.cos(angle) * distance;



    return ( 
        <>
            <directionalLight 
                position={[lightX, lightY, 0]}
                intensity={2}
                shadow-mapSize={4096}
                castShadow
                shadow-camera-left={-4500}
                shadow-camera-right={4500}
                shadow-camera-top={4500}
                shadow-camera-bottom={-4500}
                shadow-camera-far={15000}
            />
            <directionalLight 
                position={[0, distance, 0]} 
                intensity={0.5}
                color="#e8f0a5"
            />
            <ambientLight intensity={0.1} />
            <Sun position={[lightX, lightY, -650]}/>
        </>
     );
}
 
export default Light;