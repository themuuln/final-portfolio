import { motion } from "framer-motion";
import { firacode } from "@/public/fonts/fonts";

type Props = {
  context: String;
};

const Buttons = ({ context }: Props) => {
  return (
    <>
      <motion.button
        whileHover={{ y: -10 }}
        whileTap={{ color: "#cc6a27" }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1, y: 0 }}
        className={`${firacode.className} hover:text-brand_main-300 cursor-pointer font-sans transition ease-linear`}
      >
        \\ {context}
      </motion.button>
    </>
  );
};

export default Buttons;
