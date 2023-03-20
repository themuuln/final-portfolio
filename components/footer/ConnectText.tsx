import { RiArrowRightUpLine } from "react-icons/ri";
import { useContext } from "react";
import CursorContext from "@/lib/context/context";
import { motion as m } from "framer-motion";

const ConnectText = ({ href, social }: any) => {
  const { textEnter, textLeave } = useContext(CursorContext);
  return (
    <m.li onMouseEnter={textEnter} onMouseLeave={textLeave}>
      <a
        href={href}
        className="flex items-center justify-center gap-1 transition-all duration-500 hover:text-brand_main-700 underline-offset-1 hover:underline"
        target={"blank"}
      >
        {social}
        <RiArrowRightUpLine />
      </a>
    </m.li>
  );
};

export default ConnectText;
