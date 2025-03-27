/* import { createContext, useState, useContext, ReactNode } from "react";

// Define theme types
type Theme = "light" | "dark";

// Define context type
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Create context with default values
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Provider component
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use ThemeContext
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

 */



/* import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

// Define theme types
type Theme = "light" | "dark";

// Define context type
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Create context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Function to determine initial theme
  const getInitialTheme = (): Theme => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) return savedTheme; // Use stored theme if available

    const hour = new Date().getHours();
    return hour >= 6 && hour < 18 ? "light" : "dark"; // Day: Light | Night: Dark
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  // Apply theme to <html> when it changes
  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use ThemeContext
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
 */


import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

// Define theme types
type Theme = "light" | "dark";

// Define context type
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Create context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Function to determine initial theme (only runs on client-side)
  const getInitialTheme = (): Theme => {
    if (typeof window !== "undefined") {
      // Ensure window is available
      const savedTheme = localStorage.getItem("theme") as Theme | null;
      if (savedTheme) return savedTheme; // Use stored theme if available

      const hour = new Date().getHours();
      return hour >= 6 && hour < 18 ? "light" : "dark"; // Day: Light | Night: Dark
    }
    return "light"; // Default theme for SSR
  };

  const [theme, setTheme] = useState<Theme>("light");

  // Set initial theme on mount (client-side only)
  useEffect(() => {
    setTheme(getInitialTheme());
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", newTheme);
      }
      return newTheme;
    });
  };

  // Apply theme to <html> when it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      const element = document.documentElement;
      if (theme === "dark") {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use ThemeContext
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};


