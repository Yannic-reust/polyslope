import sun from "../../assets/gltf/sun.glb";
import { useGLTF } from '@react-three/drei'
import { Suspense, useRef } from "react";

const Sun = ({ position }) => {

    const { nodes, materials } = useGLTF(sun);
    const ref = useRef();

    return (
        <Suspense>
            <mesh 
                ref={ref}
                geometry={nodes.Sphere.geometry} 
                material={materials['Material.001']}
                position={position}
                scale={50}
            >
                <meshBasicMaterial color="yellow"/>
            </mesh>
        </Suspense>
    )
}
 
export default Sun;