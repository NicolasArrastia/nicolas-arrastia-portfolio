import { SectionIds } from "@/app/enum";
import { HeaderSections } from "@/lang";

export const THRESHOLD = 100;

export const HEADER_HEIGHT = 47.53;

export const NAV_OPTIONS: { label: HeaderSections; href: SectionIds }[] = [
  {
    label: HeaderSections.ABOUT,
    href: SectionIds.ABOUT,
  },
  {
    label: HeaderSections.PROJECTS,
    href: SectionIds.PROJECTS,
  },
  {
    label: HeaderSections.SKILLS,
    href: SectionIds.SKILLS,
  },
  {
    label: HeaderSections.CONTACT,
    href: SectionIds.CONTACT,
  },
  {
    label: HeaderSections.EXPERIENCE,
    href: SectionIds.EXPERIENCE,
  },
];
