import landscapeMedium from "../../assets/gltf/landscapes/landscapeMedium.glb";
import { useGLTF } from '@react-three/drei'
import { Suspense, useRef } from "react";

const LandscapeMedium = () => {

    const { nodes } = useGLTF(landscapeMedium);
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
 
export default LandscapeMedium;