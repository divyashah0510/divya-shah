import MetaCharacter from "@/Models/MetaCharacter";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

const Character = () => {
  return (
    <Canvas
      style={{
        blockSize: "70vh",
        inlineSize: "25vw",
        insetInlineStart: "60%",
      }}
      className="rounded-2xl"
      shadows
      camera={{ position: [0, 2, 5], fov: 24 }}
    >
      <OrbitControls enableZoom={false} enableRotate={false} />
      <Suspense fallback={null}>
        <group position-y={-0.9}>
          <MetaCharacter />
        </group>
      </Suspense>
      <Environment preset="sunset" />
    </Canvas>
  );
};

export default Character;
