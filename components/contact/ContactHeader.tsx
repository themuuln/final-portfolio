"use client";
import Link from "next/link";
import Buttons from "../header/Buttons";
import { firacode } from "@/public/fonts/fonts";
import { HiOutlineAnnotation, HiOutlineHome } from "react-icons/hi";

const ContactHeader = () => {
  return (
    <div
      className={`${firacode.className} sticky left-0 top-0 z-10 h-[80px] w-full px-8 py-6 text-white backdrop-blur-sm`}
    >
      <div className="container flex justify-between ">
        <div className="rightSideHeader flex gap-5 text-2xl font-bold ">
          <Link href={"#home"}>
            <Buttons icon={<HiOutlineHome />} context={"home"} />
          </Link>
          <Link href={"/blog"}>
            <Buttons icon={<HiOutlineAnnotation />} context={"blog"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
