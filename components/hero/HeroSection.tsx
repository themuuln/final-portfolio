"use client";
import { motion } from "framer-motion";
import Role from "./Role";
import HeroMyName from "./HeroMyName";
import HelloGreetings from "./HeroGreetings";
import { Montserrat } from "@next/font/google";
import HeaderSection from "../header/HeaderSection";
import { CursorHoverFunction } from "@/lib/types/types";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

function HeroSection({ textEnter, textLeave }: CursorHoverFunction) {
  return (
    <>
      <HeaderSection textEnter={textEnter} textLeave={textLeave} />
      <main
        id="hero"
        className={`${montserrat.className} text-white flex min-h-screen w-screen snap-center items-center justify-center`}
      >
        <motion.div className="container flex h-full w-screen flex-col items-center justify-center">
          <div className="textContainer flex select-none flex-col justify-start">
            <HelloGreetings
              textEnter={textEnter}
              textLeave={textLeave}
              greetings={"Hello, my name is"}
            />
            <HeroMyName
              textEnter={textEnter}
              textLeave={textLeave}
              myName={"temuulen undrakhbayar"}
            />
            <Role
              textEnter={textEnter}
              textLeave={textLeave}
              role={"Front-end Developer & UI Designer"}
            />
          </div>
        </motion.div>
      </main>
    </>
  );
}

export default HeroSection;
