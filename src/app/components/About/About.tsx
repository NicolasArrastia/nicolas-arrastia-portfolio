"use client";
import {
  CafeAndRobin,
  GreatWaveOfKanagawa,
  Kuma,
  VaniAndI,
} from "@/assets/img";
import SectionLayout from "@/components/SectionLayout";
import TitleText from "@/components/TitleText";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { PICTURES } from "./constants";

const TEXT_TRANSITION = {
  initial: { opacity: 0 },
  viewport: { once: true },
  transition: { duration: 0.75, delay: 0.5 },
  whileInView: { opacity: 1 },
};

const About = () => {
  return (
    <SectionLayout className="">
      <TitleText text="About" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="">
          {/* // TODO: Add sections inside about */}
          <motion.p {...TEXT_TRANSITION}>
            Hi! I&apos;m Nico. A young web developer currently living in
            Argentina. I am a highly curious and imaginative person that enjoys
            learning constantly. I am passionate about technology, science,
            languages and literature. Understanding how things around me work
            and exploring different perspectives to solve problems motivates me.
            Additionally, with knowledge in design, I can contribute visually on
            different interfaces I work with.
          </motion.p>
        </div>

        <motion.div
          initial="initial"
          whileInView="inView"
          className="grid grid-cols-2 grid-rows-[repeat(2,minmax(10rem,12rem))]"
        >
          {PICTURES.map(({ alt, url, className }, index) => (
            <motion.div
              key={alt}
              viewport={{ once: true }}
              variants={{
                initial: { opacity: 0, filter: "blur(8px)" },
                inView: { opacity: 1, filter: "blur(0)" },
              }}
              transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
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
