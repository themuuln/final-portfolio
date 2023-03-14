import { IconContext } from "react-icons";
import { AiOutlineMail } from "react-icons/ai";
import { motion as m } from "framer-motion";

type Props = {
  context: String;
};
const HeaderLeft = ({ context }: Props) => {
  return (
    <>
      <m.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        className="flex items-center justify-center gap-2 text-lg cursor-pointer leftSideHeader "
      >
        <div className="rounded-full border-[1px]  bg-[#1a1a1a] p-4">
          <IconContext.Provider value={{ size: "1em" }}>
            <AiOutlineMail />
          </IconContext.Provider>
        </div>
        <p>{context}</p>
      </m.div>
    </>
  );
};

export default HeaderLeft;
