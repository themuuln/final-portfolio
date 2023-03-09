import SocialLinks from "./ConnectSection";

const FooterMain = () => {
  return (
    <>
      <div className="towRow container flex">
        <div className="topLeft">
          <p>SAY HELLO</p>
          <p>themuln.official@gmail.com</p>
        </div>
        <SocialLinks />
        <div className="topRight"></div>
      </div>
      <div className="botRow container h-[40vh] border-t-[1px] pt-10 ">
        <p className="">© Temuulen Undrakhbayar 2023</p>
      </div>
    </>
  );
};
export default FooterMain;
