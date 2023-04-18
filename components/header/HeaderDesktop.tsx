import Link from "next/link";
import Buttons from "./Buttons";
import { AiOutlineExperiment } from "react-icons/ai";
import { RiContactsBook2Line, RiLayout2Line } from "react-icons/ri";
import { HiOutlineAnnotation, HiOutlineHome } from "react-icons/hi";
import { motion as m } from "framer-motion";
import ThemeSwitcher from "./ThemeSwitcher";
import { IconContext } from "react-icons";

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
        <Link href={"#home"}>
          <Buttons
            variants={buttons}
            icon={<HiOutlineHome />}
            context={"home"}
          />
        </Link>
        <Link href={"#experience"}>
          <Buttons
            variants={buttons}
            icon={<AiOutlineExperiment />}
            context={"experience"}
          />
        </Link>
        <Link href={"#project"}>
          <Buttons
            variants={buttons}
            icon={<RiLayout2Line />}
            context={"project"}
          />
        </Link>
        <Link href={"https://medium.com/@themuuln"}>
          <Buttons
            variants={buttons}
            icon={<HiOutlineAnnotation />}
            context={"blog"}
          />
        </Link>
        <Link href={"#contact"}>
          <Buttons
            variants={buttons}
            icon={<RiContactsBook2Line />}
            context={"contact"}
          />
        </Link>
        <IconContext.Provider value={{ size: "0.5em" }}>
          <ThemeSwitcher />
        </IconContext.Provider>
      </m.ul>
    </>
  );
};

export default HeaderDesktop;
