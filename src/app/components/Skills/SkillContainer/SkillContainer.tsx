import SVGIcon from "@/components/SVGIcon";
import { motion } from "framer-motion";
import { SkillType } from "../constants";

type Props = {
  data: SkillType;
};

const SkillContainer = ({ data }: Props) => {
  const { img, name } = data;
  return (
    <motion.div
      className="relative"
      initial="blur"
      whileHover="hover"
      whileTap="hover"
    >
      <motion.span
        className="absolute top-1/2 left-1/2 -translate-x-1/2 text-sm"
        variants={{
          blur: { opacity: 0, translateY: "-50%", translateX: "-50%" },
          hover: { opacity: 1, top: "0", translateY: "-100%" },
        }}
        transition={{ duration: 0.1 }}
      >
        {name}
      </motion.span>

      <motion.div
        variants={{
          blur: { translateY: "0%" },
          hover: { translateY: "10%" },
        }}
        transition={{ duration: 0.2 }}
        className="relative"
      >
        <SVGIcon src={img} size={"50px"} className={"bg-neutral-200"} />

        {data.miniIcons && (
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-[10px] flex">
            {data.miniIcons?.map(({ src, className }, index) => (
              <SVGIcon
                key={index}
                src={src}
                size="20px"
                className={` ${className}`}
              />
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default SkillContainer;
