import React, { useEffect } from "react";
import { useTheme } from "../context/themeContext";

const DarkMode = () => {
  const {theme, toggleTheme } = useTheme();

  useEffect(() => {
    const element = document.documentElement; // html element

    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="relative">

      <img
        src="/dark_btn.svg"
        alt=""
        onClick={toggleTheme}
        className={`cursor-pointer transition-all duration-300 absolute ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
      />
      <img
        src="/light_btn.svg"
        alt=""
        onClick={toggleTheme}
        className={`cursor-pointer transition-all duration-300 ${
          theme === "light" ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
};

export default DarkMode;
