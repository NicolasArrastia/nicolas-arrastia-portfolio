"use client";
import { motion } from "framer-motion";
import { useState } from "react";

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
          transition={{ delay: 0.8, duration: 0.1 }}
        >
          <motion.div
            className=" bg-white absolute rounded-md -translate-x-1/2 -translate-y-1/2"
            style={{}}
            initial={{
              top: "-10%",
              left: "50%",
              width: "2rem",
              height: "2rem",
            }}
            transition={{ duration: 1 }}
            animate={{
              rotate: [0, 180, 360],
              top: ["0%", "60%", "50%"],
              scale: [1, 2, 60],
            }}
          ></motion.div>
        </motion.div>
      )}
    </>
  );
};

export default LoaderAnimation;
