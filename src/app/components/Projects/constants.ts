import { GreatWaveOfKanagawa, TodoApp } from "@/assets/img";
import { Next, React, Sass, Tailwind } from "@/assets/svg";

enum SkillsIconsEnum {
  REACT = React,
  TAILWIND = Tailwind,
  NEXT = Next,
  SASS = Sass,
}

export type ProjectData = {
  title: string;
  image?: any;
  url: string;
  github: string;
  isIframe?: boolean;
  info?: string;
  technologies?: SkillsIconsEnum[];
};

export const PROJECTS: ProjectData[] = [
  {
    title: "Todo App",
    image: TodoApp,
    url: "https://next-todo-app-lovat.vercel.app/",
    github: "https://github.com/NicolasArrastia/next-todo-app",
    info: "Just the classic todo app. You can add todos, groups and rename them",
    technologies: [SkillsIconsEnum.NEXT, SkillsIconsEnum.TAILWIND],
  },
  {
    title: "Liteflix",
    url: "https://liteflix-styled.vercel.app/",
    isIframe: true,
    github: "https://github.com/NicolasArrastia/liteflix",
    info: "This was my test project to join Litebox. It was a replica of Netflix made on figma that work",
    technologies: [SkillsIconsEnum.REACT, SkillsIconsEnum.SASS],
  },
  {
    title: "Web Portfolio",
    url: "https://nicolas-arrastia-portfolio.vercel.app/",
    github: "https://github.com/NicolasArrastia/nicolas-arrastia-portfolio",
    isIframe: true,
    info: "I had to include it. It's this same portfolio",
    technologies: [SkillsIconsEnum.NEXT, SkillsIconsEnum.TAILWIND],
  },
];
