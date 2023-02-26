import { Inter } from "@next/font/google";
import MainSection from "@/components/main/MainSection";
import HeaderSection from "@/components/header/HeaderSection";
import FooterSection from "@/components/footer/FooterSection";
import Cursor from "@/components/Cursor";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <MainSection />
      <HeaderSection />
      <FooterSection />
      <Cursor />
    </>
  );
}
