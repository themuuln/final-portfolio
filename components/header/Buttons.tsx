import { motion } from "framer-motion";
import { firacode } from "@/public/fonts/fonts";
import CursorContext from "@/lib/context/context";
import { useContext } from "react";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";

const Buttons = ({ context, icon }: { context: String; icon: any }) => {
  const { textEnter, textLeave } = useContext(CursorContext);
  const { setHoverType } = useContext(HoverTypeContext);

  const handleMouseEnter = () => {
    textEnter();
    setHoverType(icon);
  };

  const handleMouseLeave = () => {
    textLeave();
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1, color: "purple" }}
      whileTap={{ color: "#7236be" }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      initial={{ x: 100, opacity: 0 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileInView={{ x: 0, opacity: 1, y: 0 }}
      className={`header-button cursor-pointer ${firacode.className} font-light transition ease-linear hover:text-white`}
    >
      &#47;&#47; {context}
    </motion.button>
  );
};

export default Buttons;
