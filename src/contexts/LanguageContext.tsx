"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { Languages } from "@/lang";

type LanguageContextProps = {
  language: Languages;
  setLanguage: (language: Languages) => void;
};

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

/**
 * The active language starts from the `[lang]` route segment, so it is decided
 * on the server and already correct on the first paint. `setLanguage` switches
 * it on the client without navigating, so the page is not remounted and the
 * scroll-reveal animations do not replay.
 */
export const LanguageProvider = ({
  children,
  initialLanguage,
}: {
  children: ReactNode;
  initialLanguage: Languages;
}) => {
  const [language, setLanguage] = useState<Languages>(initialLanguage);

  // A real navigation to another `[lang]` route updates the prop; follow it.
  useEffect(() => {
    setLanguage(initialLanguage);
  }, [initialLanguage]);

  // The layout renders <html lang> on the server only.
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
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
