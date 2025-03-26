import { format } from "date-fns";
import { ExperienceType } from "./constants";
import Image from "next/image";
import { motion } from "framer-motion";
import SVGIcon from "@/components/SVGIcon";
import { Star } from "@/assets/svg";
import VerticalTextEffect from "./VerticalTextEffect";
import { getInitials } from "@/app/utils";
import { useLanguage } from "@/contexts/LanguageContext";

const JobExperience = ({
  job,
  index,
}: {
  job: ExperienceType;
  index: number;
}) => {
  const { language } = useLanguage();
  const { title, role, image, startDate, endDate, achievements } = job;
  const formattedDateRange = `${format(startDate, "yyyy")}-${format(
    endDate,
    "yy"
  )}`;

  const delay = 0.5 + index * 0.2;
  const transition = {
    transition: {
      delay,
      duration: 0.2,
    },
  };

  return (
    <motion.li
      key={index}
      className="flex gap-0"
      viewport={{ once: true }}
      initial={"initial"}
      whileInView={"inView"}
    >
      <VerticalTextEffect
        text={formattedDateRange}
        className="[writing-mode:vertical-lr] font-light text-base text-neutral-300"
        delay={delay}
      />

      <div className="flex flex-col gap-2">
        <div className="flex gap-4">
          <motion.div
            variants={{
              initial: { opacity: 0, translateX: "200%", rotate: 180 },
              inView: { opacity: 1, translateX: "0%", rotate: 0 },
            }}
            className="size-16 bg-neutral-500 grid place-items-center"
            {...transition}
          >
            {image ? (
              <Image className="size-full" src={image} alt={title} />
            ) : (
              <span className="text-2xl">
                {getInitials(role, 2)}
                {/* {role.split(" ")[0].split("")[0]}
                {role.split(" ")[1].split("")[0]} */}
              </span>
            )}
          </motion.div>
          <motion.div
            variants={{ initial: { opacity: 0 }, inView: { opacity: 1 } }}
            {...transition}
            className="grid items-center"
          >
            <h5 className="font-semibold text-xl">{role}</h5>
            <h4 className="text-neutral-400">{title}</h4>
          </motion.div>
        </div>

        <ul className="flex flex-col gap-1">
          {achievements[language].map((i, index) => (
            <li
              key={index}
              className="text-neutral-200 text-xs grid grid-cols-[1em_auto] gap-1 relative"
            >
              <motion.div
                variants={{
                  initial: {
                    opacity: 0,
                    translateY: -10,
                  },
                  inView: {
                    opacity: 1,
                    translateY: 0,
                  },
                }}
                transition={{
                  delay: 0.5 + index * 0.1,
                  duration: 0.2,
                }}
              >
                <SVGIcon
                  src={Star}
                  size={`0.8em`}
                  className={`bg-neutral-200 mt-[0.3em]`}
                />
              </motion.div>
              <motion.span
                className="text-neutral-200"
                variants={{
                  initial: { opacity: 0 },
                  inView: { opacity: 1 },
                }}
                transition={{
                  delay: 0.5 + index * 0.1,
                  duration: 0.2,
                }}
              >
                {i}
              </motion.span>
            </li>
          ))}
        </ul>
      </div>
    </motion.li>
  );
};

export default JobExperience;
