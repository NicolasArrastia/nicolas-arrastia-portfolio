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
  Git,
  NodeJS,
  Python,
} from "@/assets/svg";
import { StaticImageData } from "next/image";

export type SkillType = {
  img: StaticImageData;
  name: string;
  hasStar?: boolean;
};

const FRONTEND_SKILLS: SkillType[] = [
  { img: React, name: "React", hasStar: true },
  { img: Typescript, name: "Typescript", hasStar: true },
  { img: HTML, name: "HTML" },
  { img: CSS, name: "CSS" },
  { img: Javascript, name: "Javascript" },
  { img: Sass, name: "Sass" },
  { img: Tailwind, name: "Tailwind" },
  { img: Next, name: "Next" },
  { img: GraphQL, name: "GraphQl" },
];

const BACKEND_SKILLS: SkillType[] = [
  { img: Django, name: "Django" },
  { img: NodeJS, name: "NodeJS" },
];

const OTHER_SKILLS: SkillType[] = [
  { img: Git, name: "Git" },
  { img: AzureDevOps, name: "ADO" },
  { img: Trello, name: "Trello" },
  { img: Notion, name: "Notion" },
  { img: Figma, name: "Figma" },
  { img: Python, name: "Python" },
];

export const SKILLS: { title: string; skills: SkillType[] }[] = [
  { title: "Frontend", skills: FRONTEND_SKILLS },
  { title: "Backend", skills: BACKEND_SKILLS },
  { title: "Others", skills: OTHER_SKILLS },
];
