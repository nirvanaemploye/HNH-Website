import React from "react";
import { useTheme } from "../context/themeContext";
import Image from "next/image";

const DarkMode = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="text-primary flex items-center justify-center"
    >
      {theme === "dark" ? (
        <Image
          src="/light_btn.svg"
          alt="moon"
          width={65}
          height={65}
          priority
        />
      ) : (
        <Image src="/dark_btn.svg" alt="sun" width={65} height={65} priority />
      )}
    </button>
  );
};

export default DarkMode;
