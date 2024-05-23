import { motion } from "framer-motion";
import Image from "next/image";
import { ProjectData } from "../constants";
import Link from "next/link";
import SVGIcon from "@/components/SVGIcon";
import { Github } from "@/assets/svg";
import ButtonLink from "./ButtonLink";
import InfoDropdown from "./InfoDropdown";

type Props = {
  data: ProjectData;
  index: number;
};

const ProjectContainer = ({ data, index }: Props) => {
  const { image, title, github, url, info } = data;

  return (
    <div>
      <motion.main
        className="group relative shadow-none hover:shadow-lg shadow-neutral-50 w-full opacity-0"
        viewport={{ once: true }}
        whileInView={{ top: [-20, 0], opacity: [0, 1] }}
        transition={{ delay: 0.2 + index * 0.2, duration: 0.5 }}
      >
        <motion.div
          initial={"blur"}
          whileHover={"hover"}
          className="relative bg-neutral-400 aspect-video overflow-hidden"
        >
          <motion.div
            className="h-full w-full"
            variants={{
              hover: {
                width: "100%", // TODO: Add info on the side and make this width 50%
              },
            }}
          >
            <Image
              className="object-cover h-full w-full blur-sm group-hover:blur-0 scale-125 group-hover:scale-100 transition duration-500"
              src={image}
              alt={title}
            />
          </motion.div>
          <motion.h3
            variants={{
              hover: {
                opacity: 0,
              },
              blur: {
                opacity: 1,
              },
            }}
            transition={{ duration: 0.2 }}
            className={`absolute whitespace-normal origin-bottom-left text-8xl -bottom-3 -left-2 text-blue-300 font-semibold mix-blend-difference pointer-events-none`}
          >
            {title}
          </motion.h3>
        </motion.div>
      </motion.main>

      <footer className="flex gap-4 mt-4">
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
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, translateY: -20 }}
          whileInView={{ translateY: [-20, 0], opacity: [0, 1] }}
          transition={{ delay: 0.6 + index * 0.2, duration: 0.4 }}
          className="w-full"
        >
          <ButtonLink type="secondary" url={url}>
            <span className="text-nowrap">Live Demo</span>
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
