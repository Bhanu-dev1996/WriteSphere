import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  viewAllLink?: string;
}

export function SectionHeader({ title, viewAllLink }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      <h2 className="font-serif text-2xl text-foreground">{title}</h2>
      {viewAllLink && (
        <Link
          to={viewAllLink}
          className="flex items-center gap-1 text-sm text-primary hover:underline"
        >
          View all <ArrowRight className="size-3" />
        </Link>
      )}
    </div>
  );
}
