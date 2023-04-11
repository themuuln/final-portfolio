import { poppins, montserrat } from "@/public/fonts/fonts";
import { motion as m } from "framer-motion";
import { useContext } from "react";
import CursorContext from "@/lib/context/context";
import { RxPerson } from "react-icons/rx";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";

const DebaterCaption = () => {
  const { textEnter, textLeave } = useContext(CursorContext);
  const { setHoverType } = useContext(HoverTypeContext);

  const handleMouseEnter = () => {
    textEnter();
    setHoverType(<RxPerson />);
  };

  const handleMouseLeave = () => {
    textLeave();
  };

  return (
    <>
      <m.a
        href="https://www.16personalities.com/profiles/aadde637ba318"
        target={"_blank"}
        // initial={{ x: -100, y: -100, opacity: 0 }}
        // whileInView={{ x: 0, y: 0, opacity: 1 }}
        // transition={{ duration: 0.3 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        id="debaterCaption"
        className={`${poppins.className} text-brand_main-500 text-6xl font-semibold transition-colors duration-300 hover:text-brand_bg-500`}
      >
        Debater
      </m.a>
      <m.a
        href="https://www.16personalities.com/profiles/aadde637ba318"
        target={"_blank"}
        initial={{ x: -100, y: 100, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`${montserrat.className} text text-brand_main-400 text-2xl underline underline-offset-1`}
      >
        ENTP-T
      </m.a>
    </>
  );
};

export default DebaterCaption;
