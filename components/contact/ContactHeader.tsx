"use client";
import Link from "next/link";
import Buttons from "../header/Buttons";
import { motion as m } from "framer-motion";
import { firacode } from "@/public/fonts/fonts";
import { useContext } from "react";
import CursorContext from "@/lib/context/context";
import { HiOutlineAnnotation, HiOutlineHome } from "react-icons/hi";

const ContactHeader = () => {
  const { textEnter, textLeave } = useContext(CursorContext);
  return (
    <div
      className={`${firacode.className} sticky left-0 top-0 z-10 h-[80px] w-full px-8 py-6 text-white backdrop-blur-sm`}
    >
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
        <ul className="flex gap-5 text-2xl font-bold ">
          <Link href={"#home"}>
            <Buttons icon={<HiOutlineHome />} context={"home"} />
          </Link>
          <Link href={"/blog"}>
            <Buttons icon={<HiOutlineAnnotation />} context={"blog"} />
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default ContactHeader;
