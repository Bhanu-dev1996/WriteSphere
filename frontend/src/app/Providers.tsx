import type { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@/hooks/useTheme";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
    },
  },
});

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ThemeProvider>
            {children}
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: { borderRadius: "4px" },
              }}
            />
          </ThemeProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );
}
