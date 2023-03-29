import { motion } from "framer-motion";
import { firacode } from "@/public/fonts/fonts";
import CursorContext from "@/lib/context/context";
import { useContext } from "react";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";
import { FiArrowUpRight, FiArrowUpLeft } from "react-icons/fi";

type Props = {
  context: String;
};

const Buttons = ({ context }: Props) => {
  const { textEnter, textLeave } = useContext(CursorContext);
  const { hoverType, setHoverType } = useContext(HoverTypeContext);

  const handleMouseEnter = () => {
    textEnter();
    setHoverType(<FiArrowUpLeft />);
  };

  const handleMouseLeave = () => {
    textLeave();
    setHoverType(<FiArrowUpRight />);
  };

  return (
    <>
      <motion.button
        whileHover={{ y: -4 }}
        whileTap={{ color: "#7236be" }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        initial={{ x: 100, opacity: 0 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileInView={{ x: 0, opacity: 1, y: 0 }}
        className={`${firacode.className} hover:text-brand_main-300 cursor-pointer font-sans transition ease-linear`}
      >
        &#47;&#47; {context}
      </motion.button>
    </>
  );
};

export default Buttons;
