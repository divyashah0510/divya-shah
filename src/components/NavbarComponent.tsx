import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavbarComponent = () => {
  return (
    <nav>
      <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
      <ul>
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
    </nav>
  );
};

export default NavbarComponent;
