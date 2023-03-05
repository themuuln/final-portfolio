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
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        className="leftSideHeader flex items-center gap-1 text-xl font-bold text-brand_main-500"
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
