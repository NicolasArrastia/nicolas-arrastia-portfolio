import { SectionIds } from "@/app/enum";

export const THRESHOLD = 100;

export const HEADER_HEIGHT = 47.53;

export const NAV_OPTIONS: { label: string; href: SectionIds }[] = [
  {
    label: "about",
    href: SectionIds.ABOUT,
  },
  {
    label: "projects",
    href: SectionIds.PROJECTS,
  },
  {
    label: "skills",
    href: SectionIds.SKILLS,
  },
  {
    label: "contact",
    href: SectionIds.CONTACT,
  },
  {
    label: "experience",
    href: SectionIds.EXPERIENCE,
  },
];
