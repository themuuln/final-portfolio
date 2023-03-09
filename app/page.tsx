"use client";

import { useRef } from "react";
import HeroSection from "@/components/hero/HeroSection";
import HeaderSection from "@/components/header/HeaderSection";
import MainSection from "@/components/main/MainSection";
import FooterSection from "@/components/footer/FooterSection";
import MbtiSection from "@/components/main/Mbti/MbtiSection";

export default function Home() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-hidden overflow-y-scroll">
      {/* <ProgressBar /> */}
      {/* <ScrollIndicator /> */}
      <HeroSection />
      <HeaderSection />
      <MainSection />
      <MbtiSection />
      <FooterSection />
    </div>
  );
}
