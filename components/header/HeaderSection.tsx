"use client";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

const HeaderSection = () => {
  return (
    <>
      <header className="sticky top-0 left-0 z-10 h-[80px] w-full py-6 px-8 text-white backdrop-blur-sm">
        <div className="container flex justify-between ">
          <HeaderLeft context={"themuln.official@gmail.com"} />
          <HeaderRight />
        </div>
      </header>
    </>
  );
};

export default HeaderSection;
