import { RxTwitterLogo, RxLinkedinLogo } from "react-icons/rx";
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
          className="md:mb-10 md:gap-2 flex flex-col items-start gap-1 mb-5 text-xl"
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
          {connect.github && (
            <ConnectText
              social={"Github"}
              icon={<FiGithub />}
              href={connect.github[0].href}
            />
          )}
          {connect.linkedin && (
            <ConnectText
              social={"LinkedIn"}
              icon={<RxLinkedinLogo />}
              href={connect.linkedin[0].href}
            />
          )}
          {connect.twitter && (
            <ConnectText
              social={"Twitter"}
              icon={<RxTwitterLogo />}
              href={connect.twitter[0].href}
            />
          )}
        </ul>
      );
    });
  };

  return <div>{getSocialLinks()}</div>;
};

export default SocialLinks;
