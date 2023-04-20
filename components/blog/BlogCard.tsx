import { useContext } from "react";
import { motion as m } from "framer-motion";
import CursorContext from "@/lib/context/context";
import BlogCategory from "./BlogCategory";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";
import { FiArrowUpRight } from "react-icons/fi";

const BlogCard = () => {
  const { textEnter, textLeave } = useContext(CursorContext);
  const { setHoverType } = useContext(HoverTypeContext);
  const handleMouseEnter = () => {
    textEnter();
    setHoverType(<FiArrowUpRight />);
  };
  return (
    <>
      <div className="w-full px-10 py-10 rounded-xl bg-brand_bg-100/5">
        <m.h2
          onMouseEnter={handleMouseEnter}
          onMouseLeave={textLeave}
          className="text-3xl font-medium cursor-pointer w-fit"
        >
          BlogCard
        </m.h2>
        {/* <p>{createdAt.toString()}</p> */}
        <h4 className="cursor-pointer">Mar 26, 2023</h4>
        <div className="flex gap-2 categories">
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
      </div>
    </>
  );
};

export default BlogCard;
