"use client";
import Link from "next/link";
import Buttons from "../header/Buttons";
import { firacode } from "@/public/fonts/fonts";
import { motion as m } from "framer-motion";
import { HiOutlineHome } from "react-icons/hi";
import { useContext } from "react";
import CursorContext from "@/lib/context/context";
import { buttons } from "../animation/variants";

const BlogHeader = () => {
  const { textEnter, textLeave } = useContext(CursorContext);

  return (
    <div
      className={`${firacode.className} sticky left-0 top-0 z-10 h-[80px] w-full px-8 py-6 text-white backdrop-blur-sm`}
    >
      <div className="container flex justify-between ">
        <m.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="flex items-center justify-center gap-2 text-lg cursor-pointer leftSideHeader "
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
        <ul className="flex gap-5 text-2xl font-bold rightSideHeader ">
          <Link href={"#home"}>
            <Buttons
              variants={buttons}
              icon={<HiOutlineHome />}
              context={"home"}
            />
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default BlogHeader;
