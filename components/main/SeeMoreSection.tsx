import { motion as m } from "framer-motion";
import Link from "next/link";
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
  return (
    <section
      id="seemore"
      className="flex select-none justify-center drop-shadow-xl min-w-full backdrop-blur-[2px] border-border bg-slate-100/90 dark:bg-background/90 py-10 border-gray-800/40 border h-fit place-items-center dark:text-white "
    >
      <Link href="/me">
        <m.div
          initial={{ y: "30%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", delay: 0.3 }}
          className="place-items-center flex gap-2"
        >
          <m.h3
            onMouseEnter={meHandleMouseEnter}
            onMouseLeave={textLeave}
            className="md:text-3xl xl:text-5xl hover:text-brand_bg-500 text-xl font-semibold transition-colors duration-200"
          >
            Explore My Story: Dive Deeper into My Journey
          </m.h3>
        </m.div>
      </Link>
    </section>
  );
};

export default SeeMoreSection;
