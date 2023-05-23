import { accordions } from "@/pages/api/accordions";
import { motion } from "framer-motion";
import { cardContainer, container } from "../animation/variants";
import Card from "../animation/Card";
import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";
const VerticalLine = dynamic(() => import("../VerticalLine"), { ssr: false });

export default function TimelineSection() {
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" }); // Check if the current screen orientation is portrait
  const variant = (id: number) => ({
    hidden: {
      opacity: 0,
      x: id % 2 === 0 ? "100%" : "-100%",
      y: id % 2 === 0 ? "100%" : "100%",
    },
    show: { opacity: 1, x: 0, y: 0 },
    whileHover: { scale: 1.2 },
  });
  return (
    <motion.div
      variants={cardContainer}
      initial={"hidden"}
      whileInView={"show"}
      className="flex items-center justify-center w-full h-screen"
    >
      <motion.div
        initial={"hidden"}
        whileInView={"show"}
        className="max-w-[1000px] justify-between h-fit w-full flex gap-4"
      >
        <motion.div
          initial={"hidden"}
          whileInView={"show"}
          className="flex items-center"
        >
          {isPortrait ? null : <VerticalLine element={"Timeline"} />}
          <motion.div
            variants={container}
            initial={"hidden"}
            whileInView={"show"}
            className="max-w-5xl p-5 rounded-md bg-darkcolor"
          >
            {accordions.map((item, id) => {
              const { question, answer } = item;
              return (
                <motion.div
                  key={id}
                  variants={variant(id)}
                  transition={{ duration: 0.3 }}
                  initial={"hidden"}
                  whileInView={"show"}
                  className="p-5 rounded-md bg-darkcolor"
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
