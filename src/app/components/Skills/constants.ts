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
  Vue,
  Star,
  Heart,
  PHP,
  Redux,
  Scrum,
} from "@/assets/svg";
import { StaticImageData } from "next/image";

export type SkillType = {
  img: StaticImageData;
  name: string;
  miniIcons?: { src: StaticImageData; className: string }[];
};

const MiniIcons = {
  STARRED: { src: Star, className: "bg-yellow-500" },
  FAVORITE: { src: Heart, className: "bg-pink-500" },
};

const FRONTEND_SKILLS: SkillType[] = [
  { img: React, name: "React", miniIcons: [MiniIcons.STARRED] },
  {
    img: Typescript,
    name: "Typescript",
    miniIcons: [MiniIcons.STARRED],
  },
  { img: HTML, name: "HTML" },
  { img: CSS, name: "CSS" },
  { img: Javascript, name: "Javascript" },
  { img: Sass, name: "Sass" },
  { img: Tailwind, name: "Tailwind", miniIcons: [MiniIcons.FAVORITE] },
  { img: Next, name: "Next" },
  // { img: GraphQL, name: "GraphQl" },
  { img: Vue, name: "Vue" },
];

const BACKEND_SKILLS: SkillType[] = [
  { img: Django, name: "Django" },
  { img: NodeJS, name: "NodeJS" },
];

const OTHER_SKILLS: SkillType[] = [
  { img: Git, name: "Git" },
  { img: AzureDevOps, name: "ADO" },
  { img: Trello, name: "Trello" },
  { img: Notion, name: "Notion", miniIcons: [MiniIcons.STARRED] },
  { img: Figma, name: "Figma" },
  { img: Python, name: "Python", miniIcons: [MiniIcons.FAVORITE] },
  { img: Scrum, name: "SCRUM" },
];

const LEARNING_SKILLS: SkillType[] = [
  { img: Redux, name: "Redux" },
  { img: PHP, name: "PHP" },
  { img: React, name: "React Native" },
];

export const SKILLS: { title: string; skills: SkillType[] }[] = [
  { title: "Frontend", skills: FRONTEND_SKILLS },
  { title: "Backend", skills: BACKEND_SKILLS },
  { title: "Others", skills: OTHER_SKILLS },
  { title: "Learning", skills: LEARNING_SKILLS },
];
