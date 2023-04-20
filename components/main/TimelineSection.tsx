import { accordions } from "@/pages/api/accordions";
import { motion } from "framer-motion";
import { cardContainer, container } from "../animation/variants";
import Card from "../animation/Card";
import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";
const VerticalLine = dynamic(() => import("../VerticalLine"), { ssr: false });

export default function TimelineSection() {
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" }); // Check if the current screen orientation is portrait
  return (
    <div
      data-scroll-section
      className="flex items-center justify-center w-full p-80 h-fit"
    >
      <div className="max-w-[1000px] justify-between h-fit w-full flex gap-4">
        <motion.div className="flex items-center">
          {isPortrait ? null : <VerticalLine element={"Timeline"} />}
          <motion.div
            variants={{
              hidden: { opacity: 0.3 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
            initial={"hidden"}
            whileInView={"show"}
            className="max-w-[1000px] w-[1000px] p-5 rounded-md bg-darkcolor"
          >
            {accordions.map((item, id) => {
              const { question, answer } = item;
              return (
                <motion.div
                  variants={{
                    hidden: { opacity: 0.3 },
                    show: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.3,
                      },
                    },
                  }}
                  initial={"hidden"}
                  whileInView={"show"}
                  className="p-5 rounded-md bg-darkcolor"
                  key={id}
                >
                  <Card question={question} answer={answer} id={id} />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
