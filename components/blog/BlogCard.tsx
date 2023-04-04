import { useContext } from "react";
import { motion as m } from "framer-motion";
import CursorContext from "@/lib/context/context";
import Blog from "./Blog";
import BlogCategory from "./BlogCategory";

const BlogCard = () => {
  const { textEnter, textLeave } = useContext(CursorContext);
  return (
    <>
      <div className="w-full px-10 py-10 rounded-xl bg-brand_bg-100/5">
        <m.h2
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="text-3xl font-medium cursor-pointer"
        >
          BlogCard
        </m.h2>
        {/* <p>{createdAt.toString()}</p> */}
        <p className="cursor-pointer">Mar 26, 2023</p>
        <div className="flex gap-2 categories">
          <BlogCategory context={"Neovim"} />
          <BlogCategory context={"Tips"} />
        </div>
        <Blog title={"Test"} createdAt={"TEst"} />
      </div>
    </>
  );
};

export default BlogCard;
