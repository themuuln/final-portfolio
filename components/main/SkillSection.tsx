import { motion as m } from "framer-motion";
import { container, item } from "../animation/variants";
import { skills } from "@/pages/api/skills.js";
import SkillsText from "./SkillsText";
import { GiSkills } from "react-icons/gi";
import CursorContext from "@/lib/context/context";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";
import { useContext } from "react";
import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";
const VerticalLine = dynamic(() => import("../VerticalLine"), { ssr: false });

const SkillSection = () => {
  const { textEnter, textLeave } = useContext(CursorContext);
  const { setHoverType } = useContext(HoverTypeContext);
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" }); // Check if the current screen orientation is portrait
  const skillMouseEnter = () => {
    textEnter();
    setHoverType(<GiSkills />);
  };
  return (
    <section
      id="skills"
      data-scroll-section
      className="flex flex-col items-center justify-center h-screen "
    >
      <div className="container w-full space-y-8 md:flex md:justify-around ">
        <div className={`container flex justify-center space-y-2 font-light`}>
          {isPortrait ? null : <VerticalLine element={"skills"} />}
          <m.ul
            variants={container}
            initial={"hidden"}
            whileInView={"show"}
            className="space-y-2 text-xl w-fit md:space-y-4 md:text-2xl "
          >
            <m.h2
              variants={item}
              onMouseEnter={skillMouseEnter}
              onMouseLeave={textLeave}
              className={`text-xl md:text-4xl cursor-pointer font-semibold text-brand_bg-500 hover:underline`}
            >
              Skills
            </m.h2>
            {skills[0].languages.map((skill, i) => (
              <m.li
                variants={
                  i % 2 === 0
                    ? {
                        hidden: { opacity: 0, x: "100%" },
                        show: { opacity: 1, x: 0 },
                      }
                    : {
                        hidden: { opacity: 0, x: "-100%" },
                        show: { opacity: 1, x: 0 },
                      }
                }
                whileHover={{ scale: 1.2 }}
                className={"flex space-x-2"}
                key={skill.name}
              >
                <SkillsText
                  href={skill.href}
                  name={skill.name}
                  icon={skill.icon}
                />
              </m.li>
            ))}
          </m.ul>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
