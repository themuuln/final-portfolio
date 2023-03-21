import { useContext } from "react";
import CursorContext from "@/lib/context/context";
import { motion as m } from "framer-motion";

const FooterTopLeftSection = () => {
  const { textEnter, textLeave } = useContext(CursorContext);
  return (
    <>
      <div>
        <p className="text-brand_main-700 text-3xl">SAY HELLO</p>
        <m.p
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="cursor-pointer underline-offset-1 hover:underline"
        >
          themuln.official@gmail.com
        </m.p>
      </div>
    </>
  );
};

export default FooterTopLeftSection;
