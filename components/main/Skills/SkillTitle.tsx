import { item } from "@/components/animation/variants";
import { motion } from "framer-motion";
import { GiSkills } from "react-icons/gi";
import CursorContext from "@/lib/context/context";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";
import { useContext } from "react";

const SkillTitle = ({ children }: { children: String }) => {
  const { textEnter, textLeave } = useContext(CursorContext);
  const { setHoverType } = useContext(HoverTypeContext);
  const skillMouseEnter = () => {
    textEnter();
    setHoverType(<GiSkills />);
  };
  return (
    <>
      <motion.h2
        variants={item}
        onMouseEnter={skillMouseEnter}
        onMouseLeave={textLeave}
        className={`text-xl mb-1 md:text-4xl space-y-2 cursor-pointer font-semibold text-brand_bg-500 hover:underline`}
      >
        {children}
      </motion.h2>
    </>
  );
};

export default SkillTitle;
