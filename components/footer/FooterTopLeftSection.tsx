import { useContext } from "react";
import CursorContext from "@/lib/context/context";
import { motion as m } from "framer-motion";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";
import { MdContentCopy } from "react-icons/md";
import { HiOutlinePhoneOutgoing } from "react-icons/hi";

const FooterTopLeftSection = () => {
  const { textEnter, textLeave } = useContext(CursorContext);
  const { setHoverType } = useContext(HoverTypeContext);

  const mailHandleCopy = () => {
    navigator.clipboard.writeText("themuln.official@gmail.com");
  };

  const phoneHandleCopy = () => {
    navigator.clipboard.writeText("+97688650115");
  };

  const mailHandleMouseEnter = () => {
    textEnter();
    setHoverType(<MdContentCopy />);
  };

  const phoneHandleMouseEnter = () => {
    textEnter();
    setHoverType(<HiOutlinePhoneOutgoing />);
  };

  const handleMouseLeave = () => {
    textLeave();
  };

  return (
    <>
      <div>
        <m.p
          onMouseEnter={mailHandleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="text-white cursor-pointers underline-offset-1 hover:underline"
          onClick={mailHandleCopy}
        >
          themuln.official@gmail.com
        </m.p>
        <m.p
          onMouseEnter={phoneHandleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="cursor-pointer underline-offset-1 hover:underline"
          onClick={phoneHandleCopy}
        >
          +976 8865-0115
        </m.p>
      </div>
    </>
  );
};

export default FooterTopLeftSection;
