import CursorContext from "@/lib/context/context";
import { motion as m } from "framer-motion";
import { useContext } from "react";

const SkillsText = ({ name, href }: any) => {
  const { textEnter, textLeave } = useContext(CursorContext);

  const handleMouseEnter = () => {
    textEnter();
  };

  const handleMouseLeave = () => {
    textLeave();
  };
  return (
    <m.a
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-lg font-light leading-3 sm:text-xl md:text-2xl md:leading-3 xl:text-3xl xl:leading-6"
    >
      {name}
    </m.a>
  );
};

export default SkillsText;
