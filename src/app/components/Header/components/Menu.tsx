"use client";
import Link from "next/link";
import { NAV_OPTIONS, THRESHOLD } from "../constants";

type Props = {
  scrollY: number;
  isOpen: boolean;
  onClick: () => void;
};

const Menu = ({ scrollY = 0, isOpen = true, onClick }: Props) => {
  return (
    <nav
      className={`${scrollY > THRESHOLD && isOpen && "bg-neutral-950/80"} ${
        !isOpen && "opacity-0"
      } w-full px-4 py-4 h-full transition md:hidden
    `}
    >
      <ul className="flex flex-col items-end gap-4">
        {NAV_OPTIONS.map(({ label, href }) => (
          <li key={label}>
            <Link href={href} onClick={onClick}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
