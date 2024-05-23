import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { THRESHOLD } from "./constants";
import MenuIcon from "./components/MenuIcon";
import { NicolasLogo } from "@/assets/svg";
import Menu from "./components/Menu";
import Navigation from "./components/Navigation";
import { NextPageContext } from "next";

interface HeaderProps {
  initialScrollY: number;
}

const Header = ({ initialScrollY }: HeaderProps) => {
  const [scrollY, setScrollY] = useState(initialScrollY ?? 0);
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
        className={`z-40 fixed text-neutral-50 flex justify-between items-center w-full transition-colors duration-300 ${
          scrollY > THRESHOLD
            ? "bg-neutral-950 shadow-md shadow-neutral-50/5"
            : "bg-transparent"
        } py-2 px-4 md:px-16 text-neutral-50`}
      >
        <Link href={"/"}>
          <Image src={NicolasLogo} width={35} alt={"nicolas arrastia logo"} />
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

Header.getInitialProps = async ({ req }: NextPageContext) => {
  const initialScrollY =
    req && typeof req.headers["scroll-y"] === "string"
      ? req.headers["scroll-y"]
      : "0";
  return { initialScrollY: parseInt(initialScrollY, 10) || 0 };
};

export default Header;
