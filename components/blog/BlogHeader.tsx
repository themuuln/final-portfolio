"use client";
import HeaderLeft from "../header/HeaderLeft";
import Link from "next/link";
import Buttons from "../header/Buttons";
import { firacode } from "@/public/fonts/fonts";

const BlogHeader = () => {
  return (
    <div
      className={`${firacode.className} text-white sticky top-0 left-0 z-10 h-[80px] w-full py-6 px-8 backdrop-blur-sm`}
    >
      <div className="container flex justify-between ">
        <HeaderLeft context={"themuln.official@gmail.com"} />
        <div className="rightSideHeader flex gap-5 text-2xl font-bold ">
          <Link href={"#home"}>
            <Buttons context={"home"} />
          </Link>
          <Link href={"#experience"}>
            <Buttons context={"experience"} />
          </Link>
          <Link href={"#project"}>
            <Buttons context={"project"} />
          </Link>
          <Link href={"/blog"}>
            <Buttons context={"blog"} />
          </Link>
          <Link href={"#contact"}>
            <Buttons context={"contact"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
