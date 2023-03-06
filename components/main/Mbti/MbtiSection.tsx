import DebaterSvg from "@/public/svg/DebaterSvg";
import ChartLeft from "./ChartLeft";
import ChartPercentage from "./ChartPercentage";
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
          <div className="mt-3 flex flex-col gap-4">
            <ChartLeft
              color={"bg-extraverted"}
              width="w-2/3"
              shadowColor="extraverted"
            />
            <ChartPercentage
              leftColor={"text-extraverted font-bold"}
              rightColor={"text-percentage"}
              left={"66%"}
              right={"34%"}
            />
            <ChartLeft
              color={"bg-intuitive"}
              width="w-2/4"
              shadowColor="intuitive"
            />
            <ChartPercentage
              leftColor={"text-intuitive font-bold"}
              rightColor={"text-percentage"}
              left={"54%"}
              right={"46%"}
            />
            <ChartLeft
              color={"bg-thinking"}
              width="w-2/4"
              shadowColor="thinking"
            />
            <ChartPercentage
              leftColor={"text-thinking font-bold"}
              rightColor={"text-percentage"}
              left={"55%"}
              right={"45%"}
            />
            <ChartRight
              chartColor={"bg-prospecting"}
              width="w-2/4"
              shadowColor="prospecting"
            />
            <ChartPercentage
              leftColor={"text-percentage"}
              rightColor={"text-prospecting font-bold"}
              left={"43%"}
              right={"57%"}
            />
            <ChartRight
              chartColor={"bg-turbulent"}
              width="w-2/4"
              shadowColor="turbulent"
            />
            <ChartPercentage
              leftColor={"text-percentage"}
              rightColor={"text-turbulent font-bold"}
              left={"47%"}
              right={"53%"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MbtiSection;
