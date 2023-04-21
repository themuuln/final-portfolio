// Import necessary libraries and components
import CursorContext from "@/lib/context/context";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";
import { useContext } from "react";
import { HiOutlineCode } from "react-icons/hi";

// Define SkillsText component
const SkillsText = ({ name, href, icon, color }: any) => {
  const { textEnter, textLeave } = useContext(CursorContext); // Accessing textEnter and textLeave functions from CursorContext
  const { setHoverType } = useContext(HoverTypeContext); // Use HoverTypeContext for setHoverType function
  const handleMouseEnter = () => {
    textEnter(); // Function to handle mouse enter event and call textEnter
    setHoverType(<HiOutlineCode />);
  };

  return (
    <a
      onMouseEnter={handleMouseEnter} // Attach handleMouseEnter to onMouseEnter event
      onMouseLeave={textLeave} // Attach handleMouseLeave to onMouseLeave event
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-base mb-2 w-full hover:text-brand_bg-500 transition-colors duration-200 font-light leading-3 md:text-xl md:leading-3 xl:text-2xl xl:leading-6`}
    >
      {name}
    </a>
  );
};

export default SkillsText; // Export SkillsText component as default
