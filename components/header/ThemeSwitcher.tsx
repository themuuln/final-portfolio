import { useTheme } from "next-themes";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { motion as m, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";
import CursorContext from "@/lib/context/context";
import { useContext } from "react";

const ThemeSwitcher = () => {
  const { textEnter, textLeave } = useContext(CursorContext);
  const { setHoverType } = useContext(HoverTypeContext);
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const handleMouseEnter = () => {
    textEnter();
    setHoverType(theme == "dark" ? <HiOutlineSun /> : <HiOutlineMoon />);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <m.button
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={textLeave}
          onClick={() => setTheme("light")}
          className="p-2 border-light_bg-800 rounded-lg border-[2px]"
        >
          <HiOutlineSun className="w-7 h-7" />
        </m.button>
      );
    } else {
      return (
        <m.button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={textLeave}
          className="p-2 border-light_bg-700 rounded-lg border-[2px]"
          onClick={() => setTheme("dark")}
        >
          <HiOutlineMoon className="w-7 h-7" />
        </m.button>
      );
    }
  };
  return (
    <>
      <AnimatePresence>{renderThemeChanger()}</AnimatePresence>
    </>
  );
};

export default ThemeSwitcher;
