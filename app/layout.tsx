"use client";
import "./globals.css";
import HeaderSection from "@/components/header/HeaderSection";
import FooterSection from "@/components/footer/FooterSection";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CursorContext from "@/lib/context/context";
import useWindowEvents from "@/lib/hook/WindowEvents";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";
import { MixBlendMode, VariantsType } from "@/lib/types/types";
import { IconContext } from "react-icons";
import Cursor from "@/components/Cursor";
import Loading from "./loading";
import { Fira_Code } from "@next/font/google";
import { ThemeProvider } from "next-themes";
import { HiOutlineCursorClick } from "react-icons/hi";

const firacode = Fira_Code({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hoverType, setHoverType] = useState(<HiOutlineCursorClick />);
  const [cursorVariant, setCursorVariant] = useState("default");
  const { mousePosition } = useWindowEvents();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    document.fonts.ready.then(() => {
      setLoading(false);
    });

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
    clicked: {
      height: 80,
      width: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
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
    clicked: {
      height: 101,
      width: 101,
      x: mousePosition.x - 51,
      y: mousePosition.y - 51,
      mixBlendMode: "color-dodge" as MixBlendMode,
    },
  };
  const variants3: VariantsType = {
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
    clicked: {
      height: 51,
      width: 81,
      x: mousePosition.x - 41,
      y: mousePosition.y - 26,
    },
  };
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  const clicked = () => setCursorVariant("clicked");
  return (
    <html lang="en">
      <head />
      <ThemeProvider enableSystem={true} attribute="class">
        <IconContext.Provider value={{ size: "2.25em" }}>
          <CursorContext.Provider value={{ textEnter, textLeave }}>
            <HoverTypeContext.Provider value={{ setHoverType }}>
              <motion.body onMouseDown={clicked} onMouseUp={textLeave}>
                <>
                  {loading ? (
                    <Loading />
                  ) : (
                    <div
                      className={`${firacode.className} text-black dark:text-white bg-[#e6e6e6] dark:bg-[#121212]`}
                    >
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
                    </div>
                  )}
                </>
              </motion.body>
            </HoverTypeContext.Provider>
          </CursorContext.Provider>
        </IconContext.Provider>
      </ThemeProvider>
    </html>
  );
}
