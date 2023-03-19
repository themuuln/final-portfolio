"use client";
import HeroSection from "@/components/hero/HeroSection";
import MainSection from "@/components/main/MainSection";
import MbtiSection from "@/components/main/Mbti/MbtiSection";
import { motion as m } from "framer-motion";
import { useEffect, useState, useContext } from "react";
import "./glow.css";

export default function Home() {
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isClicked, setIsClicked] = useState(false);
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

  //   const scrollListener = () => {
  //     if (window.pageYOffset > 0 && !hasScrolled) {
  //       setHasScrolled(true);
  //  setCursorVariant("text");
  //     } else if (window.pageYOffset === 0 && hasScrolled) {
  //       setHasScrolled(false);
  //       setCursorVariant("default");
  //     }
  //   };
  //   window.addEventListener("mousemove", mouseMove);
  //   window.addEventListener("scroll", scrollListener);
  //   return () => {
  //     window.removeEventListener("mousemove", mouseMove);
  //     window.removeEventListener("scroll", scrollListener);
  //   };
  // }, [hasScrolled]);

  const variants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      // mixBlendMode: "difference",
    },
  };

  const variants2 = {
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
      <HeroSection />
      <MainSection />
      <MbtiSection />
    </>
  );
}
