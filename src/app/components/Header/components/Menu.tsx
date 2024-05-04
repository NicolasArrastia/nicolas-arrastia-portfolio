"use client";
import Link from "next/link";
import { HEADER_HEIGHT, NAV_OPTIONS, THRESHOLD } from "../constants";

type Props = {
  scrollY: number;
  isOpen: boolean;
  onClick: () => void;
};

// TODO: Add background here
const Menu = ({ scrollY = 0, isOpen = true, onClick }: Props) => {
  return (
    <nav
      onClick={onClick}
      className={`
      fixed w-full h-full top-0 left-0 z-40

      p-4 border overflow-hidden
      ${!isOpen && "h-0 p-0"}`}
      style={{
        top: `${HEADER_HEIGHT}px`,
        height: !isOpen ? 0 : `calc(100vh - ${HEADER_HEIGHT}px)`,
        display: !isOpen ? "none" : "block",
      }}
    >
      <ul className="flex flex-col items-end gap-4">
        {NAV_OPTIONS.map(({ label, href }) => (
          <li key={label}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
