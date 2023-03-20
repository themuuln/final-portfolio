import { IconContext } from "react-icons";
import { AiOutlineMail } from "react-icons/ai";
import { motion as m } from "framer-motion";
import { useContext } from "react";
import CursorContext from "@/lib/context/context";

type Props = {
  context: String;
};

const HeaderLeft = ({ context }: Props) => {
  const { textEnter, textLeave } = useContext(CursorContext);
  return (
    <>
      <m.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        className="leftSideHeader flex cursor-pointer items-center justify-center gap-2 text-lg "
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
      >
        {/* <div className="rounded-full border-[1px]  bg-[#1a1a1a] p-4">
          <IconContext.Provider value={{ size: "1em" }}>
            <AiOutlineMail />
          </IconContext.Provider>
        </div>
        <p className="rounded-md bg-brand_bg-500/10 py-1 px-3 transition-colors duration-200 hover:bg-brand_bg-500/30">
          {context}
        </p> */}
      </m.div>
    </>
  );
};

export default HeaderLeft;
