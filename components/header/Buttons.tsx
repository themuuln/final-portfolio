import { motion, useTransform, useScroll } from "framer-motion";
import { firacode } from "@/public/fonts/fonts";
import CursorContext from "@/lib/context/context";
import { useContext } from "react";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";

const Buttons = ({
  context,
  icon,
  variants,
}: {
  context: String;
  icon: any;
  variants: any;
}) => {
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
    <motion.div className="overflow-hidden w-fit">
      <motion.li
        whileHover={{ color: "black" }}
        whileTap={{ scale: 0.9, color: "#7236be" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        variants={variants}
        initial={"hidden"}
        animate={"show"}
        // initial={{ y: "100%" }}
        // animate={{ y: 0 }}
        // whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        // transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className={`header-button cursor-pointer ${firacode.className} font-light transition ease-linear hover:text-white`}
      >
        &#47;&#47; {context}
      </motion.li>
    </motion.div>
  );
};

export default Buttons;
