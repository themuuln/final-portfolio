"use client";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import HeaderThemeSwitcher from "./HeaderThemeSwitcher";

const HeaderSection = () => {
  return (
    <>
      <div className="text-white fixed top-0 z-10 h-[80px] w-full py-6 px-8 backdrop-blur">
        <div className="container flex justify-between ">
          <HeaderLeft context={"themuln.official@gmail.com"} />
          <HeaderRight />
          {/* <div className="flex justify-center w-full ">
          <HeaderRight />
          </div> */}
          {/* <HeaderThemeSwitcher /> */}
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
