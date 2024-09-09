import { ArFlag, UsFlag } from "@/assets/svg";
import { useLanguage } from "@/contexts/LanguageContext";
import { Languages } from "@/lang";
import React from "react";

const LANG_ICON: Record<Languages, object> = {
  es: ArFlag,
  en: UsFlag,
};

const LanguageButton = () => {
  const { language, setLanguage } = useLanguage();

  const handleSwitchLanguage = () => {
    setLanguage(language === Languages.ES ? Languages.EN : Languages.ES);
  };

  return (
    <div className="cursor-pointer">
      <img
        onClick={handleSwitchLanguage}
        src={(LANG_ICON[language] as { src: string }).src}
        width="35rem"
      />
    </div>
  );
};

export default LanguageButton;
