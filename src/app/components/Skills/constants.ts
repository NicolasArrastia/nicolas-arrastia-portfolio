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
  { img: React, name: "React" },
  { img: Typescript, name: "Typescript" },
  { img: HTML, name: "HTML" },
  { img: CSS, name: "CSS" },
  { img: Javascript, name: "Javascript" },
  { img: Sass, name: "Sass" },
  { img: Tailwind, name: "Tailwind" },
  { img: Next, name: "Next" },
  { img: GraphQL, name: "GraphQl" },
];

const BACKEND_SKILLS: SkillType[] = [{ img: Django, name: "Django" }];

const OTHER_SKILLS: SkillType[] = [
  { img: AzureDevOps, name: "ADO" },
  { img: Trello, name: "Trello" },
  { img: Notion, name: "Notion" },
  { img: Figma, name: "Figma" },
];

export const SKILLS: { title: string; skills: SkillType[] }[] = [
  { title: "Frontend", skills: FRONTEND_SKILLS },
  { title: "Backend", skills: BACKEND_SKILLS },
  { title: "Others", skills: OTHER_SKILLS },
];
