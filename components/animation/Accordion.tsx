import { useContext, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";
import CursorContext from "@/lib/context/context";
import { MdOutlineExpand } from "react-icons/md";

const Accordion = ({ question, answer }: any) => {
  const [show, setShow] = useState(false);
  const { textEnter, textLeave } = useContext(CursorContext);
  const { setHoverType } = useContext(HoverTypeContext); // Use HoverTypeContext for setHoverType function

  const handleMouseEnter = () => {
    textEnter();
    setHoverType(<MdOutlineExpand />);
  };
  return (
    <>
      {/* question section */}
      <motion.div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={textLeave}
        initial={{ x: "100%" }}
        whileInView={{ x: 0 }}
        transition={{}}
        onClick={() => setShow(!show)}
        className={`flex ${
          show ? "rounded-b-none" : null
        } items-center justify-between px-4 py-3 rounded-lg cursor-pointer bg-light_bg-300/50 transition-colors duration-200 dark:hover:bg-dark_bg-500/40 dark:bg-dark_bg-500/50 hover:bg-light_bg-400/50`}
      >
        <h1 className="text-xl font-semibold">{question}</h1>
        <BsChevronDown
          className={`text-sm transition-all duration-500 ${
            show ? "rotate-180" : ""
          }`}
        />
      </motion.div>
      {/* answer section */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-3 py-3 overflow-hidden rounded-b-xl bg-light_bg-700/50 "
          >
            <p className="text-sm md:text-base">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Accordion;
