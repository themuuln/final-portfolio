import { motion } from "framer-motion";

type Props = {
  myName: String;
};

const HeroMyName = ({ myName }: Props) => {
  return (
    <>
      <motion.p
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          duration: 1,
        }}
        className="text-[100px] font-bold "
      >
        {myName
          .toUpperCase()
          .split("")
          .map((letter, index) => (
            <motion.span className="hover:text-brand_main-400" key={index}>
              {letter}
            </motion.span>
          ))}
      </motion.p>
    </>
  );
};

export default HeroMyName;
