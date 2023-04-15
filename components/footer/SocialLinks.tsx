import { RxTwitterLogo } from "react-icons/rx";
import { connects } from "../../pages/api/connect";
import ConnectText from "./ConnectText";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";

const SocialLinks: React.FC = () => {
  const getSocialLinks = () => {
    return connects.map((connect, index) => {
      return (
        <ul
          className="mb-5 flex flex-col gap-1 text-xl md:mb-10 md:gap-2"
          key={index}
        >
          {connect.facebook && (
            <ConnectText
              social={"Facebook"}
              icon={<AiOutlineFacebook />}
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
              icon={<FiGithub />}
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
