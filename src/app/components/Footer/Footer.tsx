import Link from "next/link";
import SVGIcon from "../../../components/SVGIcon";
import { SOCIAL_MEDIA } from "./constants";

const Separator = () => (
  <div className="flex justify-center gap-2">
    <div className="size-1 bg-neutral-600 rounded-full" />
    <div className="size-1 bg-neutral-600 rounded-full" />
    <div className="size-1 bg-neutral-600 rounded-full" />
  </div>
);

const Footer = () => {
  return (
    <>
      <Separator />
      <div className=" flex flex-col items-center py-8 pt-14 gap-8">
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
        </div>
        <span className="text-neutral-500">
          ©{new Date().getFullYear()} Nicolás Arrastía
        </span>
      </div>
    </>
  );
};

export default Footer;
