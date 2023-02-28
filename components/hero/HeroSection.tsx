"use client";
import {
  HiOutlineChevronDoubleDown,
  HiOutlineChevronDoubleUp,
} from "react-icons/hi";
import { IconContext } from "react-icons";
import { motion, useScroll, useSpring } from "framer-motion";

function HeroSection() {
  // scroll length animation
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        className="progress-bar fixed top-0 left-0 right-0 h-[10px] select-none  bg-brand_main-500"
        style={{ scaleX }}
      />
      <main
        className={
          " flex h-screen w-screen  items-center justify-center bg-brand_bg-500 text-brand_main-500"
        }
      >
        <motion.div className="container flex h-full flex-col items-center justify-center">
          <div className="textContainer flex select-none flex-col justify-start text-7xl md:text-[16px]">
            {/* <p>Hi, I&apos;m</p> */}
            <motion.p className="text-3xl">Hello, my name is</motion.p>
            <motion.p
              initial={{ x: 100, y: 100, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                duration: 2,
              }}
              className="text-[100px] font-bold "
            >
              TEMUULEN UNDRAKHBAYAR
            </motion.p>
            <div className="h-40 w-full bg-brand_bg-500">
              <motion.p
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="text-3xl "
              >
                Front-end Developer & UI/UX Designer
              </motion.p>
            </div>
          </div>
        </motion.div>
        <IconContext.Provider value={{ size: "3em" }}>
          <HiOutlineChevronDoubleDown className="absolute bottom-4 animate-bounce select-none" />
        </IconContext.Provider>
        {/* <IconContext.Provider value={{ size: "3em" }}>
          <HiOutlineChevronDoubleUp className="fixed p-2 border-2 rounded-full bottom-4 right-4 border-brand_main-500" />
        </IconContext.Provider> */}
      </main>
    </>
  );
}

export default HeroSection;
