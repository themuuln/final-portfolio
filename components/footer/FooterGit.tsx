import { firacode } from "@/public/fonts/fonts";

const FooterGit = () => {
  return (
    <>
      <div className={`${firacode.className} mb-5 font-light md:mb-10`}>
        <div className={`flex w-full justify-center`}>
          <p>
            Designed & Built by <span className="">Themuuln</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default FooterGit;
