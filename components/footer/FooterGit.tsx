import { firacode } from "@/public/fonts/fonts";

const FooterGit = () => {
  // const username = "themuuln";
  // const token = "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";
  // axios
  //   .get(`https://api.github.com/users/${username}/repos`, {
  //     headers: { Authorization: `token ${token}` },
  //   })
  //   .then((response) => {
  //     const repos = response.data;
  //     console.log(repos);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  return (
    <>
      <div className={`${firacode.className} mb-10`}>
        <div className={`flex w-full justify-center`}>
          <p>Designed & Built by Themuuln</p>
        </div>
        {/* <div className={`mt-3 flex w-full justify-center `}>
          <p>
            <RiGitRepositoryLine />
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
