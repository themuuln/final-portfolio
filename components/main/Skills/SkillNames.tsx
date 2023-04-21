import { motion as m } from "framer-motion";
import { skills } from "@/pages/api/skills.js";
import SkillsText from "../SkillsText";

const SkillNames = () => {
  return (
    <>
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
          className={"flex space-y-10"}
          key={skill.name}
        >
          <SkillsText href={skill.href} name={skill.name} icon={skill.icon} />
        </m.li>
      ))}
    </>
  );
};

export default SkillNames;
