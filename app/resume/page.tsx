"use client";
import Links from "@/components/resume/Links";
import Block from "@/components/resume/Block";
import { motion } from "framer-motion";
import resumeData from "@/components/data/resume";
import CursorContext from "@/lib/context/context";
import { useContext } from "react";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";

const ResumeTitle = ({ children }: { children: string }) => {
  return <h1 className="text-2xl font-semibold md:text-3xl">{children}</h1>;
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
          <h1 className="text-3xl font-bold md:text-6xl">
            TEMUULEN UNDRAKHBAYAR
          </h1>
          <div className="mb-4">
            <p>
              themuln.official@gmail.com | <span>+976 88650115</span>
            </p>
            <p>Ulaanbaatar, Mongolia</p>
          </div>
        </div>
        <div className="mb-4">
          <ResumeTitle>PORTFOLIOS, PROFILES</ResumeTitle>
          <ul>
            {resumeData[0].links.map((link, index) => (
              <motion.li
                key={index}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={textLeave}
              >
                <Links href={link.href} name={link.name} />
              </motion.li>
            ))}
          </ul>
        </div>
        <div>
          <ResumeTitle>PROFESSIONAL SUMMARY</ResumeTitle>
          <p>{resumeData[0].professionalSummary}</p>
        </div>
        <div>
          <ResumeTitle>SKILLS</ResumeTitle>
          <div className="grid grid-cols-2 text-xl">
            {resumeData[0].technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </div>
        </div>

        <div>
          <ResumeTitle>PROFESSIONAL EXPERIENCE</ResumeTitle>
          <p>
            <span>{resumeData[0].professionalExperience.title}</span> |{" "}
            {resumeData[0].professionalExperience.company} -{" "}
            {resumeData[0].professionalExperience.location}
          </p>
          <ul>
            {resumeData[0].professionalExperience.responsibilities.map(
              (responsibility, index) => (
                <li key={index}>{responsibility}</li>
              )
            )}
          </ul>
        </div>
        <div className="">
          <ResumeTitle>Education</ResumeTitle>
          <div className="flex justify-between w-full">
            <p>{resumeData[0].education[0]}</p>
            <p>06/2022</p>
          </div>
        </div>
        <div className="">
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
        </div>
      </div>
    </section>
  );
};

export default Resume;
