"use client";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

const HeaderSection = () => {
  return (
    <>
      <div className="text-white fixed top-0 z-10 h-[80px] w-screen py-6 px-8 backdrop-blur-sm">
        <div className="container flex justify-between ">
          <HeaderLeft context={"themuln.official@gmail.com"} />
          <HeaderRight />
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
