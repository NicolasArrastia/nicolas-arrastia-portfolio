import { SectionIds } from "@/app/enum";

export const THRESHOLD = 100;

export const HEADER_HEIGHT = 47.53;

export const NAV_OPTIONS: { label: string; href: SectionIds }[] = [
  {
    label: "About",
    href: SectionIds.ABOUT,
  },
  {
    label: "My Projects",
    href: SectionIds.PROJECTS,
  },
  {
    label: "My Skill Set",
    href: SectionIds.SKILLS,
  },
];
