"use client";
import DebaterSvg from "@/public/svg/DebaterSvg";
import ChartLeft from "./ChartLeft";
import ChartPercentage from "./ChartPercentage";
import ChartRight from "./ChartRight";
import DebaterCaption from "./DebaterCaption";
import EntpAvatar from "./EntpAvatar";
import EntpStats from "./EntpStats";

const MbtiSection = () => {
  return (
    <>
      <div>
        <div className="container flex h-screen flex-col items-center justify-center gap-8 lg:flex-row xl:gap-20">
          <EntpAvatar />
          <EntpStats />
        </div>
      </div>
    </>
  );
};

export default MbtiSection;
