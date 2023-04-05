import { useContext } from "react";
import { motion as m } from "framer-motion";
import CursorContext from "@/lib/context/context";
import Blog from "./Blog";
import BlogCategory from "./BlogCategory";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";
import { FiArrowUpRight } from "react-icons/fi";

const BlogCard = () => {
  const { textEnter, textLeave } = useContext(CursorContext);
  const { hoverType, setHoverType } = useContext(HoverTypeContext);
  const handleMouseEnter = () => {
    textEnter();
    setHoverType(<FiArrowUpRight />);
  };
  return (
    <>
      <div className="w-full rounded-xl bg-brand_bg-100/5 px-10 py-10">
        <m.h2
          onMouseEnter={handleMouseEnter}
          onMouseLeave={textLeave}
          className="cursor-pointer text-3xl font-medium"
        >
          BlogCard
        </m.h2>
        {/* <p>{createdAt.toString()}</p> */}
        <h4 className="cursor-pointer">Mar 26, 2023</h4>
        <div className="categories flex gap-2">
          <BlogCategory context={"Neovim"} />
          <BlogCategory context={"Tips"} />
          <BlogCategory context={"React"} />
          <BlogCategory context={"Javascript"} />
          <BlogCategory context={"Typescript"} />
          <BlogCategory context={"TailwindCSS"} />
          <BlogCategory context={"ChakraUI"} />
          <BlogCategory context={"Git"} />
          <BlogCategory context={"SASS/SCSS"} />
          <BlogCategory context={"Framer-motion"} />
          <BlogCategory context={"NextJS"} />
        </div>
        <Blog title={"Test"} createdAt={"TEst"} />
      </div>
    </>
  );
};

export default BlogCard;
