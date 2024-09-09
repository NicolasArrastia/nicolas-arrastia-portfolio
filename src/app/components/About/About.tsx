"use client";
import SectionLayout from "@/components/SectionLayout";
import TitleText from "@/components/TitleText";
import { motion } from "framer-motion";
import Image from "next/image";
import { PICTURES } from "./constants";
import { SectionIds } from "@/app/enum";
import lang from "@/lang";
import { useLanguage } from "@/contexts/LanguageContext";

const TEXT_TRANSITION = {
  initial: { opacity: 0 },
  viewport: { once: true },
  transition: { duration: 1, delay: 0.5 },
  whileInView: { opacity: 1 },
};

const About = () => {
  const { language } = useLanguage();
  const SECTION_TEXT = lang[language].about;
  return (
    <SectionLayout id={SectionIds.ABOUT}>
      <TitleText text={SECTION_TEXT.introduction.title} />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 hyphens-auto">
        <div>
          <motion.p {...TEXT_TRANSITION}>
            {SECTION_TEXT.introduction.description.map((i) => (
              <span key={i} className="even:text-blue-400">
                {i}
              </span>
            ))}
          </motion.p>
          <TitleText text={SECTION_TEXT.why_me.title} className="!text-2xl" />
          <motion.p {...TEXT_TRANSITION}>
            {SECTION_TEXT.why_me.description.map((i, index) => (
              <span key={`${i}-${index}`} className="even:text-blue-400">
                {i}
              </span>
            ))}
          </motion.p>
          <TitleText
            text={SECTION_TEXT.random_facts.title}
            className="!text-2xl"
          />
          <motion.p {...TEXT_TRANSITION}>
            {SECTION_TEXT.random_facts.description.map((i) => (
              <span key={i} className="even:text-blue-400">
                {i}
              </span>
            ))}
          </motion.p>
        </div>

        <motion.div
          initial="initial"
          whileInView="inView"
          viewport={{ once: true }}
          className="grid grid-cols-2 grid-rows-[repeat(2,minmax(10rem,12rem))]"
          // TODO: make grid on md devices to have grid-rows-2 without images making it bigger
          // ? Background-size:contain / bg-contain may be useful
        >
          {PICTURES.map(({ alt, url, className }, index) => (
            <motion.div
              key={alt}
              variants={{
                initial: { opacity: 0, filter: "blur(8px)" },
                inView: { opacity: 1, filter: "blur(0)" },
              }}
              transition={{ delay: 0.75 + index * 0.2, duration: 0.5 }}
              className="overflow-hidden"
            >
              <Image
                className={`w-full h-full object-cover ${className}`}
                src={url}
                alt={alt}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionLayout>
  );
};

export default About;
