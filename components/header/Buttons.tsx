import { motion, useTransform, useScroll } from "framer-motion";
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
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        variants={variants}
        initial={"hidden"}
        animate={"show"}
        transition={{ duration: 0.5 }}
        className={`header-button cursor-pointer font-light transition ease-linear`}
      >
        &#47;&#47; {context}
      </motion.li>
    </motion.div>
  );
};

export default Buttons;
