"use client";
import { useLoader } from "@react-three/fiber";
import React from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";

const TorusKnot = () => {
  // @ts-ignore
  const colorMap = useLoader(TextureLoader, "/images/textures.jpg");
  return (
    <mesh rotation={[0, 90, 20]}>
      {/* @ts-ignore */}
      <torusKnotGeometry parameters={{ tubularSegments: 300 }} />
      {/* @ts-ignore */}
      <meshStandardMaterial color="#1d3557" metalness={0.1} roughness={0.5} />
      {/* <meshMatcapMaterial color="#1d3557" /> */}
    </mesh>
  );
};

export default TorusKnot;
