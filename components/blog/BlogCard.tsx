import Blog from "./Blog";

const BlogCard = () => {
  // const createdAt = ;
  return (
    <>
      <div className="w-full px-10 py-10 rounded-xl bg-brand_bg-100/5">
        <h2 className="text-3xl font-medium">BlogCard</h2>
        {/* <p>{createdAt.toString()}</p> */}
        <p>Mar 26, 2023</p>
        <div className="flex gap-2 categories">
          <h3 className="rounded border-[1px] border-[#fff] px-2 text-lg">
            Neovim
          </h3>
          <h3 className="rounded border-[1px] border-[#fff] px-2 text-lg">
            Tips
          </h3>
        </div>
        <Blog title={"Test"} createdAt={"TEst"} />
      </div>
    </>
  );
};

export default BlogCard;
