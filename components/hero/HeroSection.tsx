"use client";
import Role from "./Role";
import HeroMyName from "./HeroMyName";
import HelloGreetings from "./HeroGreetings";
import { telegraf_ultrabold } from "@/public/fonts/fonts";
import Image from "next/image";

function HeroSection() {
  const backgroundUrl = "@/public/jpg/light-background.jpg";
  return (
    <>
      <main
        id="hero"
        className={`flex min-h-screen w-screen snap-center items-center justify-center text-white `}
      >
        <div className="container flex flex-col items-center justify-center w-screen h-full">
          <div className="flex flex-col justify-start select-none textContainer">
            <HelloGreetings greetings={"Hello, my name is"} />
            <HeroMyName myName={"Themuuln"} />
            <Role role={"Front-end Developer"} />
          </div>
        </div>
      </main>
    </>
  );
}

export default HeroSection;
