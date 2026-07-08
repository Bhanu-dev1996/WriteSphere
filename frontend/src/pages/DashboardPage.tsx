import { Helmet } from "react-helmet-async";
import { FileText, Users, Bell, Bookmark } from "lucide-react";

export function DashboardPage() {
  const stats = [
    { label: "Total Blogs", value: "—", icon: FileText },
    { label: "Followers", value: "—", icon: Users },
    { label: "Notifications", value: "—", icon: Bell },
    { label: "Bookmarks", value: "—", icon: Bookmark },
  ];

  return (
    <>
      <Helmet>
        <title>Dashboard — WriteSphere</title>
      </Helmet>

      <h2 className="font-serif text-2xl text-foreground mb-6">Overview</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(({ label, value, icon: Icon }) => (
          <div key={label} className="border border-outline rounded p-4 bg-surface">
            <div className="flex items-center gap-3">
              <Icon className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">{label}</span>
            </div>
            <p className="text-2xl font-serif text-foreground mt-2">{value}</p>
          </div>
        ))}
      </div>
    </>
  );
}
