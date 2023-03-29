"use client";
const HeroSection = require("@/components/hero/HeroSection").default;
const MainSection = require("@/components/main/MainSection").default;
const MbtiSection = require("@/components/main/Mbti/MbtiSection").default;

import { AnimatePresence, motion as m } from "framer-motion";
import { useState, useLayoutEffect } from "react";

import CursorContext from "@/lib/context/context";
import { MixBlendMode } from "@/lib/types/types";
import { telegraf_ultralight } from "@/public/fonts/fonts";
import { FiArrowUpRight } from "react-icons/fi";
import { IconContext } from "react-icons";
import ContactSection from "@/components/contact/ContactSection";
import ServiceSection from "@/components/services/ServiceSection";
import HeaderSection from "@/components/header/HeaderSection";
import FooterSection from "@/components/footer/FooterSection";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";
import i18n from "i18next";
import { initReactI18next, I18nextProvider } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslation from "@/locales/en.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
    },
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default function Home() {
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
    },
    transition: {
      type: "spring",
      damping: 11,
      stiffness: 51,
      restDelta: 1.001,
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <>
      <I18nextProvider i18n={i18n}>
        <IconContext.Provider value={{ size: "2.25em" }}>
          <CursorContext.Provider value={{ textEnter, textLeave }}>
            <HoverTypeContext.Provider value={{ hoverType, setHoverType }}>
              <m.div
                variants={variants}
                animate={cursorVariant}
                className="cursorr pointer-events-none fixed top-0 left-0 h-2 w-2 rounded-full bg-brand_bg-500 "
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
                className="cursorr pointer-events-none absolute top-0 left-0 h-8 w-8 rounded-full border-[1px] border-brand_bg-500 "
              />
              <AnimatePresence>
                <IconContext.Provider value={{ size: "1.5em" }}>
                  <m.div
                    variants={variants4}
                    animate={cursorVariant}
                    transition={{
                      type: "spring",
                      damping: 11,
                      stiffness: 51,
                      restDelta: 1.001,
                    }}
                    exit={{ opacity: 0 }}
                    className={`${telegraf_ultralight.className} cursorrr pointer-events-none absolute top-0 left-0 hidden h-1 w-1 items-center justify-center rounded-3xl border-[1px] border-brand_bg-300  bg-brand_bg-300/90 font-bold text-[#333333] `}
                  >
                    {hoverType}
                  </m.div>
                </IconContext.Provider>
              </AnimatePresence>
              <HeaderSection />
              <HeroSection hoverType={hoverType} setHoverType={setHoverType} />
              <MainSection hoverType={hoverType} setHoverType={setHoverType} />
              <MbtiSection hoverType={hoverType} setHoverType={setHoverType} />
              <ServiceSection />
              <ContactSection />
              <FooterSection />
            </HoverTypeContext.Provider>
          </CursorContext.Provider>
        </IconContext.Provider>
      </I18nextProvider>
    </>
  );
}
