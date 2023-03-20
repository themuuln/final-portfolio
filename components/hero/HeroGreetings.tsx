import { motion as m } from "framer-motion";
import { noto_serif } from "@/public/fonts/fonts";
import { useContext } from "react";
import CursorContext from "@/lib/context/context";

const HelloGreetings = ({ greetings }: { greetings: String }) => {
  const { textEnter, textLeave } = useContext(CursorContext);
  return (
    <>
      <m.p
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          duration: 1,
        }}
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        className={`${noto_serif.className} text-xl leading-4 xl:text-3xl xl:leading-6`}
      >
        {greetings.split("").map((letter, index) => (
          <m.span onMouseEnter={textEnter} onMouseLeave={textLeave} key={index}>
            {letter}
          </m.span>
        ))}
      </m.p>
    </>
  );
};

export default HelloGreetings;
