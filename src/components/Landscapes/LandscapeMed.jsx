import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import landscape from "../../assets/gltf/landscapes/landscapeMed-transformed.glb";

export default function LandscapeMed(props) {
    const { nodes, materials } = useGLTF(landscape)
    return (
        <group {...props} dispose={null}>
        <mesh geometry={nodes.landscapeMed.geometry} position={[0, 375.448, 0]} >
            <meshStandardMaterial color='#00ff00' />
        </mesh>
        </group>
    )
}

useGLTF.preload(landscape)