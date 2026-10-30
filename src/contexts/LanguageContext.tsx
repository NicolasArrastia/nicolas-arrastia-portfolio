"use client";
import {
  createContext,
  useContext,
  type ReactNode,
} from "react";
import { Languages } from "@/lang";

type LanguageContextProps = {
  language: Languages;
};

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

/**
 * The active language comes from the `[lang]` route segment, so it is decided
 * on the server and already correct on the first paint. Switching language
 * means navigating to another URL, not updating local state.
 */
export const LanguageProvider = ({
  children,
  language,
}: {
  children: ReactNode;
  language: Languages;
}) => {
  return (
    <LanguageContext.Provider value={{ language }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
};

export default LanguageContext;
