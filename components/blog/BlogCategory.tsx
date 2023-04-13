import CursorContext from "@/lib/context/context";
import { useContext } from "react";
import { motion as m } from "framer-motion";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";
import {
  SiNeovim,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiChakraui,
  SiFramer,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaSass, FaGitAlt } from "react-icons/fa";
import { TiLightbulb } from "react-icons/ti";
import { RiReactjsLine } from "react-icons/ri";
import { IconMappingProps } from "@/lib/types/icon/types";

const BlogCategory = ({ context }: IconMappingProps) => {
  const { textEnter, textLeave } = useContext(CursorContext);
  const { setHoverType } = useContext(HoverTypeContext);

  const icon = () => {
    switch (context) {
      case "Neovim":
        return <SiNeovim />;
      case "React":
        return <RiReactjsLine />;
      case "Tips":
        return <TiLightbulb />;
      case "Javascript":
        return <SiJavascript />;
      case "Typescript":
        return <SiTypescript />;
      case "TailwindCSS":
        return <SiTailwindcss />;
      case "ChakraUI":
        return <SiChakraui />;
      case "NextJS":
        return <TbBrandNextjs />;
      case "SASS/SCSS":
        return <FaSass />;
      case "Git":
        return <FaGitAlt />;
      case "Framer-motion":
        return <SiFramer />;
      default:
        return null;
    }
  };

  const handleMouseEnter = () => {
    textEnter();
    setHoverType(icon);
  };
  const handleMouseLeave = () => {
    textLeave();
  };
  return (
    <>
      <m.h3
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="cursor-pointer rounded border-[1px] border-[#fff] px-2 text-lg text-white transition-colors duration-200 hover:bg-[#fff] hover:text-[#212022]"
      >
        {context}
      </m.h3>
    </>
  );
};

export default BlogCategory;
