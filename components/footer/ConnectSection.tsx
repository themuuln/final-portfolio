import { RxGithubLogo, RxTwitterLogo } from "react-icons/rx";
import { connects } from "../../pages/api/connect";
import ConnectText from "./ConnectText";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const SocialLinks: React.FC = () => {
  const getSocialLinks = () => {
    return connects.map((connect, index) => {
      return (
        <ul className="flex flex-col gap-2 text-xl" key={index}>
          {connect.facebook && (
            <ConnectText
              social={"Facebook"}
              icon={<FaFacebook />}
              href={connect.facebook[0].href}
            />
          )}
          {connect.instagram && (
            <ConnectText
              social={"Instagram"}
              icon={<BsInstagram />}
              href={connect.instagram[0].href}
            />
          )}
          {connect.twitter && (
            <ConnectText
              social={"Twitter"}
              icon={<RxTwitterLogo />}
              href={connect.twitter[0].href}
            />
          )}
          {connect.github && (
            <ConnectText
              social={"Github"}
              icon={<RxGithubLogo />}
              href={connect.github[0].href}
            />
          )}
        </ul>
      );
    });
  };

  return <div>{getSocialLinks()}</div>;
};

export default SocialLinks;
