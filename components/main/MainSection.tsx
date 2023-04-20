import "@/public/css/mainSection.css";
import { motion as m } from "framer-motion";
import { cardContainer } from "../animation/variants";
import { cardData } from "./cardData";
import SkillSection from "./SkillSection";
import SeeMoreSection from "./SeeMoreSection";
import TimelineSection from "./TimelineSection";
import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";
import ProjectsSection from "./ProjectsSection";
const VerticalLine = dynamic(() => import("../VerticalLine"), { ssr: false });

const MainSection = () => {
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" }); // Check if the current screen orientation is portrait
  return (
    <>
      <section
        data-scroll-section
        id="qna"
        className="relative flex flex-col items-center justify-center h-screen "
      >
        <div className="container space-y-8 h-fit md:flex md:justify-around">
          {isPortrait ? null : <VerticalLine element={"q&a"} />}
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
      <SkillSection />
      <ProjectsSection />
      <TimelineSection />
      <SeeMoreSection />
    </>
  );
};

export default MainSection;
