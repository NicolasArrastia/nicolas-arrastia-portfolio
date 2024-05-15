"use client";
import SectionLayout from "@/components/SectionLayout";
import TitleText from "@/components/TitleText";
import React from "react";
import { PROJECTS, ProjectData } from "./constants";
import { motion } from "framer-motion";
import Image from "next/image";
import ProjectContainer from "./ProjectContainer";
import { GreatWaveOfKanagawa } from "@/assets/img";
import { SectionIds } from "@/app/enum";

const Projects = () => {
  return (
    <SectionLayout id={SectionIds.PROJECTS}>
      <TitleText text={"My Projects"} />
      <div className="grid grid-cols-1 text-sm md:text-base md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
        {PROJECTS.map((project, index) => (
          <ProjectContainer index={index} data={project} key={project.title} />
        ))}
      </div>
    </SectionLayout>
  );
};

export default Projects;
