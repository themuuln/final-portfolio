import { RiArrowRightUpLine } from "react-icons/ri";
import { useContext } from "react";
import CursorContext from "@/lib/context/context";
import { motion as m } from "framer-motion";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";
import { FiArrowUpRight } from "react-icons/fi";

const ConnectText = ({ href, social, icon }: any) => {
  const { textEnter, textLeave } = useContext(CursorContext);
  const { setHoverType } = useContext(HoverTypeContext);

  const handleMouseEnter = () => {
    textEnter();
    setHoverType(icon);
  };

  const handleMouseLeave = () => {
    textLeave();
    setHoverType(<FiArrowUpRight />);
  };
  return (
    <li>
      <m.a
        href={href}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex items-center justify-center gap-1 transition-all duration-500 hover:text-brand_main-700 underline-offset-1 hover:underline"
        target={"blank"}
      >
        {social}
        <RiArrowRightUpLine />
      </m.a>
    </li>
  );
};

export default ConnectText;
