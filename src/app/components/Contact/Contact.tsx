import SectionLayout from "@/components/SectionLayout";
import React, { ChangeEvent, useState } from "react";
import { SectionIds } from "../../enum";
import TitleText from "@/components/TitleText";
import SVGIcon from "@/components/SVGIcon";
import { Copy, Github } from "@/assets/svg";
import { motion } from "framer-motion";

const EMAIL = "nicolasarrastia@gmail.com";

const EmailForm = () => {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSubjectChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSubject(event.target.value);
  };

  const handleBodyChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(event.target.value);
  };

  const handleCopyEmail = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    navigator.clipboard.writeText(EMAIL);
  };

  return (
    <form action="" className="flex flex-col gap-4 bg-neutral-900 p-4">
      <h3 className="text-xl">Send me an email</h3>

      <input
        type="text"
        name="subject"
        id="subject"
        placeholder="Subject"
        className="w-full bg-neutral-800 p-2"
        value={subject}
        onChange={handleSubjectChange}
      />
      <textarea
        name="message"
        id="message"
        cols={30}
        rows={10}
        placeholder="Message"
        className="w-full bg-neutral-800 p-2 max-h-60"
        value={body}
        onChange={handleBodyChange}
      ></textarea>

      <footer className="flex gap-4">
        <a
          className="w-full bg-neutral-800 p-2 text-center"
          href={`mailto:${EMAIL}? subject=${subject} &body=${body}`}
        >
          Send
        </a>

        <button
          className="w-full bg-neutral-800 p-2 text-center"
          onClick={handleCopyEmail}
        >
          Or Copy Email
        </button>
      </footer>
    </form>
  );
};

export const SocialNetwork = () => {
  return (
    <div className="border h-full">
      <div className="flex flex-col">
        <SVGIcon src={Github} size="2rem" className="bg-neutral-50" />
        <SVGIcon src={Github} size="2rem" className="bg-neutral-50" />
        <SVGIcon src={Github} size="2rem" className="bg-neutral-50" />
      </div>
    </div>
  );
};

const SECTIONS = [<SocialNetwork key="social" />, <EmailForm key="email" />];

const Contact = () => {
  return (
    <SectionLayout id={SectionIds.CONTACT}>
      <TitleText text={"Contact Me"} />

      {/* <div className="grid gap-y-4 gap-x-8 sm:grid-cols-2">
        {SECTIONS.map((section, index) => (
          <motion.div
            key={index}
            viewport={{ once: true }}
            initial={{ opacity: 0, translateY: -20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{
              delay: 0.5 + index * 0.2,
              duration: 0.5,
            }}
          >
            {section}
          </motion.div>
        ))}
      </div> */}

      <div>Did you liked my work?</div>
      <div>get in touch</div>
    </SectionLayout>
  );
};

export default Contact;
