import { motion as m } from "framer-motion";
import { container } from "../animation/variants";
import { skills } from "@/pages/api/skills.js";
import SkillsText from "./Skills/SkillsText";
import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";
import SkillTitle from "./Skills/SkillTitle";
import { HiOutlineLanguage } from "react-icons/hi2";
import { AiOutlineBuild } from "react-icons/ai";
import { GrHost } from "react-icons/gr";
import { HiOutlineCode } from "react-icons/hi";
import { MdOutlineDesignServices } from "react-icons/md";

const VerticalLine = dynamic(() => import("../VerticalLine"), { ssr: false });

const SkillSection = () => {
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const getVariant = (i: number) => ({
    hidden: {
      opacity: 0,
      x: i % 2 === 0 ? "100%" : "-100%",
      y: i % 2 === 0 ? "100%" : "100%",
    },
    show: { opacity: 1, x: 0, y: 0, transition: { ease: "easeInOut" } },
    whileHover: { scale: 1.2 },
  });
  return (
    <section
      id="skills"
      data-scroll-section
      className="h-fit flex flex-col items-center justify-center"
    >
      <div className="md:flex md:justify-around container w-full space-y-8">
        <div className={`container flex justify-center space-y-2 font-light`}>
          {isPortrait ? null : <VerticalLine element={"skills"} />}
          <m.ul
            variants={container}
            initial={"hidden"}
            whileInView={"show"}
            className="md:space-x-10 md:flex-row w-fit md:space-y-4 md:text-2xl flex flex-col space-y-4 text-xl"
          >
            <div>
              <SkillTitle icon={<HiOutlineLanguage />}>Languages</SkillTitle>
              {skills[0].languages.map((skill, i) => (
                <m.li
                  variants={getVariant(i)}
                  transition={{ duration: 0.3 }}
                  className={"flex space-y-10"}
                  key={skill.name}
                >
                  <SkillsText
                    href={skill.href}
                    name={skill.name}
                    icon={skill.icon}
                  />
                </m.li>
              ))}
              <SkillTitle icon={<AiOutlineBuild />}>
                Frameworks, Libraries
              </SkillTitle>
              {skills[0].frameworks_libraries_platforms.map((skill, i) => (
                <m.li
                  variants={getVariant(i)}
                  transition={{ duration: 0.3 }}
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
            </div>
            <div>
              <SkillTitle icon={<GrHost />}>Hosting</SkillTitle>
              {skills[0].hosting.map((skill, i) => (
                <m.li
                  variants={getVariant(i)}
                  transition={{ duration: 0.3 }}
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
              <SkillTitle icon={<MdOutlineDesignServices />}>Design</SkillTitle>
              {skills[0].design.map((skill, i) => (
                <m.li
                  variants={getVariant(i)}
                  transition={{ duration: 0.3 }}
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
              <SkillTitle icon={<HiOutlineCode />}>Other</SkillTitle>
              {skills[0].other.map((skill, i) => (
                <m.li
                  variants={getVariant(i)}
                  transition={{ duration: 0.3 }}
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
            </div>
          </m.ul>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
