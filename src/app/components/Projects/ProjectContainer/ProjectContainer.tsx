import { motion } from "framer-motion";
import Image from "next/image";
import { ProjectData } from "../constants";
import Link from "next/link";

type Props = {
  data: ProjectData;
  index: number;
};

const ProjectContainer = ({ data, index }: Props) => {
  return (
    <Link href={data.url} target="_blank">
      <motion.div
        className="group relative shadow-none hover:shadow-lg shadow-neutral-50 w-full opacity-0 cursor-pointer"
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
              src={data.image}
              alt={data.title}
            />
          </motion.div>
          {/* // TODO: add short description with github link and maybe page link, removing the whole Link component */}
          <motion.span
            variants={{
              hover: {
                opacity: 0,
              },
              blur: {
                opacity: 1,
              },
            }}
            transition={{ duration: 0.2 }}
            className={`absolute whitespace-normal origin-bottom-left text-8xl -bottom-3 -left-2 text-blue-300 font-semibold mix-blend-difference`}
          >
            {data.title}
          </motion.span>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default ProjectContainer;
