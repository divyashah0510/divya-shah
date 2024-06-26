import React from "react";

const Heart = () => {
  return (
    <mesh>
      {/* @ts-ignore */}
      <coneGeometry parameters={{ radialSegments: 64, heightSegments: 64,height:50 }} />
      <meshStandardMaterial color="#a8dadc" metalness={0.1} roughness={0.5} />
    </mesh>
  );
};

export default Heart;
