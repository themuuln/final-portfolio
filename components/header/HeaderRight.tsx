import Buttons from "./Buttons";

const HeaderRight = () => {
  return (
    <>
      <div className="rightSideHeader flex gap-5 text-2xl font-bold text-brand_main-500">
        <Buttons context={"home"} />
        <Buttons context={"experience"} />
        <Buttons context={"work"} />
        <Buttons context={"blog"} />
        <Buttons context={"contact"} />
      </div>
    </>
  );
};

export default HeaderRight;
