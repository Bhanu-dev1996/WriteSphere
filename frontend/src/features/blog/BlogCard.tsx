import { Link } from "react-router-dom";
import type { Post } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Clock, ArrowRight } from "lucide-react";

interface BlogCardProps {
  post: Post;
  variant?: "default" | "featured" | "editorial";
}

export function BlogCard({ post, variant = "default" }: BlogCardProps) {
  const initials = post.author.name.split(" ").map((n) => n[0]).join("");

  if (variant === "featured") {
    return (
      <Link to={`/blog/${post.slug}`} className="group block">
        <article className="relative h-80 rounded-xl bg-surface-container overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <Badge variant="secondary" className="mb-2">{post.category.name}</Badge>
            <h3 className="font-serif text-xl md:text-2xl text-white leading-tight group-hover:underline">
              {post.title}
            </h3>
            <div className="flex items-center gap-2 mt-3 text-sm text-white/80">
              <Avatar size="sm" className="ring-2 ring-white/20">
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
              <span>{post.author.name}</span>
              <span>&middot;</span>
              <Clock className="size-3" />
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  if (variant === "editorial") {
    return (
      <Link to={`/blog/${post.slug}`} className="group cursor-pointer block">
        <article>
          <div className="aspect-video rounded-lg overflow-hidden mb-3 bg-gradient-to-br from-primary-100 to-primary-300">
            {post.coverImage && (
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            )}
          </div>
          <span className="inline-block bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs uppercase tracking-wider font-semibold">
            {post.category.name}
          </span>
          <h3 className="font-serif text-xl mt-2 text-foreground group-hover:text-primary transition-colors leading-snug">
            {post.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
            {post.excerpt}
          </p>
        </article>
      </Link>
    );
  }

  return (
    <Link to={`/blog/${post.slug}`} className="group block">
      <article className="rounded-xl bg-surface-container/50 border border-outline p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
          <Badge variant="outline">{post.category.name}</Badge>
          <span>{post.readTime} min read</span>
        </div>
        <h3 className="font-serif text-lg font-medium text-foreground leading-snug group-hover:underline mb-2">
          {post.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Avatar size="sm">
              <AvatarFallback className="text-xs">{initials}</AvatarFallback>
            </Avatar>
            <span>{post.author.name}</span>
          </div>
          <ArrowRight className="size-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </article>
    </Link>
  );
}

export function BlogCardSkeleton({ variant = "default" }: { variant?: "default" | "featured" | "editorial" }) {
  if (variant === "featured") {
    return (
      <div className="h-80 rounded-xl bg-surface-container animate-pulse" />
    );
  }

  if (variant === "editorial") {
    return (
      <div className="animate-pulse space-y-3">
        <div className="aspect-video rounded-lg bg-muted" />
        <div className="h-5 w-20 rounded-full bg-muted" />
        <div className="h-6 w-3/4 bg-muted rounded" />
        <div className="h-4 w-full bg-muted rounded" />
        <div className="h-4 w-2/3 bg-muted rounded" />
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-outline p-5 animate-pulse">
      <div className="flex gap-2 mb-3">
        <div className="h-5 w-16 rounded-full bg-muted" />
        <div className="h-5 w-20 rounded-full bg-muted" />
      </div>
      <div className="h-5 w-3/4 bg-muted rounded mb-2" />
      <div className="h-5 w-1/2 bg-muted rounded mb-4" />
      <div className="h-4 w-full bg-muted rounded mb-1" />
      <div className="h-4 w-2/3 bg-muted rounded mb-4" />
      <div className="flex items-center gap-2">
        <div className="size-6 rounded-full bg-muted" />
        <div className="h-4 w-24 bg-muted rounded" />
      </div>
    </div>
  );
}
