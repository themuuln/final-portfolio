import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import ScrollDown from "@/public/svg/ScrollDown";

const ScrollDownAnimation = () => {
  return (
    <>
      <IconContext.Provider value={{ size: "3.5em" }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <ScrollDown />
        </motion.div>
      </IconContext.Provider>
    </>
  );
};

export default ScrollDownAnimation;
