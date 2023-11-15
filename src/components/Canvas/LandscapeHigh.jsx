// import landscapeHigh from "../../assets/gltf/landscapes/landscapeHigh.glb";
import landscapeHigh from "../../assets/testGLTF/landscapes/landscapeHigh.glb";
import { useGLTF } from '@react-three/drei'
import { Suspense, useRef } from "react";

const LandscapeHigh = () => {

    const { nodes } = useGLTF(landscapeHigh);
    const ref = useRef();

    console.log(nodes)

    return (
        <Suspense>
            <mesh 
                ref={ref}
                geometry={nodes.landscapeHigh.geometry} 
                material={nodes.landscapeHigh.material}
                scale={[1, 1, 1]}
            />
        </Suspense>
    )
}
 
export default LandscapeHigh;