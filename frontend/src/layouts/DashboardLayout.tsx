import { Outlet, Link, useLocation } from "react-router-dom";
import { LayoutDashboard, FileText, FileEdit, Bell, Bookmark, BookOpen, User, Menu } from "lucide-react";
import { useUIStore } from "@/store/uiStore";
import { Button } from "@/components/ui/button";

const sidebarLinks = [
  { to: "/dashboard", icon: LayoutDashboard, label: "Overview" },
  { to: "/dashboard/create", icon: FileEdit, label: "Create Blog" },
  { to: "/dashboard/drafts", icon: FileText, label: "Drafts" },
  { to: "/dashboard/notifications", icon: Bell, label: "Notifications" },
  { to: "/dashboard/bookmarks", icon: Bookmark, label: "Bookmarks" },
  { to: "/dashboard/reading-history", icon: BookOpen, label: "Reading History" },
  { to: "/dashboard/profile", icon: User, label: "Profile" },
];

export function DashboardLayout() {
  const { pathname } = useLocation();
  const { sidebarOpen, toggleSidebar } = useUIStore();

  return (
    <div className="min-h-screen bg-surface flex">
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-surface-container border-r border-outline transform transition-transform duration-200 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static`}
      >
        <div className="p-6">
          <Link to="/" className="font-serif text-lg font-bold text-foreground">
            WriteSphere
          </Link>
        </div>
        <nav className="px-3 space-y-1">
          {sidebarLinks.map(({ to, icon: Icon, label }) => (
            <Link
              key={to}
              to={to}
              className={`flex items-center gap-3 px-3 py-2 rounded text-sm transition-colors ${
                pathname === to
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-surface"
              }`}
            >
              <Icon className="size-4" />
              {label}
            </Link>
          ))}
        </nav>
      </aside>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <div className="flex-1 flex flex-col">
        <header className="h-16 border-b border-outline flex items-center px-6 lg:px-8">
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={toggleSidebar}>
            <Menu className="size-5" />
          </Button>
          <h1 className="font-serif text-lg ml-4">Dashboard</h1>
        </header>
        <main className="flex-1 p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
