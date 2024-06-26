"use client";
import { Button, Collapse, IconButton } from "@material-tailwind/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const NavbarComponent = () => {
  const [openNav, setOpenNav] = useState(false);
  const [shownavbar, setShownavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrolly = window.scrollY;
    if (currentScrolly > lastScrollY) {
      setShownavbar(false); // down
    } else {
      setShownavbar(true); // up
    }
    setLastScrollY(currentScrolly);
  };
  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth >= 960 && setOpenNav(false);
    });
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", () => {
        window.innerWidth >= 960 && setOpenNav(false);
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 justify-center items-center">
      <Link
        className="px-5 rounded-xl hover:bg-black transition-all duration-700 ease-in-out      hover:text-white"
        href="#about"
      >
        <li>About</li>
      </Link>
      <Link
        className="px-5 rounded-xl hover:bg-black transition-all duration-700 ease-in-out      
        hover:text-white"
        href="#projects"
      >
        <li>Projects</li>
      </Link>
      <Link
        className="px-5 rounded-xl hover:bg-black transition-all duration-700 ease-in-out      
        hover:text-white"
        href="#contact"
      >
        <li>Contact</li>
      </Link>
    </ul>
  );
  const navigation = useRouter();
  return (
    <nav
      className={`mt-0 shadow-xl rounded-b-xl sticky top-0 z-50 bg-white bg-opacity-90 min-w-full p-2 ${
        shownavbar ? "translate-y-0" : "-translate-y-full"
      } transition-all duration-700 ease-in-out`}
    >
      <section className="flex justify-center items-center bg-transparent xl:w-full lg:w-full md:w-full sm:w-full sm:justify-center sm:items-center min-w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/logo.png"
          alt="Logo"
          className="xl:w-20 lg:w-20 md:w-20 sm:w-20 w-16 cursor-pointer"
          onClick={() => {
            navigation.push("/");
            setOpenNav(false);
          }}
        />
        <div className="hidden lg:block xl:min-w-[80%] lg:min-w-[80%] mx-auto text-center gap-16 font-extrabold text-lg ">
          {navList}
        </div>
        <div className="xl:w-[10%] lg:w-[10%] md:w-[20%] w-[20%]">
          {/* @ts-ignore */}
          <Button
            variant="gradient"
            className="w-full -ml-5 rounded-3xl font-extrabold hidden lg:inline-block duration-700 ease-in-out hover:scale-105 hover:shadow-lg"
          >
            Resume
          </Button>
        </div>
        {/* @ts-ignore */}
        <IconButton
          variant="text"
          onClick={() => setOpenNav(!openNav)}
          className="ml-[50%] h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </section>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          <div
            onClick={() => {
              setOpenNav(false);
            }}
          >
            {navList}
          </div>
          <div className="flex items-center gap-x-1">
            {/* @ts-ignore */}
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Resume</span>
            </Button>
          </div>
        </div>
      </Collapse>
    </nav>
  );
};

export default NavbarComponent;
