import { motion as m } from "framer-motion";

type Props = {
  myName: String;
};

const HeroMyName = ({ myName }: Props) => {
  return (
    <>
      <m.p
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          duration: 1,
        }}
        className="border-[1px] border-brand_bg-500 text-3xl font-extrabold leading-none xl:text-[100px]"
      >
        {myName
          .toUpperCase()
          .split("")
          .map((letter, index) => (
            <m.span
              className="transition-all duration-200 hover:text-brand_main-400"
              key={index}
            >
              {letter}
            </m.span>
          ))}
      </m.p>
    </>
  );
};

export default HeroMyName;
