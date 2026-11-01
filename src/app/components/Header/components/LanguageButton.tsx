"use client";
import { ArFlag, UsFlag } from "@/assets/svg";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedPath, Languages } from "@/lang";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const LANG_ICON: Record<Languages, object> = {
  es: ArFlag,
  en: UsFlag,
};

const LanguageButton = () => {
  const { language, setLanguage } = useLanguage();
  const pathname = usePathname();

  const handleSwitchLanguage = () => {
    const nextLanguage =
      language === Languages.ES ? Languages.EN : Languages.ES;

    setLanguage(nextLanguage);

    // Keep the URL shareable without a navigation: `router.push` would
    // remount the page and replay the loader and scroll-reveal animations.
    window.history.replaceState(
      null,
      "",
      `${getLocalizedPath(pathname, nextLanguage)}${window.location.hash}`
    );
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
      <img
        alt={language === Languages.ES ? "Switch to english" : "Cambiar a español"}
        src={(LANG_ICON[language] as { src: string }).src}
        width={35}
      />
    </motion.div>
  );
};

export default LanguageButton;
