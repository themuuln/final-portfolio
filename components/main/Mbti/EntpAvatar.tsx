import { motion as m } from "framer-motion";
import DebaterSvg from "@/public/svg/DebaterSvg";
import DebaterCaption from "./DebaterCaption";

const EntpAvatar = () => {
  return (
    <>
      <m.div
        initial={{ x: -400, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="debaterSection flex flex-col items-center"
      >
        <DebaterSvg />
        <DebaterCaption />
      </m.div>
    </>
  );
};

export default EntpAvatar;
