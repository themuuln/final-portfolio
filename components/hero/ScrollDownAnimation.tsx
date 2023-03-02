import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

const ScrollDownAnimation = () => {
  return (
    <>
      <IconContext.Provider value={{ size: "3.5em" }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="absolute bottom-4 animate-bounce select-none"
        >
          <HiOutlineChevronDoubleDown />
        </motion.div>
      </IconContext.Provider>
    </>
  );
};

export default ScrollDownAnimation;
