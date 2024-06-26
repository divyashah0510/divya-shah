import React from 'react'

const Icosedan = () => {
  return (
    <mesh>
        <icosahedronGeometry/>
        <meshStandardMaterial color="#f1faee" metalness={0.1} roughness={0.5}/>
    </mesh>
  )
}

export default Icosedan