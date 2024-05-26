import Link from "next/link";

type ButtonLinkProps = {
  children: React.ReactNode;
  url: string;
  type?: "primary" | "secondary";
};

const CLASSES = {
  primary: "bg-neutral-950",
  secondary: "border-neutral-950 bg-neutral-50 text-neutral-950",
};

const ButtonLink = ({ children, url, type = "primary" }: ButtonLinkProps) => {
  return (
    <div className="relative group bg-red-500">
      <div
        className={`absolute transition-all size-full top-0 left-0 border group-hover:top-2 group-hover:left-2 pointer-events-none`}
      />

      <Link
        className={`flex relative items-center justify-center w-full py-2 p-4 border font-semibold ${CLASSES[type]}`}
        href={url}
        target="_blank"
      >
        {children}
      </Link>
    </div>
  );
};

export default ButtonLink;
