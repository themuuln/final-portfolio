"use client";
import "./globals.css";
const HeaderSection = require("@/components/header/HeaderSection").default;
const FooterSection = require("@/components/footer/FooterSection").default;
import { useEffect, useState } from "react";
import CursorContext from "@/lib/context/context";
import useWindowEvents from "@/lib/hook/WindowEvents";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";
import { MixBlendMode, VariantsType } from "@/lib/types/types";
import { FiArrowUpRight } from "react-icons/fi";
import { IconContext } from "react-icons";
import Cursor from "@/components/Cursor";
import Loading from "./loading";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hoverType, setHoverType] = useState(<FiArrowUpRight />);
  const [cursorVariant, setCursorVariant] = useState("default");
  const { mousePosition } = useWindowEvents();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const variants: VariantsType = {
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
  const variants2: VariantsType = {
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
  const variants3 = {
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
  };
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  return (
    <html lang="en">
      <head />
      <body>
        {loading ? (
          <Loading />
        ) : (
          <IconContext.Provider value={{ size: "2.25em" }}>
            <CursorContext.Provider value={{ textEnter, textLeave }}>
              <HoverTypeContext.Provider value={{ setHoverType }}>
                <Cursor
                  variants={variants}
                  cursorVariant={cursorVariant}
                  variants3={variants2}
                  variants4={variants3}
                  hoverType={hoverType}
                />
                <HeaderSection />
                {children}
                <FooterSection />
              </HoverTypeContext.Provider>
            </CursorContext.Provider>
          </IconContext.Provider>
        )}
      </body>
    </html>
  );
}
