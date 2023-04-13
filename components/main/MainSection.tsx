import "@/public/css/mainSection.css";
import { firacode } from "@/public/fonts/fonts";
import { motion as m } from "framer-motion";
import { skills } from "@/pages/api/skills";
import CursorContext from "@/lib/context/context";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";
import { HiOutlineCode } from "react-icons/hi";
import { useContext } from "react";
import SkillsText from "./skills/SkillsText";

const MainSection = () => {
  const { textEnter, textLeave } = useContext(CursorContext);
  const { setHoverType } = useContext(HoverTypeContext);

  const handleMouseEnter = () => {
    textEnter();
    setHoverType(<HiOutlineCode />);
  };
  return (
    <>
      <section
        data-scroll-section
        id="qna"
        className="flex flex-col items-center justify-center h-screen "
      >
        <div className="container w-full space-y-8 md:flex md:justify-around ">
          <div className={`${firacode.className} space-y-10`}>
            <m.div
              initial={{ x: "100%", opacity: 0.3 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="cardContainer"
            >
              <h2 className={`question`}>
                WHAT I <span className="highlighted">DO?</span>
              </h2>
              <p className="answer">
                I create customized websites that are visually appealing, highly
                functional, and geared towards boosting your online profile,
                branding, and revenue. I leverage the latest web technologies to
                provide tailored digital solutions that cater to your specific
                requirements and objectives.
              </p>
            </m.div>
            <m.div
              initial={{ x: "-100%" }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.5 }}
              className="cardContainer"
            >
              <h2 className={`question`}>
                WHY CHOOSE <span className="highlighted">ME?</span>
              </h2>
              <p className="answer ">
                I specialize in crafting bespoke, visually stunning websites
                that function seamlessly to enhance your online presence, brand
                identity, and revenue streams. With my expertise in the latest
                web technologies, I provide customized digital solutions that
                cater to your unique needs and objectives.
              </p>
            </m.div>
            <m.div
              initial={{ x: "100%" }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.5 }}
              className="cardContainer"
            >
              <h2 className={`question`}>
                PHILOSOPHY OF <span className="highlighted">MINE</span>
              </h2>
              <p className="answer ">
                I create stunning bespoke websites that enhance your online
                presence, brand identity, and revenue streams. Using the latest
                web technologies, I provide tailored digital solutions to meet
                your unique needs and objectives.
              </p>
            </m.div>
          </div>
        </div>
      </section>
      <section
        id="skills"
        data-scroll-section
        className="flex flex-col items-center justify-center h-screen "
      >
        <div className="container w-full space-y-8 md:flex md:justify-around ">
          <div
            className={`${firacode.className} container flex justify-center space-y-2 font-light`}
          >
            <ul className="space-y-1 text-xl w-fit md:space-y-2 md:text-2xl ">
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
      </section>
      <section className="min-h-screen dark:text-white">test</section>
    </>
  );
};

export default MainSection;
