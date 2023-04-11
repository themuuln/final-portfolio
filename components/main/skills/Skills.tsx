import { firacode } from "@/public/fonts/fonts";
import { skills } from "@/pages/api/skills";
import CursorContext from "@/lib/context/context";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";
import { HiOutlineCode } from "react-icons/hi";

import { motion as m } from "framer-motion";
import { useContext } from "react";
import SkillsText from "./SkillsText";

const Skills = () => {
  const { textEnter, textLeave } = useContext(CursorContext);
  const { setHoverType } = useContext(HoverTypeContext);

  const handleMouseEnter = () => {
    textEnter();
    setHoverType(<HiOutlineCode />);
  };
  return (
    <div
      id="main"
      className="flex h-screen flex-col items-center justify-center "
    >
      <div className="container w-full space-y-8 md:flex md:justify-around ">
        <div
          className={`${firacode.className} container flex justify-center space-y-2 font-light`}
        >
          <ul className="w-fit space-y-1 text-xl md:space-y-2 md:text-2xl ">
            <h2
              className={`text-4xl font-semibold text-brand_bg-500 hover:underline`}
            >
              Skills
            </h2>
            {skills[0].languages.map((skill) => (
              <m.li
                whileHover={{ x: 30, scale: 1.1, color: "#8f43ee" }}
                initial={{ x: -100, opacity: 0.3 }}
                whileInView={{ x: 0, opacity: 1 }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={textLeave}
                className={"transition-colors duration-200"}
                key={skill.name}
              >
                <SkillsText
                  href={skill.href}
                  name={skill.name}
                  icon={skill.icon}
                />
              </m.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
