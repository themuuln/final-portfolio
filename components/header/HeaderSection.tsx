"use client";
import { Fira_Code } from "@next/font/google";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

const firacode = Fira_Code({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-firacode",
});

const HeaderSection = () => {
  return (
    <>
      <div className="sticky top-0 left-0 z-10 h-[80px] w-full py-6 px-8 backdrop-blur">
        <div className="flex justify-between">
          <HeaderLeft context={"THEMUULN"} />
          <HeaderRight />
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
