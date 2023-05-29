"use client";
import HeroSection from "@/components/hero/HeroSection";
import MainSection from "@/components/main/MainSection";
import ContactSection from "@/components/contact/ContactSection";
import SkillSection from "@/components/main/SkillSection";
import TimelineSection from "@/components/main/TimelineSection";
import SeeMoreSection from "@/components/main/SeeMoreSection";

export default function Home() {
  return (
    <>
      <div className="noise-container ">
        <div className="noise" />
        <HeroSection />
        <div className="space-y-72 bodydivLight dark:bodydivDark ">
          <div className="absolute w-full h-96 bg-gradient-to-b from-[#e6e6e6] via-[#e6e6e6] dark:from-[#171920]/80 dark:via-[#171920]/80" />
          <MainSection />
          <SkillSection />
          <TimelineSection />
          <SeeMoreSection />
          <ContactSection />
          <div className="absolute bottom-0 w-full h-96 bg-gradient-to-t from-[#e6e6e6] via-[#e6e6e6] dark:from-[#171920]/80 dark:via-[#171920]/80" />
        </div>
      </div>
    </>
  );
}
