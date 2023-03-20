import { poppins, montserrat } from "@/public/fonts/fonts";
import { motion as m } from "framer-motion";
import { useContext } from "react";
import CursorContext from "@/lib/context/context";

const DebaterCaption = () => {
  const { textEnter, textLeave } = useContext(CursorContext);
  return (
    <>
      <m.a
        href="https://www.16personalities.com/entp-personality"
        initial={{ x: -100, opacity: 0 }}
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        whileInView={{ x: 0, opacity: 1 }}
        className={`${poppins.className} text-brand_main-500 text-6xl font-semibold`}
      >
        Debater
      </m.a>
      <m.a
        href="https://www.16personalities.com/entp-personality"
        initial={{ x: -100, opacity: 0 }}
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        whileInView={{ x: 0, opacity: 1 }}
        className={`${montserrat.className} text text-brand_main-400 text-2xl underline underline-offset-1`}
      >
        ENTP-T
      </m.a>
    </>
  );
};

export default DebaterCaption;
