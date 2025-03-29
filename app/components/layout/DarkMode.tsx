import React from "react";
import { useTheme } from "../context/themeContext";
import Image from "next/image";

const DarkMode = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="h-10 w-10 border border-primary text-primary rounded-full flex items-center justify-center"
    >
      {theme === "dark" ? (
        <Image src="/moon.svg" alt="moon" width={20} height={20} priority />
      ) : (
        <Image src="/sun.svg" alt="sun" width={20} height={20} priority />
      )}
    </button>
  );
};

export default DarkMode;
