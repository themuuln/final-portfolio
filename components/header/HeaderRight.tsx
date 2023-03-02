import Buttons from "./Buttons";

const HeaderRight = () => {
  return (
    <>
      <div className="flex gap-5 text-2xl font-bold rightSideHeader text-brand_main-500">
        <Buttons context={"home"} />
        <Buttons context={"experience"} />
        <Buttons context={"work"} />
        <Buttons context={"contact"} />
      </div>
    </>
  );
};

export default HeaderRight;
