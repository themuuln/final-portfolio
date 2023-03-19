import { easeIn, motion as m } from "framer-motion";
import DebaterSvg from "@/public/svg/DebaterSvg";
import DebaterCaption from "./DebaterCaption";

const EntpAvatar = () => {
  return (
    <>
      <m.div
        initial={{ x: -100, opacity: 0 }}
        transition={{ type: "tween" }}
        whileInView={{ x: 0, opacity: 1 }}
        className="flex flex-col items-center debaterSection"
      >
        <DebaterSvg />
        <DebaterCaption />
      </m.div>
    </>
  );
};

export default EntpAvatar;
