import { motion as m } from "framer-motion";
import CursorContext from "@/lib/context/context";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";
import { HiOutlineCode } from "react-icons/hi";
import { skills } from "@/pages/api/skills";

import { useContext } from "react";

const SkillsList = (skill: any) => {
  const { textEnter, textLeave } = useContext(CursorContext);
  const { setHoverType } = useContext(HoverTypeContext);

  const handleMouseEnter = () => {
    textEnter();
    setHoverType(<HiOutlineCode />);
  };
  return (
    <>
      <m.li
        whileHover={{ x: 40, scale: 1.1 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={textLeave}
        className={"transition-colors duration-200 hover:text-brand_bg-200"}
        key={skill.name}
      >
        <m.a href={skill.href} target="_blank" rel="noopener noreferrer">
          {skill.name}
        </m.a>
      </m.li>
    </>
  );
};

export default SkillsList;
