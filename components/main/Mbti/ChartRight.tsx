type Props = {
  chartColor: String;
  width: String;
  shadowColor: String;
};

const ChartRight = ({ chartColor, width, shadowColor }: Props) => {
  return (
    <>
      <div
        className={`relative h-10 w-[400px] rounded-[30px] bg-chartbg p-1 xl:w-[600px]`}
      >
        <div
          className={`w-20p h-8 ${width} ${shadowColor}Glow absolute right-0 rounded-[30px] rounded-l-none ${chartColor}`}
        />
      </div>
    </>
  );
};

export default ChartRight;
