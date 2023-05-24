"use client";
import Links from "@/components/resume/Links";
import Block from "@/components/resume/Block";
import { motion } from "framer-motion";
import resumeData from "@/components/data/resume";
import CursorContext from "@/lib/context/context";
import { useContext } from "react";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";
import { FiArrowUpRight } from "react-icons/fi";
import { IconContext } from "react-icons";

const ResumeTitle = ({ children }: { children: string }) => {
  return (
    <h1 className="text-2xl font-semibold text-brand_bg-500 md:text-3xl">
      {children}
    </h1>
  );
};

const SectionContainer = ({ children }: any) => {
  return <div className="mb-4">{children}</div>;
};

const Resume = () => {
  const { textEnter, textLeave } = useContext(CursorContext);
  const { setHoverType } = useContext(HoverTypeContext);

  const handleMouseEnter = () => {
    textEnter();
    setHoverType("HI");
  };

  return (
    <section className="flex justify-center">
      <div className="container px-4 mt-20">
        <div>
          <h1 className="text-3xl font-bold text-brand_bg-500 md:text-6xl">
            TEMUULEN UNDRAKHBAYAR
          </h1>

          <SectionContainer>
            <p>
              themuln.official@gmail.com | <span>+976 88650115</span>
            </p>
            <p>Ulaanbaatar, Mongolia</p>
          </SectionContainer>
        </div>

        <SectionContainer>
          <ResumeTitle>PORTFOLIOS, PROFILES</ResumeTitle>
          <ul>
            {resumeData[0].links.map((link, index) => (
              <motion.li
                key={index}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={textLeave}
                className="flex items-center gap-[2px] hover:text-brand_bg-500 transition-colors duration-300"
              >
                <IconContext.Provider value={{ size: "1.25em" }}>
                  <Links href={link.href} name={link.name} /> <FiArrowUpRight />
                </IconContext.Provider>
              </motion.li>
            ))}
          </ul>
        </SectionContainer>

        <SectionContainer>
          <ResumeTitle>PROFESSIONAL SUMMARY</ResumeTitle>
          <p>{resumeData[0].professionalSummary}</p>
        </SectionContainer>

        <SectionContainer>
          <ResumeTitle>SKILLS</ResumeTitle>
          <div className="grid grid-cols-2 text-xl">
            {resumeData[0].technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </div>
        </SectionContainer>

        <SectionContainer>
          <ResumeTitle>PROFESSIONAL EXPERIENCE</ResumeTitle>
          <p>
            <span className="font-bold">
              {resumeData[0].professionalExperience.title}
            </span>{" "}
            | {resumeData[0].professionalExperience.company} -{" "}
            {resumeData[0].professionalExperience.location}{" "}
            {resumeData[0].professionalExperience.date}
          </p>
          <ul>
            {resumeData[0].professionalExperience.responsibilities.map(
              (responsibility, index) => (
                <li key={index}>- {responsibility}</li>
              )
            )}
          </ul>
        </SectionContainer>

        <SectionContainer>
          <ResumeTitle>Education</ResumeTitle>
          <div className="flex justify-between w-full">
            <p>{resumeData[0].education[0]}</p>
            <p>06/2022</p>
          </div>
        </SectionContainer>

        <SectionContainer>
          <ResumeTitle>Languages</ResumeTitle>
          {resumeData[0].languages.map((language, index) => (
            <div key={index}>
              <p>
                <span className="font-bold">{language.name}:</span>{" "}
                {language.proficiency}
              </p>
              {language.name === "English" && (
                <div className="flex gap-1">
                  {[...Array(4)].map((_, index) => (
                    <Block key={index} active={true} />
                  ))}
                  {[...Array(2)].map((_, index) => (
                    <Block key={index} active={false} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </SectionContainer>
      </div>
    </section>
  );
};

export default Resume;
