import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bookmark, BookmarkX } from "lucide-react";

const bookmarks = [
  { title: "The Art of Thoughtful Writing", author: "Elena Voss", saved: "3 days ago" },
  { title: "Building Products That Matter", author: "Marcus Chen", saved: "1 week ago" },
];

export function BookmarksPage() {
  return (
    <>
      <Helmet>
        <title>Bookmarks — WriteSphere</title>
      </Helmet>

      <h2 className="font-serif text-2xl text-foreground mb-6">Bookmarks</h2>

      {bookmarks.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center py-12 text-muted-foreground">
            <Bookmark className="size-8 mb-2" />
            <p className="text-sm">No bookmarks yet</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          {bookmarks.map((bookmark) => (
            <Card key={bookmark.title}>
              <CardContent className="flex items-center justify-between py-4">
                <div>
                  <h3 className="font-serif text-base text-foreground">{bookmark.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {bookmark.author} &middot; Saved {bookmark.saved}
                  </p>
                </div>
                <Button variant="ghost" size="icon">
                  <BookmarkX className="size-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}
