"use client";
import { motion } from "framer-motion";
import { HiCode } from "react-icons/hi";
import { AiOutlineCode } from "react-icons/ai";
import { IconContext } from "react-icons";

const HeaderSection = () => {
  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <>
      <div className="sticky top-0 h-[80px] w-full bg-brand_bg-600 py-6 px-8 backdrop-blur">
        <div className="flex justify-between">
          <div className="leftSideHeader flex items-center gap-1 text-xl font-bold text-brand_main-500">
            <IconContext.Provider value={{ size: "2em" }}>
              <AiOutlineCode />
            </IconContext.Provider>
            THEMUULN
          </div>
          <div className="rightSideHeader flex gap-2 font-bold text-brand_main-500">
            <div>WHY ME?</div>
            <div>PROJECTS</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
