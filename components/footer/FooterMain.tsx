import SocialLinks from "./ConnectSection";
import FooterCopyright from "./FooterCopyright";
import FooterGit from "./FooterGit";
import FooterTopLeftSection from "./FooterTopLeftSection";

const FooterMain = () => {
  return (
    <>
      <div className="container mt-5 flex flex-col items-center space-y-5 xl:flex xl:flex-row xl:justify-around">
        <FooterTopLeftSection />
        <SocialLinks />
      </div>
      <FooterGit />
      <FooterCopyright />
    </>
  );
};
export default FooterMain;
