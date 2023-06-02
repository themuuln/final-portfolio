import { accordions } from "@/pages/api/accordions";
import { motion } from "framer-motion";
import { cardContainer, cardItem } from "../animation/variants";
import Card from "../animation/Card";
import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";
const VerticalLine = dynamic(() => import("../VerticalLine"), { ssr: false });

export default function TimelineSection() {
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

  return (
    <motion.div
      id="timeline"
      className="h-fit flex items-center justify-center w-full"
    >
      <motion.div className="max-w-[1000px] justify-center h-fit w-full flex gap-4">
        <motion.div className="flex items-center">
          {isPortrait ? null : <VerticalLine element={"Timeline"} />}
          <motion.div
            variants={cardContainer}
            initial={"hidden"}
            whileInView={"show"}
            className="bg-darkcolor max-w-5xl p-5 rounded-md"
          >
            {accordions.map((item, id) => {
              const { question, answer } = item;
              return (
                <motion.div
                  key={id}
                  variants={cardItem(id)}
                  transition={{ duration: 1, type: "spring", stiffness: 100 }}
                  initial={"hidden"}
                  whileInView={"show"}
                  className="bg-darkcolor p-5 rounded-md"
                >
                  <Card question={question} answer={answer} id={id} />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
