import { GreatWaveOfKanagawa } from "@/assets/img";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-screen flex justify-center items-center">
      <Image
        fill
        className="object-cover"
        src={GreatWaveOfKanagawa}
        alt={"great wave of kanagawa background"}
      />
      <div className="flex justify-center items-center bg-black/65 absolute top-0 left-0 h-full w-full" />
      <div className="flex flex-col scale-[2] text-neutral-50">
        <span className="text-sm text-neutral-300">Hi there!</span>
        <span className="text-4xl">
          I&apos;m <span className="text-blue-500 font-bold">Nico</span>
        </span>
        <span className="text-sm text-neutral-300">Web Developer</span>
      </div>
    </div>
  );
};

export default Hero;
