import React from "react";
import { useGLTF } from "@react-three/drei";

export function LogoModel(props: any) {
  const { nodes, materials } = useGLTF("/models/gun5.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Куб002.geometry}
          material={materials["Материал.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Куб002_1.geometry}
          material={materials["Материал.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Куб002_2.geometry}
          material={materials["Материал.003"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/gun5.glb");