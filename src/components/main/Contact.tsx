"use client";
import { Environment, OrbitControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Euler, Vector3 } from "three";
import Earth from "@/Models/Earth";

const Contact = () => {
  return (
    <div id="contact" className="flex container mx-auto justify-center space-x-4">
      <motion.section
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
        className="w-7/12"
      >
        {/* Create a form having name emailid and textarea */}
        <form className="flex flex-col space-y-4 p-4">
          <h1 className="text-3xl font-extrabold">Let&apos;s Connect</h1>
          <div className="font-thin">
            <Typewriter
              options={{
                strings: ["Get in touch with me for any queries or projects"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <label className="font-extrabold mx-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="border-2 p-2 rounded-2xl text-black"
            placeholder="Name"
          />
          <label className="font-extrabold mx-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border-2 p-2 rounded-2xl text-black"
            placeholder="Email"
          />
          <label className="font-extrabold mx-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="border-2 p-2 rounded-2xl text-black"
            placeholder="Message"
          />
          <button className="bg-blue-gray-600 hover:bg-green-200 font-extrabold hover:text-green-600 p-2 rounded-2xl">
            Submit
          </button>
        </form>
      </motion.section>
      <Canvas
        style={{ blockSize: "80vh", inlineSize: "41.666667%" }}
        className="rounded-2xl"
        shadows
        camera={{
          position: new Vector3(0, 2, 5),
          fov: 20,
        }}
      >
        <Environment blur={0} preset="sunset" />
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
        <OrbitControls enableRotate={false} enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default Contact;
