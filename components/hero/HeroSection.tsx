"use client";
import { motion } from "framer-motion";
import Role from "./Role";
import HeroMyName from "./HeroMyName";
import HelloGreetings from "./HeroGreetings";
import { telegraf_ultrabold } from "@/public/fonts/fonts";

function HeroSection() {
  return (
    <>
      <main
        id="hero"
        className={`${telegraf_ultrabold.className} text-white flex min-h-screen w-screen snap-center items-center justify-center `}
      >
        <motion.div className="container flex h-full w-screen flex-col items-center justify-center">
          <div className="textContainer flex select-none flex-col justify-start">
            <HelloGreetings greetings={"Hello, my name is"} />
            <HeroMyName myName={"temuulen undrakhbayar"} />
            <Role role={"Front-end Developer & UI Designer"} />
          </div>
        </motion.div>
      </main>
    </>
  );
}

export default HeroSection;
