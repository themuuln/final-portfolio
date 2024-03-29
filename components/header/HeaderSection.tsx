import { motion as m } from "framer-motion";
import { useContext } from "react";
import CursorContext from "@/lib/context/context";
import HeaderRight from "./HeaderRight";
import Link from "next/link";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";
import { RxPerson } from "react-icons/rx";

const HeaderSection = () => {
  const { textEnter, textLeave } = useContext(CursorContext);
  const { setHoverType } = useContext(HoverTypeContext);

  function handleMouseEnter() {
    textEnter();
    setHoverType(<RxPerson />);
  }
  return (
    <>
      <header
        className={`absolute noise-container top-0 z-10 h-20 w-full px-8 py-6 backdrop-blur`}
      >
        <div className="noise" />
        <div className=" container flex items-center justify-between">
          <div className="w-fit overflow-x-hidden overflow-y-hidden">
            <m.div
              initial={{ y: 100, opacity: 0.3 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className={`flex items-center justify-center gap-2 md:text-2xl cursor-pointer leftSideHeader `}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={textLeave}
            >
              <span>&lt;</span>
              <Link href="/me">Temuulen Undrakhbayar</Link>
              <span>/&gt;</span>
            </m.div>
          </div>
          <HeaderRight />
        </div>
      </header>
    </>
  );
};

export default HeaderSection;
