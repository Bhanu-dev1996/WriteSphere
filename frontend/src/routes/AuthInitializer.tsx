import { useEffect, type ReactNode } from "react";
import { useAuthStore } from "@/store/authStore";

export function AuthInitializer({ children }: { children: ReactNode }) {
  const initialize = useAuthStore((s) => s.initialize);

  useEffect(() => {
    initialize();
  }, [initialize]);

  return <>{children}</>;
}
