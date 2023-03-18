import { motion as m } from "framer-motion";

type Props = {
  role: String;
};

const Role = ({ role }: Props) => {
  return (
    <>
      <m.p
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          duration: 1,
        }}
        className="text-xl leading-6 xl:text-3xl xl:leading-6"
      >
        {role
          .toUpperCase()
          .split("")
          .map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
      </m.p>
    </>
  );
};

export default Role;
