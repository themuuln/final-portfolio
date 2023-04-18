"use client";
import EntpStats from "./EntpStats";
import { motion as m } from "framer-motion";
import DebaterSvg from "@/public/svg/DebaterSvg";
import { useContext } from "react";
import CursorContext from "@/lib/context/context";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";
import { RxPerson } from "react-icons/rx";
import Link from "next/link";

const MbtiSection = () => {
  const { textEnter, textLeave } = useContext(CursorContext);
  const { setHoverType } = useContext(HoverTypeContext);
  const handleMouseEnter = () => textEnter();
  setHoverType(<RxPerson />);
  const handleMouseLeave = () => textLeave();
  return (
    <>
      <section
        id="mbti"
        className="container flex justify-center min-h-screen place-items-center"
      >
        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row xl:gap-20">
          <m.div
            initial={{ x: -100, opacity: 0 }}
            transition={{ type: "tween" }}
            whileInView={{ x: 0, opacity: 1 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex flex-col items-center debaterSection"
          >
            <DebaterSvg />
            <m.a
              href="https://www.16personalities.com/profiles/aadde637ba318"
              target={"_blank"}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              id="debaterCaption"
              className={`text-brand_main-500 text-6xl font-semibold transition-colors duration-300 hover:text-brand_bg-500`}
            >
              Debater
            </m.a>
            <m.a
              href="https://www.16personalities.com/profiles/aadde637ba318"
              target={"_blank"}
              initial={{ x: -100, y: 100, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`text text-brand_main-400 text-2xl underline underline-offset-1 hover:text-brand_bg-500`}
            >
              ENTP-T
            </m.a>
          </m.div>
          <EntpStats />
        </div>
      </section>
    </>
  );
};

export default MbtiSection;
