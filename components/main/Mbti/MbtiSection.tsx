import DebaterSvg from "@/public/svg/DebaterSvg";
import Chart from "./Chart";

const MbtiSection = () => {
  return (
    <>
      <DebaterSvg />
      <Chart color={"extraverted"} />
      <Chart color={"intuitive"} />
      <Chart color={"thinking"} />
      <Chart color={"prospecting"} />
      <Chart color={"turbulent"} />
    </>
  );
};

export default MbtiSection;
