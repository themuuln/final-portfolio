import { motion } from "framer-motion";
import CursorContext from "@/lib/context/context";
import { useContext } from "react";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";
import { useMediaQuery } from "react-responsive";

const Buttons = ({
  context,
  icon,
  variants,
}: {
  context: string;
  icon: any;
  variants?: any;
}) => {
  const { textEnter, textLeave } = useContext(CursorContext);
  const { setHoverType } = useContext(HoverTypeContext);
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

  const handleMouseEnter = () => {
    textEnter();
    setHoverType(icon);
  };

  return (
    <motion.div className="w-fit overflow-hidden">
      <motion.li
        onMouseEnter={handleMouseEnter}
        onMouseLeave={textLeave}
        variants={variants}
        className={`${
          isPortrait ? "hidden" : null
        }  header-button cursor-pointer font-light transition ease-linear`}
      >
        &#47;&#47; {context}
      </motion.li>
    </motion.div>
  );
};

export default Buttons;
