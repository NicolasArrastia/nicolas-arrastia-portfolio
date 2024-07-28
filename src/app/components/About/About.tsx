"use client";
import SectionLayout from "@/components/SectionLayout";
import TitleText from "@/components/TitleText";
import { motion } from "framer-motion";
import Image from "next/image";
import { PICTURES } from "./constants";
import { SectionIds } from "@/app/enum";

const TEXT_TRANSITION = {
  initial: { opacity: 0 },
  viewport: { once: true },
  transition: { duration: 1, delay: 0.5 },
  whileInView: { opacity: 1 },
};

const About = () => {
  return (
    <SectionLayout id={SectionIds.ABOUT}>
      <TitleText text="About" />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 hyphens-auto">
        <div>
          <motion.p {...TEXT_TRANSITION}>
            Hi! I&apos;m <span className="text-blue-400">Nicolás Arrastía</span>
            . A young web developer, currently living in{" "}
            <span className="text-blue-400">Mar Chiquita, Argentina</span> with
            my fiancée and our three pets. My native language is spanish, but I
            don&apos;t have any problem speaking in english if necessary. I am
            passionate about technology, science, languages and literature.
          </motion.p>
          <TitleText text="Why me?" className="!text-2xl" />
          <motion.p {...TEXT_TRANSITION}>
            Because I am <span className="text-blue-400">respectful</span>,{" "}
            <span className="text-blue-400">curious</span> and{" "}
            <span className="text-blue-400">friendly</span> and I love solving
            problems for other people to make their life easier; I enjoy
            learning new things and I try to understand how things work. Also, I
            have an interest in <span className="text-blue-400">design</span>,
            that&apos;s why I took a course in ux/ui design to potentiate my
            frontend skills with it.
          </motion.p>
          <TitleText text="Random facts about me" className="text-2xl" />
          <motion.p {...TEXT_TRANSITION}>
            My favorite color is <span className="text-blue-400">blue</span>; my
            favorite animal are <span className="text-blue-400">eagles</span>; I
            like <span className="text-blue-400">winter</span> because you can
            enjoy a good moment drinking a hot drink while being with others or
            while reading a good book. A place to visit could probably be a
            rural area in <span className="text-blue-400">Japan</span>. And
            lastly, When choosing between day and night, I prefer{" "}
            <span className="text-blue-400">night</span>, because it&apos;s
            quiet and I can keep learning about constellations and see how the{" "}
            <span className="text-blue-400">stars</span>, weird mirrors of our
            universe, move through the sky as the time goes by.
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
