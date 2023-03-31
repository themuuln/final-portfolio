import CursorContext from "@/lib/context/context";
import { useContext } from "react";
import { motion as m } from "framer-motion";
import { HiOutlineFire } from "react-icons/hi";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";

const FooterStartSection = () => {
  const { textEnter, textLeave } = useContext(CursorContext);
  const { hoverType, setHoverType } = useContext(HoverTypeContext);
  const handleMouseEnter = () => {
    textEnter();
    setHoverType(<HiOutlineFire />);
  };

  return (
    <>
      <section className="h-[20vh]">
        <m.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          className="footerStartSection container relative flex h-full w-[90vw] flex-col items-center justify-center gap-2 rounded-lg bg-brand_bg-700/10 py-5"
        >
          <h2 className="hover:text-brand_main-600 cursor-pointer text-4xl font-semibold transition duration-200">
            Start a project
          </h2>
          <p>Work together?</p>
          <m.button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={textLeave}
            // className="hover:bg-brand_main-500 rounded-lg border-[1px] text-2xl font-semibold transition-all duration-200 hover:text-brand_bg-500"
            className="h-10 items-center rounded-full border-[1px] border-[#79747E] px-6 font-medium text-[#D0BCFF] transition-all duration-200 hover:bg-[#2b2831] focus:border-[#D0BCFF] focus:bg-[#2b2831]  "
          >
            Go ahead!
          </m.button>
        </m.div>
      </section>
    </>
  );
};

export default FooterStartSection;
