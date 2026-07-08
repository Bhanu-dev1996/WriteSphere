import { Providers } from "./Providers";
import { AppRoutes } from "@/routes";

export function App() {
  return (
    <Providers>
      <AppRoutes />
    </Providers>
  );
}
