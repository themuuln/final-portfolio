import { motion } from "framer-motion";
import { CursorHoverFunction } from "@/lib/types/types";

const HelloGreetings = ({
  greetings,
}: CursorHoverFunction & {
  greetings: String;
}) => {
  return (
    <>
      <motion.p
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          duration: 1,
        }}
        className="text-xl leading-4 xl:text-3xl xl:leading-6"
      >
        {greetings.split("").map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </motion.p>
    </>
  );
};

export default HelloGreetings;
