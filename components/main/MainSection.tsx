import "@/public/css/mainSection.css";
import { firacode } from "@/public/fonts/fonts";
import { motion as m } from "framer-motion";
import { skills } from "@/pages/api/skills";
import CursorContext from "@/lib/context/context";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";
import { HiOutlineCode } from "react-icons/hi";
import { useContext } from "react";
import SkillsText from "./SkillsText";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiArrowUpRight } from "react-icons/hi2";
import { IconContext } from "react-icons";
import {
  cardContainer,
  card,
  evenCard,
  container,
  item,
} from "../animation/variants";
import { GoTriangleRight } from "react-icons/go";

const MainSection = () => {
  const { textEnter, textLeave } = useContext(CursorContext);
  const { setHoverType } = useContext(HoverTypeContext);

  const handleMouseEnter = () => {
    textEnter();
    setHoverType(<HiOutlineCode />);
  };

  const meHandleMouseEnter = () => {
    textEnter();
    setHoverType(<HiArrowUpRight />);
  };

  const meHandleMouseLeave = () => {
    textLeave();
  };
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
            className={`${firacode.className} space-y-10`}
          >
            <m.div variants={card} className="cardContainer">
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
            <m.div variants={evenCard} className="cardContainer">
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
            <m.div variants={card} className="cardContainer">
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
          </m.div>
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
            <m.ul
              variants={container}
              initial={"hidden"}
              whileInView={"show"}
              className="space-y-2 text-xl w-fit md:space-y-4 md:text-2xl "
            >
              <m.h2
                variants={item}
                className={`text-xl md:text-4xl font-semibold text-brand_bg-500 ${firacode} underline`}
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
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={textLeave}
                  className={
                    "transition-colors flex space-x-1 hover:text-brand_bg-500 duration-200"
                  }
                  key={skill.name}
                >
                  {/* <IconContext.Provider value={{ size: "0.75em" }}>
                    <GoTriangleRight />
                  </IconContext.Provider> */}
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
      <section className="flex justify-center min-w-full min-h-screen text-5xl place-items-center dark:text-white ">
        <Link href="/me">
          <m.div
            initial={{ x: "100%" }}
            whileInView={{ x: 0 }}
            className="flex gap-2 place-items-center "
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
