import DebaterSvg from "@/public/svg/DebaterSvg";
import ChartLeft from "./ChartLeft";
import ChartRight from "./ChartRight";
import DebaterCaption from "./DebaterCaption";

const MbtiSection = () => {
  return (
    <>
      <div>
        <div className="container flex h-screen flex-col items-center justify-center gap-8 lg:flex-row xl:gap-20">
          <div className="debaterSection flex flex-col items-center">
            <DebaterSvg />
            <DebaterCaption />
          </div>
          <div className="mt-3 flex flex-col gap-8">
            <ChartLeft
              color={"bg-extraverted"}
              width="w-2/3"
              shadowColor="extraverted"
            />

            <ChartLeft
              color={"bg-intuitive"}
              width="w-2/4"
              shadowColor="intuitive"
            />
            <ChartLeft
              color={"bg-thinking"}
              width="w-2/4"
              shadowColor="thinking"
            />
            <ChartRight
              chartColor={"bg-prospecting"}
              width="w-2/4"
              shadowColor="prospecting"
            />
            <ChartRight
              chartColor={"bg-turbulent"}
              width="w-2/4"
              shadowColor="turbulent"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MbtiSection;
