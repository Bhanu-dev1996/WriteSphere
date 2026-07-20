import { Helmet } from "react-helmet-async";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function AuthorProfilePage() {
  return (
    <>
      <Helmet>
        <title>Author — WriteSphere</title>
      </Helmet>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <Card className="mb-8">
          <CardContent className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pt-6">
            <Avatar size="lg">
              <AvatarFallback>EV</AvatarFallback>
            </Avatar>
            <div className="text-center sm:text-left">
              <h1 className="font-serif text-2xl text-foreground">Elena Voss</h1>
              <p className="text-sm text-muted-foreground mt-1">@elenavoss</p>
              <p className="text-sm text-muted-foreground mt-3 max-w-md">
                Writer, thinker, and software engineer. Exploring the intersection of
                technology, philosophy, and human connection.
              </p>
              <div className="flex items-center gap-4 mt-4 justify-center sm:justify-start">
                <span className="text-sm text-muted-foreground">
                  <strong className="text-foreground">128</strong> followers
                </span>
                <span className="text-sm text-muted-foreground">
                  <strong className="text-foreground">47</strong> posts
                </span>
              </div>
              <Button className="mt-4">Follow</Button>
            </div>
          </CardContent>
        </Card>

        <h2 className="font-serif text-xl text-foreground mb-4">Latest Posts</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardContent className="py-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                  <Badge variant="outline">Technology</Badge>
                  <span>8 min read</span>
                </div>
                <h3 className="font-serif text-lg text-foreground">
                  Post Title {i}
                </h3>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                  A brief excerpt of the blog post content goes here to give readers a preview...
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
