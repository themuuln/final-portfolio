import { motion as m } from "framer-motion";
import { firacode } from "@/public/fonts/fonts";
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
        className={`${firacode.className} mb-2 w-fit text-xl font-light leading-4 xl:text-3xl xl:leading-6`}
      >
        {greetings.split("").map((letter, index) => (
          <m.span
            className="transition-all duration-500 hover:text-brand_bg-400"
            key={index}
          >
            {letter}
          </m.span>
        ))}
      </m.p>
    </>
  );
};

export default HelloGreetings;
