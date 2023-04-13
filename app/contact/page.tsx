"use client";
import ContactSection from "@/components/contact/ContactSection";

import { AnimatePresence, motion as m } from "framer-motion";
import { useState } from "react";

import CursorContext from "@/lib/context/context";
import useWindowEvents from "@/lib/hook/WindowEvents";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";
import { MixBlendMode } from "@/lib/types/types";
import { zen_tokyo_zoo } from "@/public/fonts/fonts";

import { FiArrowUpRight } from "react-icons/fi";
import { IconContext } from "react-icons";
import FooterSection from "@/components/footer/FooterSection";
import ContactHeader from "@/components/contact/ContactHeader";

const Contact = () => {
  const [hoverType, setHoverType] = useState(<FiArrowUpRight />);
  const [cursorVariant, setCursorVariant] = useState("default");
  const { mousePosition } = useWindowEvents();

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
      <IconContext.Provider value={{ size: "2.25em" }}>
        <CursorContext.Provider value={{ textEnter, textLeave }}>
          <HoverTypeContext.Provider value={{ setHoverType }}>
            <div>
              <m.div
                variants={variants}
                animate={cursorVariant}
                className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none cursorr bg-brand_bg-500 "
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
                className="cursorr pointer-events-none absolute left-0 top-0 h-8 w-8 rounded-full border-[1px] border-brand_bg-500 "
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
                    className={`${zen_tokyo_zoo.className} cursorrr pointer-events-none absolute left-0 top-0 hidden h-1 w-1 items-center justify-center rounded-3xl border-[1px] border-brand_bg-300  bg-brand_bg-300/90 font-bold text-[#333333] `}
                  >
                    {hoverType}
                  </m.div>
                </IconContext.Provider>
              </AnimatePresence>
            </div>
            <ContactHeader />
            <ContactSection />
            <FooterSection />
          </HoverTypeContext.Provider>
        </CursorContext.Provider>
      </IconContext.Provider>
    </>
  );
};

export default Contact;
