"use client";
import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  MeshReflectorMaterial,
  OrbitControls,
} from "@react-three/drei";
import { modelShape } from "../sub/modelShape";
import { Typography } from "@material-tailwind/react";
import {
  Backend_skill,
  Frontend_skill,
  Learning_skill,
  Other_skill,
} from "@/constants";
import { Frames } from "@/Models/Frames";
import { useRouter } from "next/navigation";

const About = ({ images }: { images: Array<string> }) => {
  const navigation = useRouter();
  return (
    <main className="w-full h-full flex flex-col justify-center items-center">
      <section className="w-full h-full relative">
        {modelShape.map((shape, index) => {
          const style = {
            position: "absolute",
            ...shape.position,
            // width: "25%",
            // height: "25%",
            zIndex: "10",
          };

          return (
            <section
              // @ts-ignore
              style={style}
              className="xl:w-[25%] xl:h-[25%] lg:w-[20%] lg:h-[20%] md:w-[20%] md:h-[20%] sm:w-[10%] sm:h-[10%] w-[15%] h-[15%] mx-2"
              key={index}
            >
              <Canvas camera={{ position: [0, 2, 5], fov: shape.fov }}>
                <Environment preset="lobby" />
                <Suspense fallback={null}>
                  <group rotation={[-45, 0, 0]}>
                    <shape.shape />
                  </group>
                </Suspense>
                <OrbitControls
                  autoRotate
                  autoRotateSpeed={10}
                  enableZoom={false}
                  enableRotate={false}
                />
              </Canvas>
            </section>
          );
        })}
      </section>
      <div className="absolute xl:flex xl:flex-row md:flex-col justify-center items-center self-center xl:space-x-14 md:space-y-10 aboutDiv">
        <section className="px-5 rounded-2xl shadow-xl">
          {/* @ts-ignore */}
          <Typography
            as="h1"
            className="font-extrabold xl:text-4xl lg:text-4xl md:text-3xl sm:text-xl font-playwrite mb-6"
          >
            My Skills
          </Typography>
          {/* @ts-ignore */}
          <Typography
            as="h2"
            className="font-extrabold xl:text-2xl lg:text-2xl md:text-xl sm:text-lg font-Kanit mb-2"
          >
            My Frontend Skills
          </Typography>
          <div className="flex flex-row space-x-5 justify-center items-center self-center ">
            {Frontend_skill.map((skill, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-center items-center self-center"
                >
                  {/* eslint-disable */}
                  <img
                    src={skill.Image}
                    alt={skill.skill_name}
                    width={skill.width}
                    height={skill.height}
                  />
                </div>
              );
            })}
          </div>
          {/* @ts-ignore */}
          <Typography
            as="h2"
            className="mt-2 font-extrabold xl:text-2xl lg:text-2xl md:text-xl sm:text-lg font-Kanit mb-2 "
          >
            My Backend Skills
          </Typography>
          <div className="flex flex-row space-x-5 justify-center items-center">
            {Backend_skill.map((skill, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-center items-center self-center"
                >
                  {/* eslint-disable */}
                  <img
                    src={skill.Image}
                    alt={skill.skill_name}
                    width={skill.width}
                    height={skill.height}
                  />
                </div>
              );
            })}
          </div>
          {/* @ts-ignore */}
          <Typography
            as="h2"
            className="mt-2 font-extrabold xl:text-2xl lg:text-2xl md:text-xl sm:text-lg font-Kanit mb-2 "
          >
            Other Skills
          </Typography>
          <div className="flex flex-row space-x-5 justify-center items-center">
            {Other_skill.map((skill, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-center items-center self-center"
                >
                  {/* eslint-disable */}
                  <img
                    src={skill.Image}
                    alt={skill.skill_name}
                    width={skill.width}
                    height={skill.height}
                  />
                </div>
              );
            })}
          </div>
          {/* @ts-ignore */}
          <Typography
            as="h2"
            className="mt-2 font-extrabold xl:text-2xl lg:text-2xl md:text-xl sm:text-lg font-Kanit mb-2 "
          >
            Currently Learning
          </Typography>
          <div className="flex flex-row space-x-5 justify-center items-center mb-16">
            {Learning_skill.map((skill, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-center items-center self-center"
                >
                  {/* eslint-disable */}
                  <img
                    src={skill.Image}
                    alt={skill.skill_name}
                    width={skill.width}
                    height={skill.height}
                  />
                </div>
              );
            })}
          </div>
        </section>
        <section className="xl:w-[50vw] xl:h-[55vh] lg:h-[55vh] md:w-[70vw] md:h-[30vh] sm:w-full">
          {/* @ts-ignore */}
          <Typography
            as="h1"
            className="sm:mt-10 md:mt-10 xl:-mt-10 lg:-mt-10 font-extrabold xl:text-4xl lg:text-4xl md:text-3xl sm:text-xl font-playwrite"
          >
            My Experience
          </Typography>
          <section className="w-full h-full">
            <Canvas
              className="rounded-b-2xl xl:w-full xl:h-full
              lg:w-full lg:h-full md:h-[90%]"
              dpr={[1, 1.5]}
              camera={{ fov: 70, position: [0, 2, 15] }}
            >
              {/* <color /> */}
              <fog attach="fog" args={["#050505", 0, 15]} />
              <group position={[0, -0.5, 0]}>
                <Frames images={images} />
                <mesh rotation={[-Math.PI / 2, 0, 0]}>
                  <planeGeometry args={[50, 50]} />
                  {/* @ts-ignore */}
                  <MeshReflectorMaterial
                    blur={[300, 100]}
                    resolution={2048}
                    mixBlur={1}
                    mixStrength={80}
                    roughness={1}
                    depthScale={1.2}
                    minDepthThreshold={0.4}
                    maxDepthThreshold={1.4}
                    color="#050505"
                    metalness={0.5}
                  />
                </mesh>
              </group>
              <Environment preset="city" />
            </Canvas>
          </section>
        </section>
      </div>
    </main>
  );
};

export default About;
