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
            className="leftSideHeader flex cursor-pointer items-center justify-center gap-2 text-lg "
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            {/* <div className="rounded-full border-[1px]  bg-[#1a1a1a] p-4">
              <IconContext.Provider value={{ size: "1em" }}>
                <AiOutlineMail />
              </IconContext.Provider>
            </div>
            <p className="px-3 py-1 transition-colors duration-200 rounded-md bg-brand_bg-500/10 hover:bg-brand_bg-500/30">
              {context}
            </p> */}
            Temuulen Undrakhbayar
          </m.div>
          <HeaderRight />
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
