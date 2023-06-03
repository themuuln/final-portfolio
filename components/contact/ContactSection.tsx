import { HiOutlineMail } from "react-icons/hi";
import { useContext } from "react";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";
import CursorContext from "@/lib/context/context";
import { MdContentCopy, MdOutlineDoneAll } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { motion as m } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import {
  contactContainer,
  contactItem,
  contactSecondItem,
  contactThirdItem,
} from "../animation/variants";

import dynamic from "next/dynamic";
import { BsTypeItalic } from "react-icons/bs";
const VerticalLine = dynamic(() => import("../VerticalLine"), { ssr: false });

const ContactSection = () => {
  const { textEnter, textLeave } = useContext(CursorContext);
  const { setHoverType } = useContext(HoverTypeContext);
  const mailHandleCopy = () => {
    setHoverType(<MdOutlineDoneAll />);
    navigator.clipboard.writeText("themuln.official@gmail.com");
  };

  const mouseDownDone = () => {
    setHoverType(<MdOutlineDoneAll />);
  };

  const mailHandleMouseEnter = () => {
    textEnter();
    setHoverType(<MdContentCopy />);
  };

  const sendHandler = () => {
    textEnter();
    // setHoverType(<FiSend />);
    setHoverType("XXX");
  };

  const inputHandler = () => {
    textEnter();
    setHoverType(<BsTypeItalic />);
  };

  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  return (
    <>
      <m.section
        id="contact"
        variants={contactContainer}
        initial="hidden"
        whileInView="show"
        className={`flex font-semibold items-center justify-center pb-40 mt-40 h-fit gap-16`}
      >
        <div className="h-fit flex w-full">
          <div className="md:space-x-10 md:flex-row container flex flex-col">
            {isPortrait ? null : <VerticalLine element={"Contact"} />}
            <div className="md:space-y-10 select-none">
              {/* title */}
              <m.div className={`text-3xl md:text-6xl pointer-events-none`}>
                <m.h2 variants={contactItem}>Let’s chat.</m.h2>
                <m.h2 variants={contactItem}>Tell me about your</m.h2>
                <m.h2 variants={contactItem}>project.</m.h2>
                <m.p
                  variants={contactItem}
                  className={`text-xl md:mt-10 pointer-events-none`}
                >
                  Let’s create something together🤘🏻
                </m.p>
              </m.div>
              {/* mail at me button */}
              <m.div
                variants={contactSecondItem}
                className="backdrop-blur-[2px] border-border drop-shadow-xl bg-slate-100/90 dark:bg-background/90 border-gray-800/40 border hover:backdrop-blur-[2px] transition-colors duration-300 gap-7 items-center flex py-3 px-5 w-fit rounded-2xl"
              >
                <div
                  onMouseEnter={mailHandleMouseEnter}
                  onMouseLeave={textLeave}
                  onMouseDown={mouseDownDone}
                  onClick={mailHandleCopy}
                  className="hover:text-brand_bg-500 transition-colors duration-200"
                >
                  <HiOutlineMail />
                </div>
                <div className="">
                  <p className="text-base pointer-events-none">Mail me at</p>
                  <h4
                    onMouseEnter={mailHandleMouseEnter}
                    onMouseLeave={textLeave}
                    onMouseDown={mouseDownDone}
                    onClick={mailHandleCopy}
                    className="text-brand_bg-400 hover:text-black transition-colors duration-500 cursor-pointer"
                  >
                    THEMULN.OFFICIAL@GMAIL.COM
                  </h4>
                </div>
              </m.div>
            </div>
            {/* send me a message section */}
            <m.div
              variants={contactThirdItem}
              className="z-10 py-10 backdrop-blur-[2px] drop-shadow-xl border-border bg-slate-100/90 dark:bg-background/90 border-gray-800/40 border  px-14 rounded-2xl"
            >
              <div className="space-y-8">
                <h2 className="text-[32px] ">Send me a message</h2>
                <div>
                  <input
                    onMouseEnter={inputHandler}
                    onMouseLeave={textLeave}
                    type="text"
                    className="rounded-2xl placeholder-slate-400 focus:border-brand_bg-400 bg-slate-100 dark:bg-background w-full p-4"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <input
                    onMouseEnter={inputHandler}
                    onMouseLeave={textLeave}
                    type="email"
                    className="rounded-2xl placeholder-slate-400 focus:border-brand_bg-400 bg-slate-100 dark:bg-background w-full p-4"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="space-y-6">
                  <p className="text-base">Tell me more about your project.</p>
                  <textarea
                    onMouseEnter={inputHandler}
                    onMouseLeave={textLeave}
                    className="focus:border-brand_bg-400 dark:text-white rounded-2xl bg-slate-100 dark:bg-background w-full h-40 p-4 text-black"
                    placeholder=""
                  />
                  <div>
                    <m.button
                      id="contactSubmitButton"
                      data-popover-target="popover-top"
                      data-popover-placement="top"
                      className="bg-brand_bg-400 hover:bg-brand_bg-500 active:bg-brand_bg-600 rounded-2xl px-5 py-3 text-white transition-colors duration-200"
                      onMouseEnter={sendHandler}
                      onMouseLeave={textLeave}
                      type="submit"
                    >
                      Send message
                    </m.button>
                  </div>
                </div>
              </div>
            </m.div>
          </div>
        </div>
      </m.section>
    </>
  );
};

export default ContactSection;
