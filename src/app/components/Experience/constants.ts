import { Languages } from "@/lang";

export type ExperienceType = {
  title: string;
  role: string;
  image?: string;
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
  image:
    "https://media.licdn.com/dms/image/v2/D4D0BAQHVh59-gri-Jw/company-logo_200_200/company-logo_200_200/0/1712761925779/hellolitebox_logo?e=1742428800&v=beta&t=sSvdUik9pQRIAEUdaLsKuHLNhj-nEUaOypvc5CCMI_A",
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
  image: "https://media.licdn.com/dms/image/v2/D4D0BAQGqgogWmti0rg/company-logo_200_200/company-logo_200_200/0/1736254153842/equipodotguru_logo?e=1749686400&v=beta&t=vyXfIpNlkNlTwIfkRW5cCl-5pG6v5zhLp83NkLcnWZ0"
}

export const EXPERIENCE: ExperienceType[] = [FREELANCER, LITEBOX, EQUIPO_GURU];
