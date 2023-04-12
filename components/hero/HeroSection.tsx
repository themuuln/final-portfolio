"use client";
import { motion as m } from "framer-motion";
import { firacode, zen_tokyo_zoo } from "@/public/fonts/fonts";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";
import { useContext } from "react";
import CursorContext from "@/lib/context/context";
import { FiArrowUpRight } from "react-icons/fi";

function HeroSection() {
  const greetings = "Hello, my name is";
  const myName = "Themuuln";
  const role = "Front-end Developer";
  const { textEnter, textLeave } = useContext(CursorContext);
  const { setHoverType } = useContext(HoverTypeContext);
  const handleMouseEnter = ({ letter }: any) => {
    textEnter();
    setHoverType(letter);
  };
  const handleMouseLeave = () => {
    textLeave();
    setHoverType(<FiArrowUpRight />);
  };

  return (
    <>
      <main
        id="hero"
        className={`flex min-h-screen w-screen snap-center items-center justify-center text-white `}
      >
        <div className="container flex flex-col items-center justify-center w-screen h-full">
          <div className="flex flex-col justify-start select-none textContainer">
            <div className="overflow-x-hidden overflow-y-hidden w-fit">
              <m.p
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className={`${firacode.className} mb-2 w-fit text-lg font-light leading-3 sm:text-xl md:text-2xl md:leading-3 xl:text-3xl xl:leading-6`}
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
                initial={{ x: 500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                href="/me"
                className={`${zen_tokyo_zoo.className} px-3 py-1 text-lg leading-none text-brand_bg-400 sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl`}
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
                      className=" transition-all duration-200 hover:text-[#161616]"
                      onMouseEnter={() => handleMouseEnter({ letter })}
                      onMouseLeave={handleMouseLeave}
                      key={index}
                    >
                      {letter}
                    </m.span>
                  ))}
                &gt;
              </m.a>
            </div>
            <div className="overflow-x-hidden overflow-y-hidden w-fit">
              <m.p
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className={`${firacode.className} mt-2 text-lg font-light leading-3 sm:text-xl md:text-2xl md:leading-3 xl:text-3xl xl:leading-6`}
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
      </main>
    </>
  );
}

export default HeroSection;
