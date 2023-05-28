import { HiOutlineMail } from "react-icons/hi";
import { RiInputCursorMove } from "react-icons/ri";
import { useContext } from "react";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";
import CursorContext from "@/lib/context/context";
import { MdContentCopy } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { motion as m } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import dynamic from "next/dynamic";
const VerticalLine = dynamic(() => import("../VerticalLine"), { ssr: false });

const ContactSection = () => {
  const { textEnter, textLeave } = useContext(CursorContext);
  const { setHoverType } = useContext(HoverTypeContext);
  const mailHandleCopy = () =>
    navigator.clipboard.writeText("themuln.official@gmail.com");
  const mailHandleMouseEnter = () => {
    textEnter();
    setHoverType(<MdContentCopy />);
  };
  const sendHandler = () => {
    textEnter();
    setHoverType(<FiSend />);
  };
  const inputHandler = () => {
    textEnter();
    setHoverType(<RiInputCursorMove />);
  };
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" }); // Check if the current screen orientation is portrait
  return (
    <>
      <section
        className={`flex font-semibold items-center justify-center pb-40 mt-40 h-fit gap-16`}
      >
        <div className="flex w-full h-fit">
          <div className="container flex flex-col md:space-x-10 md:flex-row">
            {isPortrait ? null : <VerticalLine element={"contact"} />}
            <div className=" md:space-y-10">
              <div className={`text-3xl md:text-6xl pointer-events-none`}>
                <div className="overflow-x-hidden overflow-y-hidden w-fit">
                  <h2>Let’s chat.</h2>
                </div>
                <h2>Tell me about your</h2>
                <h2>project.</h2>
              </div>
              <p className={`text-xl pointer-events-none`}>
                Let’s create something together🤘🏻
              </p>
              <div className="bg-light_bg-300/50 dark:hover:bg-dark_bg-500/40  dark:bg-dark_bg-500/50 hover:bg-light_bg-400/50 backdrop-blur-[1px] hover:backdrop-blur-[2px] transition-colors duration-300 gap-7 items-center flex py-3 px-5 w-fit rounded-2xl">
                <div
                  onMouseEnter={mailHandleMouseEnter}
                  onMouseLeave={textLeave}
                  onClick={mailHandleCopy}
                  className="transition-colors duration-200 hover:text-brand_bg-500"
                >
                  <HiOutlineMail />
                </div>
                <div className="">
                  <p className="text-base pointer-events-none">Mail me at</p>
                  <h4
                    onMouseEnter={mailHandleMouseEnter}
                    onMouseLeave={textLeave}
                    onClick={mailHandleCopy}
                    className="transition-colors duration-500 cursor-pointer text-brand_bg-400 hover:text-black"
                  >
                    THEMULN.OFFICIAL@GMAIL.COM
                  </h4>
                </div>
              </div>
            </div>
            <div className="py-10 bg-light_bg-300/50 dark:bg-dark_bg-500/50 px-14 rounded-2xl">
              <div className="space-y-8">
                <h2 className="text-[32px] ">Send me a message💌</h2>
                <div>
                  <input
                    onMouseEnter={inputHandler}
                    onMouseLeave={textLeave}
                    type="text"
                    className="w-full p-4 rounded-2xl placeholder-slate-400"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <input
                    onMouseEnter={inputHandler}
                    onMouseLeave={textLeave}
                    type="email"
                    className="w-full p-4 rounded-2xl"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="space-y-6">
                  <p className="text-base">Tell me more about your project.</p>
                  <textarea
                    onMouseEnter={inputHandler}
                    onMouseLeave={textLeave}
                    className="w-full h-40 p-4 focus:border-brand_bg-400 rounded-2xl"
                    placeholder=""
                  />
                  <div>
                    <m.button
                      className="px-5 py-3 text-white transition-colors duration-200 bg-brand_bg-400 hover:bg-brand_bg-500 active:bg-brand_bg-600 rounded-2xl"
                      onMouseEnter={sendHandler}
                      onMouseLeave={textLeave}
                      type="submit"
                    >
                      Send message
                    </m.button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
