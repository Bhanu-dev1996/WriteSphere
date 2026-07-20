import { create } from "zustand";

export interface User {
  id: string;
  username: string;
  email: string;
}

interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  setAuth: (user: User, accessToken: string, refreshToken: string) => void;
  setUser: (user: User) => void;
  logout: () => void;
  initialize: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
  isLoading: true,
  setAuth: (user, accessToken, refreshToken) => {
    localStorage.setItem("access_token", accessToken);
    localStorage.setItem("refresh_token", refreshToken);
    set({ user, accessToken, refreshToken, isAuthenticated: true, isLoading: false });
  },
  setUser: (user) => {
    set({ user });
  },
  logout: () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    set({ user: null, accessToken: null, refreshToken: null, isAuthenticated: false, isLoading: false });
  },
  initialize: () => {
    const token = localStorage.getItem("access_token");
    if (token) {
      set({ isAuthenticated: true, accessToken: token, isLoading: false });
    } else {
      set({ isLoading: false });
    }
  },
}));
