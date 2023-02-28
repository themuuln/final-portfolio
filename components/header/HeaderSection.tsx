"use client";
import { motion } from "framer-motion";

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
      <div className="sticky top-0 h-[80px] w-full bg-brand_bg-300 backdrop-blur">
        <div className="flex justify-between">
          <div className="leftSideHeader">test1</div>
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
