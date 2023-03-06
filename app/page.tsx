import HeroSection from "@/components/hero/HeroSection";
import HeaderSection from "@/components/header/HeaderSection";
import MainSection from "@/components/main/MainSection";
import ProgressBar from "@/components/hero/ProgressBar";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <ProgressBar />
      <HeroSection />
      <MainSection />
    </>
  );
}
