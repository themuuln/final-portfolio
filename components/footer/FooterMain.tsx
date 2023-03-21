import SocialLinks from "./ConnectSection";
import FooterCopyright from "./FooterCopyright";
import FooterGit from "./FooterGit";
import FooterTopLeftSection from "./FooterTopLeftSection";

const FooterMain = () => {
  return (
    <>
      <div className="container">
        <div className="mt-5 mb-10 flex flex-col items-center space-y-5 xl:flex xl:flex-row xl:justify-around ">
          <FooterTopLeftSection />
          <SocialLinks />
        </div>
        <FooterGit />
        <FooterCopyright />
      </div>
    </>
  );
};
export default FooterMain;
