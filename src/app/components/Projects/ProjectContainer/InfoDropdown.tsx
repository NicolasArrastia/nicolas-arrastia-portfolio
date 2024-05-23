import { DropdownTriangle, Warning } from "@/assets/svg";
import SVGIcon from "@/components/SVGIcon";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { ProjectData } from "../constants";
import { StaticImageData } from "next/image";

type Props = ProjectData;

export const IsInProgress = () => {
  return (
    <div className="flex items-center gap-1 size-8 w-fit">
      <SVGIcon
        src={Warning}
        size={"1rem"}
        className={"bg-orange-600 drop-shadow-md"}
      />
      <span className="text-orange-600 text-xs">Project in progress</span>
    </div>
  );
};

const InfoDropdown = ({ info, technologies, date, isInProgress }: Props) => {
  const [formattedDate, setFormattedDate] = useState<string | null>(null);

  useEffect(() => {
    if (date) {
      const dateObj = typeof date === "string" ? new Date(date) : date;
      if (!isNaN(dateObj.getTime())) {
        const formatted = dateObj
          .toLocaleString("default", { month: "short", year: "2-digit" })
          .replace(" ", " • '");
        setFormattedDate(formatted);
      }
    }
  }, [date]);

  return (
    <motion.div
      whileHover="open"
      whileTap="open"
      initial="closed"
      className="relative border h-full aspect-square flex justify-center items-center cursor-pointer"
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
        className="absolute border bg-neutral-950 right-[0.12rem] -translate-y-full -top-5 w-96 p-4 flex flex-col gap-2 font-sans text-base"
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
        {formattedDate && (
          <span className="text-neutral-400 text-sm capitalize">
            {formattedDate}
          </span>
        )}
        <span>{info}</span>
        <footer className="flex justify-between items-center">
          {isInProgress && <IsInProgress />}
          <div className="flex justify-end gap-2 ml-auto">
            {technologies?.map((tech, index) => (
              <SVGIcon
                key={index}
                src={tech as unknown as StaticImageData}
                size={"20px"}
                className={"bg-neutral-50"}
              />
            ))}
          </div>
        </footer>
      </motion.div>
    </motion.div>
  );
};

export default InfoDropdown;
