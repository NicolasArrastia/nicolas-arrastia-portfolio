"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { NAV_OPTIONS, THRESHOLD } from "./constants";
import MenuIcon from "./components/MenuIcon";
import { NicolasLogo } from "@/assets/svg";
import { useScroll } from "framer-motion";
import Menu from "./components/Menu";
import Navigation from "./components/Navigation";

const Header = () => {
  const isClient = typeof window === "object";
  const [scrollY, setScrollY] = useState(isClient ? window.scrollY ?? 0 : 0);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log({ scrollY, THRESHOLD, value: scrollY > THRESHOLD });

  return (
    <>
      <header
        className={`z-40
        fixed
        text-neutral-50
     flex justify-between items-center
  w-full
   transition-colors duration-300 ${
     scrollY < THRESHOLD
       ? "bg-transparent"
       : "bg-neutral-950 shadow-md shadow-neutral-50/5"
   }
   
   py-2 px-4 md:px-16 text-neutral-50`}
      >
        <Link href={"/"}>
          <Image src={NicolasLogo} width={30} alt={"nicolas arrastia logo"} />
        </Link>
        <MenuIcon
          isOpen={isMenuOpen}
          handleClick={() => setIsMenuOpen((prev) => !prev)}
        />
        <Navigation />
      </header>
      <Menu
        onClick={() => setIsMenuOpen((prev) => !prev)}
        scrollY={scrollY}
        isOpen={isMenuOpen}
      />
    </>
  );
};

export default Header;
