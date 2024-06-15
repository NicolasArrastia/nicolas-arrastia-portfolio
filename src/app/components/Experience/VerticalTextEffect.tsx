import { motion } from "framer-motion";

type VerticalTextEffectProps = {
  className?: string;
  size?: string;
  text: string;
  delay?: number;
};

const VerticalTextEffect = ({
  className,
  size,
  text,
  delay = 0,
}: VerticalTextEffectProps) => {
  return (
    <div className={`${className} ${size} h-fit relative py-1 -top-1 text-4xl`}>
      <motion.h2
        transition={{ duration: 0.2, delay: delay + delay / 4 }}
        viewport={{ once: true }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        {text}
      </motion.h2>
      <motion.div
        initial={{ scaleY: 0, transformOrigin: "top" }}
        transition={{ duration: 0.3, delay: delay, ease: "easeOut" }}
        viewport={{ once: true }}
        whileInView={{
          scaleY: [0, 1, 1, 0],
          translateY: [0, 0, 0, "100%"],
        }}
        className="absolute w-full left-0 top-0 bg-neutral-50 h-full"
      />
    </div>
  );
};

export default VerticalTextEffect;
