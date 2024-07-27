"use client";
import About from "@/components/main/About";
import Contact from "@/components/main/Contact";
import Homepage from "@/components/main/Homepage";
import Projects from "@/components/main/Projects";
import { images } from "@/constants/experience";

import { useEffect, useState } from "react";

export default function Home() {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
  useEffect(() => {
    const handleReSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleReSize();
    return window.removeEventListener("resize", handleReSize);
  }, []);
  if (isDesktop === null)
    return (
      <div className="flex justify-center self-center mt-10">
        Loading...
      </div>
    );
  if (!isDesktop)
    return (
      <div className="font-bold font-Kanit text-3xl w-[90vw] mt-16 flex justify-center self-center mx-auto text-center">
        This application is only accessible on a desktop screen.
      </div>
    );
  return (
    <main className="w-full">
      <div className="text-center h-[94vh]  bg-opacity-30">
        <Homepage />
      </div>
      <div id="about" className="text-center h-screen">
        {/* @ts-ignore */}
        <About images={images} />
      </div>
      <div id="projects" className="text-center h-screen">
        <Projects />
      </div>
      <div
        id="contact"
        className="text-center xl:h-[85vh] lg:h-[85vh] md:h-[105vh] sm:h-[95vh] h-[95vh]"
      >
        <Contact />
      </div>
    </main>
  );
}
