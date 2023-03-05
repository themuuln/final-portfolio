import { motion } from "framer-motion";

type Props = {
  greetings: String;
};
const HelloGreetings = ({ greetings }: Props) => {
  return (
    <>
      <motion.p
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          duration: 1,
        }}
        className="text-3xl leading-6"
      >
        {greetings.split("").map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </motion.p>
    </>
  );
};

export default HelloGreetings;
