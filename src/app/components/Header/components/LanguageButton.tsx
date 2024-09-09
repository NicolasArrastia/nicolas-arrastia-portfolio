import { ArFlag, UsFlag } from "@/assets/svg";
import { useLanguage } from "@/contexts/LanguageContext";
import { Languages } from "@/lang";
import { motion } from "framer-motion";
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
    <motion.div
      className="cursor-pointer"
      onClick={handleSwitchLanguage}
      whileTap="tap"
      variants={{
        tap: {
          rotate: 360,
          scale: 0.9,
          transition: {
            duration: 0.2,
          },
        },
      }}
    >
      <img src={(LANG_ICON[language] as { src: string }).src} width="35rem" />
    </motion.div>
  );
};

export default LanguageButton;
