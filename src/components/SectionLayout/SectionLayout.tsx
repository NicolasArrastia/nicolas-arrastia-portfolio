import React from "react";

type Props = {
  children: React.ReactNode;
};

const SectionLayout = ({ children }: Props) => {
  return <div className="px-4 md:px-16 py-8 bg-neutral-950">{children}</div>;
};

export default SectionLayout;
