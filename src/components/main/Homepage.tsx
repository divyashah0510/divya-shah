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
import path from "path";
import { useRouter } from "next/navigation";

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
  const navigation = useRouter();

  return (
    <main>
      {background ? (
        <>
          <div className="flex xl:px-[5%] xl:flex-row lg:px-[5%] lg:flex-row md:px-[5%] md:flex-row sm:px-[2%] sm:flex-col flex-col ">
            <section className="flex flex-col justify-center items-center text-center my-[5%] w-full mx-1">
              {/* @ts-ignore */}
              <Typography
                as="h1"
                className="font-extrabold text-4xl font-playwrite mb-10"
              >
                Welcome to my Portfolio
              </Typography>
              {/* @ts-ignore */}
              <Typography
                as="h2"
                className="text-gradient font-extrabold font-Kanit lg:text-5xl xl:text-6xl md:text-6xl sm:text-4xl text-[0px]"
              >
                Full Stack Web
              </Typography>
              {/* @ts-ignore */}
              <Typography
                as="h2"
                className="text-gradient font-extrabold font-Kanit lg:text-5xl lg:mt-0 xl:text-6xl md:text-6xl md:mt-0 sm:text-4xl sm:mt-0 text-3xl"
              >
                Developer
              </Typography>
              {/* @ts-ignore */}
              <Typography
                as="div"
                className="font-extrabold w-[90%] font-playwrite mt-10 xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl xl:h-24 lg:h-24 md:h-32 sm:h-28 h-16"
              >
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
            <section className="my-[5%] xl:h-[60vh] xl:w-[60vw] lg:h-[50vh] lg:w-[50vw] md:h-[40vh] md:w-[40vw] sm:h-[40vh] sm:w-full w-[90%] h-[40vh] mx-5 border-2 rounded-xl">
              {/* <Canvas
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
            </Canvas> */}
              <div className="bg-black bg-opacity-45"></div>
            </section>
          </div>
          <section className="w-[10%] mx-auto flex justify-center items-center">
            <button className="button top-4" onClick={() => {navigation.push("#about")}}>
              <svg className="svgIcon" viewBox="0 0 384 512">
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v306.8L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
              </svg>
            </button>
          </section>
        </>
      ) : (
        <Spinner />
      )}
    </main>
  );
};
export default Homepage;
