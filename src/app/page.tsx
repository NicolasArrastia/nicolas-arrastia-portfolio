import { GreatWaveOfKanagawa } from "@/assets/img";
import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LoaderAnimation from "./LoaderAnimation";

const About = () => {
  return <div className="h-96 bg-neutral-950">About</div>;
};

export default function Home() {
  return (
    <div>
      <LoaderAnimation />
      <Header />
      <Hero />
      <About />
    </div>
  );
}
