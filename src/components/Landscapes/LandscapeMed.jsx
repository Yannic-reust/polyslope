import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import landscape from "../../assets/gltf/landscapes/landscapeMedCut-transformed.glb";

export default function LandscapeMed(props) {
    const { nodes, materials } = useGLTF(landscape)
    return (
        <group {...props} dispose={null}>
        <mesh geometry={nodes.landscapeMed.geometry} position={[0, 375.448, 0]} >
            <meshStandardMaterial color='#F0F0F2' emissive="#F0F0F2" emissiveIntensity={0.14} />
        </mesh>
        </group>
    )
}

useGLTF.preload(landscape)