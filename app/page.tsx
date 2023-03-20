"use client";
const HeroSection = require("@/components/hero/HeroSection").default;
const MainSection = require("@/components/main/MainSection").default;
const MbtiSection = require("@/components/main/Mbti/MbtiSection").default;

import { motion as m } from "framer-motion";
import { useState, useLayoutEffect } from "react";
import { useMediaQuery } from "react-responsive";

import CursorContext from "@/lib/context/context";
import { MixBlendMode } from "@/lib/types/types";
import { telegraf_ultralight } from "@/public/fonts/fonts";
import "./glow.css";
import { FiArrowUpRight } from "react-icons/fi";
import { IconContext } from "react-icons";
import ContactSection from "@/components/contact/ContactSection";
import ServiceSection from "@/components/services/ServiceSection";
import HeaderSection from "@/components/header/HeaderSection";

export default function Home() {
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

  const [hoverType, setHoverType] = useState(<FiArrowUpRight />);

  const [cursorVariant, setCursorVariant] = useState("default");
  const [mousePosition, setMousePosition] = useState({
    x: 1,
    y: 1,
  });

  useLayoutEffect(() => {
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
      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
    },
    text: {
      height: 101,
      width: 101,
      x: mousePosition.x - 51,
      y: mousePosition.y - 51,
      mixBlendMode: "color-dodge" as MixBlendMode,
    },
  };

  const variants3 = {
    default: {
      x: mousePosition.x - 17,
      y: mousePosition.y - 17,
    },
    text: {
      height: 126,
      width: 126,
      x: mousePosition.x - 63.5,
      y: mousePosition.y - 63.5,
      mixBlendMode: "color-dodge" as MixBlendMode,
    },
  };

  const variants4 = {
    default: {
      x: mousePosition.x - 3,
      y: mousePosition.y - 3,
    },
    text: {
      height: 51,
      width: 81,
      display: "flex",
      x: mousePosition.x - 41,
      y: mousePosition.y - 26,
      // mixBlendMode: "" as MixBlendMode,
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <>
      <IconContext.Provider value={{ size: "2.25em" }}>
        <CursorContext.Provider value={{ textEnter, textLeave }}>
          {!isPortrait && (
            <>
              <m.div
                variants={variants}
                animate={cursorVariant}
                className="fixed left-0 w-2 h-2 rounded-full pointer-events-none top1 cursorr bg-brand_bg-500 "
              />
              <m.div
                variants={variants3}
                animate={cursorVariant}
                transition={{
                  type: "spring",
                  damping: 11,
                  stiffness: 51,
                  restDelta: 1.001,
                }}
                className="cursorr top1 pointer-events-none absolute left-0 h-8 w-8 rounded-full border-[1px] border-brand_bg-500 "
              />
              <m.div
                variants={variants4}
                animate={cursorVariant}
                transition={{
                  type: "spring",
                  damping: 11,
                  stiffness: 51,
                  restDelta: 1.001,
                }}
                className={`${telegraf_ultralight.className} cursorrr top1 pointer-events-none absolute left-0 hidden h-1 w-1 items-center justify-center rounded-3xl border-[1px] border-brand_bg-300  bg-brand_bg-300/90 font-bold text-[#333333] `}
              >
                {hoverType}
              </m.div>
            </>
          )}
          <HeroSection />
          <HeaderSection />
          <MainSection />
          <MbtiSection />
          <ServiceSection />
          <ContactSection />
        </CursorContext.Provider>
      </IconContext.Provider>
    </>
  );
}
