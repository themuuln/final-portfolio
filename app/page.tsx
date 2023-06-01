"use client";
import HeroSection from "@/components/hero/HeroSection";
import MainSection from "@/components/main/MainSection";
import ContactSection from "@/components/contact/ContactSection";
import SkillSection from "@/components/main/SkillSection";
import TimelineSection from "@/components/main/TimelineSection";
import SeeMoreSection from "@/components/main/SeeMoreSection";
import MadeWith from "@/components/madewith/MadeWith";
import { ParallaxText } from "@/lib/parallax/ParallaxText";

export default function Home() {
  return (
    <>
      <div className="noise-container ">
        {/* noise */}
        <div className="noise" />
        <HeroSection />
        {/* background pattern */}
        <div className="bodydivLight dark:bodydivDark">
          {/* fade in lines */}
          <div className="absolute w-full h-96 bg-gradient-to-b from-[#e6e6e6] via-[#e6e6e6] dark:from-[#16181f]/80 dark:via-[#16181f]/80" />
          <div className="z-10">
            <div className="relative">
              <ParallaxText baseVelocity={-1}>
                Temuulen Undrakhbayar
              </ParallaxText>
              <ParallaxText baseVelocity={1}>
                Temuulen Undrakhbayar
              </ParallaxText>
            </div>
            <div className="space-y-96">
              <MainSection />
              <SkillSection />
              <TimelineSection />
              <SeeMoreSection />
              <ContactSection />
              <MadeWith />
            </div>
          </div>
          {/* fade out lines */}
          <div className="absolute bottom-0 w-full h-96 bg-gradient-to-t from-[#e6e6e6] via-[#e6e6e6] dark:from-[#16181f]/80 dark:via-[#16181f]/80" />
        </div>
      </div>
    </>
  );
}
