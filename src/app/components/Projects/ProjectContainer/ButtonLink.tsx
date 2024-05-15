import Link from "next/link";

type ButtonLinkProps = {
  children: React.ReactNode;
  url: string;
  type?: "primary" | "secondary";
};

const CLASSES = {
  primary: "",
  secondary: "border-neutral-950 bg-neutral-50 text-neutral-950",
};

const ButtonLink = ({ children, url, type = "primary" }: ButtonLinkProps) => {
  return (
    <Link
      className={`flex items-center justify-center w-full py-2 p-4 border font-semibold ${CLASSES[type]}`}
      href={url}
      target="_blank"
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
