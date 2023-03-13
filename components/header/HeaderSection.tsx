"use client";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import HeaderThemeSwitcher from "./HeaderThemeSwitcher";

const HeaderSection = () => {
  return (
    <>
      <div className="fixed top-0 z-10 h-[80px] w-full py-6 px-8 backdrop-blur">
        <div className="flex justify-between">
          <HeaderLeft context={"THEMUULN"} />
          <div className="flex justify-center w-full ">
            <HeaderRight />
          </div>
          <HeaderThemeSwitcher />
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
