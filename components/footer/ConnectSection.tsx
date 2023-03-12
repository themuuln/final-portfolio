import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
import { connects } from "../../pages/api/connect";
import ConnectButton from "./ConnectButton";
import ConnectText from "./ConnectText";

const SocialLinks: React.FC = () => {
  const getSocialLinks = () => {
    return connects.map((connect, index) => {
      return (
        <ul className="flex flex-col gap-2 text-xl" key={index}>
          {connect.facebook && (
            <ConnectText social={"Facebook"} href={connect.facebook[0].href} />
          )}
          {connect.instagram && (
            <ConnectText
              social={"Instagram"}
              href={connect.instagram[0].href}
            />
          )}
          {connect.twitter && (
            <ConnectText social={"Twitter"} href={connect.twitter[0].href} />
          )}
          {connect.github && (
            <ConnectText social={"Github"} href={connect.github[0].href} />
          )}
        </ul>
      );
    });
  };

  return <div>{getSocialLinks()}</div>;
};

export default SocialLinks;
