import { useContext } from "react";
import CursorContext from "@/lib/context/context";
import { motion as m } from "framer-motion";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";
import { MdContentCopy } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";

const FooterTopLeftSection = () => {
  const { textEnter, textLeave } = useContext(CursorContext);
  const { hoverType, setHoverType } = useContext(HoverTypeContext);

  function handleCopy() {
    navigator.clipboard.writeText("themuln.official@gmail.com");
  }

  const handleMouseEnter = () => {
    textEnter();
    setHoverType(<MdContentCopy />);
  };

  const handleMouseLeave = () => {
    textLeave();
    setHoverType(<FiArrowUpRight />);
  };

  return (
    <>
      <div>
        <p className="text-brand_main-700 text-3xl">SAY HELLO</p>
        <m.p
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="cursor-pointer underline-offset-1 hover:underline"
          onClick={handleCopy}
        >
          themuln.official@gmail.com
        </m.p>
      </div>
      {/* {isCopied && (
        <m.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="fixed z-50 flex items-center gap-2 px-4 py-2 text-white transform -translate-x-1/2 rounded-md shadow-lg bottom-10 left-1/2 bg-brand_bg-300"
        >
          <p>Email copied to clipboard!</p>
          <IconContext.Provider value={{ color: "#fff" }}>
            <GrFormClose />
          </IconContext.Provider>
        </m.div>
      )} */}
    </>
  );
};

export default FooterTopLeftSection;
