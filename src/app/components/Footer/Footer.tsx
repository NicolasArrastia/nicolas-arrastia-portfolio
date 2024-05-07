import Link from "next/link";
import SVGIcon from "../../../components/SVGIcon";
import { SOCIAL_MEDIA } from "./constants";
import { Email, OpenEmail } from "@/assets/svg";
import { motion, useAnimate } from "framer-motion";
import { useState } from "react";

const Separator = () => (
  <div className="flex justify-center gap-2 pt-14">
    <div className="size-1 bg-neutral-800 rounded-full" />
    <div className="size-1 bg-neutral-800 rounded-full" />
    <div className="size-1 bg-neutral-800 rounded-full" />
  </div>
);

const EMAIL = "nicolasarrastia@gmail.com";

const EmailComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scope, animate] = useAnimate();

  const handleCopyEmail = () => {
    setIsOpen(true);
    animate("", "open");
    navigator.clipboard.writeText(EMAIL);
    setTimeout(() => {
      setIsOpen(false);
    }, 1500);
  };

  return (
    <>
      <motion.div
        onClick={handleCopyEmail}
        initial="initial"
        whileTap="tap"
        animate={isOpen && "open"}
        ref={scope}
        variants={{
          closed: { rotate: 0 },
          tap: { translateY: 10 },
          open: {
            translateY: [10, 0],
            transition: {
              duration: 0.2,
            },
          },
        }}
        className="relative"
      >
        <motion.div
          className="absolute text-neutral-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={isOpen ? "open" : "closed"}
          variants={{
            closed: { opacity: 0, transition: { duration: 0.1 } },
            tap: { opacity: 0, top: "-50%" },
            open: {
              opacity: 1,
              top: -15,
            },
          }}
        >
          Copied!
        </motion.div>
        <SVGIcon
          src={isOpen ? OpenEmail : Email}
          size={"35px"}
          className={
            "bg-neutral-500 hover:bg-neutral-200 cursor-pointer transition"
          }
        />
      </motion.div>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <Separator />
      <div className=" flex flex-col items-center py-8 gap-8">
        <div className="flex gap-4">
          {SOCIAL_MEDIA.map(({ img, alt, url }) => (
            <Link key={alt} href={url} target="_blank">
              <SVGIcon
                src={img}
                size={"30px"}
                className="bg-neutral-500 hover:bg-neutral-200 transition"
              />
            </Link>
          ))}
          <EmailComponent />
        </div>
        <span className="text-neutral-500">
          ©{new Date().getFullYear()} Nicolás Arrastía
        </span>
      </div>
    </>
  );
};

export default Footer;
