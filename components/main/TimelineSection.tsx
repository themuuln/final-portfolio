import Accordion from "../animation/Accordion";
import { accordions } from "@/pages/api/accordions";

export default function TimelineSection() {
  return (
    <div className="w-full px-4 pt-16">
      <div className="max-w-[700px] w-full mx-auto mt-10 flex flex-col gap-4">
        {accordions.map((item, id) => {
          const { question, answer } = item;
          return (
            <div className="p-5 rounded-md bg-darkcolor" key={id}>
              <Accordion question={question} answer={answer}></Accordion>
            </div>
          );
        })}
      </div>
    </div>
  );
}
