import { motion as m } from "framer-motion";

type VerticalLineProps = {
  element: String;
};
const VerticalLine = ({ element }: VerticalLineProps) => {
  return (
    <>
      <div className="space-y-2 h-[115%] font-normal pointer-events-none px-2 -mt-[2%]">
        <div className="">&lt;{element}&gt;</div>
        <m.div className="relative w-[1px] ml-[50%] h-[90%] bg-gray-800/40"></m.div>
        <div className="">&lt;/{element}&gt;</div>
      </div>
    </>
  );
};

export default VerticalLine;
