"use client";
import HeaderLeft from "../header/HeaderLeft";
import Link from "next/link";
import Buttons from "../header/Buttons";
import { firacode } from "@/public/fonts/fonts";
import { AiOutlineExperiment } from "react-icons/ai";
import { RiContactsBook2Line, RiLayout2Line } from "react-icons/ri";
import { HiOutlineAnnotation, HiOutlineHome } from "react-icons/hi";

const BlogHeader = () => {
  return (
    <div
      className={`${firacode.className} sticky top-0 left-0 z-10 h-[80px] w-full py-6 px-8 text-white backdrop-blur-sm`}
    >
      <div className="container flex justify-between ">
        <HeaderLeft context={"themuln.official@gmail.com"} />
        <div className="rightSideHeader flex gap-5 text-2xl font-bold ">
          <Link href={"#home"}>
            <Buttons icon={<HiOutlineHome />} context={"home"} />
          </Link>
          <Link href={"#experience"}>
            <Buttons icon={<AiOutlineExperiment />} context={"experience"} />
          </Link>
          <Link href={"#project"}>
            <Buttons icon={<RiLayout2Line />} context={"project"} />
          </Link>
          <Link href={"/blog"}>
            <Buttons icon={<HiOutlineAnnotation />} context={"blog"} />
          </Link>
          <Link href={"#contact"}>
            <Buttons icon={<RiContactsBook2Line />} context={"contact"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
