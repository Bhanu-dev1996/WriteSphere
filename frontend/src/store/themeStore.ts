import { create } from "zustand";

type Theme = "light" | "dark" | "system";

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: (localStorage.getItem("writeshere-theme") as Theme) || "light",
  setTheme: (theme) => {
    localStorage.setItem("writeshere-theme", theme);
    set({ theme });
  },
}));
