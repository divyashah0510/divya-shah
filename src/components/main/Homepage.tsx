"use client";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Typewriter from "typewriter-effect";
import Spinner from "../sub/Spinner";
import { Typography } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import MetaCharacter from "@/Models/MetaCharacter";

const Homepage = () => {
  const [background, setBackground] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setBackground(true);
    }, 1000);

    const messageTimeout = setTimeout(() => {
      setShowMessage(true);
    }, 3000); // Show the reload message after 5 seconds

    return () => {
      clearTimeout(timeout);
      clearTimeout(messageTimeout);
    };
  }, [background]);

  const navigation = useRouter();

  return (
    <main>
      {background ? (
        <>
          <div className="flex xl:px-[5%] xl:flex-row lg:px-[5%] lg:flex-row md:px-[5%] md:flex-row sm:px-[2%] sm:flex-col flex-col ">
            <section className="flex flex-col mx-auto justify-center items-center text-center my-[5%] w-3/4">
              {/* @ts-ignore */}
              <Typography
                as="h1"
                className="font-extrabold xl:text-4xl md:text-2xl sm:text-xl text-xl font-playwrite mb-10 text-[#1d3557]"
              >
                Welcome to my Portfolio
              </Typography>
              {/* @ts-ignore */}
              <Typography
                as="h2"
                className="text-gradient font-extrabold font-Kanit lg:text-5xl xl:text-6xl md:text-6xl sm:text-5xl text-xl leading-tight h-[23vh] xl:h-[10vh] lg:h-[10vh] md:h-[20vh] sm:h-[20vh]"
              >
                <Typewriter
                  options={{
                    strings: [
                      "Frontend Developer",
                      "DevOps Engineer",
                      "Web Developer",
                    ],
                    autoStart: background,
                    loop: true,
                  }}
                />
              </Typography>
              {/* @ts-ignore */}
              <Typography
                as="div"
                className="font-extrabold w-[90%] font-playwrite xl:text-3xl lg:text-3xl md:text-sm md:mt-10 -mt-10  sm:text-2xl xl:h-24 lg:h-24 md:h-32 sm:h-28 h-16 text-[#1d3557]"
                style={{lineHeight: "1.8" }}
              >
                I&apos;m Divya Shah. A passionate Full Stack Web Developer from
                Mumbai, India.
              </Typography>
            </section>
            <section className="my-[5%] xl:h-[50vh] xl:w-[50vw] lg:h-[50vh] lg:w-[50vw] md:h-[40vh] md:w-[55vw] sm:h-[40vh] sm:w-[90vw] w-[90vw] h-[30vh] mx-5 shadow-2xl rounded-3xl">
              <Canvas
                shadows
                camera={{ position: [0, 2, 5], fov: 12 }}
                className="rounded-b-xl"
              >
                <Environment preset="dawn" />
                <group position={[0, -1.5, 0]}>
                  <MetaCharacter />
                </group>
              </Canvas>
              <div className="bg-black bg-opacity-45"></div>
            </section>
          </div>
          <section className="w-[20%] xl:mt-28 lg:mt-28 md:mt-28 sm:-mt-2 mt-20 mx-auto flex justify-center items-center">
            {/* eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element */}
            <img src="/images/scroll.gif" alt="scroll" width={20} height={20}/>
          </section>
        </>
      ) : (
        <Spinner showMessage={showMessage} />
      )}
    </main>
  );
};
export default Homepage;
