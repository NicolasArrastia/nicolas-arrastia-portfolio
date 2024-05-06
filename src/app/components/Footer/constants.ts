import { Github, LinkedIn } from "@/assets/svg";
import { StaticImageData } from "next/image";

export const SOCIAL_MEDIA: {
  img: StaticImageData;
  alt: string;
  url: string;
}[] = [
  {
    img: Github,
    alt: "Github link",
    url: "https://github.com/NicolasArrastia",
  },
  {
    img: LinkedIn,
    alt: "LinkedIn link",
    url: "https://www.linkedin.com/in/nicol%C3%A1s-arrast%C3%ADa/",
  },
];
