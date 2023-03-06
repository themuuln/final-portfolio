import "../../../app/glow.css";

type Props = {
  color: String;
  width: String;
  shadowColor: String;
};

const ChartLeft = ({ color, width, shadowColor }: Props) => {
  return (
    <>
      <div
        className={`relative h-10 w-[400px] rounded-[30px] bg-chartbg p-1 xl:w-[600px]`}
      >
        <div
          className={`w-20p h-8 ${width} ${shadowColor}Glow rounded-[30px] rounded-r-none ${color}`}
        />
      </div>
    </>
  );
};

export default ChartLeft;
