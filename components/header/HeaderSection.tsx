"use client";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

const HeaderSection = () => {
  return (
    <>
      <div className="absolute top-0 z-10 h-[80px] w-full px-8 py-6 text-white backdrop-blur">
        <div className="container flex justify-between ">
          <HeaderLeft context={"themuln.official@gmail.com"} />
          <HeaderRight />
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
