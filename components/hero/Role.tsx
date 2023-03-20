import { motion as m } from "framer-motion";
import CursorContext from "@/lib/context/context";
import { useContext } from "react";

const Role = ({ role }: { role: String }) => {
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
        className="mt-3 text-xl leading-6 xl:text-3xl xl:leading-6"
      >
        {role
          .toUpperCase()
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
