"use client";
import { Button, Typography } from "@material-tailwind/react";
import { useSpring } from "@react-spring/core";
import React, { Suspense, useState } from "react";
import { a as web } from "@react-spring/web";
import { Canvas } from "@react-three/fiber";
import { a as three } from "@react-spring/three";
import { ContactShadows, Environment } from "@react-three/drei";
import { projects } from "@/constants/projects";
import Link from "next/link";

const Projects = () => {
  const [open, setOpen] = useState(Array(projects.length).fill(false));

  const toggleOpen = (index: number) => {
    setOpen((prev) => {
      const newOpen = prev.map((open, i) => (i === index ? !open : false));
      // newOpen[index] = !newOpen[index];
      return newOpen;
    });
  };

  return (
    <main className="flex flex-col items-center justify-center">
      {/* @ts-ignore */}
      <Typography
        as="h1"
        className="text-4xl py-5 mt-2 font-extrabold font-playwrite text-center text-[#1d3557]"
      >
        My Projects
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const props = useSpring({ open: Number(open[index]) });
          return (
            <web.main
              key={index}
              style={{
                background: props.open.to([0, 1], ["#ffffff", "#ffffff"]),
              }}
              className="relative xl:w-[30vw] xl:h-[40vh] lg:w-[30vw] lg:h-[40vh] md:w-[40vw] md:h-[25vh] sm:w-[90vw] sm:h-[20vh] w-[90vw] h-[14vh] flex justify-center items-center"
            >
              {/* @ts-ignore */}
              <Typography
                as="p"
                style={{ visibility: open[index] ? "hidden" : "visible" }}
                className="text-lg font-extrabold absolute text-[#457b9d] font-playwrite transition-all duration-75 ease-in-out"
              >
                Project: <span>{project.name}</span>
              </Typography>

              <Canvas dpr={[1, 2]} camera={{ position: [0, 0, -30], fov: 30 }}>
                <three.pointLight
                  position={[10, 10, 10]}
                  intensity={1.5}
                  color={props.open.to([0, 1], ["#ffffff", "#ffffff"])}
                />
                <Suspense fallback={null}>
                  <group
                    rotation={[0, Math.PI, 0]}
                    onClick={(e) => (e.stopPropagation(), toggleOpen(index))}
                  >
                    <project.modelname
                      className="transition-all duration-1000 ease-in-out"
                      open={open[index]}
                      hinge={props.open.to([0, 1], [1.575, -0.425])}
                    />
                  </group>
                  <Environment preset="city" />
                </Suspense>
                <ContactShadows
                  position={[0, -4.5, 0]}
                  opacity={0.4}
                  scale={20}
                  blur={1.75}
                  far={4.5}
                />
              </Canvas>
              {open[index] && (
                <div className="absolute bottom-4 flex space-x-4">
                  {/* @ts-ignore */}
                  <Button className="hover:bg-[#a8dadc] bg-[#1d3557] transition-all duration-700 ease-in-out">
                    {/* eslint-disable */}
                    <Link
                      href={project.link}
                      className="w-full"
                      target="_blank"
                    >
                      <img
                        src="/svg/github.svg"
                        className="w-full h-6"
                        alt=""
                      />
                    </Link>
                  </Button>
                </div>
              )}
            </web.main>
          );
        })}
      </div>
    </main>
  );
};

export default Projects;
