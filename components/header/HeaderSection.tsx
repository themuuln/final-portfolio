"use client";
import { motion as m } from "framer-motion";
import { useContext } from "react";
import CursorContext from "@/lib/context/context";
import HeaderRight from "./HeaderRight";
// import dynamic from "next/dynamic";
// import { useMediaQuery } from "react-responsive";

const HeaderSection = () => {
  const { textEnter, textLeave } = useContext(CursorContext);
  // const HeaderMobile = dynamic(() => import("./HeaderMobile"), { ssr: false });
  // const HeaderDesktop = dynamic(() => import("./HeaderDesktop"), {
  //   ssr: false,
  // });
  // const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  return (
    <>
      <div
        className={`absolute  top-0 z-10 h-[80px] w-full px-8 py-6 text-white backdrop-blur`}
      >
        <div className="container flex justify-between ">
          <div className="overflow-x-hidden overflow-y-hidden w-fit">
            <m.div
              initial={{ y: 100, opacity: 0.3 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className={` text-sm flex items-center justify-center gap-2 md:text-2xl cursor-pointer leftSideHeader `}
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              <span>&lt;</span>
              Temuulen Undrakhbayar
              <span>/&gt;</span>
            </m.div>
          </div>
          <HeaderRight />
          {/* {isPortrait ? <HeaderMobile /> : <HeaderDesktop />} */}
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
