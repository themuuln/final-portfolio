import DebaterSvg from "@/public/svg/DebaterSvg";
import Chart from "./Chart";

const MbtiSection = () => {
  return (
    <>
      <div>
        <div className="container flex flex-col items-center justify-center h-screen gap-8 lg:flex-row xl:gap-20">
          <DebaterSvg />
          <div className="flex flex-col gap-8 mt-3">
            <Chart color={"extraverted"} />
            <Chart color={"intuitive"} />
            <Chart color={"thinking"} />
            <Chart color={"prospecting"} />
            <Chart color={"turbulent"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MbtiSection;
