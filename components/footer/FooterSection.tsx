"use client";
import { IconContext } from "react-icons";
import FooterMain from "./FooterMain";

const FooterSection = () => {
  return (
    <div id="footer" className="flex h-fit flex-col justify-end pt-20">
      <div className="text-brand_main-500 bg-brand_bg-600/5">
        <IconContext.Provider value={{ size: "1em" }}>
          {/* <FooterStartSection /> */}
          <FooterMain />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default FooterSection;
