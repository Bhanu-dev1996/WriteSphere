import { Link } from "react-router-dom";
import type { Post } from "@/types";
import { BlogCard, BlogCardSkeleton } from "@/features/blog/BlogCard";
import { FileText } from "lucide-react";

interface LatestBlogsProps {
  posts: Post[] | undefined;
  isLoading: boolean;
}

export function LatestBlogs({ posts, isLoading }: LatestBlogsProps) {
  return (
    <div>
      <div className="flex items-end justify-between mb-6">
        <h2 className="font-serif text-2xl text-foreground">Latest Blogs</h2>
        <Link
          to="/search"
          className="text-primary text-xs uppercase tracking-widest font-semibold border-b border-primary"
        >
          View All
        </Link>
      </div>

      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <BlogCardSkeleton key={i} variant="editorial" />
          ))}
        </div>
      )}

      {!isLoading && (!posts || posts.length === 0) && (
        <div className="flex flex-col items-center py-12 text-muted-foreground">
          <FileText className="size-8 mb-2" />
          <p className="text-sm">No posts yet</p>
        </div>
      )}

      {!isLoading && posts && posts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} variant="editorial" />
          ))}
        </div>
      )}
    </div>
  );
}
