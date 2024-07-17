"use client";
import { Environment, OrbitControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Euler, Vector3 } from "three";
import Earth from "@/Models/Earth";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef(null);

  const sendEmail = (e: any) => {
    e.preventDefault();
    
    emailjs
      .sendForm(
        "service_co7dn2l",
        "template_bs9bobm",
        // @ts-ignore
        form.current,
        "uVjxkuz78i5RuoQ4S"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your message has been sent successfully!");
          // @ts-ignore
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("There was an error sending your message. Please try again.");
        }
      );
  };
  return (
    <div
      id="contact"
      className="flex flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-col container mx-auto justify-center space-x-4 items-center"
    >
      <motion.section
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
        className="w-7/12 rounded-xl"
      >
        {/* Create a form having name emailid and textarea */}
        <form
          className="flex flex-col space-y-4 p-4"
          id="contact-form"
          ref={form}
          onSubmit={sendEmail}
        >
          <h1 className="xl:text-3xl lg:text-3xl md:text-3xl sm:text-xl text-xl font-extrabold font-playwrite sm:mt-[10vh] md:mt-[10vh] mt-[10vh] text-[#1d3557]">
            Let&apos;s Connect
          </h1>
          <div className="font-playwrite h-[10vh] text-[#457b9d]">
            <Typewriter
              options={{
                strings: ["Get in touch with me for any queries or projects"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <label
            className="flex font-playwrite text-[#457b9d] mx-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="border-2 p-2 rounded-2xl text-black border-[#a8dadc]"
            placeholder="Name"
            name="user_name"
          />
          <label
            className="flex font-playwrite text-[#457b9d] mx-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border-2 p-2 rounded-2xl text-black border-[#a8dadc]"
            placeholder="Email"
            name="user_email"
          />
          <label
            className="flex font-playwrite text-[#457b9d] mx-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            className="border-2 p-2 rounded-2xl text-black border-[#a8dadc]"
            placeholder="Message"
            name="message"
          />
          <button
            className="bg-[#1d3557] hover:bg-[#a8dadc] font-extrabold hover:text-[#f1faee] p-2 rounded-2xl text-[#f1faee] transition-all duration-700 ease-in-out border-0"
            type="submit"
          >
            Submit
          </button>
        </form>
      </motion.section>
      <section className="xl:flex-row lg:flex-row md:flex-col rounded-2xl xl:h-[80vh] xl:w-[40%] lg:h-[80vh] lg:w-[40%] md:h-[40vh] md:w-[90vw] sm:w-[90vw] sm:h-[40vh] w-[90%] h-[30vh] mt-2 mb-12">
        <Canvas
          shadows
          className="w-full h-full rounded-xl -mx-2 mb-[20vh]"
          camera={{
            position: new Vector3(0, 2, 5),
            fov: 32,
          }}
        >
          <Environment blur={0} preset="warehouse" />
          <Suspense fallback={null}>
            <group position={[0, 0, 0]}>
              <Earth />
            </group>
          </Suspense>
          <OrbitControls
            autoRotate
            autoRotateSpeed={5}
            enableRotate={false}
            enableZoom={false}
          />
        </Canvas>
      </section>
    </div>
  );
};

export default Contact;
