"use client";
import HeroSection from "@/components/hero/HeroSection";
import MainSection from "@/components/main/MainSection";
import ContactSection from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <>
      <div className="noise-container">
        <div className="noise" />
        <HeroSection />
        <MainSection />
        <ContactSection />
      </div>
    </>
  );
}
