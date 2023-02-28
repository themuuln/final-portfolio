"use client";
import { motion } from "framer-motion";
import { HiCode } from "react-icons/hi";
import { AiOutlineCode } from "react-icons/ai";
import { IconContext } from "react-icons";
import { Fira_Code } from "@next/font/google";

const firacode = Fira_Code({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-firacode",
});

const HeaderSection = () => {
  return (
    <>
      <div className="sticky top-0 h-[80px] w-full py-6 px-8 backdrop-blur">
        <div className="flex justify-between">
          <div className="leftSideHeader flex items-center gap-1 text-xl font-bold text-brand_main-500">
            <IconContext.Provider value={{ size: "2em" }}>
              <AiOutlineCode />
            </IconContext.Provider>
            THEMUULN
          </div>
          <div className="rightSideHeader flex gap-2 font-bold text-brand_main-500">
            <div className={`${firacode.className} font-sans`}>\\ home</div>
            <div className={`${firacode.className} font-sans`}>
              \\ experience
            </div>
            <div className={`${firacode.className} font-sans`}>\\ work</div>
            <div className={`${firacode.className} font-sans`}>\\ contact</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
