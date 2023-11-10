import landscapeHigh from "../../assets/gltf/landscapes/landscapeHigh.glb";
import { useGLTF } from '@react-three/drei'
import { Suspense, useRef } from "react";

const LandscapeHigh = () => {

    const { nodes } = useGLTF(landscapeHigh);
    const ref = useRef();

    return (
        <Suspense>
            <mesh 
                ref={ref}
                geometry={nodes.landscape.geometry} 
                material={nodes.landscape.material}
                scale={[0.1, 0.1, 0.1]}
            />
        </Suspense>
    )
}
 
export default LandscapeHigh;