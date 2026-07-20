import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Clock } from "lucide-react";

const history = [
  { title: "The Art of Thoughtful Writing", readAt: "2 hours ago" },
  { title: "Building Products That Matter", readAt: "Yesterday" },
  { title: "Understanding Complex Systems", readAt: "3 days ago" },
];

export function ReadingHistoryPage() {
  return (
    <>
      <Helmet>
        <title>Reading History — WriteSphere</title>
      </Helmet>

      <h2 className="font-serif text-2xl text-foreground mb-6">Reading History</h2>

      {history.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center py-12 text-muted-foreground">
            <BookOpen className="size-8 mb-2" />
            <p className="text-sm">No reading history yet</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          {history.map((item) => (
            <Card key={item.title}>
              <CardContent className="flex items-center justify-between py-4">
                <div>
                  <h3 className="font-serif text-base text-foreground">{item.title}</h3>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                    <Clock className="size-3" />
                    <span>Read {item.readAt}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}
