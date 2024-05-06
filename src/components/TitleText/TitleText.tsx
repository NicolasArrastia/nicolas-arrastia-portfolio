import { motion } from "framer-motion";

type Props = { text: string; delay?: number; size?: "text-2xl" };

const TitleText = ({ text, delay = 0.5, size }: Props) => {
  return (
    <div className="w-fit relative p-1 -left-1 mb-2 mt-6">
      <motion.h2
        className={`${size ?? "text-4xl"}`}
        transition={{ duration: 0.2, delay: delay + delay / 4 }}
        viewport={{ once: true }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        {text}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0, transformOrigin: "left" }}
        transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
        viewport={{ once: true }}
        whileInView={{
          scaleX: [0, 1, 1, 0],
          translateX: [0, 0, 0, "100%"],
        }}
        className="absolute w-full left-0 top-0 bg-blue-500 h-full"
      />
    </div>
  );
};

export default TitleText;
