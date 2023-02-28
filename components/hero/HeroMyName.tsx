import { motion } from "framer-motion";

type Props = {
  myName: String;
};

const HeroMyName = ({ myName }: Props) => {
  return (
    <>
      <motion.p
        initial={{ x: 100, y: 100, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          duration: 2,
        }}
        className="text-[100px] font-bold "
      >
        {myName}
      </motion.p>
    </>
  );
};

export default HeroMyName;
