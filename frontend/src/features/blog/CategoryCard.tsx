import { Link } from "react-router-dom";
import type { Category } from "@/types";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      to={`/search?category=${category.slug}`}
      className="group flex items-center justify-between rounded-xl border border-outline bg-surface p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
    >
      <div>
        <h3 className="font-serif text-base text-foreground group-hover:underline">
          {category.name}
        </h3>
        <p className="text-xs text-muted-foreground mt-0.5">
          {category.postCount} posts
        </p>
      </div>
      <ArrowRight className="size-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
    </Link>
  );
}

export function CategoryCardSkeleton() {
  return (
    <div className="rounded-xl border border-outline p-4 animate-pulse">
      <div className="h-5 w-28 bg-muted rounded mb-1" />
      <div className="h-4 w-16 bg-muted rounded" />
    </div>
  );
}
