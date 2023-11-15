import restaurantsHigh from "../../assets/testGLTF/restaurantsHigh.glb";
import { useGLTF } from '@react-three/drei'
import { Suspense, useRef } from "react";

const RestaurantsHigh = () => {

    const { nodes } = useGLTF(restaurantsHigh);
    const ref = useRef();

    console.log(nodes)

    return (
        <Suspense>
            { /*<mesh 
                ref={ref}
                geometry={nodes.landscape.geometry} 
                material={nodes.landscape.material}
                scale={[1, 1, 1]}
    /> */}
            <primitive object={ nodes } />
        </Suspense>
    )
}
 
export default RestaurantsHigh;