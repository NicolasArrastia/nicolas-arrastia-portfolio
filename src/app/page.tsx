import { GreatWaveOfKanagawa } from "@/assets/img";
import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LoaderAnimation from "./components/LoaderAnimation";
import About from "./components/About";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <LoaderAnimation />
      <Header />
      <Hero />
      <About />
      <Projects />
    </>
  );
}
