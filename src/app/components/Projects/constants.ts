import {
  BeatEmUpGame,
  TodoApp,
  JsonTable,
  WebPortfolio,
  Liteflix,
} from "@/assets/img";
import {
  Next,
  React,
  Sass,
  Tailwind,
  HTML as HTML5,
  Javascript,
  Typescript,
} from "@/assets/svg";
import { Languages } from "@/lang";
import { StaticImageData } from "next/image";

enum SkillsIconsEnum {
  REACT = React,
  TAILWIND = Tailwind,
  NEXT = Next,
  SASS = Sass,
  HTML = HTML5,
  JAVASCRIPT = Javascript,
  TYPESCRIPT = Typescript,
}

export type ProjectData = {
  title: string;
  image: StaticImageData;
  url: string;
  github: string;
  info: Record<Languages, string>; // todo make this a type
  technologies: SkillsIconsEnum[];
  date?: Date;
  isInProgress?: boolean;
};

export const PROJECTS: ProjectData[] = [
  {
    title: "Todo App",
    image: TodoApp,
    url: "https://next-todo-app-lovat.vercel.app/",
    github: "https://github.com/NicolasArrastia/next-todo-app",
    info: {
      en: "Just the classic todo app. You can add todos, groups and rename them.",
      es: "La clásica app de tareas. Podés agregar tareas, grupos y renombrarlos",
    },
    technologies: [SkillsIconsEnum.NEXT, SkillsIconsEnum.TAILWIND],
    date: new Date(2024, 3),
  },
  {
    title: "Liteflix",
    url: "https://liteflix-styled.vercel.app/",
    image: Liteflix,
    github: "https://github.com/NicolasArrastia/liteflix",
    info: {
      en: "This was my test project to join Litebox. It was a replica of Netflix made on figma that I had to replicate on code.",
      es: "Este fue un proyecto de prueba para unirme a Litebox. Era una replica de Netflix hecho en figma que tuve que replicar en código",
    },
    technologies: [SkillsIconsEnum.REACT, SkillsIconsEnum.SASS],
    date: new Date(2021, 9),
  },
  {
    title: "Web Portfolio",
    url: "https://nicolas-arrastia-portfolio.vercel.app/",
    github: "https://github.com/NicolasArrastia/nicolas-arrastia-portfolio",
    image: WebPortfolio,
    info: {
      en: "I had to include it. It's this same portfolio.",
      es: "Tenía que incluirlo, es este mismo portfolio",
    },
    technologies: [SkillsIconsEnum.NEXT, SkillsIconsEnum.TAILWIND],
    date: new Date(2024, 3),
  },
  {
    title: "Canvas Game",
    url: "https://canvas-beat-em-up-game.vercel.app/",
    github: "https://github.com/NicolasArrastia/canvas-beat-em-up-game",
    info: {
      en: "This was my first attempt of a videogame made with vanilla javascript. It was very fun. It's far from perfect, the enemies are not very smart, but I learned a lot in the process.",
      es: "Este fue mi primer intento de crear un videojuego con vanilla javascript. Fue divertido. Está lejos de ser perfecto, los enemigos no son inteligentes, pero aprendí mucho en el proceso",
    },
    image: BeatEmUpGame,
    technologies: [SkillsIconsEnum.HTML, SkillsIconsEnum.JAVASCRIPT],
    date: new Date(2023, 5),
  },
  {
    title: "Json Table",
    url: "https://json-table-five.vercel.app/",
    github: "https://github.com/NicolasArrastia/json-table",
    info: {
      en: "This is a project that I am doing for visualizing json arrays in a table, to filter and search for specific data. I started making this when starting doing web scraping projects with selenium and I had the needed to watch the extracted data.",
      es: "Este es un proyecto que estoy haciendo para visualizar listas de json en una tabla, para filtrar y buscar data específica. Empecé con este projecto cuando comencé a hacer projectos de web scraping con selenium y tenía la necesidad de ver la data extraida",
    },
    image: JsonTable,
    technologies: [
      SkillsIconsEnum.NEXT,
      SkillsIconsEnum.TAILWIND,
      SkillsIconsEnum.TYPESCRIPT,
    ],
    date: new Date(2023, 4),
    isInProgress: true,
  },
];
