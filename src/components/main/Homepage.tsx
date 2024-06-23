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
import { Typography } from "@material-tailwind/react";

const Homepage = () => {
  const [background, setBackground] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setBackground(true);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [background]);

  return (
    <main>
      {background ? (
        <div className="flex px-[2%]">
          <section className="flex flex-col my-[5%] w-full">
            {/* @ts-ignore */}
            <Typography as="h1" className="font-extrabold text-4xl font-playwrite mb-10">
              Welcome to my Portfolio
            </Typography>
            {/* @ts-ignore */}
            <Typography as="h2" className="text-gradient font-extrabold">
              Full Stack Web 
            </Typography>
            {/* @ts-ignore */}
            <Typography as="h2" className="text-gradient font-extrabold">
              Developer
            </Typography>
            {/* @ts-ignore */}
            <Typography as="p" className="text-3xl font-extrabold font-playwrite mt-10">
              <Typewriter
                options={{
                  strings: [
                    "I'm Divya Shah. A passionate Full Stack Web Developer from Mumbai, India.",
                  ],
                  autoStart: background,
                  loop: true,
                }}
              />
            </Typography>
          </section>
          <section className="my-[5%]">
            <Canvas
              style={{ blockSize: "60vh", inlineSize: "40vw" }}
              shadows
              camera={{ position: [0, 2, 5], fov: 52 }}
              className="rounded-2xl"
            >
              <Environment preset="dawn" background />
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
          </section>
        </div>
      ) : (
        <Spinner />
      )}
    </main>
  );
};
export default Homepage;
