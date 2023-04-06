import { motion } from "framer-motion";
import { firacode } from "@/public/fonts/fonts";
import CursorContext from "@/lib/context/context";
import { useContext } from "react";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";
import { FiArrowUpRight } from "react-icons/fi";

type Props = {
  context: String;
  icon: any;
};

const Buttons = ({ context, icon }: Props) => {
  const { textEnter, textLeave } = useContext(CursorContext);
  const { setHoverType } = useContext(HoverTypeContext);

  const handleMouseEnter = () => {
    textEnter();
    setHoverType(icon);
  };

  const handleMouseLeave = () => {
    textLeave();
    setHoverType(<FiArrowUpRight />);
  };

  return (
    <>
      <motion.button
        whileHover={{ y: -4, color: "black" }}
        whileTap={{ color: "#7236be" }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        initial={{ x: 100, opacity: 0 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileInView={{ x: 0, opacity: 1, y: 0 }}
        className={`${firacode.className} header-button hover:text-brand_main-300 cursor-pointer font-light transition ease-linear`}
      >
        &#47;&#47; {context}
      </motion.button>
    </>
  );
};

export default Buttons;
