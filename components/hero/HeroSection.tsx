"use client";
import { motion as m } from "framer-motion";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";
import { useContext } from "react";
import CursorContext from "@/lib/context/context";
import { FiArrowUpRight } from "react-icons/fi";
import { RxDoubleArrowDown } from "react-icons/rx";
import { useMediaQuery } from "react-responsive";
import useFadeOutOnScroll from "@/lib/hook/useFadeOutOnScroll";

import { Zen_Tokyo_Zoo } from "@next/font/google";
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
  const handleMouseLeave = () => {
    textLeave(), setHoverType(<FiArrowUpRight />);
  };
  const scrollHandleMouse = () => {
    textEnter(), setHoverType(<RxDoubleArrowDown />);
  };
  return (
    <>
      <main
        id="hero"
        className={`flex relative min-h-screen w-screen snap-center items-center justify-center`}
      >
        <div className="container flex flex-col items-center justify-center w-screen h-full">
          <div className="flex flex-col justify-start select-none textContainer">
            <div className="overflow-x-hidden overflow-y-hidden w-fit">
              <m.p
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className={` mb-2 w-fit text-lg font-light leading-3 sm:text-xl md:text-2xl md:leading-3 xl:text-3xl xl:leading-6`}
              >
                {greetings.split("").map((letter, index) => (
                  <m.span
                    className="transition-all duration-500 hover:text-brand_bg-400"
                    key={index}
                  >
                    {letter}
                  </m.span>
                ))}
              </m.p>
            </div>
            <div className="overflow-x-hidden overflow-y-hidden w-fit">
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
                      onMouseLeave={handleMouseLeave}
                      key={index}
                    >
                      {letter}
                    </m.span>
                  ))}{" "}
                /&gt;
              </m.a>
            </div>
            <div className="self-end overflow-x-hidden overflow-y-hidden w-fit">
              <m.p
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className={`mt-2 text-lg font-light leading-3 sm:text-xl md:text-2xl md:leading-3 xl:text-3xl xl:leading-6`}
              >
                {role.split("").map((letter, index) => (
                  <m.span
                    className="transition-all duration-500 hover:text-brand_bg-400"
                    key={index}
                  >
                    {letter}
                  </m.span>
                ))}
              </m.p>
            </div>
          </div>
        </div>
        {isPortrait ? (
          <></>
        ) : (
          <m.div
            style={{ opacity }}
            onMouseEnter={scrollHandleMouse}
            onMouseLeave={handleMouseLeave}
            className="absolute text-3xl transition-colors duration-200 hover:text-black text-brand_bg-400 bottom-4 animate-bounce"
          >
            <RxDoubleArrowDown />
          </m.div>
        )}
      </main>
    </>
  );
}

export default HeroSection;
