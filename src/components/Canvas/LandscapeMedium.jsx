import landscapeMedium from "../../assets/testGLTF/landscapes/landscapeMed.glb";
import { useGLTF } from '@react-three/drei'
import { Suspense, useRef } from "react";

const LandscapeMedium = () => {

    const { nodes } = useGLTF(landscapeMedium);
    const ref = useRef();

    return (
        <Suspense>
            <mesh 
                ref={ref}
                geometry={nodes.landscapeMed.geometry} 
                material={nodes.landscapeMed.material} 
                scale={[1, 1, 1]}
            />
        </Suspense>
    )
}
 
export default LandscapeMedium;