import { DropdownTriangle } from "@/assets/svg";
import SVGIcon from "@/components/SVGIcon";
import { motion, useAnimate } from "framer-motion";
import React from "react";

type Props = {
  text: string;
  technologies?: any[];
};

const InfoDropdown = ({ text, technologies }: Props) => {
  const [scope, animate] = useAnimate();

  return (
    <motion.div
      whileHover="open"
      whileTap="open"
      initial="closed"
      // initial="open"
      onHoverEnd={() => animate("", "closed")}
      className="relative border h-full aspect-square flex justify-center items-center cursor-pointer"
      ref={scope}
    >
      <span aria-hidden="true" className="font-mono text-lg">
        i
      </span>
      <motion.div
        variants={{
          open: {
            opacity: 1,
            visibility: "visible",
          },
          closed: {
            opacity: 0,
            visibility: "hidden",
            transition: { visibility: { delay: 0.5 } },
          },
        }}
        transition={{ duration: 0.2 }}
        className="absolute border bg-neutral-950 right-[0.12rem] -translate-y-full -top-5 w-64 p-4 flex flex-col gap-2"
      >
        <SVGIcon
          src={DropdownTriangle}
          size={"22px"}
          className={
            "bg-neutral-100 absolute bottom-0 right-0 translate-y-[70%] -translate-x-[30%]"
          }
        />
        <SVGIcon
          src={DropdownTriangle}
          size={"20px"}
          className={
            "bg-neutral-950 absolute bottom-0 right-0 translate-y-2/3 -translate-x-[40%]"
          }
        />
        <span>{text}</span>
        <div className="flex justify-end gap-2">
          {technologies?.map((tech) => (
            <SVGIcon
              key={tech}
              src={tech}
              size={"20px"}
              className={"bg-neutral-50"}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default InfoDropdown;
