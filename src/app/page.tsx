"use client";
import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LoaderAnimation from "./components/LoaderAnimation";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import { Analytics } from "@vercel/analytics/react";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

// TODO: Add maxHeight to prevent scroll during animation
export default function Home() {
  return (
    <>
      <Analytics />
      <LoaderAnimation />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* <Contact /> */}
      <Experience />
      <Footer />
    </>
  );
}
