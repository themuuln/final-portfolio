"use client";
import HeroSection from "@/components/hero/HeroSection";
import MainSection from "@/components/main/MainSection";
import MbtiSection from "@/components/main/Mbti/MbtiSection";
import { motion as m } from "framer-motion";
import { useEffect, useState } from "react";
import "./glow.css";

export default function Home() {
  const [cursorVariant, setCursorVariant] = useState("default");
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  type MixBlendMode =
    | "normal"
    | "multiply"
    | "screen"
    | "overlay"
    | "darken"
    | "lighten"
    | "color-dodge"
    | "color-burn"
    | "hard-light"
    | "soft-light"
    | "difference"
    | "exclusion"
    | "hue"
    | "saturation"
    | "color"
    | "luminosity";

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.pageX, y: e.pageY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
    },
    text: {
      height: 100,
      width: 100,
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      mixBlendMode: "multiply" as MixBlendMode,
    },
  };

  const variants2 = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 125,
      width: 125,
      x: mousePosition.x - 62.5,
      y: mousePosition.y - 62.5,
      mixBlendMode: "multiply" as MixBlendMode,
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <>
      <m.div
        variants={variants}
        animate={cursorVariant}
        // transition={{
        //   type: "spring",
        //   damping: 9,
        //   stiffness: 100,
        //   // restDelta: 0.001,
        // }}
        className="cursorr pointer-events-none fixed top-0 left-0 h-2 w-2 rounded-full bg-brand_bg-500 "
      />
      <m.div
        variants={variants2}
        animate={cursorVariant}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 50,
          restDelta: 0.001,
        }}
        className="cursorr pointer-events-none absolute top-0 left-0 h-8 w-8 rounded-full border-[1px] border-brand_bg-500 "
      />
      {/* <h1 onMouseEnter={textEnter} onMouseLeave={textLeave}>
        Test
      </h1> */}
      <HeroSection textEnter={textEnter} textLeave={textLeave} />
      <MainSection />
      <MbtiSection />
    </>
  );
}
