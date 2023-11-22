import { DirectionalLightHelper } from "three";
import { useHelper } from '@react-three/drei';
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

    const [angle, setAngle] = useState(0);

    useFrame(() => {
        // setAngle(angle - 0.005);
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
                ref={directionalLightRef}
                position={[lightX, lightY, 0]}
            />
            <directionalLight 
                position={[0, 500, 0]}
                intensity={0.4}
                castShadow={false}
            />
            <Sun position={[lightX, lightY, 0]}/>
        </>
     );
}
 
export default Light;