import HeroSection from "@/components/hero/HeroSection";
import HeaderSection from "@/components/header/HeaderSection";
import FooterSection from "@/components/footer/FooterSection";
import MainSection from "@/components/main/MainSection";
import ProgressBar from "@/components/hero/ProgressBar";

export default function Home() {
  return (
    <>
      <ProgressBar />
      <HeroSection />
      <HeaderSection />
      <MainSection />
      <FooterSection />
    </>
  );
}
