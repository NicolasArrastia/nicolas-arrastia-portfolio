"use client";
import { ArFlag, UsFlag } from "@/assets/svg";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedPath, Languages } from "@/lang";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

const LANG_ICON: Record<Languages, object> = {
  es: ArFlag,
  en: UsFlag,
};

const LanguageButton = () => {
  const { language } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();

  const handleSwitchLanguage = () => {
    const nextLanguage =
      language === Languages.ES ? Languages.EN : Languages.ES;

    router.push(getLocalizedPath(pathname, nextLanguage));
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
