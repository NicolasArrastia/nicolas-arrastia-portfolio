import lang from "./lang.json";

export enum Languages {
  ES = "es",
  EN = "en",
}

export enum HeaderSections {
  ABOUT = "about",
  PROJECTS = "projects",
  SKILLS = "skills",
  CONTACT = "contact",
  EXPERIENCE = "experience",
}

type LangHeader = Record<HeaderSections, string>;

type LangHero = {
  title: string[];
};

type LangAbout = Record<
  "introduction" | "why_me" | "random_facts",
  { title: string; description: string[] }
>;

type LangSkills = {
  title: string;
  end_text: string;
};

type LangExperience = {
  title: string;
};

type LangProjects = {
  title: string;
  demo_button: string;
  in_progress: string;
};

type LangContact = {
  title: string;
};

type LangContent = {
  header: LangHeader;
  hero: LangHero;
  about: LangAbout;
  skills: LangSkills;
  experience: LangExperience;
  projects: LangProjects;
  contact: LangContact;
};

type LanguageJsonType = Record<Languages, LangContent>;

export default lang as LanguageJsonType;