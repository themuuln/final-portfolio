"use client";
import { CursorHoverFunction } from "@/lib/types/types";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

const HeaderSection = ({ textEnter, textLeave }: CursorHoverFunction) => {
  return (
    <>
      <div className="text-white fixed top-0 z-10 h-[80px] w-full py-6 px-8 backdrop-blur-sm">
        <div className="container flex justify-between ">
          <HeaderLeft
            textEnter={textEnter}
            textLeave={textLeave}
            context={"themuln.official@gmail.com"}
          />
          <HeaderRight />
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
