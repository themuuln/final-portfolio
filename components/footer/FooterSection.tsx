"use client";
import { IconContext } from "react-icons";
import FooterMain from "./FooterMain";
import FooterStartSection from "./FooterStartSection";

const FooterSection = () => {
  return (
    <div id="footer" className="flex h-screen snap-center flex-col justify-end">
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
