import { Fira_Code } from "@next/font/google";
import { motion } from "framer-motion";

const firacode = Fira_Code({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-firacode",
});

type Props = {
  context: String;
};
const Buttons = ({ context }: Props) => {
  return (
    <>
      <motion.div
        whileHover={{ y: -10 }}
        whileTap={{ color: "#cc6a27" }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1, y: 0 }}
        className={`${firacode.className} cursor-pointer font-sans transition ease-linear hover:text-brand_main-300`}
      >
        \\ {context}
      </motion.div>
    </>
  );
};

export default Buttons;
