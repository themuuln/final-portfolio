"use client";
import HeroSection from "@/components/hero/HeroSection";
import MainSection from "@/components/main/MainSection";
import MbtiSection from "@/components/main/Mbti/MbtiSection";
import { MixBlendMode } from "@/lib/types/types";
import { motion as m } from "framer-motion";
import { useEffect, useState } from "react";
import CursorContext from "@/lib/context/context";
import "./glow.css";
import { montserrat } from "@/public/fonts/fonts";

export default function Home() {
  const [cursorVariant, setCursorVariant] = useState("default");
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

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
      mixBlendMode: "color-dodge" as MixBlendMode,
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
      mixBlendMode: "color-dodge" as MixBlendMode,
    },
  };

  const variants3 = {
    default: {
      x: mousePosition.x - 2,
      y: mousePosition.y - 2,
    },
    text: {
      height: 50,
      width: 80,
      display: "flex",
      x: mousePosition.x - 40,
      y: mousePosition.y - 25,
      // mixBlendMode: "" as MixBlendMode,
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  return (
    <>
      <CursorContext.Provider value={{ textEnter, textLeave }}>
        <m.div
          variants={variants}
          animate={cursorVariant}
          // transition={{
          //   type: "spring",
          //   damping: 9,
          //   stiffness: 100,

          // }}
          className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none cursorr bg-brand_bg-500 "
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
        <m.div
          variants={variants3}
          animate={cursorVariant}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 50,
            restDelta: 0.001,
          }}
          className={`${montserrat.className} cursorrr pointer-events-none absolute top-0 left-0 hidden h-1 w-1 items-center justify-center rounded-3xl border-[1px] border-brand_bg-300  bg-brand_bg-300/90 font-bold text-[#333333] `}
        >
          test
        </m.div>
        <HeroSection />
        <MainSection />
        <MbtiSection />
      </CursorContext.Provider>
    </>
  );
}
