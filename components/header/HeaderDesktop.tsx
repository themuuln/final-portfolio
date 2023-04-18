import Link from "next/link";
import Buttons from "./Buttons";
import { AiOutlineExperiment } from "react-icons/ai";
import { RiContactsBook2Line, RiLayout2Line } from "react-icons/ri";
import { HiOutlineAnnotation, HiOutlineHome } from "react-icons/hi";
import { motion as m } from "framer-motion";
import ThemeSwitcher from "./ThemeSwitcher";
import { IconContext } from "react-icons";
import ButtonData from "./ButtonData";

const HeaderDesktop = () => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.5 } },
  };
  const buttons = { hidden: { y: "100%" }, show: { y: 0 } };
  return (
    <>
      <m.ul
        variants={container}
        initial={"hidden"}
        animate={"show"}
        className="flex items-center gap-5 text-2xl font-bold headerDesktop "
      >
        {ButtonData.map((link, index) => (
          <Link key={index} href={link.href}>
            <Buttons
              variants={buttons}
              icon={link.icon}
              context={link.context}
            />
          </Link>
        ))}
        <IconContext.Provider value={{ size: "0.5em" }}>
          <ThemeSwitcher />
        </IconContext.Provider>
      </m.ul>
    </>
  );
};

export default HeaderDesktop;
