"use client";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Circle,
  Cloud,
  Environment,
  OrbitControls,
  Sky,
} from "@react-three/drei";
import Typewriter from "typewriter-effect";
import MetaCharacter from "@/Models/MetaCharacter";
import Spinner from "../sub/Spinner";


const Homepage = () => {
  const [background, setBackground] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setBackground(true);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [background]);

  return (
    <main>
      {background ? (
        <>
          <section className="absolute mx-[15%] ">
            <Canvas
              style={{ blockSize: "70vh", inlineSize: "43vw" }}
              shadows
              camera={{ position: [0, 2, 5], fov: 52 }}
              className="rounded-2xl"
            >
              <Environment preset="dawn" />
              <mesh>
                <torusKnotGeometry args={[1, 0.5, 128, 32]} />
                <meshStandardMaterial
                  color={"black"}
                  metalness={1}
                  roughness={0}
                />
              </mesh>
              <OrbitControls
                autoRotate
                enableZoom={false}
                enableRotate={false}
              />
            </Canvas>
            <div className="absolute -mt-[55%] mx-[10%]">
              <h1
                className={`font-black text-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2`}
              >
                Hi, I&apos;m{" "}
                <span className="text-green-600 font-extrabold">Divya</span>
              </h1>
              <div className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
                <Typewriter
                  options={{
                    strings: [
                      "I am FullStack developer devloping websites, user interfaces and web applications",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
          </section>
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
        </>
      ) : (
        <Spinner />
      )}
    </main>
  );
};
export default Homepage;
