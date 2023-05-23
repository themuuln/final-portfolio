import { motion as m } from "framer-motion";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { IconContext } from "react-icons";
import { useContext } from "react";
import CursorContext from "@/lib/context/context";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";
import { HiArrowUpRight } from "react-icons/hi2";
// import dynamic from "next/dynamic";
// import { useMediaQuery } from "react-responsive";
// const VerticalLine = dynamic(() => import("../VerticalLine"), { ssr: false });

const SeeMoreSection = () => {
  // const isPortrait = useMediaQuery({ query: "(orientation: portrait)" }); // Check if the current screen orientation is portrait
  const { textEnter, textLeave } = useContext(CursorContext);
  const { setHoverType } = useContext(HoverTypeContext);

  const meHandleMouseEnter = () => {
    textEnter();
    setHoverType(<HiArrowUpRight />);
  };
  return (
    <section className="flex justify-center min-w-full min-h-screen place-items-center dark:text-white ">
      <Link href="/me">
        <m.div
          initial={{ x: "100%" }}
          whileInView={{ x: 0 }}
          className="flex gap-2 place-items-center"
        >
          {/* {isPortrait ? null : <VerticalLine element={"skills"} />} */}
          <m.h3
            onMouseEnter={meHandleMouseEnter}
            onMouseLeave={textLeave}
            className="text-2xl font-semibold transition-colors duration-200 md:text-3xl xl:text-5xl hover:text-brand_bg-500"
          >
            SEE MORE DETAILED THINGS ABOUT ME
          </m.h3>
          <IconContext.Provider value={{ size: "1.5em" }}>
            <m.div onMouseEnter={meHandleMouseEnter} onMouseLeave={textLeave}>
              <HiOutlineArrowNarrowRight className="transition-colors duration-200 hover:text-brand_bg-500" />
            </m.div>
          </IconContext.Provider>
        </m.div>
      </Link>
    </section>
  );
};

export default SeeMoreSection;
