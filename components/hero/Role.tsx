import { motion as m } from "framer-motion";
import CursorContext from "@/lib/context/context";
import { useContext } from "react";
import { firacode } from "@/public/fonts/fonts";

const Role = ({ role }: { role: String }) => {
  const { textEnter, textLeave } = useContext(CursorContext);
  return (
    <>
      <m.p
        initial={{ x: -99, opacity: 0 }}
        whileInView={{ x: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 101,
          duration: 2,
        }}
        className={`${firacode.className} mt-2 text-xl leading-6 xl:text-3xl xl:leading-6`}
      >
        {role
          .split("")

          .map((letter, index) => (
            <m.span
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

export default Role;
