"use client";
import HeaderRight from "./HeaderRight";
import { motion as m } from "framer-motion";
import { useContext } from "react";
import CursorContext from "@/lib/context/context";

const HeaderSection = () => {
  const { textEnter, textLeave } = useContext(CursorContext);
  return (
    <>
      <div className="absolute top-0 z-10 h-[80px] w-full px-8 py-6 text-white backdrop-blur">
        <div className="container flex justify-between ">
          <m.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="flex items-center justify-center gap-2 text-lg cursor-pointer leftSideHeader "
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Temuulen Undrakhbayar
          </m.div>
          <HeaderRight />
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
