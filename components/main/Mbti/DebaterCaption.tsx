import { poppins, montserrat } from "@/public/fonts/fonts";
import DebaterText from "@/public/svg/DebaterText";
import { motion as m } from "framer-motion";

const DebaterCaption = () => {
  return (
    <>
      <m.h2
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        className={`${poppins.className} text-6xl font-semibold text-brand_main-500`}
      >
        Debater
      </m.h2>
      {/* <DebaterText /> */}
      <m.h3
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        className={`${montserrat.className} text text-2xl text-brand_main-400 underline underline-offset-1`}
      >
        ENTP-T
      </m.h3>
    </>
  );
};

export default DebaterCaption;
