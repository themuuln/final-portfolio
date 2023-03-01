"use client";
import { motion } from "framer-motion";
import ScrollDownAnimation from "./ScrollDownAnimation";
import ScrollUpAnimation from "./ScrollUpAnimation";
import Role from "./Role";
import HeroMyName from "./HeroMyName";
import HelloGreetings from "./HeroGreetings";

function HeroSection() {
  return (
    <>
      <main
        className={
          "flex h-screen w-screen snap-start items-center justify-center bg-brand_bg-500 text-brand_main-500"
        }
      >
        <motion.div className="container flex h-full flex-col items-center justify-center">
          <div className="textContainer flex select-none flex-col justify-start text-7xl md:text-[16px]">
            <HelloGreetings greetings={"Hello, my name is"} />
            {/* <HelloGreetings greetings={"Hi, I'm"} /> */}
            <HeroMyName myName={"TEMUULEN UNDRAKHBAYAR"} />
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
