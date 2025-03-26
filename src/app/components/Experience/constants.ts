import { EquipoDOTGuru, Litebox } from "@/assets/img/experience";
import { Languages } from "@/lang";
import { StaticImageData } from "next/image";

export type ExperienceType = {
  title: string;
  role: string;
  image?: StaticImageData;
  achievements: Record<Languages, string[]>;
  startDate: Date;
  endDate: Date;
};

const LITEBOX: ExperienceType = {
  title: "Litebox",
  role: "Frontend Engineer",
  startDate: new Date(2021, 9, 25),
  endDate: new Date(2024, 2),
  achievements: {
    en: [
      "Optimized a large form that had rendering issues, improving user experience",
      "Resolved numerous bugs in the app",
      "Developed several components subsequently used in the app",
    ],
    es: [
      "Oprimicé un extenso formulario que tenía problemas de renderizado, mejorando la experiencia de usuario ",
      "Resolví numerosos bugs en la aplicación",
      "Desarrollé varios componentes que se usaron en la aplicación",
    ],
  },
  image: Litebox
};

const FREELANCER: ExperienceType = {
  title: "Freelancer",
  role: "Web Developer",
  startDate: new Date(2020, 9, 25),
  endDate: new Date(2024, 6),
  achievements: {
    en: ["Worked on a hostel static page for a client in Argentina"],
    es: [
      "Trabajé para una página estática de hostelería para un cliente de Argentina",
    ],
  },
};

const EQUIPO_GURU: ExperienceType = {
  title: "Equipo Guru",
  role: "Web Developer",
  startDate: new Date(2025, 3, 5),
  endDate: new Date(),
  achievements: {
    en: [],
    es: []
  },
  image: EquipoDOTGuru
}

export const EXPERIENCE: ExperienceType[] = [FREELANCER, LITEBOX, EQUIPO_GURU];
