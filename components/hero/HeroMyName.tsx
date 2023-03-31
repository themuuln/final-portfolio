import { motion as m } from "framer-motion";
import { zen_tokyo_zoo } from "@/public/fonts/fonts";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";
import { useContext } from "react";
import CursorContext from "@/lib/context/context";
import { HiSearch } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";

const HeroMyName = ({ myName }: { myName: String }) => {
  const { textEnter, textLeave } = useContext(CursorContext);
  const { hoverType, setHoverType } = useContext(HoverTypeContext);

  const handleMouseEnter = () => {
    textEnter();
    setHoverType(<HiSearch />);
  };
  const handleMouseLeave = () => {
    textLeave();
    setHoverType(<FiArrowUpRight />);
  };
  return (
    <>
      <m.p
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          duration: 1,
        }}
        className={`${zen_tokyo_zoo.className} border-[1px] border-brand_bg-500 px-3 py-1 text-4xl leading-none xl:text-8xl`}
      >
        {myName
          .toUpperCase()
          .split("")
          .map((letter, index) => (
            <m.span
              className="text-brand_bg-400 transition-all duration-200 hover:text-[#000]"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              key={index}
            >
              {letter}
            </m.span>
          ))}
      </m.p>
    </>
  );
};

export default HeroMyName;
