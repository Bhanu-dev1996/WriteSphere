import { Link } from "react-router-dom";
import type { Post } from "@/types";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface HeroBannerProps {
  post: Post | undefined;
  isLoading: boolean;
}

export function HeroBanner({ post, isLoading }: HeroBannerProps) {
  if (isLoading) {
    return (
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 rounded-xl overflow-hidden aspect-[16/9] bg-muted animate-pulse" />
          <div className="lg:col-span-5 animate-pulse space-y-4">
            <div className="h-4 w-32 bg-muted rounded" />
            <div className="h-12 w-full bg-muted rounded" />
            <div className="h-6 w-3/4 bg-muted rounded" />
            <div className="flex items-center gap-3">
              <div className="size-12 rounded-full bg-muted" />
              <div className="space-y-1">
                <div className="h-4 w-28 bg-muted rounded" />
                <div className="h-3 w-20 bg-muted rounded" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const initials = post?.author.name.split(" ").map((n) => n[0]).join("");

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 rounded-xl overflow-hidden aspect-[16/9] bg-gradient-to-br from-primary-100 to-primary-300 shadow-sm">
          {post?.coverImage && (
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div className="lg:col-span-5 flex flex-col gap-4">
          <span className="text-primary font-semibold text-xs uppercase tracking-widest">
            Featured Essay
          </span>
          {post ? (
            <>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-display leading-tight text-foreground">
                {post.title}
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-3 mt-1">
                <Avatar className="size-12">
                  <AvatarFallback className="text-sm">{initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold text-foreground">{post.author.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {post.author.bio ?? "Contributor"} &middot; {post.readTime} min read
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-display leading-tight text-foreground">
                Where Ideas Find Their Voice
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                A sophisticated editorial platform for thoughtful writing and meaningful discussion.
              </p>
              <div className="flex items-center gap-3 mt-2">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-80 transition-opacity"
                >
                  Start Writing
                </Link>
                <Link
                  to="/search"
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-outline text-foreground text-sm font-semibold hover:bg-muted transition-colors"
                >
                  Explore
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
