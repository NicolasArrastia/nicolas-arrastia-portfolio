"use client";
import Link from "next/link";
import { HEADER_HEIGHT, NAV_OPTIONS, THRESHOLD } from "../constants";
import { motion } from "framer-motion";

type Props = {
  scrollY: number;
  isOpen: boolean;
  onClick: () => void;
};

// TODO: Add background here
const Menu = ({ isOpen = false, onClick }: Props) => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={isOpen ? "open" : "closed"}
      variants={{
        closed: {
          opacity: 0,
          visibility: "hidden",
          transition: { visibility: { delay: 0.5 } },
        },
        open: { opacity: 1 },
      }}
      onClick={onClick}
      className={`
      fixed border w-full h-full top-0 left-0 z-30
      p-4 overflow-hidden backdrop-blur-md`}
      style={{
        paddingTop: `calc(${HEADER_HEIGHT}px + 1rem)`,
      }}
    >
      <ul className="flex flex-col items-end gap-4">
        {NAV_OPTIONS.map(({ label, href }) => (
          <li key={label}>
            <Link href={`#${href}`}>{label}</Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Menu;
