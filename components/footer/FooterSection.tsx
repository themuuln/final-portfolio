"use client";
import { IconContext } from "react-icons";
import { IoCopySharp } from "react-icons/io5";
import SocialLinks from "./ConnectSection";
import { useContext, useState } from "react";
import CursorContext from "@/lib/context/context";
import { AnimatePresence, motion as m } from "framer-motion";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";
import { MdContentCopy } from "react-icons/md";
import { HiOutlinePhoneOutgoing } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import QuickLinks from "./QuickLinks";

const FooterSection = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastContext, setToastContext] = useState("");

  const { textEnter, textLeave } = useContext(CursorContext);
  const { setHoverType } = useContext(HoverTypeContext);
  const mailHandleCopy = () => {
    navigator.clipboard.writeText("themuln.official@gmail.com");
    setShowToast(true);
    setToastContext("Mail copied successfully.");
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };
  const phoneHandleCopy = () => {
    navigator.clipboard.writeText("+97688650115");
    setShowToast(true);
    setToastContext("Phone copied successfully.");
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };
  const mailHandleMouseEnter = () => {
    textEnter();
    setHoverType(<MdContentCopy />);
  };
  const gitHandleHover = () => {
    textEnter();
    setHoverType(<FiGithub />);
  };
  const phoneHandleMouseEnter = () => {
    textEnter();
    setHoverType(<HiOutlinePhoneOutgoing />);
  };
  return (
    <div
      id="footer"
      className="h-fit noise-container flex flex-col justify-end"
    >
      <div className="noise" />
      <div className="text-brand_main-500 bg-brand_bg-800/5">
        <IconContext.Provider value={{ size: "1em" }}>
          <div className="xl:flex xl:flex-row xl:justify-around container flex flex-col items-center mt-5 space-y-5">
            <div>
              <m.p
                onMouseEnter={mailHandleMouseEnter}
                onMouseLeave={textLeave}
                onClick={mailHandleCopy}
                className={`hover:text-brand_bg-500 transition-colors duration-200 text-lg md:text-4xl font-bold cursor-pointer cursor-pointers underline-offset-1 `}
              >
                THEMULN.OFFICIAL@GMAIL.COM
              </m.p>
              <m.p
                onMouseEnter={phoneHandleMouseEnter}
                onMouseLeave={textLeave}
                // className="w-fit hover:text-brand_bg-500 underline-offset-1 text-lg transition-colors duration-200 cursor-pointer"
                className={`hover:text-brand_bg-500 transition-colors duration-200 text-lg md:text-4xl font-bold cursor-pointer cursor-pointers underline-offset-1 `}
                onClick={phoneHandleCopy}
              >
                +976 8865-0115
              </m.p>
            </div>
            <div className="md:flex-row md:justify-between md:gap-20 flex flex-col">
              <SocialLinks />
              <QuickLinks />
            </div>
          </div>
          <div className={`mb-5 font-light md:mb-10`}>
            <div className={`flex w-full justify-center`}>
              <a
                href="http://github.com/themuuln"
                target={"_blank"}
                rel="noreferrer"
              >
                Designed & Built by{" "}
                <m.span
                  onMouseEnter={gitHandleHover}
                  onMouseLeave={textLeave}
                  className=""
                >
                  Themuuln
                </m.span>{" "}
                <span className="text-brand_bg-400">v1.0</span>
              </a>
            </div>
          </div>
          <div className="botRow container flex h-fit justify-center border-t-[1px] border-light_bg-600 dark:border-dark_bg-400">
            <p className="md:my-10 my-5 pointer-events-none">
              © Temuulen Undrakhbayar 2023
            </p>
          </div>
        </IconContext.Provider>
      </div>
      <AnimatePresence>
        {showToast && (
          <m.div
            initial={{ bottom: -20, opacity: 0 }}
            animate={{ bottom: 0, opacity: 1 }}
            exit={{ bottom: -20, opacity: 0 }}
            id="toast-simple"
            className="bottom-4 bg-slate-100/90 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-background/90 backdrop-blur-1 fixed left-auto flex items-center self-center w-full max-w-xs p-4 mb-4 space-x-4 text-gray-500 divide-x divide-gray-200 rounded-lg shadow"
            role="alert"
          >
            <IoCopySharp className="dark:text-blue-500 w-5 h-5 text-blue-600" />
            <div className="pl-4 text-sm font-normal">{toastContext}</div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FooterSection;
