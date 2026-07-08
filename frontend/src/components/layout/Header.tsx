import { Link } from "react-router-dom";
import { Search, Bell, User } from "lucide-react";
import { useAuthStore } from "@/store/authStore";

export function Header() {
  const { isAuthenticated } = useAuthStore();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur border-b border-outline">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-serif text-xl font-bold text-foreground">
          WriteSphere
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/search" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Explore
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <Search className="w-5 h-5" />
          </button>

          {isAuthenticated ? (
            <>
              <button className="p-2 text-muted-foreground hover:text-foreground transition-colors relative">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                <User className="w-5 h-5" />
              </button>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-sm font-medium bg-primary text-white px-4 py-2 rounded hover:bg-primary-600 transition-colors"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
