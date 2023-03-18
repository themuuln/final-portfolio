import SocialLinks from "./ConnectSection";
import FooterGit from "./FooterGit";
import FooterTopLeftSection from "./FooterTopLeftSection";

const FooterMain = () => {
  return (
    <>
      <div className="container">
        <div className="container mt-5 mb-10 flex justify-around space-y-5 ">
          <FooterTopLeftSection />
          <SocialLinks />
        </div>
        <FooterGit />
        <div className="botRow container flex h-fit justify-center border-t-[1px] pt-10 ">
          <p className="mb-10">© Temuulen Undrakhbayar 2023</p>
        </div>
      </div>
    </>
  );
};
export default FooterMain;
