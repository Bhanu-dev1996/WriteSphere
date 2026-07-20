import { Link } from "react-router-dom";
import { Globe, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-outline bg-surface-container mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <Link to="/" className="font-serif text-xl font-bold text-foreground">
              WriteSphere
            </Link>
            <p className="text-sm text-muted-foreground mt-3 max-w-xs leading-relaxed">
              A digital journal dedicated to long-form exploration of the ideas shaping our collective future.
            </p>
            <div className="flex gap-3 mt-5">
              <Link to="#" className="size-10 flex items-center justify-center rounded-full border border-outline hover:border-primary transition-colors">
                <Globe className="size-4 text-primary" />
              </Link>
              <Link to="#" className="size-10 flex items-center justify-center rounded-full border border-outline hover:border-primary transition-colors">
                <Mail className="size-4 text-primary" />
              </Link>
            </div>
          </div>
          <div className="md:col-span-2">
            <h5 className="text-xs uppercase tracking-wider font-semibold text-foreground mb-4">Journal</h5>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li><Link to="/search" className="hover:underline decoration-primary">Essays</Link></li>
              <li><Link to="/search?category=culture" className="hover:underline decoration-primary">Culture</Link></li>
              <li><Link to="/search?category=science" className="hover:underline decoration-primary">Science</Link></li>
              <li><Link to="/search" className="hover:underline decoration-primary">Archive</Link></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h5 className="text-xs uppercase tracking-wider font-semibold text-foreground mb-4">Company</h5>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:underline decoration-primary">About</Link></li>
              <li><Link to="/about" className="hover:underline decoration-primary">Careers</Link></li>
              <li><Link to="/contact" className="hover:underline decoration-primary">Contact</Link></li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <h5 className="text-xs uppercase tracking-wider font-semibold text-foreground mb-4">Subscribe</h5>
            <p className="text-sm text-muted-foreground mb-3">Get the latest stories sent to your inbox weekly.</p>
            <div className="flex border-b border-foreground/20 pb-1">
              <input
                type="text"
                placeholder="Your email"
                className="bg-transparent border-none py-2 px-0 text-sm w-full focus:outline-none"
              />
              <button className="text-primary p-2 shrink-0">
                <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
          <div className="md:col-span-12 border-t border-outline pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} WriteSphere. All rights reserved.</p>
            <div className="flex gap-6 text-xs text-muted-foreground">
              <Link to="#" className="hover:underline decoration-primary">Privacy</Link>
              <Link to="#" className="hover:underline decoration-primary">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
