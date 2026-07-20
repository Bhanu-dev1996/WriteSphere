import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Clock } from "lucide-react";

const drafts = [
  { title: "My Thoughts on Modern Design", updated: "2 days ago", status: "Draft" },
  { title: "A Deep Dive into React Patterns", updated: "1 week ago", status: "Draft" },
];

export function DraftsPage() {
  return (
    <>
      <Helmet>
        <title>Drafts — WriteSphere</title>
      </Helmet>

      <div className="flex items-center justify-between mb-6">
        <h2 className="font-serif text-2xl text-foreground">Drafts</h2>
        <Button>New Draft</Button>
      </div>

      {drafts.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center py-12 text-muted-foreground">
            <FileText className="size-8 mb-2" />
            <p className="text-sm">No drafts yet</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          {drafts.map((draft) => (
            <Card key={draft.title}>
              <CardContent className="flex items-center justify-between py-4">
                <div>
                  <h3 className="font-serif text-base text-foreground">{draft.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                    <Clock className="size-3" />
                    <span>Updated {draft.updated}</span>
                  </div>
                </div>
                <Badge variant="outline">{draft.status}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}
