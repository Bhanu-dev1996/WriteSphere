import { Link } from "react-router-dom";
import type { Author } from "@/types";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface TopAuthorsProps {
  authors: Author[] | undefined;
  isLoading: boolean;
}

export function TopAuthors({ authors, isLoading }: TopAuthorsProps) {
  if (isLoading) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-6 w-32 bg-muted rounded" />
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex items-start gap-3 pt-4 border-t border-outline">
            <div className="size-14 rounded-full bg-muted shrink-0" />
            <div className="flex-1 space-y-1">
              <div className="h-4 w-24 bg-muted rounded" />
              <div className="h-3 w-full bg-muted rounded" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!authors || authors.length === 0) return null;

  return (
    <div>
      <h2 className="font-serif text-xl text-foreground mb-5">Top Authors</h2>
      <div className="flex flex-col gap-0">
        {authors.slice(0, 3).map((author, i) => {
          const initials = author.name.split(" ").map((n) => n[0]).join("");
          return (
            <div
              key={author.id}
              className={`flex items-start gap-3 py-4 ${i > 0 ? "border-t border-outline" : ""}`}
            >
              <Link to={`/author/${author.username}`} className="shrink-0">
                <Avatar className="size-14">
                  <AvatarFallback className="text-sm">{initials}</AvatarFallback>
                </Avatar>
              </Link>
              <div className="min-w-0">
                <Link
                  to={`/author/${author.username}`}
                  className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
                >
                  {author.name}
                </Link>
                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed line-clamp-2">
                  {author.bio}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <Link
        to="/search"
        className="w-full mt-4 inline-flex items-center justify-center border border-primary text-primary py-2 rounded-lg text-xs uppercase tracking-wider font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
      >
        View All Contributors
      </Link>
    </div>
  );
}
