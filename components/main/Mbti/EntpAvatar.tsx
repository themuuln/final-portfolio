import { motion as m } from "framer-motion";
import DebaterSvg from "@/public/svg/DebaterSvg";
import DebaterCaption from "./DebaterCaption";
import { useContext } from "react";
import CursorContext from "@/lib/context/context";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";
import { RxPerson } from "react-icons/rx";

const EntpAvatar = () => {
  const { textEnter, textLeave } = useContext(CursorContext);
  const { setHoverType } = useContext(HoverTypeContext);

  const handleMouseEnter = () => {
    textEnter();
    setHoverType(<RxPerson />);
  };

  const handleMouseLeave = () => {
    textLeave();
  };

  return (
    <>
      <m.div
        initial={{ x: -100, opacity: 0 }}
        transition={{ type: "tween" }}
        whileInView={{ x: 0, opacity: 1 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex flex-col items-center debaterSection"
      >
        <DebaterSvg />
        <DebaterCaption />
      </m.div>
    </>
  );
};

export default EntpAvatar;
