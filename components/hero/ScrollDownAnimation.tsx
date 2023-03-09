import { motion } from "framer-motion";
import ScrollDown from "@/public/svg/ScrollDown";

const ScrollDownAnimation = () => {
  return (
    <>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <ScrollDown />
      </motion.div>
    </>
  );
};

export default ScrollDownAnimation;
