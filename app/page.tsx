"use client";

import HeroSection from "@/components/hero/HeroSection";
import HeaderSection from "@/components/header/HeaderSection";
import MainSection from "@/components/main/MainSection";
import FooterSection from "@/components/footer/FooterSection";
import MbtiSection from "@/components/main/Mbti/MbtiSection";
export default function Home() {
  return (
    <>
      {/* <ProgressBar /> */}
      {/* <ScrollIndicator /> */}
      <HeroSection />
      <MainSection />
      <MbtiSection />
      <FooterSection />
    </>
  );
}
