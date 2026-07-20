import { Link } from "react-router-dom";
import type { Category } from "@/types";
import type { ReactNode } from "react";
import { Cpu, PenLine, FlaskConical, Palette, Briefcase, Heart } from "lucide-react";

const iconMap: Record<string, ReactNode> = {
  Technology: <Cpu className="size-8" />,
  Writing: <PenLine className="size-8" />,
  Science: <FlaskConical className="size-8" />,
  Culture: <Palette className="size-8" />,
  Business: <Briefcase className="size-8" />,
  Lifestyle: <Heart className="size-8" />,
};

interface PopularCategoriesProps {
  categories: Category[] | undefined;
  isLoading: boolean;
}

export function PopularCategories({ categories, isLoading }: PopularCategoriesProps) {
  if (isLoading) {
    return (
      <div className="mt-10">
        <h2 className="font-serif text-2xl text-foreground mb-6">Explore Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center justify-center p-6 rounded-xl border border-outline animate-pulse">
              <div className="size-8 bg-muted rounded mb-2" />
              <div className="h-4 w-20 bg-muted rounded" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!categories || categories.length === 0) return null;

  return (
    <div className="mt-10">
      <h2 className="font-serif text-2xl text-foreground mb-6">Explore Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.slice(0, 4).map((cat) => (
          <Link
            key={cat.id}
            to={`/search?category=${cat.slug}`}
            className="flex flex-col items-center justify-center p-6 border border-outline rounded-xl hover:border-primary transition-all group"
          >
            <span className="text-primary mb-2 group-hover:scale-110 transition-transform">
              {iconMap[cat.name] ?? <PenLine className="size-8" />}
            </span>
            <span className="text-xs uppercase tracking-wider font-semibold text-foreground">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
