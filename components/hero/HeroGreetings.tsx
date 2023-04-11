import { motion as m } from "framer-motion";
import { firacode } from "@/public/fonts/fonts";

const HelloGreetings = ({ greetings }: { greetings: String }) => {
  return (
    <>
      <m.p
        initial={{ x: -100, y: -100, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{
          // type: "spring",
          // stiffness: 100,
          duration: 1,
        }}
        className={`${firacode.className} mb-2 w-fit text-lg font-light leading-3 sm:text-xl md:text-2xl md:leading-3 xl:text-3xl xl:leading-6`}
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
