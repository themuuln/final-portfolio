import "@/public/css/mainSection.css";
import { motion as m } from "framer-motion";
import { skills } from "@/pages/api/skills.js";
import CursorContext from "@/lib/context/context";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";
import { HiOutlineCode } from "react-icons/hi";
import { useContext } from "react";
import SkillsText from "./SkillsText";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiArrowUpRight } from "react-icons/hi2";
import { IconContext } from "react-icons";
import { cardContainer, container, item } from "../animation/variants";
import { cardData } from "./cardData";
import { GiSkills } from "react-icons/gi";

const MainSection = () => {
  const { textEnter, textLeave } = useContext(CursorContext);
  const { setHoverType } = useContext(HoverTypeContext);

  const handleMouseEnter = () => {
    textEnter();
    setHoverType(<HiOutlineCode />);
  };

  const skillMouseEnter = () => {
    textEnter();
    setHoverType(<GiSkills />);
  };

  const meHandleMouseEnter = () => {
    textEnter();
    setHoverType(<HiArrowUpRight />);
  };

  const meHandleMouseLeave = () => textLeave();

  return (
    <>
      <section
        data-scroll-section
        id="qna"
        className="flex flex-col items-center justify-center h-screen "
      >
        <div className="container w-full space-y-8 md:flex md:justify-around ">
          <m.div
            variants={cardContainer}
            initial={"hidden"}
            whileInView={"show"}
            className={`space-y-10`}
          >
            {cardData.map((card, index) => (
              <m.div
                key={index}
                variants={
                  index % 2 === 0
                    ? {
                        hidden: { opacity: 0, x: "100%" },
                        show: { opacity: 1, x: 0 },
                      }
                    : {
                        hidden: { opacity: 0, x: "-100%" },
                        show: { opacity: 1, x: 0 },
                      }
                }
                className="cardContainer"
              >
                <h2 className={`question`}>
                  {card.title}{" "}
                  <span className="highlighted">{card.highlightedText}</span>
                </h2>
                <p className="answer">{card.description}</p>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>
      <section
        id="skills"
        data-scroll-section
        className="flex flex-col items-center justify-center h-screen "
      >
        <div className="container w-full space-y-8 md:flex md:justify-around ">
          <div className={`container flex justify-center space-y-2 font-light`}>
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
      <section className="flex justify-center min-w-full min-h-screen text-2xl md:text-3xl xl:text-5xl place-items-center dark:text-white ">
        <Link href="/me">
          <m.div
            initial={{ x: "100%" }}
            whileInView={{ x: 0 }}
            className="flex gap-2 place-items-center"
          >
            <m.h3
              onMouseEnter={meHandleMouseEnter}
              onMouseLeave={meHandleMouseLeave}
              className="font-semibold transition-colors duration-200 hover:text-brand_bg-500"
            >
              SEE MORE DETAILED THINGS ABOUT ME
            </m.h3>
            <IconContext.Provider value={{ size: "1.5em" }}>
              <m.div
                onMouseEnter={meHandleMouseEnter}
                onMouseLeave={meHandleMouseLeave}
              >
                <HiOutlineArrowNarrowRight className="transition-colors duration-200 hover:text-brand_bg-500" />
              </m.div>
            </IconContext.Provider>
          </m.div>
        </Link>
      </section>
    </>
  );
};

export default MainSection;
