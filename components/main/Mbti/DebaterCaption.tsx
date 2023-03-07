import { poppins, montserrat } from "@/public/fonts/fonts";
import DebaterText from "@/public/svg/DebaterText";

const DebaterCaption = () => {
  return (
    <>
      {/* <h2
        className={`${poppins.className} text-6xl font-semibold text-brand_main-500`}
      >
        Debater
      </h2> */}
      <DebaterText />
      <h3
        className={`${montserrat.className} text text-2xl text-brand_main-400 underline underline-offset-1`}
      >
        ENTP-T
      </h3>
    </>
  );
};

export default DebaterCaption;
