import React, { useEffect } from "react";
import { useTheme } from "../context/themeContext";
// import { MdDarkMode, MdLightMode } from "react-icons/md";
// import darkbtn from "@/public/dark_btn.svg";
// import lightbtn from "@/public/light_btn.svg";

const DarkMode = () => {
  // Use a default theme value, and set it using localStorage if available after the component mounts
  // const [theme, setTheme] = useState("dark");
  const {theme, toggleTheme } = useTheme();

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     // Only run on the client side (after the page has loaded)
  //     const savedTheme = localStorage.getItem("theme");
  //     if (savedTheme) {
  //       setTheme(savedTheme);
  //     } else {
  //       localStorage.setItem("theme", "light"); // Default theme
  //     }
  //   }
  // }, []);

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
      {/* <MdLightMode
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
      /> */}

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
