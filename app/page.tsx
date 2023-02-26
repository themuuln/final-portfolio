import Image from "next/image";
import { Inter } from "@next/font/google";
import MainSection from "@/components/MainSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <MainSection />
    </>
  );
}
