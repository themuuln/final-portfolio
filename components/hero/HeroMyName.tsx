import { CursorHoverFunction } from "@/lib/types/types";
import { motion as m } from "framer-motion";

const HeroMyName = ({
  myName,
  textEnter,
  textLeave,
}: CursorHoverFunction & {
  myName: String;
}) => {
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
        className=" border-[1px] border-brand_bg-500 px-2 py-1 text-4xl font-extrabold leading-none xl:text-8xl"
      >
        {myName
          .toUpperCase()
          .split("")
          .map((letter, index) => (
            <m.span
              className="transition-all duration-1000 hover:text-brand_bg-400"
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
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
