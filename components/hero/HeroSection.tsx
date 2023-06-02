"use client";
import "./styles.scss";
import { motion as m } from "framer-motion";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";
import { useContext } from "react";
import CursorContext from "@/lib/context/context";
import { RxDoubleArrowDown } from "react-icons/rx";
import { useMediaQuery } from "react-responsive";
import useFadeOutOnScroll from "@/lib/hook/useFadeOutOnScroll";

import { Zen_Tokyo_Zoo } from "@next/font/google";
import Link from "next/link";
const zentokyozoo = Zen_Tokyo_Zoo({ weight: "400", subsets: ["latin"] });

function HeroSection() {
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const greetings = "Hello, my name is";
  const myName = "Themuuln";
  const role = "Front-end Developer";
  const { textEnter, textLeave } = useContext(CursorContext);
  const { setHoverType } = useContext(HoverTypeContext);
  const opacity = useFadeOutOnScroll(0.2);
  const handleMouseEnter = ({ letter }: any) => {
    textEnter(), setHoverType(letter);
  };
  const scrollHandleMouse = () => {
    textEnter(), setHoverType(<RxDoubleArrowDown />);
  };
  return (
    <>
      <main
        id="home"
        className={`flex relative min-h-screen w-screen items-center justify-center`}
      >
        <div className="herooo container flex flex-col items-center justify-center w-screen h-full">
          <div className="textContainer flex flex-col justify-start">
            <div className="w-fit overflow-x-hidden overflow-y-hidden">
              <m.p
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className={`mb-2 w-fit text-lg font-light leading-3 sm:text-xl md:text-2xl md:leading-3 xl:text-3xl xl:leading-6`}
              >
                {greetings.split("").map((letter, index) => (
                  <m.span
                    className="hover:text-brand_bg-400 transition-all duration-500"
                    key={index}
                  >
                    {letter}
                  </m.span>
                ))}
              </m.p>
            </div>
            <div className="w-fit overflow-x-hidden overflow-y-hidden">
              <m.a
                initial={{ y: 500, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                href="/me"
                className={`${zentokyozoo.className} px-3 py-1 text-5xl leading-none text-brand_bg-400 lg:text-8xl xl:text-8xl`}
              >
                &lt;
                {myName
                  .toUpperCase()
                  .split("")
                  .map((letter, index) => (
                    <m.span
                      initial={{ y: -100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1, duration: 1 }}
                      className="transition-all duration-200 hover:text-[#000]"
                      onMouseEnter={() => handleMouseEnter({ letter })}
                      onMouseLeave={textLeave}
                      key={index}
                    >
                      {letter}
                    </m.span>
                  ))}{" "}
                /&gt;
              </m.a>
            </div>
            <div className="w-fit self-end overflow-x-hidden overflow-y-hidden">
              <m.p
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className={`mt-2 text-lg font-light leading-3 sm:text-xl md:text-2xl md:leading-3 xl:text-3xl xl:leading-6`}
              >
                {role.split("").map((letter, index) => (
                  <m.span
                    className="hover:text-brand_bg-400 transition-all duration-500"
                    key={index}
                  >
                    {letter}
                  </m.span>
                ))}
              </m.p>
            </div>
          </div>
        </div>
        {/* scroll down button */}
        {isPortrait ? null : (
          <m.div
            style={{ opacity }}
            onMouseEnter={scrollHandleMouse}
            onMouseLeave={textLeave}
            className={`absolute ${
              isPortrait ? "hidden" : ""
            } text-3xl transition-colors duration-200 bottom-2 hover:text-black text-brand_bg-400 animate-bounce`}
          >
            <Link href={"#parallax"}>
              <RxDoubleArrowDown />
            </Link>
          </m.div>
        )}
      </main>
    </>
  );
}

export default HeroSection;
