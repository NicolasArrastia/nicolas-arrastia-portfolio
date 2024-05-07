import SVGIcon from "@/components/SVGIcon";
import { motion } from "framer-motion";
import { SkillType } from "../constants";

type Props = {
  data: SkillType;
};

const TRANSITION_DURATION = 0.2;

const SkillContainer = ({ data }: Props) => {
  const { img, name } = data;
  return (
    <motion.div
      className="relative"
      initial="blur"
      whileHover="hover"
      whileTap="hover"
    >
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 text-sm"
        variants={{
          blur: { opacity: 0, translateY: "-50%", translateX: "-50%" },
          hover: { opacity: 1, top: "0", translateY: "-100%" },
        }}
        transition={{ duration: 0.1 }}
      >
        {name}
      </motion.div>
      <motion.div
        variants={{
          blur: { translateY: "0%" },
          hover: { translateY: "10%" },
        }}
        transition={{ duration: 0.2 }}
      >
        <SVGIcon src={img} size={"50px"} className={"bg-neutral-200"} />
      </motion.div>
    </motion.div>
  );
};

export default SkillContainer;
