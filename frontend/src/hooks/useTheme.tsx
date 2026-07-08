import { createContext, useContext, useEffect, type ReactNode } from "react";
import { useThemeStore } from "@/store/themeStore";

interface ThemeContextValue {
  theme: string;
  setTheme: (theme: "light" | "dark" | "system") => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    const root = document.documentElement;
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    root.classList.toggle("dark", isDark);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
