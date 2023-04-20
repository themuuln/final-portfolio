// Import necessary libraries and components
import CursorContext from "@/lib/context/context";
import { useContext } from "react";

// Define SkillsText component
const SkillsText = ({ name, href }: any) => {
  const { textEnter, textLeave } = useContext(CursorContext); // Accessing textEnter and textLeave functions from CursorContext
  const handleMouseEnter = () => textEnter(); // Function to handle mouse enter event and call textEnter
  const handleMouseLeave = () => textLeave(); // Function to handle mouse leave event and call textLeave

  return (
    <a
      onMouseEnter={handleMouseEnter} // Attach handleMouseEnter to onMouseEnter event
      onMouseLeave={handleMouseLeave} // Attach handleMouseLeave to onMouseLeave event
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-base font-light leading-3 md:text-xl md:leading-3 xl:text-2xl xl:leading-6`}
    >
      {name}
    </a>
  );
};

export default SkillsText; // Export SkillsText component as default
