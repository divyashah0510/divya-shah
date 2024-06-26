import React from "react";

const Torus = () => {
  return (
    <mesh>
      {/* @ts-ignore */}
      <torusGeometry parameters={{ tubularSegments: 200 }} />
      <meshStandardMaterial color="#457b9d" metalness={0.1} roughness={0.3}  />
    </mesh>
  );
};

export default Torus;
