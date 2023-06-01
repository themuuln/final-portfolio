import { useContext, useState } from "react";
import { AnimatePresence, motion as m } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";
import CursorContext from "@/lib/context/context";
import { AiOutlinePlus } from "react-icons/ai";

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
  const { setHoverType } = useContext(HoverTypeContext);

  const handleCardClick = () => setIsOpen(!isOpen);

  const handleMouseEnter = () => {
    textEnter();
    setHoverType(<AiOutlinePlus />);
  };

  return (
    <m.div
      transition={{ layout: { duration: 0.5, type: "spring" } }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={textLeave}
      initial={
        id % 2 === 0 ? { x: "100%", opacity: 0 } : { x: "-100%", opacity: 0 }
      }
      whileInView={{ opacity: 1, x: 0 }}
      layout
      onClick={handleCardClick}
      className="px-4 drop-shadow-xl backdrop-blur-[2px] border-gray-800/40 border border-border bg-slate-100/90 dark:bg-background/90 w-auto md:w-[700px] py-3 space-y-2 transition-colors duration-200 cursor-pointer"
    >
      <div className="noise" />
      <m.div layout className="flex justify-between">
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
