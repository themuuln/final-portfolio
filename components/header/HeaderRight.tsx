import Link from "next/link";
import Buttons from "./Buttons";
import { motion as m } from "framer-motion";
import ThemeSwitcher from "./ThemeSwitcher";
import { IconContext } from "react-icons";
import ButtonData from "./ButtonData";
import { useMediaQuery } from "react-responsive";

const HeaderRight = () => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.5 } },
  };
  const buttons = { hidden: { y: "100%" }, show: { y: 0 } };
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" }); // Check if the current screen orientation is portrait
  return (
    <>
      <m.ul
        variants={container} // Apply container variants for animation
        initial={"hidden"} // Set initial animation state
        animate={"show"} // Set target animation state
        className={`flex items-center gap-5 text-2xl font-bold headerDesktop`}
      >
        <div className={`${isPortrait ? "hidden" : null} flex gap-5`}>
          {ButtonData.map((link, index) => (
            <Link key={index} href={link.href}>
              <Buttons
                variants={buttons} // Pass buttons variants to Buttons component
                icon={link.icon} // Pass icon prop to Buttons component
                context={link.context} // Pass context prop to Buttons component
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

export default HeaderRight;
