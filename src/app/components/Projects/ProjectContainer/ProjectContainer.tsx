import { motion } from "framer-motion";
import Image from "next/image";
import { ProjectData } from "../constants";
import Link from "next/link";
import SVGIcon from "@/components/SVGIcon";
import { Github } from "@/assets/svg";
import ButtonLink from "./ButtonLink";
import InfoDropdown from "./InfoDropdown";
import lang from "@/lang";
import { useLanguage } from "@/contexts/LanguageContext";

type Props = {
  data: ProjectData;
  index: number;
};

const ProjectContainer = ({ data, index }: Props) => {
  const { language } = useLanguage();
  const { image, title, github, url, info } = data;

  return (
    <div>
      <motion.main
        className="group relative shadow-none hover:shadow-lg shadow-neutral-50 w-full opacity-0"
        viewport={{ once: true }}
        whileInView={{ top: [-20, 0], opacity: [0, 1] }}
        transition={{ delay: 0.2 + index * 0.2, duration: 0.5 }}
      >
        <div className="group/card relative bg-neutral-400 aspect-video overflow-hidden">
          <div className="h-full w-full">
            <Image
              className="object-cover h-full w-full blur-sm group-hover:blur-0 scale-125 group-hover:scale-100 transition duration-500"
              src={image}
              alt={title}
            />
          </div>
          <h3
            className={`absolute whitespace-normal origin-bottom-left text-6xl md:text-8xl -bottom-[0.2em] -left-[0.1em] text-blue-300 font-semibold mix-blend-difference pointer-events-none transition-opacity duration-200 ease-out group-hover/card:opacity-0`}
            style={{
              fontSize: "clamp(3.75rem, 6.1607rem + -7.7143vw, 0.375rem)",
            }}
          >
            {title}
          </h3>
        </div>
      </motion.main>

      <footer className="flex gap-4 mt-4">
        {github && (
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, translateY: -20 }}
            whileInView={{ translateY: [-20, 0], opacity: [0, 1] }}
            transition={{ delay: 0.4 + index * 0.2, duration: 0.4 }}
            className="w-full"
          >
            <ButtonLink url={github}>
              <SVGIcon src={Github} size={"20px"} className={"bg-white mr-2"} />
              Github
            </ButtonLink>
          </motion.div>
        )}
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, translateY: -20 }}
          whileInView={{ translateY: [-20, 0], opacity: [0, 1] }}
          transition={{ delay: 0.6 + index * 0.2, duration: 0.4 }}
          className="w-full"
        >
          <ButtonLink type="secondary" url={url}>
            <span className="text-nowrap">
              {lang[language].projects.demo_button}
            </span>
          </ButtonLink>
        </motion.div>
        {info && (
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, translateY: -20 }}
            whileInView={{ translateY: [-20, 0], opacity: [0, 1] }}
            transition={{ delay: 0.8 + index * 0.2, duration: 0.4 }}
            className="w-[40px] h-[40px]"
          >
            <InfoDropdown {...data} />
          </motion.div>
        )}
      </footer>
    </div>
  );
};

export default ProjectContainer;
