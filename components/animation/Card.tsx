import { useContext, useState } from "react";
import { AnimatePresence, motion as m } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";
import CursorContext from "@/lib/context/context";
import { MdOutlineExpand } from "react-icons/md";

const Card = ({
  question,
  answer,
  id,
}: {
  question: String;
  answer: String;
  id: any;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { textEnter, textLeave } = useContext(CursorContext);
  const { setHoverType } = useContext(HoverTypeContext); // Use HoverTypeContext for setHoverType function

  // Toggle isOpen state when card is clicked
  const handleCardClick = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    textEnter();
    setHoverType(<MdOutlineExpand />);
  };

  return (
    <m.div
      transition={{ layout: { duration: 0.5, type: "spring" } }}
      initial={
        id % 2 === 0 ? { x: "100%", opacity: 0 } : { x: "-100%", opacity: 0 }
      }
      whileInView={{ opacity: 1, x: 0 }} // Use "animate" instead of "whileInView"
      layout
      onClick={handleCardClick}
      className="px-4 py-3 w-auto space-y-2 transition-colors duration-200 rounded-lg cursor-pointer bg-light_bg-300/50 dark:hover:bg-dark_bg-500/40 dark:bg-dark_bg-500/50 hover:bg-light_bg-400/50 border-gray-500/30 border-[1px] "
    >
      <m.div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={textLeave}
        layout
        className="flex justify-between"
      >
        <m.h2 layout="position" className="text-xl font-semibold">
          {question}
        </m.h2>
        <m.div layout>
          <BsChevronDown
            className={`text-sm transition-all ml-2 duration-[300ms] ${
              isOpen ? "rotate-[-180deg]" : ""
            }`}
          />
        </m.div>
      </m.div>
      {isOpen && (
        <AnimatePresence>
          <m.div onMouseEnter={handleMouseEnter} onMouseLeave={textLeave}>
            <m.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-black/80 dark:text-white/80"
            >
              {answer}
            </m.p>
          </m.div>
        </AnimatePresence>
      )}
    </m.div>
  );
};

export default Card;
