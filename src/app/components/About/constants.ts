import { CafeAndRobin, Kuma, PileOfRocks, VaniAndI } from "@/assets/img";
import { StaticImageData } from "next/image";

export const PICTURES: {
  url: StaticImageData;
  alt: string;
  className?: string;
}[] = [
  { url: VaniAndI, alt: "My girlfriend Vani and I" },
  { url: Kuma, className: "object-top", alt: "My cat called Kuma" },
  {
    url: CafeAndRobin,
    className: "xl:object-[0,-40px]",
    alt: "My dog Café and our cat Robin",
  },
  {
    url: PileOfRocks,
    alt: "My dog Café and our cat Robin",
  },
];
