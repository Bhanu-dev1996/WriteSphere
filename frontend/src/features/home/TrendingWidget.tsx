import { Link } from "react-router-dom";
import type { Post } from "@/types";
import { TrendingUp } from "lucide-react";

interface TrendingWidgetProps {
  posts: Post[] | undefined;
  isLoading: boolean;
}

export function TrendingWidget({ posts, isLoading }: TrendingWidgetProps) {
  if (isLoading) {
    return (
      <div className="bg-muted/50 p-5 rounded-xl animate-pulse space-y-5">
        <div className="h-6 w-36 bg-muted rounded" />
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex gap-4 pt-4 border-t border-outline">
            <div className="h-8 w-8 bg-muted rounded" />
            <div className="flex-1 space-y-1">
              <div className="h-4 w-full bg-muted rounded" />
              <div className="h-3 w-24 bg-muted rounded" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!posts || posts.length === 0) return null;

  return (
    <div className="bg-muted/50 p-5 rounded-xl">
      <h2 className="font-serif text-xl text-foreground mb-5 flex items-center gap-2">
        <TrendingUp className="size-5 text-primary" />
        Trending Now
      </h2>
      <ul className="space-y-4">
        {posts.slice(0, 3).map((post, i) => (
          <li
            key={post.id}
            className="flex gap-4 group cursor-pointer"
          >
            <span className="font-serif text-3xl text-muted-foreground/30 font-bold leading-none tabular-nums group-hover:text-primary transition-colors">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h4 className="text-sm font-semibold text-foreground leading-snug group-hover:underline">
                {post.title}
              </h4>
              <p className="text-xs text-muted-foreground mt-1">
                {post.readTime} min read &middot; {post.category.name}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
