import {  useSelector } from 'react-redux';
import Sun from "./Sun";


const Light = () => {

    const state = useSelector((state) => state.sun.value);

    const lightPositionX = ["8000","4000","0","-6000","-8000"]
    const lightPositionY = ["2000","8000","8000","8000","6000"]
   
    return ( 
        <>
            <directionalLight 
                position={[lightPositionX[state], lightPositionY[state], 0]}
                intensity={1}
                castShadow={false}
            />
            <Sun position={[lightPositionX[state], lightPositionY[state], 0]}/>
        </>
     );
}
 
export default Light;