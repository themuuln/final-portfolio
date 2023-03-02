import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { useState } from "react";

const ScrollDownAnimation = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const handleScroll = (event: any) => {
    const scrollDown: number = event.target.scrollTop;
    if (scrollDown > 0) {
      setIsScrolled(true);
    } else if (scrollDown < 0) {
      setIsScrolled(false);
    }
  };

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
