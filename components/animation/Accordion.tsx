import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({ question, answer }: any) => {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* question section */}
      <div
        onClick={() => setShow(!show)}
        className="flex items-center justify-between px-3 rounded-lg cursor-pointer hover:bg-light_bg-400/50 bg-light_bg-300/50"
      >
        <h1 className="text-xl font-semibold text-green">{question}</h1>
        <BsChevronDown
          className={`text-sm transition-all duration-500 ${
            show ? "rotate-180" : ""
          }`}
        />
      </div>
      {/* answer section */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-clip"
          >
            <p className="px-3 pt-3 text-sm md:text-base">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Accordion;
