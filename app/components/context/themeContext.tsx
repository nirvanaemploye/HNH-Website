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
  // Get current theme based on time
  const getCurrentTheme = (): Theme => {
    const hour = new Date().getHours();
    return hour >= 6 && hour < 18 ? "light" : "dark";
  };

  // Initialize theme based on current time
  const [theme, setTheme] = useState<Theme>(getCurrentTheme());

  // Update theme based on time and handle page navigation
  useEffect(() => {
    const checkTime = () => {
      const newTheme = getCurrentTheme();
      setTheme(newTheme);
    };

    // Check immediately
    checkTime();

    // Check every minute
    const timer = setInterval(checkTime, 60000);

    // Handle page visibility changes
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        checkTime();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(timer);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (typeof document !== "undefined") {
      const root = document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(theme);
    }
  }, [theme]);

  // Manual theme toggle
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
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



import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("light"); // default
  const [mounted, setMounted] = useState(false); // to prevent SSR mismatch

  // Set theme based on client-side time
  useEffect(() => {
    const getCurrentTheme = (): Theme => {
      const hour = new Date().getHours();
      return hour >= 6 && hour < 18 ? "light" : "dark";
    };

    const checkTime = () => {
      const newTheme = getCurrentTheme();
      setTheme(newTheme);
    };

    checkTime(); // Initial check after mount
    setMounted(true); // We're now safely in the browser

    const timer = setInterval(checkTime, 60000); // Check every minute

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        checkTime();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(timer);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // Apply theme class
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* Avoid rendering children until mounted to prevent mismatch */}
      {mounted && children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
