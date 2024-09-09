import { Languages } from "@/lang";

export type ExperienceType = {
  title: string;
  role: string;
  image?: string;
  achievements: Record<Languages, string[]>;
  startDate: Date;
  endDate: Date;
};

const litebox: ExperienceType = {
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
    "https://media.licdn.com/dms/image/D4D0BAQHVh59-gri-Jw/company-logo_200_200/0/1712761925779/hellolitebox_logo?e=1726099200&v=beta&t=agTUhBjE8Ltzt47x4fBxPxsfjE_SVM2Yna7pfuR1i3Q",
};

const freelancer: ExperienceType = {
  title: "Freelancer",
  role: "Frontend Developer",
  startDate: new Date(2020, 9, 25),
  endDate: new Date(2024, 6),
  achievements: {
    en: ["Worked on a hostel static page for a client in Argentina"],
    es: [
      "Trabajé para una página estática de hostelería para un cliente de Argentina",
    ],
  },
};

export const EXPERIENCE: ExperienceType[] = [freelancer, litebox];
