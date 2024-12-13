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
  SQL,
} from "@/assets/svg";
import { Languages } from "@/lang";
import { StaticImageData } from "next/image";

export type SkillType = {
  img: StaticImageData;
  name: string;
  className?: string;
  miniIcons?: { src: StaticImageData; className: string }[];
};

const MiniIcons = {
  STARRED: { src: Star, className: "bg-yellow-500" },
  FAVORITE: { src: Heart, className: "bg-pink-500" },
};

const FRONTEND_SKILLS: SkillType[] = [
  {
    img: React,
    name: "React",
    miniIcons: [MiniIcons.STARRED],
    className: "bg-cyan-500",
  },
  {
    img: Typescript,
    name: "Typescript",
    miniIcons: [MiniIcons.STARRED],
    className: "bg-blue-500",
  },
  { img: HTML, name: "HTML", className: "bg-amber-500" },
  { img: CSS, name: "CSS", className: "bg-sky-500" },
  { img: Javascript, name: "Javascript", className: "bg-yellow-500" },
  { img: Sass, name: "Sass", className: "bg-pink-400" },
  {
    img: Tailwind,
    name: "Tailwind",
    miniIcons: [MiniIcons.FAVORITE],
    className: "bg-teal-500",
  },
  { img: Next, name: "Next" },
  { img: Vue, name: "Vue", className: "bg-emerald-600" },
  { img: Redux, name: "Redux", className: "bg-purple-500" },
];

const BACKEND_SKILLS: SkillType[] = [
  { img: Django, name: "Django", className: "bg-lime-900" },
  { img: NodeJS, name: "NodeJS", className: "bg-lime-500" },
  { img: SQL, name: "SQL" },
];

const OTHER_SKILLS: SkillType[] = [
  { img: Git, name: "Git", className: "bg-orange-600" },
  { img: AzureDevOps, name: "ADO", className: "bg-sky-500" },
  { img: Trello, name: "Trello", className: "bg-blue-500" },
  {
    img: Notion,
    name: "Notion",
    miniIcons: [MiniIcons.STARRED],
    className: "bg-neutral-300",
  },
  { img: Figma, name: "Figma", className: "bg-purple-500" },
  {
    img: Python,
    name: "Python",
    miniIcons: [MiniIcons.FAVORITE],
    className: "bg-blue-400",
  },
  { img: Scrum, name: "SCRUM" },
];

const LEARNING_SKILLS: SkillType[] = [
  { img: PHP, name: "PHP", className: "bg-indigo-400" },
  // { img: React, name: "React Native" },
];

export const SKILLS: {
  title: Record<Languages, string>;
  skills: SkillType[];
}[] = [
  { title: { en: "Frontend", es: "Frontend" }, skills: FRONTEND_SKILLS },
  { title: { en: "Backend", es: "Backend" }, skills: BACKEND_SKILLS },
  { title: { en: "Others", es: "Otros" }, skills: OTHER_SKILLS },
  { title: { en: "Learning", es: "Aprendiendo" }, skills: LEARNING_SKILLS },
];
