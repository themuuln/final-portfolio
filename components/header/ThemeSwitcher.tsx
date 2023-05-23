import { useTheme } from "next-themes";
import { HiOutlineMoon, HiOutlineSun, HiMoon, HiSun } from "react-icons/hi";
import { motion as m, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";
import CursorContext from "@/lib/context/context";
import { useContext } from "react";

const ThemeSwitcher = () => {
  // Get cursor context and hover type context
  const { textEnter, textLeave } = useContext(CursorContext);
  const { setHoverType } = useContext(HoverTypeContext);

  // Get theme data from next-themes
  const { systemTheme, theme, setTheme } = useTheme();

  // State to track if component is mounted
  const [mounted, setMounted] = useState(false);

  // Handler for mouse enter event
  const handleMouseEnter = () => {
    textEnter();
    // Set hover type based on current theme
    setHoverType(theme === "dark" ? <HiSun /> : <HiMoon />);
  };

  useEffect(() => {
    // Set mounted state to true on component mount
    setMounted(true);
  }, []);

  // Function to render theme changer button
  const renderThemeChanger = () => {
    // Return null if component is not mounted
    if (!mounted) return null;

    // Determine current theme (either systemTheme or theme)
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      // Render light mode button
      return (
        <m.button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={textLeave}
          onClick={() => setTheme("light")}
          className="p-2 border-light_bg-800 rounded-lg border-[2px]"
        >
          <m.div
            initial={{ y: "100%" }}
            transition={{ duration: 0.3 }}
            animate={{ y: 0 }}
          >
            <HiOutlineSun className="w-7 h-7" />
          </m.div>
        </m.button>
      );
    } else {
      // Render dark mode button
      return (
        <m.button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={textLeave}
          className="p-2 border-light_bg-700 rounded-lg border-[2px]"
          onClick={() => setTheme("dark")}
        >
          <AnimatePresence>
            <m.div
              transition={{ duration: 0.3 }}
              initial={{ y: "100%" }}
              exit={{ y: "100%" }}
              animate={{ y: 0 }}
            >
              <HiOutlineMoon className="w-7 h-7" />
            </m.div>
          </AnimatePresence>
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
