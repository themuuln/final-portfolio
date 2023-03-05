type Props = {
  color: String;
};

const Chart = ({ color }: Props) => {
  return (
    <>
      <div
        className={`relative h-10 w-[400px] rounded-[30px] bg-chartbg xl:w-[600px]`}
      >
        <div className={`bg-${color} w-10p`}></div>
      </div>
    </>
  );
};

export default Chart;
