"use client";
import FooterMain from "./FooterMain";
import FooterStartSection from "./FooterStartSection";

const FooterSection = () => {
  return (
    <div id="footer" className="flex flex-col justify-end h-screen snap-center">
      <footer className="text-brand_main-500 bg-brand_bg-600/5">
        <FooterStartSection />
        <FooterMain />
      </footer>
    </div>
  );
};

export default FooterSection;
