import { Inter } from "@next/font/google";
import HeroSection from "@/components/hero/HeroSection";
import HeaderSection from "@/components/header/HeaderSection";
import FooterSection from "@/components/footer/FooterSection";
import Cursor from "@/components/Cursor";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HeroSection />
      <HeaderSection />
      <FooterSection />
      <Cursor />
    </>
  );
}
