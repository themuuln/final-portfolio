import { RiArrowRightUpLine } from "react-icons/ri";
import { useContext } from "react";
import CursorContext from "@/lib/context/context";
import { motion as m } from "framer-motion";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";
import { BsInstagram } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import { IconContext } from "react-icons";

const ConnectText = ({ href, social }: any) => {
  const { textEnter, textLeave } = useContext(CursorContext);
  const { hoverType, setHoverType } = useContext(HoverTypeContext);

  const handleMouseEnter = () => {
    textEnter();
    setHoverType(<BsInstagram />);
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
        className="hover:text-brand_main-700 flex items-center justify-center gap-1 underline-offset-1 transition-all duration-500 hover:underline"
        target={"blank"}
      >
        {social}
        <RiArrowRightUpLine />
      </m.a>
    </li>
  );
};

export default ConnectText;
