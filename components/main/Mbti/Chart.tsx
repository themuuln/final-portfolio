type Props = {
  color: String;
};

const Chart = ({ color }: Props) => {
  return (
    <>
      <div className={`h-2 w-full bg-${color}`}></div>
    </>
  );
};

export default Chart;
