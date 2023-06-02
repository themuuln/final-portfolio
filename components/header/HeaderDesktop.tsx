import Link from "next/link";
import Buttons from "./Buttons";
import { motion as m } from "framer-motion";
import ThemeSwitcher from "./ThemeSwitcher";
import { IconContext } from "react-icons";
import ButtonData from "./ButtonData";
import { useMediaQuery } from "react-responsive";

const HeaderDesktop = () => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.25 } },
  };
  const buttons = { hidden: { y: "100%" }, show: { y: 0 } };
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  return (
    <>
      <m.ul
        variants={container}
        initial={"hidden"}
        animate={"show"}
        className={`flex items-center gap-5 text-2xl font-bold headerDesktop`}
      >
        <div className={`${isPortrait ? "hidden" : null} flex gap-5`}>
          {ButtonData.map((link, index) => (
            <Link key={index} href={link.href}>
              <Buttons
                variants={buttons}
                icon={link.icon}
                context={link.context}
              />
            </Link>
          ))}
        </div>
        <IconContext.Provider value={{ size: "0.5em" }}>
          <ThemeSwitcher />
        </IconContext.Provider>
      </m.ul>
    </>
  );
};

export default HeaderDesktop;
