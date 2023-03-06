import { montserrat } from "@/public/fonts/fonts";

type Props = {
  left: String;
  right: String;
  leftColor: String;
  rightColor: String;
};
const ChartPercentage = ({ left, right, leftColor, rightColor }: Props) => {
  return (
    <>
      <div className="mt-[-10px] flex h-fit w-full justify-between px-3 text-lg">
        <p className={`${montserrat.className} ${leftColor}`}>{left}</p>
        <p className={`${montserrat.className} ${rightColor}`}>{right}</p>
      </div>
    </>
  );
};

export default ChartPercentage;
