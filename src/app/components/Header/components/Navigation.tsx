import React from "react";
import { NAV_OPTIONS } from "../constants";
import Link from "next/link";
import { motion } from "framer-motion";

const variants = {
  hover: { width: "100%" },
  blur: { width: 0 },
};

const Navigation = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-4">
        {NAV_OPTIONS.map(({ label, href }) => (
          <motion.li
            initial="blur"
            whileHover="hover"
            key={label}
            className="px-2"
          >
            <Link href={`#${href}`}>{label}</Link>
            <motion.div
              transition={{ duration: 0.2 }}
              variants={variants}
              className="bg-blue-500 h-[2px]"
            />
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
