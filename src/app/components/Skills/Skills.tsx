import { SectionIds } from "@/app/enum";
import SectionLayout from "@/components/SectionLayout";
import TitleText from "@/components/TitleText";
import { motion } from "framer-motion";
import { SKILLS } from "./constants";
import SkillContainer from "./SkillContainer";

const Skills = () => {
  return (
    <SectionLayout id={SectionIds.SKILLS}>
      <TitleText text="My Skill Set" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SKILLS.map(({ title, skills }) => (
          <div key={title}>
            <TitleText text={title} size="text-2xl" />
            <motion.div
              initial="initial"
              whileInView="inView"
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 gap-y-8 pt-4"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={{
                    initial: { opacity: 0, translateY: -20 },
                    inView: { opacity: 1, translateY: 0 },
                  }}
                  transition={{
                    delay: 0.5 + index * 0.1,
                    duration: 0.2,
                  }}
                >
                  <SkillContainer key={skill.name} data={skill} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default Skills;
