import { SectionIds } from "@/app/enum";
import React from "react";

type Props = {
  children: React.ReactNode;
  id: SectionIds;
};

const SectionLayout = ({ children, id }: Props) => {
  return (
    <div id={id} className="px-4 md:px-16 py-8">
      {children}
    </div>
  );
};

export default SectionLayout;
