"use client";
import HeroSection from "@/components/hero/HeroSection";
import MainSection from "@/components/main/MainSection";
import MbtiSection from "@/components/main/Mbti/MbtiSection";
import { motion as m } from "framer-motion";
import { useEffect, useState } from "react";
import "./glow.css";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.pageX, y: e.pageY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  });

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      // mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  return (
    <>
      <m.div
        variants={variants}
        animate={cursorVariant}
        transition={{ ease: "easeOut" }}
        className="cursorr pointer-events-none fixed top-0 left-0 h-8 w-8 cursor-none rounded-full bg-brand_bg-500 "
      />
      <h1 onMouseEnter={textEnter} onMouseLeave={textLeave}>
        Test
      </h1>
      <HeroSection />
      <MainSection />
      <MbtiSection />
    </>
  );
}
