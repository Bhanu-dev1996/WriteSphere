import { Helmet } from "react-helmet-async";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, ArrowRight } from "lucide-react";

const results = [
  {
    title: "The Art of Thoughtful Writing",
    excerpt: "How to cut through the noise and craft content that truly resonates...",
    author: "Elena Voss",
    tags: ["Writing", "Craft"],
  },
  {
    title: "Building Products That Matter",
    excerpt: "Lessons from a decade of product development across startups...",
    author: "Marcus Chen",
    tags: ["Technology", "Product"],
  },
  {
    title: "Understanding Complex Systems",
    excerpt: "Why the best engineers and thinkers rely on first-principles...",
    author: "Dr. Sarah Kim",
    tags: ["Science", "Thinking"],
  },
];

export function SearchResultsPage() {
  return (
    <>
      <Helmet>
        <title>Search — WriteSphere</title>
      </Helmet>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input className="pl-9 h-10" placeholder="Search articles, authors, topics..." />
        </div>

        <p className="text-sm text-muted-foreground mb-6">
          Showing 3 results for &quot;writing&quot;
        </p>

        <div className="space-y-4">
          {results.map((result) => (
            <Card key={result.title}>
              <CardContent className="py-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                  <span>{result.author}</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-lg text-foreground">
                      {result.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {result.excerpt}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      {result.tags.map((tag) => (
                        <Badge key={tag} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="shrink-0">
                    <ArrowRight className="size-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
