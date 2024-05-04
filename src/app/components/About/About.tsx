"use client";
import SectionLayout from "@/components/SectionLayout";
import TitleText from "@/components/TitleText";
import { motion } from "framer-motion";

const DEFAULT_TRANSITION_SETTINGS = {
  initial: { opacity: 0 },
  viewport: { once: true },
  transition: { duration: 0.75, delay: 0.5 },
  whileInView: { opacity: 1 },
};

const About = () => {
  return (
    <SectionLayout>
      <TitleText text="About" />
      <motion.p {...DEFAULT_TRANSITION_SETTINGS}>about me here</motion.p>

      <TitleText text="Hobbies" delay={0.75} />
      <motion.p {...DEFAULT_TRANSITION_SETTINGS}>hobbies here</motion.p>

      <TitleText text="Pets" delay={1} />
      <motion.p {...DEFAULT_TRANSITION_SETTINGS}>and my pets here</motion.p>
    </SectionLayout>
  );
};

export default About;
