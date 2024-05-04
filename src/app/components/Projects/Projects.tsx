"use client";
import SectionLayout from "@/components/SectionLayout";
import TitleText from "@/components/TitleText";
import React from "react";
import { PROJECTS, ProjectData } from "./constants";
import { motion } from "framer-motion";
import Image from "next/image";
import ProjectContainer from "./ProjectContainer";
import { GreatWaveOfKanagawa } from "@/assets/img";

const Projects = () => {
  return (
    <SectionLayout>
      <TitleText text={"My Projects"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {PROJECTS.map((project, index) => (
          <ProjectContainer index={index} data={project} key={project.title} />
        ))}
      </div>
    </SectionLayout>
  );
};

export default Projects;
