import { GreatWaveOfKanagawa } from "@/assets/img";
import { useLanguage } from "@/contexts/LanguageContext";
import lang from "@/lang";
import Image from "next/image";

const Hero = () => {
  const { language } = useLanguage();
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
        <span className="text-sm text-neutral-300">
          {lang[language].hero.title[0]}
        </span>
        <span className="text-4xl">
          {lang[language].hero.title[1]}{" "}
          <span className="text-blue-500 font-bold">
            {lang[language].hero.title[2]}
          </span>
        </span>
        <span className="text-sm text-neutral-300">
          {lang[language].hero.title[3]}
        </span>
      </div>
    </div>
  );
};

export default Hero;
