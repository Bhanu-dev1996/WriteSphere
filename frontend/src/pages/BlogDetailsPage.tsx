import { Helmet } from "react-helmet-async";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Bookmark, Share2 } from "lucide-react";

export function BlogDetailsPage() {
  return (
    <>
      <Helmet>
        <title>Blog Post — WriteSphere</title>
      </Helmet>

      <article className="max-w-3xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Badge variant="secondary" className="mb-4">Technology</Badge>
          <h1 className="font-serif text-3xl md:text-4xl text-foreground leading-tight mb-4">
            The Art of Thoughtful Writing in a Noisy World
          </h1>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Avatar size="sm">
              <AvatarFallback>EV</AvatarFallback>
            </Avatar>
            <span className="font-medium text-foreground">Elena Voss</span>
            <span>&middot;</span>
            <span>8 min read</span>
            <span>&middot;</span>
            <span>3 days ago</span>
          </div>
        </div>

        <div className="prose prose-sm max-w-none text-foreground mb-8">
          <p className="text-lg leading-relaxed text-muted-foreground">
            In an age of constant information overload, the ability to write clearly and
            thoughtfully has never been more valuable. Here's how to craft content that
            stands out and truly connects with your readers.
          </p>
          <p className="mt-4 leading-relaxed">
            Writing is not just about putting words on a page. It's about creating a
            bridge between your ideas and your reader's understanding. The best writing
            feels effortless to read, but it's anything but effortless to produce.
          </p>
        </div>

        <div className="flex items-center gap-2 pb-8 border-b border-border">
          <Button variant="ghost" size="sm">
            <Heart className="size-4 mr-1" />
            42
          </Button>
          <Button variant="ghost" size="sm">
            <Bookmark className="size-4 mr-1" />
            Save
          </Button>
          <Button variant="ghost" size="sm">
            <Share2 className="size-4 mr-1" />
            Share
          </Button>
        </div>

        <div className="mt-8">
          <h3 className="font-serif text-lg text-foreground mb-4">Discussion (0)</h3>
          <Card>
            <CardContent className="py-8 text-center text-sm text-muted-foreground">
              No comments yet. Be the first to share your thoughts.
            </CardContent>
          </Card>
        </div>
      </article>
    </>
  );
}
