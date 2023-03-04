import { Fira_Code } from "@next/font/google";
import { motion as m } from "framer-motion";

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
      <m.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1, y: 0 }}
        className={`${firacode.className} cursor-pointer font-sans transition ease-linear hover:text-brand_main-300`}
      >
        \\ {context}
      </m.div>
    </>
  );
};

export default Buttons;
