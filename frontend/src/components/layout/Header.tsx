import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { useAuthStore } from "@/store/authStore";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export function Header() {
  const { isAuthenticated, user } = useAuthStore();
  const initials = user?.username?.slice(0, 2).toUpperCase() ?? "U";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface border-b border-outline">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 h-20">
        <div className="flex items-center gap-8">
          <Link to="/" className="font-serif text-2xl font-bold text-foreground">
            WriteSphere
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/search" className="hover:text-foreground transition-colors border-b-2 border-primary pb-1 text-foreground font-medium">
              Essays
            </Link>
            <Link to="/search?category=culture" className="hover:text-foreground transition-colors">
              Culture
            </Link>
            <Link to="/search?category=science" className="hover:text-foreground transition-colors">
              Science
            </Link>
            <Link to="/search" className="hover:text-foreground transition-colors">
              Archive
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative hidden lg:block">
            <Search className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              className="pl-9 pr-4 py-2 bg-muted border-none rounded-full text-sm focus:ring-2 focus:ring-primary w-56 transition-all"
              placeholder="Search insights..."
              type="text"
            />
          </div>
          <Button className="rounded-full text-xs uppercase tracking-wider font-semibold px-5">
            Subscribe
          </Button>
          {isAuthenticated ? (
            <Link to="/dashboard">
              <Avatar className="size-10 border border-outline">
                <AvatarFallback className="text-xs">{initials}</AvatarFallback>
              </Avatar>
            </Link>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Link to="/login">Login</Link>
              </Button>
              <Button size="sm">
                <Link to="/register">Register</Link>
              </Button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
