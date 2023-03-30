import { motion as m } from "framer-motion";
import {
  zen_tokyo_zoo,
} from "@/public/fonts/fonts";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";
import { useContext } from "react";
import CursorContext from "@/lib/context/context";
import { HiSearch } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";

const HeroMyName = ({ myName }: { myName: String }) => {
  const { textEnter, textLeave } = useContext(CursorContext);
  const { hoverType, setHoverType } = useContext(HoverTypeContext);

  const handleMouseEnter = () => {
    textEnter();
    setHoverType(<HiSearch />);
  };
  const handleMouseLeave = () => {
    textLeave();
    setHoverType(<FiArrowUpRight />);
  };
  return (
    <>
      <m.a
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          duration: 1,
        }}
        href={
          "https://www.google.com/search?q=themuuln&sxsrf=APwXEdf4N3a1DOOO6Tt-oH50pKyA_qg25w%3A1680064450470&source=hp&ei=wr8jZPW5GtOx2roPoLGwuAk&iflsig=AOEireoAAAAAZCPN0r0aiYdAPlEUtiOHhNpBRmUUKs1K&ved=0ahUKEwj1opLmp4D-AhXTmFYBHaAYDJcQ4dUDCAg&uact=5&oq=themuuln&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgUIABCABDIFCAAQgAQyBwgAEIAEEAoyCgguEIAEENQCEAoyBwgAEIAEEAoyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgcIIxDqAhAnUO4HWL8JYKwLaAFwAHgAgAHJAYgByQGSAQMyLTGYAQCgAQGwAQo&sclient=gws-wiz"
        }
        target="_blank"
        className={`${zen_tokyo_zoo.className} border-[1px] border-brand_bg-500 px-3 py-1 text-4xl leading-none xl:text-8xl`}
      >
        {myName
          .toUpperCase()
          .split("")
          .map((letter, index) => (
            <m.span
              className="text-brand_bg-400 transition-all duration-200 hover:text-[#000]"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              key={index}
            >
              {letter}
            </m.span>
          ))}
      </m.a>
    </>
  );
};

export default HeroMyName;
