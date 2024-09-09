import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { THRESHOLD } from "./constants";
import MenuIcon from "./components/MenuIcon";
import { NicolasLogo } from "@/assets/svg";
import Menu from "./components/Menu";
import Navigation from "./components/Navigation";
import LanguageButton from "./components/LanguageButton";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const isClient = typeof window === "object";
    const initialScrollY = isClient ? window.scrollY : 0;
    setScrollY(initialScrollY);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => setScrollY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`z-40 fixed text-neutral-50  w-full transition-colors duration-300 ${
          scrollY > THRESHOLD
            ? "bg-neutral-950 shadow-md shadow-neutral-50/5"
            : "bg-transparent"
        }  text-neutral-50`}
      >
        <div className="max-w-screen-2xl m-auto py-2 px-4 md:px-16 flex justify-end gap-4 items-center">
          <Link href={"/"} className="mr-auto">
            <Image src={NicolasLogo} width={35} alt={"nicolas arrastia logo"} />
          </Link>
          <MenuIcon
            isOpen={isMenuOpen}
            handleClick={() => setIsMenuOpen((prev) => !prev)}
          />
          <Navigation />
          <LanguageButton />
        </div>
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
