import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
import { connects } from "../../pages/api/connect";
import ConnectButton from "./ConnectButton";

const SocialLinks: React.FC = () => {
  const getSocialLinks = () => {
    return connects.map((connect, index) => {
      return (
        <div className="flex text-5xl" key={index}>
          {connect.facebook && (
            <ConnectButton
              icon={<BsFacebook />}
              href={connect.facebook[0].href}
            />
          )}
          {connect.instagram && (
            <ConnectButton
              icon={<BsInstagram />}
              href={connect.instagram[0].href}
            />
          )}
          {connect.twitter && (
            <ConnectButton
              icon={<BsTwitter />}
              href={connect.twitter[0].href}
            />
          )}
          {connect.github && (
            <ConnectButton icon={<BsGithub />} href={connect.github[0].href} />
          )}
        </div>
      );
    });
  };

  return <div>{getSocialLinks()}</div>;
};

export default SocialLinks;
