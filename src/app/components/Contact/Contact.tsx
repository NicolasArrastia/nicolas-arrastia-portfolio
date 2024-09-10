import SectionLayout from "@/components/SectionLayout";
import React, { ChangeEvent, useState } from "react";
import { SectionIds } from "../../enum";
import SVGIcon from "@/components/SVGIcon";
import { Copy } from "@/assets/svg";
import ButtonLink from "../Projects/ProjectContainer/ButtonLink";
import { useLanguage } from "@/contexts/LanguageContext";
import lang, { Languages } from "@/lang";

const EMAIL = "nicolasarrastia@gmail.com";

// todo move this component to a global component folder
const Button = ({
  children,
  onClick,
  type = "primary",
}: {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: "primary" | "secondary";
}) => {
  return (
    <button className="relative group" onClick={onClick}>
      <div
        className={`absolute transition-all size-full top-0 left-0 border group-hover:top-2 group-hover:left-2 pointer-events-none`}
      />
      <span
        className={`flex relative items-center justify-center w-full py-2 p-4 border font-semibold ${
          type === "primary" &&
          "bg-neutral-50 text-neutral-950 border-neutral-950"
        }`}
      >
        {children}
      </span>
    </button>
  );
};

const Contact = () => {
  const { language } = useLanguage();
  const SECTION_TEXT = lang[language].contact;

  const BUTTONS: {
    text: Record<Languages, string>;
    url: string;
    type?: "secondary";
  }[] = [
    {
      text: { en: "Send Email", es: "Enviar Email" },
      url: `mailto:${EMAIL}?subject=${encodeURIComponent(
        SECTION_TEXT.email_subject
      )}&body=${encodeURIComponent(SECTION_TEXT.email_body)}`,
    },
    {
      text: { en: "Send from Gmail", es: "Enviar desde Gmail" },
      url: `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent(
        SECTION_TEXT.email_subject
      )}&body=${encodeURIComponent(SECTION_TEXT.email_body)}`,
    },
    {
      text: { en: "My LinkedIn", es: "Mi LinkedIn" },
      url: "https://www.linkedin.com/in/nicolas-arrastia/", // todo add this url to some enum or global constants
      type: "secondary",
    },
  ];

  const handleCopyEmail = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    event.preventDefault();
    navigator.clipboard.writeText(EMAIL);
  };

  return (
    <SectionLayout id={SectionIds.CONTACT}>
      <div className="text-center text-lg">{SECTION_TEXT.work}</div>
      <div className="text-center text-4xl uppercase font-semibold my-10 tracking-wider">
        {SECTION_TEXT.get_in_touch}
      </div>

      <div
        onClick={handleCopyEmail}
        className="cursor-pointer border active:bg-blue-500/20 border-neutral-50 w-fit m-auto text-lg grid grid-cols-[auto_auto] place-items-center overflow-hidden"
      >
        <span className="py-2 px-4">{EMAIL}</span>
        <div className="bg-neutral-50 h-full aspect-square grid place-items-center">
          <SVGIcon src={Copy} size={"1.8rem"} className={"bg-neutral-950"} />
        </div>
      </div>

      <div className="flex gap-8 justify-center mt-8">
        <Button onClick={handleCopyEmail}>{SECTION_TEXT.copy_email}</Button>
        {BUTTONS.map((i) => {
          return (
            <ButtonLink key={i.text[language]} {...i}>
              {i.text[language]}
            </ButtonLink>
          );
        })}
      </div>
    </SectionLayout>
  );
};

export default Contact;
