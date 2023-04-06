import ChartLeft from "./ChartLeft";
import ChartPercentage from "./ChartPercentage";
import ChartRight from "./ChartRight";

const EntpStats = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-4 mt-3">
        <ChartLeft color={"bg-extraverted"} shadowColor="extraverted" />
        <ChartPercentage
          leftContext={"extraverted"}
          rightContext={"introverted"}
          leftColor={"text-extraverted font-bold"}
          rightColor={"text-percentage"}
          left={"66%"}
          right={"34%"}
        />
        <ChartLeft color={"bg-intuitive"} shadowColor="intuitive" />
        <ChartPercentage
          leftContext={"intuitive"}
          rightContext={"observant"}
          leftColor={"text-intuitive font-bold"}
          rightColor={"text-percentage"}
          left={"54%"}
          right={"46%"}
        />
        <ChartLeft color={"bg-thinking"} shadowColor="thinking" />
        <ChartPercentage
          leftContext={"thinking"}
          rightContext={"feeling"}
          leftColor={"text-thinking font-bold"}
          rightColor={"text-percentage"}
          left={"55%"}
          right={"45%"}
        />
        <ChartRight chartColor={"bg-prospecting"} shadowColor="prospecting" />
        <ChartPercentage
          leftContext={"judging"}
          rightContext={"prospecting"}
          leftColor={"text-percentage"}
          rightColor={"text-prospecting font-bold"}
          left={"43%"}
          right={"57%"}
        />
        <ChartRight chartColor={"bg-turbulent"} shadowColor="turbulent" />
        <ChartPercentage
          leftContext={"assertive"}
          rightContext={"turbulent"}
          leftColor={"text-percentage"}
          rightColor={"text-turbulent font-bold"}
          left={"47%"}
          right={"53%"}
        />
      </div>
    </>
  );
};

export default EntpStats;
