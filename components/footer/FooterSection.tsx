"use client";
import { IconContext } from "react-icons";
import FooterMain from "./FooterMain";

const FooterSection = () => {
  return (
    <section id="footer" className="flex h-fit flex-col justify-end pt-20">
      <footer className="text-brand_main-500 bg-brand_bg-600/5">
        <IconContext.Provider value={{ size: "1em" }}>
          {/* <FooterStartSection /> */}
          <FooterMain />
        </IconContext.Provider>
      </footer>
    </section>
  );
};

export default FooterSection;
