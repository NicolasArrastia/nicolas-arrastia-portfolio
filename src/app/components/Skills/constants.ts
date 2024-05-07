import {
  Django,
  HTML,
  Javascript,
  Sass,
  Tailwind,
  Typescript,
  CSS,
  React,
  Next,
  GraphQL,
  Figma,
  Trello,
  Notion,
  AzureDevOps,
} from "@/assets/svg";
import { StaticImageData } from "next/image";

export type SkillType = {
  img: StaticImageData;
  name: string;
  isLearning?: boolean;
  isOpenToLearn?: boolean;
};

const FRONTEND_SKILLS: SkillType[] = [
  { img: CSS, name: "CSS" },
  { img: HTML, name: "HTML" },
  { img: Javascript, name: "Javascript" },
  { img: Typescript, name: "Typescript" },
  { img: React, name: "React" },
  { img: Next, name: "Next" },
  { img: Sass, name: "Sass" },
  { img: Tailwind, name: "Tailwind" },
  { img: GraphQL, name: "GraphQl" },
];

const BACKEND_SKILLS: SkillType[] = [{ img: Django, name: "Django" }];

const OTHER_SKILLS: SkillType[] = [
  { img: Figma, name: "Figma" },
  { img: Trello, name: "Trello" },
  { img: Notion, name: "Notion" },
  { img: AzureDevOps, name: "ADO" },
];

export const SKILLS: { title: string; skills: SkillType[] }[] = [
  { title: "Frontend", skills: FRONTEND_SKILLS },
  { title: "Backend", skills: BACKEND_SKILLS },
  { title: "Others", skills: OTHER_SKILLS },
];
