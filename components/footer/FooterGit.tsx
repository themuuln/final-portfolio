import { firacode } from "@/public/fonts/fonts";

const FooterGit = () => {
  return (
    <>
      <div className={`${firacode.className} mb-10`}>
        <div className={`flex w-full justify-center`}>
          <p>Designed & Built by Themuuln</p>
        </div>
        {/* <div className={`mt-3 flex w-full justify-center `}>
          <p>
            <GoGitCommit />
          </p>
          <p>
            <BiStar />
          </p>
        </div> */}
      </div>
    </>
  );
};

export default FooterGit;
