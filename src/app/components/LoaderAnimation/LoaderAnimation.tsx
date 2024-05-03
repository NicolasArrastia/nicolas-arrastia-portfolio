"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const GENERAL_DELAY = 0.2;

const LoaderAnimation = () => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setIsAnimationComplete(true);
  };

  return (
    <>
      {!isAnimationComplete && (
        <motion.div
          onAnimationComplete={handleAnimationComplete}
          className="fixed top-0 left-0 w-screen h-screen bg-black z-50"
          style={{ mixBlendMode: "multiply" }}
          animate={{ opacity: 0 }}
          transition={{ delay: 0.8 + GENERAL_DELAY, duration: 0.2 }}
        >
          <motion.div
            className="size-8 bg-white absolute rounded-md -translate-x-1/2 -translate-y-1/2 -top-1/2 left-1/2"
            transition={{
              delay: GENERAL_DELAY,
              duration: 1,
            }}
            animate={{
              rotate: [0, 180, 360],
              top: ["-10%", "60%", "50%"],
              scale: [1, 2, 60],
            }}
          ></motion.div>
        </motion.div>
      )}
    </>
  );
};

export default LoaderAnimation;
