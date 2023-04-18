import { useTheme } from "next-themes";
import { HiMoon, HiOutlineSun } from "react-icons/hi";
import { useState, useEffect } from "react";

const ThemeSwitcher = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <HiOutlineSun
          className="w-7 h-7"
          role={"button"}
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <HiMoon
          className="w-7 h-7"
          role={"button"}
          onClick={() => setTheme("dark")}
        />
      );
    }
  };
  return (
    <>
      <p>Theme</p>
      {renderThemeChanger()}
    </>
  );
};

export default ThemeSwitcher;
