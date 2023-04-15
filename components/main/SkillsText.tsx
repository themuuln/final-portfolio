import CursorContext from "@/lib/context/context";
import { useContext } from "react";

const SkillsText = ({ name, href }: any) => {
  const { textEnter, textLeave } = useContext(CursorContext);
  const handleMouseEnter = () => textEnter();
  const handleMouseLeave = () => textLeave();
  return (
    <a
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-base font-light leading-3 md:text-xl md:leading-3 xl:text-2xl xl:leading-6`}
    >
      {name}
    </a>
  );
};

export default SkillsText;
