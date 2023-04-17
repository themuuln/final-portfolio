"use client";
const HeroSection = require("@/components/hero/HeroSection").default;
const MainSection = require("@/components/main/MainSection").default;

export default function Home() {
  return (
    <>
      <HeroSection />
      <MainSection />
    </>
  );
}
