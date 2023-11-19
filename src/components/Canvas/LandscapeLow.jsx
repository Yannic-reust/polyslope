import landscapeLow from "../../assets/gltf/landscapes/landscapeLow.glb";
import { useGLTF } from '@react-three/drei'
import { Suspense, useRef } from "react";

const LandscapeLow = () => {

    const { nodes } = useGLTF(landscapeLow);
    const ref = useRef();

    return (
        <Suspense>
            <mesh 
                ref={ref}
                geometry={nodes.landscape.geometry} 
                material={nodes.landscape.material} 
                scale={[1, 1, 1]}
            />
        </Suspense>
    )
}
 
export default LandscapeLow;