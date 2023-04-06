import { motion as m } from "framer-motion";
import { zen_tokyo_zoo } from "@/public/fonts/fonts";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";
import { useContext } from "react";
import CursorContext from "@/lib/context/context";
import { FiArrowUpRight } from "react-icons/fi";

const HeroMyName = ({ myName }: { myName: String }) => {
  const { textEnter, textLeave } = useContext(CursorContext);
  const { hoverType, setHoverType } = useContext(HoverTypeContext);

  const handleMouseEnter = ({ letter }: any) => {
    textEnter();
    setHoverType(letter);
  };
  const handleMouseLeave = () => {
    textLeave();
    setHoverType(<FiArrowUpRight />);
  };

  return (
    <>
      <m.a
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          // type: "spring",
          // ease: "linear",
          // stiffness: 100,
        }}
        href="/me"
        className={`${zen_tokyo_zoo.className} border-[1px] border-brand_bg-500 px-3 py-1 text-lg leading-none text-brand_bg-400 sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl`}
      >
        &lt;
        {myName
          .toUpperCase()
          .split("")
          .map((letter, index) => (
            <m.span
              className=" transition-all duration-200 hover:text-[#161616]"
              onMouseEnter={() => handleMouseEnter({ letter })}
              onMouseLeave={handleMouseLeave}
              key={index}
            >
              {letter}
            </m.span>
          ))}
        &gt;
      </m.a>
    </>
  );
};

export default HeroMyName;
