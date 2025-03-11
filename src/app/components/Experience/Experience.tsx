import { SectionIds } from "@/app/enum";
import SectionLayout from "@/components/SectionLayout";
import TitleText from "@/components/TitleText";
import React from "react";
import { EXPERIENCE } from "./constants";
import JobExperience from "./JobExperience";
import lang from "@/lang";
import { useLanguage } from "@/contexts/LanguageContext";

const Experience = () => {
  const { language } = useLanguage();

  const EXPERIENCE_SORTED = EXPERIENCE.sort((a, b) => b.endDate.getTime() - a.endDate.getTime() || b.startDate.getTime() - a.startDate.getTime())

  return (
    <SectionLayout id={SectionIds.EXPERIENCE}>
      <TitleText text={lang[language].experience.title} />
      <ul className="flex flex-col gap-8 mt-4">
        {EXPERIENCE_SORTED.map((job, index) => {
          return <JobExperience job={job} index={index} key={index} />;
        })}
      </ul>
    </SectionLayout>
  );
};

export default Experience;
