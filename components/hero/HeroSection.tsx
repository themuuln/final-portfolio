"use client";
import { motion } from "framer-motion";
import ScrollDownAnimation from "./ScrollDownAnimation";
import Role from "./Role";
import HeroMyName from "./HeroMyName";
import HelloGreetings from "./HeroGreetings";

function HeroSection() {
  return (
    <>
      <main
        className={
          "flex h-screen w-screen items-center justify-center bg-brand_bg-500 text-brand_main-500"
        }
      >
        <motion.div className="container flex h-full flex-col items-center justify-center">
          <div className="textContainer flex select-none flex-col justify-start text-7xl">
            <HelloGreetings greetings={"Hello, my name is"} />
            <HeroMyName myName={"temuulen undrakhbayar"} />
            <Role role={"Front-end Developer & UI/UX Designer"} />
          </div>
        </motion.div>
        <ScrollDownAnimation />
        {/* <ScrollUpAnimation /> */}
      </main>
    </>
  );
}

export default HeroSection;
