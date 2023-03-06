import { Poppins, Montserrat } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-montserrat",
});

const DebaterCaption = () => {
  return (
    <>
      <h2
        className={`${poppins.className} text-6xl font-semibold text-brand_main-500`}
      >
        Debater
      </h2>
      <h3
        className={`${montserrat.className} text text-2xl text-brand_main-400 underline underline-offset-1`}
      >
        ENTP-T
      </h3>
    </>
  );
};

export default DebaterCaption;
