import { BeatEmUpGame, GreatWaveOfKanagawa, TodoApp } from "@/assets/img";
import {
  Next,
  React,
  Sass,
  Tailwind,
  HTML as HTML5,
  Javascript,
} from "@/assets/svg";

enum SkillsIconsEnum {
  REACT = React,
  TAILWIND = Tailwind,
  NEXT = Next,
  SASS = Sass,
  HTML = HTML5,
  JAVASCRIPT = Javascript,
}

export type ProjectData = {
  title: string;
  image?: any;
  url: string;
  github: string;
  isIframe?: boolean;
  info?: string;
  technologies?: SkillsIconsEnum[];
  date?: Date;
};

export const PROJECTS: ProjectData[] = [
  {
    title: "Todo App",
    image: TodoApp,
    url: "https://next-todo-app-lovat.vercel.app/",
    github: "https://github.com/NicolasArrastia/next-todo-app",
    info: "Just the classic todo app. You can add todos, groups and rename them",
    technologies: [SkillsIconsEnum.NEXT, SkillsIconsEnum.TAILWIND],
    date: new Date(2024, 3),
  },
  {
    title: "Liteflix",
    url: "https://liteflix-styled.vercel.app/",
    isIframe: true,
    github: "https://github.com/NicolasArrastia/liteflix",
    info: "This was my test project to join Litebox. It was a replica of Netflix made on figma that work",
    technologies: [SkillsIconsEnum.REACT, SkillsIconsEnum.SASS],
    date: new Date(2021, 9),
  },
  {
    title: "Web Portfolio",
    url: "https://nicolas-arrastia-portfolio.vercel.app/",
    github: "https://github.com/NicolasArrastia/nicolas-arrastia-portfolio",
    isIframe: true,
    info: "I had to include it. It's this same portfolio",
    technologies: [SkillsIconsEnum.NEXT, SkillsIconsEnum.TAILWIND],
    date: new Date(2024, 3),
  },
  {
    title: "Beat em Up Game",
    url: "https://canvas-beat-em-up-game.vercel.app/",
    github: "https://github.com/NicolasArrastia/canvas-beat-em-up-game",
    info: "This was my first attempt of a game made with vanilla javascript. It was very fun. It's far from perfect, the enemies are not very smart, but I'd do it again for sure",
    image: BeatEmUpGame,
    technologies: [SkillsIconsEnum.HTML, SkillsIconsEnum.JAVASCRIPT],
    date: new Date(2023, 5),
  },
];
