"use client";
import { IconContext } from "react-icons";
import FooterMain from "./FooterMain";
import FooterStartSection from "./FooterStartSection";

const FooterSection = () => {
  return (
    <div
      id="footer"
      className="flex flex-col justify-end pt-20 h-fit snap-center"
    >
      <footer className="text-brand_main-500 bg-brand_bg-600/5">
        <IconContext.Provider value={{ size: "1em" }}>
          <FooterStartSection />
          <FooterMain />
        </IconContext.Provider>
      </footer>
    </div>
  );
};

export default FooterSection;
