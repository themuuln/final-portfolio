import { motion, useTransform, useScroll } from "framer-motion";
import CursorContext from "@/lib/context/context";
import { useContext } from "react";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";

const Buttons = ({
  context, // Prop for button context
  icon, // Prop for button icon
  variants, // Prop for animation variants
}: {
  context: string;
  icon: any;
  variants: any;
}) => {
  const { textEnter, textLeave } = useContext(CursorContext); // Use CursorContext for textEnter and textLeave functions
  const { setHoverType } = useContext(HoverTypeContext); // Use HoverTypeContext for setHoverType function

  const handleMouseEnter = () => {
    textEnter(); // Call textEnter function on mouse enter
    setHoverType(icon); // Call setHoverType function with icon prop as argument
  };

  const handleMouseLeave = () => {
    textLeave(); // Call textLeave function on mouse leave
  };

  return (
    <motion.div className="overflow-hidden w-fit">
      <motion.li
        onMouseEnter={handleMouseEnter} // Attach handleMouseEnter function to onMouseEnter event
        onMouseLeave={handleMouseLeave} // Attach handleMouseLeave function to onMouseLeave event
        variants={variants} // Apply variants prop for animation
        initial={"hidden"} // Set initial animation state
        animate={"show"} // Set target animation state
        transition={{ duration: 0.5 }} // Set animation duration
        className={`header-button cursor-pointer font-light transition ease-linear`}
      >
        &#47;&#47; {context} {/* Render button context */}
      </motion.li>
    </motion.div>
  );
};

export default Buttons;
