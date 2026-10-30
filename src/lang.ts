import lang from "./lang.json";

export enum Languages {
  ES = "es",
  EN = "en",
}

export const LANGUAGES = Object.values(Languages);

export const DEFAULT_LANGUAGE = Languages.EN;

export const isLanguage = (value: unknown): value is Languages =>
  LANGUAGES.includes(value as Languages);

/**
 * Replaces the leading locale segment of a pathname, keeping the rest intact.
 * `getLocalizedPath("/es", Languages.EN)` -> `/en`
 * `getLocalizedPath("/es/about", Languages.EN)` -> `/en/about`
 */
export const getLocalizedPath = (
  pathname: string,
  language: Languages
): string => {
  const withoutLanguage = pathname.replace(
    new RegExp(`^/(${LANGUAGES.join("|")})(?=/|$)`),
    ""
  );

  const hasPath = withoutLanguage !== "" && withoutLanguage !== "/";

  return hasPath ? `/${language}${withoutLanguage}` : `/${language}`;
};

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
  work: string;
  get_in_touch: string;
  copy_email: string;
  email_subject: string;
  email_body: string;
};

type LangFooter = {
  copied: string;
};

type LangContent = {
  header: LangHeader;
  hero: LangHero;
  about: LangAbout;
  skills: LangSkills;
  experience: LangExperience;
  projects: LangProjects;
  contact: LangContact;
  footer: LangFooter;
};

type LanguageJsonType = Record<Languages, LangContent>;

export default lang as LanguageJsonType;
