import { motion as m } from "framer-motion";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { IconContext } from "react-icons";
import { useContext } from "react";
import CursorContext from "@/lib/context/context";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";
import { HiArrowUpRight } from "react-icons/hi2";

const SeeMoreSection = () => {
  const { textEnter, textLeave } = useContext(CursorContext);
  const { setHoverType } = useContext(HoverTypeContext);

  const meHandleMouseEnter = () => {
    textEnter();
    setHoverType(<HiArrowUpRight />);
  };

  const meHandleMouseLeave = () => textLeave();

  return (
    <section
      data-scroll-section
      className="flex justify-center min-w-full text-2xl py-80 h-fit md:text-3xl xl:text-5xl place-items-center dark:text-white "
    >
      <Link href="/me">
        <m.div
          initial={{ x: "100%" }}
          whileInView={{ x: 0 }}
          className="flex gap-2 place-items-center"
        >
          <m.h3
            onMouseEnter={meHandleMouseEnter}
            onMouseLeave={meHandleMouseLeave}
            className="font-semibold transition-colors duration-200 hover:text-brand_bg-500"
          >
            SEE MORE DETAILED THINGS ABOUT ME
          </m.h3>
          <IconContext.Provider value={{ size: "1.5em" }}>
            <m.div
              onMouseEnter={meHandleMouseEnter}
              onMouseLeave={meHandleMouseLeave}
            >
              <HiOutlineArrowNarrowRight className="transition-colors duration-200 hover:text-brand_bg-500" />
            </m.div>
          </IconContext.Provider>
        </m.div>
      </Link>
    </section>
  );
};

export default SeeMoreSection;
