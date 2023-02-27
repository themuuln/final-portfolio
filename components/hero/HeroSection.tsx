"use client";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { IconContext } from "react-icons";

function HeroSection() {
  return (
    <>
      <IconContext.Provider value={{ size: "3em" }}>
        <main
          className={
            " flex h-screen w-screen  items-center justify-center bg-brand_bg-500 text-brand_main-500"
          }
        >
          <div className="container flex flex-col items-center justify-center h-full">
            <div className="flex flex-col justify-start select-none textContainer text-7xl">
              {/* <p>Hi, I&apos;m</p> */}
              <p className="text-3xl">Hello, my name is</p>
              <p className="text-[100px] font-bold">Temuulen Undrakhbayar</p>
              <p className="text-3xl">Front-end Developer & UI/UX Designer</p>
            </div>
          </div>

          <HiOutlineChevronDoubleDown className="absolute select-none bottom-4 animate-bounce" />
        </main>
      </IconContext.Provider>
    </>
  );
}

export default HeroSection;
