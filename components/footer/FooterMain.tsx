import SocialLinks from "./ConnectSection";

const FooterMain = () => {
  return (
    <>
      <div className="towRow container mt-5 mb-10 flex justify-around space-y-5 ">
        <div className="topLeft">
          <p className="text-3xl text-brand_main-700">SAY HELLO</p>
          <p className="cursor-pointer underline-offset-1 hover:underline">
            themuln.official@gmail.com
          </p>
        </div>
        <div className="topRight">
          <SocialLinks />
        </div>
      </div>
      <div className="botRow container flex h-fit justify-center border-t-[1px] pt-10 ">
        <p className="mb-10">© Temuulen Undrakhbayar 2023</p>
      </div>
    </>
  );
};
export default FooterMain;
