import { useFrame } from "@react-three/fiber";
import { useEffect } from "react";


const Loading = ({setLoading}) => {

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    });

    return ( 
        <>
        </>
     )
}
 
export default Loading;