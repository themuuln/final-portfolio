import { IconContext } from "react-icons";
import { AiOutlineCode } from "react-icons/ai";
import { motion } from "framer-motion";

type Props = {
  context: String;
};
const HeaderLeft = ({ context }: Props) => {
  return (
    <>
      <motion.div
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        className="leftSideHeader flex items-center gap-1 text-xl font-bold text-brand_main-500"
      >
        <IconContext.Provider value={{ size: "2em" }}>
          <AiOutlineCode />
        </IconContext.Provider>
        {context}
      </motion.div>
    </>
  );
};

export default HeaderLeft;
