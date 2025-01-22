import React, { useState, useEffect } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const DarkMode = () => {
  // Use a default theme value, and set it using localStorage if available after the component mounts
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Only run on the client side (after the page has loaded)
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        setTheme(savedTheme);
      } else {
        localStorage.setItem("theme", "light"); // Default theme
      }
    }
  }, []);

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
      <MdLightMode
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`cursor-pointer transition-all duration-300 absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
      />

      <MdDarkMode
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`cursor-pointer transition-all duration-300 ${
          theme === "light" ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
};

export default DarkMode;
