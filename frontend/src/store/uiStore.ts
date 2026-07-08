import { create } from "zustand";

interface UIState {
  sidebarOpen: boolean;
  searchOpen: boolean;
  toggleSidebar: () => void;
  setSearchOpen: (open: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  sidebarOpen: false,
  searchOpen: false,
  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
  setSearchOpen: (open) => set({ searchOpen: open }),
}));
