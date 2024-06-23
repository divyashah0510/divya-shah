"use client";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavbarComponent = () => {
  return (
    <nav className="flex justify-center items-center p-2 shadow-xl rounded-b-xl w-full sticky top-0 z-[1%] bg-white bg-opacity-55">
      <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
      <div className="min-w-[80%]">
        <ul className="flex justify-center items-center gap-16 font-extrabold text-lg">
          <Link href="#about">
            <li>About</li>
          </Link>
          <Link href="#projects">
            <li>Projects</li>
          </Link>
          <Link href="#contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
      <div className="w-[10%]">
        {/* @ts-ignore */}
        <Button variant="gradient" className="w-full rounded-3xl font-extrabold" >Resume</Button>
      </div>
    </nav>
  );
};

export default NavbarComponent;
