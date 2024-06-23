"use client";
import React from "react";
import { useGLTF } from "@react-three/drei";

export default function IronMan(props: any) {
  const { nodes, materials } = useGLTF("models/IrnoMan.glb");
  return (
    <group {...props} dispose={null} position={[0, 0, 0]}>
      <mesh
        //   @ts-ignore
        geometry={nodes.IronMan.geometry}
        material={materials["Material.001"]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("models/IrnoMan.glb");
