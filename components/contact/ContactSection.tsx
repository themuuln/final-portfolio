import { HiOutlineMail } from "react-icons/hi";
import { useContext } from "react";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";
import CursorContext from "@/lib/context/context";
import { MdContentCopy } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { motion as m } from "framer-motion";

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
  const handleMouseLeave = () => textLeave();
  return (
    <>
      <section
        className={`flex font-semibold items-center justify-center h-screen gap-16`}
      >
        <div className="space-y-10">
          <div className={`text-6xl`}>
            <h2>Let’s chat.</h2>
            <h2>Tell me about your</h2>
            <h2>project.</h2>
          </div>
          <p className={`text-xl`}>Let’s create something together🤘🏻</p>
          <div className="bg-[#171717] hover:bg-[#141414] transition-colors duration-300 gap-7 items-center flex py-3 px-5 w-fit  rounded-2xl">
            <HiOutlineMail />
            <div className="">
              <p className="text-base">Mail me at</p>
              <h4
                onMouseEnter={mailHandleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={mailHandleCopy}
                className="transition-colors duration-500 cursor-pointer text-brand_bg-400 hover:text-black"
              >
                THEMULN.OFFICIAL@GMAIL.COM
              </h4>
            </div>
          </div>
        </div>
        <div className="bg-[#171717] py-10 px-14 rounded-2xl">
          <div className="space-y-8">
            <h2 className="text-[32px]">Send me a message💌</h2>
            <div>
              <input
                type="text"
                className="w-full p-4 rounded-2xl placeholder-slate-400"
                placeholder="Your name"
              />
            </div>
            <div>
              <input
                type="email"
                className="w-full p-4 rounded-2xl"
                placeholder="E-mail address"
              />
            </div>
            <div className="space-y-6">
              <p className="text-base">Tell me more about your project.</p>
              <textarea
                className="w-full h-40 p-4 focus:border-brand_bg-400 rounded-2xl"
                placeholder=""
              />
              <div>
                <m.button
                  className="px-5 py-3 transition-colors duration-200 bg-brand_bg-400 hover:bg-brand_bg-500 active:bg-brand_bg-600 rounded-2xl"
                  onMouseEnter={sendHandler}
                  onMouseLeave={handleMouseLeave}
                  type="submit"
                >
                  Send message
                </m.button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
