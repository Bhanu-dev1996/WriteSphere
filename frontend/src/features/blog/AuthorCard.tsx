import { Link } from "react-router-dom";
import type { Author } from "@/types";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface AuthorCardProps {
  author: Author;
}

export function AuthorCard({ author }: AuthorCardProps) {
  const initials = author.name.split(" ").map((n) => n[0]).join("");

  return (
    <div className="flex items-center gap-3 py-3">
      <Link to={`/author/${author.username}`}>
        <Avatar>
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      </Link>
      <div className="flex-1 min-w-0">
        <Link to={`/author/${author.username}`} className="text-sm font-medium text-foreground hover:underline">
          {author.name}
        </Link>
        <p className="text-xs text-muted-foreground truncate">
          {author.followersCount} followers
        </p>
      </div>
      <Button variant="outline" size="sm">Follow</Button>
    </div>
  );
}

export function AuthorCardSkeleton() {
  return (
    <div className="flex items-center gap-3 py-3 animate-pulse">
      <div className="size-8 rounded-full bg-muted" />
      <div className="flex-1">
        <div className="h-4 w-24 bg-muted rounded mb-1" />
        <div className="h-3 w-16 bg-muted rounded" />
      </div>
      <div className="h-7 w-16 bg-muted rounded" />
    </div>
  );
}
