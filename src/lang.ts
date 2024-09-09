import lang from "./lang.json";

export enum Languages {
  ES = "es",
  EN = "en",
}

type LanguageJsonType = Record<Languages, any>; // todo implement this type

export default lang;
