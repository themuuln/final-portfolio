import { motion as m } from "framer-motion";

type VerticalLineProps = {
  element: String;
};
const VerticalLine = ({ element }: VerticalLineProps) => {
  return (
    <>
      <m.div
        initial={{ x: "-100%", opacity: 0, scale: 1.1 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="space-y-2 h-[115%] font-normal dark:text-white/30 text-black/30 pointer-events-none px-2 -mt-[2%]"
      >
        <div className="">&lt;{element}&gt;</div>
        <m.div className="relative w-[1px] ml-[50%] h-[90%] dark:bg-white/10 bg-black/10"></m.div>
        <div className="">&lt;/{element}&gt;</div>
      </m.div>
    </>
  );
};

export default VerticalLine;
