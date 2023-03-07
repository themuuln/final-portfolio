import { IconContext } from "react-icons";
import { AiOutlineCode } from "react-icons/ai";
import { motion as m } from "framer-motion";

type Props = {
  context: String;
};
const HeaderLeft = ({ context }: Props) => {
  return (
    <>
      <m.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="leftSideHeader flex cursor-pointer items-center gap-1 text-xl font-bold text-brand_main-500 hover:text-brand_main-600"
      >
        <IconContext.Provider value={{ size: "2em" }}>
          <AiOutlineCode />
        </IconContext.Provider>
        {context}
      </m.div>
    </>
  );
};

export default HeaderLeft;
