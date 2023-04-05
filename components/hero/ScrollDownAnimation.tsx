import { motion } from "framer-motion";

const ScrollDownAnimation = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      ></motion.div>
    </>
  );
};

export default ScrollDownAnimation;
