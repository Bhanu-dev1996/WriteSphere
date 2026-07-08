import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-outline bg-surface-container mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="font-serif text-xl font-bold text-foreground">
              WriteSphere
            </Link>
            <p className="mt-2 text-sm text-muted-foreground max-w-sm">
              A modern editorial platform for thoughtful writing and meaningful discussion.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Explore</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
              <Link to="/search" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Search</Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground">Twitter</span>
              <span className="text-sm text-muted-foreground">GitHub</span>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-outline text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} WriteSphere. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
