import CursorContext from "@/lib/context/context";
import { useContext } from "react";
import { motion as m } from "framer-motion";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";

type Props = {
  context: String;
};
const BlogCategory = ({ context }: Props) => {
  const { textEnter, textLeave } = useContext(CursorContext);
  const { hoverType, setHoverType } = useContext(HoverTypeContext);
  const handleMouseEnter = () => {
    textEnter();
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
