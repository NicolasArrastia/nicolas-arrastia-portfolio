"use client";
import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LoaderAnimation from "./components/LoaderAnimation";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

// TODO: Add maxHeight to prevent scroll during animation
export default function Home() {
  return (
    <>
      <LoaderAnimation />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </>
  );
}
