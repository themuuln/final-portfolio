import { motion as m } from "framer-motion";
import { cardContainer } from "../animation/variants";
import { cardData } from "./cardData";

const QnaSection = () => {
  return (
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
  );
};

export default QnaSection;
