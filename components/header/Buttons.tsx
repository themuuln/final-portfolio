import { motion } from "framer-motion";
import { firacode } from "@/public/fonts/fonts";
import CursorContext from "@/lib/context/context";
import { useContext } from "react";

type Props = {
  context: String;
};

const Buttons = ({ context }: Props) => {
  const { textEnter, textLeave } = useContext(CursorContext);
  return (
    <>
      <motion.button
        whileHover={{ y: -4 }}
        whileTap={{ color: "#7236be" }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        initial={{ x: 100, opacity: 0 }}
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        whileInView={{ x: 0, opacity: 1, y: 0 }}
        className={`${firacode.className} hover:text-brand_main-300 cursor-pointer font-sans transition ease-linear`}
      >
        \\ {context}
      </motion.button>
    </>
  );
};

export default Buttons;
