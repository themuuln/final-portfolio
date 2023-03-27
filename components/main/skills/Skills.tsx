import { firacode } from "@/public/fonts/fonts";
import { skills } from "@/pages/api/skills";
import CursorContext from "@/lib/context/context";

import { motion as m } from "framer-motion";
import { useContext } from "react";

const Skills = () => {
  const { textEnter, textLeave } = useContext(CursorContext);
  return (
    <>
      <div
        id="main"
        className="flex flex-col items-center justify-center h-screen "
      >
        <div className="container w-full space-y-8 md:flex md:justify-around ">
          <div className={`${firacode.className} container space-y-2`}>
            <h2
              className={`text-4xl font-semibold text-brand_bg-500 hover:underline`}
            >
              Skills
            </h2>
            <ul className="space-y-1 text-xl md:space-y-2 md:text-2xl ">
              {skills[0].languages.map((skill) => (
                <m.li
                  whileHover={{ x: 40, scale: 1.1 }}
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                  className={
                    "transition-colors duration-200 hover:text-brand_bg-200"
                  }
                  key={skill.name}
                >
                  <m.a
                    href={skill.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {skill.name}
                  </m.a>
                </m.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
