import { motion } from "framer-motion";

type Props = {
  isOpen: boolean;
  handleClick: () => void;
};

const first = {
  open: { rotate: -45, y: 2, x: -4 },
  closed: { rotate: 0, y: 0, x: 0 },
};

const middle = {
  open: { rotate: 45, width: "90%" },
  closed: { rotate: 0, y: 0, x: 0 },
};

const last = {
  open: { rotate: -45, y: -2, x: 4 },
  closed: { rotate: 0, y: 0, x: 0 },
};

const MenuIcon = ({ isOpen, handleClick }: Props) => {
  return (
    <motion.div
      onClick={handleClick}
      animate={isOpen ? "open" : "closed"}
      className={`md:hidden size-6 cursor-pointer flex flex-col justify-between items-center`}
    >
      <motion.div
        variants={first}
        className={`bg-neutral-50 w-1/2 h-1 self-end origin-right`}
      />
      <motion.div variants={middle} className="bg-neutral-50 w-full h-1" />
      <motion.div
        variants={last}
        className={`bg-neutral-50 w-1/2 h-1 origin-left self-start`}
      />
    </motion.div>
  );
};

export default MenuIcon;
