"use client";
import FooterMain from "./FooterMain";
import FooterStartSection from "./FooterStartSection";

const FooterSection = () => {
  return (
    <div id="footer" className="flex h-screen snap-center flex-col justify-end">
      <footer className="bg-brand_bg-600 text-brand_main-500">
        <FooterStartSection />
        <FooterMain />
      </footer>
    </div>
  );
};

export default FooterSection;
