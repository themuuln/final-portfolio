import CursorContext from "@/lib/context/context";
import { useContext } from "react";
import { motion as m } from "framer-motion";

const FooterStartSection = () => {
  const { textEnter, textLeave } = useContext(CursorContext);
  return (
    <>
      <section className="h-[20vh]">
        <m.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          className="container relative flex h-full w-[90vw] flex-col items-center justify-center gap-2 rounded-lg bg-brand_bg-700/10 py-5"
        >
          <h2 className="hover:text-brand_main-600 cursor-pointer text-4xl font-semibold transition duration-200">
            Start a project
          </h2>
          <p>Work together?</p>
          <m.button
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="hover:bg-brand_main-500 rounded-lg border-[1px] py-1 px-3 text-2xl font-semibold transition-all duration-200 hover:text-brand_bg-500"
          >
            Go ahead!
          </m.button>
        </m.div>
      </section>
    </>
  );
};

export default FooterStartSection;
