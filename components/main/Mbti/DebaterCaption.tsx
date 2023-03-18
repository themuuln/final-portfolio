import { poppins, montserrat } from "@/public/fonts/fonts";
import { motion as m } from "framer-motion";

const DebaterCaption = () => {
  return (
    <>
      <m.h2
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        className={`${poppins.className} text-brand_main-500 text-6xl font-semibold`}
      >
        Debater
      </m.h2>
      <m.h3
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        className={`${montserrat.className} text text-brand_main-400 text-2xl underline underline-offset-1`}
      >
        ENTP-T
      </m.h3>
    </>
  );
};

export default DebaterCaption;
