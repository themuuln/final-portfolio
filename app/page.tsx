"use client";
const HeroSection = require("@/components/hero/HeroSection").default;
const MainSection = require("@/components/main/MainSection").default;
const ContactSection = require("@/components/contact/ContactSection").default;

export default function Home() {
  return (
    <>
      <HeroSection />
      <MainSection />
      <ContactSection />
    </>
  );
}
