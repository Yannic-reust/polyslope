import {  useSelector } from 'react-redux';
import Sun from "./Sun";
import { useFrame } from '@react-three/fiber'
import { useRef, useState } from "react";


const Light = ({distance}) => {
    const directionalLightRef = useRef();

    const [angle, setAngle] = useState(2);

    //const state = useSelector((state) => state.sun.value);
    //const lightPositionX = ["8000","4000","0","-6000","-8000"]
    //const lightPositionY = ["2000","8000","8000","8000","6000"]

    useFrame(() => {
        // setAngle(angle - 0.005);
        if (angle > 0.8) {
            setAngle(angle - 0.005);
        }
    })
   
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
                shadow-bias={0.0008}
            />
            <Sun position={[lightX, lightY, 0]}/>
            <directionalLight 
                position={[0, distance, 0]} 
                intensity={0.5}
                color="#e8f0a5"
            />
            <ambientLight intensity={0.1} />
            {/*
            <directionalLight 
                position={[lightPositionX[state], lightPositionY[state], 0]}
                intensity={1}
                castShadow={false}
            />
            <Sun position={[lightPositionX[state], lightPositionY[state], 0]}/>
            */}
        </>
     );
}
 
export default Light;