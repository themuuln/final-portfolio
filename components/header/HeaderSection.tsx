"use client";
import HeaderRight from "./HeaderRight";
import { motion as m } from "framer-motion";
import { useContext } from "react";
import CursorContext from "@/lib/context/context";
import { firacode } from "@/public/fonts/fonts";

const HeaderSection = () => {
  const { textEnter, textLeave } = useContext(CursorContext);
  return (
    <>
      <div className="absolute top-0 z-10 h-[80px] w-full px-8 py-6 text-white backdrop-blur">
        <div className="container flex justify-between ">
          <div className="overflow-x-hidden overflow-y-hidden w-fit">
            <m.div
              initial={{ y: 100, opacity: 0.3 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className={`${firacode.className} flex items-center justify-center gap-2 text-xl cursor-pointer leftSideHeader `}
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              Temuulen Undrakhbayar
            </m.div>
          </div>
          <HeaderRight />
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
