import api from "@/lib/axios";

export const authService = {
  register: (data: { username: string; email: string; password: string }) =>
    api.post("/auth/register", data),

  login: (data: { email: string; password: string }) =>
    api.post("/auth/login", data),

  refresh: (refreshToken: string) =>
    api.post("/auth/refresh", { refresh_token: refreshToken }),

  logout: (refreshToken: string) =>
    api.post("/auth/logout", { refresh_token: refreshToken }),

  me: (token?: string) =>
    api.get("/auth/me", token ? { headers: { Authorization: `Bearer ${token}` } } : undefined),
};
