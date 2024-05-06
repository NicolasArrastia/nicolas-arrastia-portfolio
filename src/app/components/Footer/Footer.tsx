const Footer = () => {
  return (
    <div className=" flex justify-center py-8 pt-16">
      <span className="text-neutral-500">
        ©{new Date().getFullYear()} Nicolás Arrastía
      </span>
    </div>
  );
};

export default Footer;
