import { RiArrowRightUpLine } from "react-icons/ri";
import { useContext } from "react";
import CursorContext from "@/lib/context/context";
import { motion as m } from "framer-motion";

const ConnectText = ({ href, social }: any) => {
  const { textEnter, textLeave } = useContext(CursorContext);
  return (
    <m.li onMouseEnter={textEnter} onMouseLeave={textLeave}>
      <m.a
        href={href}
        className="hover:text-brand_main-700 flex items-center justify-center gap-1 underline-offset-1 transition-all duration-500 hover:underline"
        target={"blank"}
      >
        {social}
        <RiArrowRightUpLine />
      </m.a>
    </m.li>
  );
};

export default ConnectText;
