"use client";
import { IconContext } from "react-icons";
import SocialLinks from "./ConnectSection";
import { useContext } from "react";
import CursorContext from "@/lib/context/context";
import { motion as m } from "framer-motion";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";
import { MdContentCopy } from "react-icons/md";
import { HiOutlinePhoneOutgoing } from "react-icons/hi";
import { firacode } from "@/public/fonts/fonts";

const FooterSection = () => {
  const { textEnter, textLeave } = useContext(CursorContext);
  const { setHoverType } = useContext(HoverTypeContext);

  const mailHandleCopy = () => {
    navigator.clipboard.writeText("themuln.official@gmail.com");
  };

  const phoneHandleCopy = () => {
    navigator.clipboard.writeText("+97688650115");
  };

  const mailHandleMouseEnter = () => {
    textEnter();
    setHoverType(<MdContentCopy />);
  };

  const handleMouseEnter = () => {
    textEnter();
  };

  const phoneHandleMouseEnter = () => {
    textEnter();
    setHoverType(<HiOutlinePhoneOutgoing />);
  };

  const handleMouseLeave = () => {
    textLeave();
  };

  return (
    <div id="footer" className="flex flex-col justify-end h-fit">
      <div className="text-brand_main-500 bg-brand_bg-600/5">
        <IconContext.Provider value={{ size: "1em" }}>
          <div className="container flex flex-col items-center mt-5 space-y-5 xl:flex xl:flex-row xl:justify-around">
            <div>
              <m.p
                onMouseEnter={mailHandleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="text-white cursor-pointers underline-offset-1 hover:underline"
                onClick={mailHandleCopy}
              >
                themuln.official@gmail.com
              </m.p>
              <m.p
                onMouseEnter={phoneHandleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="cursor-pointer underline-offset-1 hover:underline"
                onClick={phoneHandleCopy}
              >
                +976 8865-0115
              </m.p>
            </div>
            <SocialLinks />
          </div>
          <div className={`${firacode.className} mb-5 font-light md:mb-10`}>
            <div className={`flex w-full justify-center`}>
              <a
                href="http://github.com/themuuln"
                target={"_blank"}
                rel="noreferrer"
              >
                Designed & Built by{" "}
                <m.span
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className=""
                >
                  Themuuln
                </m.span>
              </a>
            </div>
          </div>
          <div className="botRow container flex h-fit justify-center border-t-[1px]">
            <p className="my-5 md:my-10">© Temuulen Undrakhbayar 2023</p>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default FooterSection;
