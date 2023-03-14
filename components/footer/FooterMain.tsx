import SocialLinks from "./ConnectSection";
import { firacode } from "@/public/fonts/fonts";
import { GoGitCommit } from "react-icons/go";
import { BiStar } from "react-icons/bi";

const FooterMain = () => {
  return (
    <>
      <div className="container flex justify-around mt-5 mb-10 space-y-5 towRow ">
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
      <div className={`${firacode.className} w-full justify-center`}>
        <p>Designed & Built by Themuuln</p>
        <div className="flex">
          <p>
            <GoGitCommit />
          </p>
          <p>
            <BiStar />
          </p>
        </div>
      </div>
      <div className="botRow container flex h-fit justify-center border-t-[1px] pt-10 ">
        <p className="mb-10">© Temuulen Undrakhbayar 2023</p>
      </div>
    </>
  );
};
export default FooterMain;
