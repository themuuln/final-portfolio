import Blog from "./Blog";
import BlogCategory from "./BlogCategory";

const BlogCard = () => {
  return (
    <>
      <div className="w-full rounded-xl bg-brand_bg-100/5 px-10 py-10">
        <h2 className="text-3xl font-medium">BlogCard</h2>
        {/* <p>{createdAt.toString()}</p> */}
        <p>Mar 26, 2023</p>
        <div className="categories flex gap-2">
          <BlogCategory />
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
