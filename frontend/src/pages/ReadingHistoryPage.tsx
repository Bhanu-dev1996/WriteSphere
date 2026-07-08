import { Helmet } from "react-helmet-async";

export function ReadingHistoryPage() {
  return (
    <>
      <Helmet>
        <title>Reading History — WriteSphere</title>
      </Helmet>
      <h2 className="font-serif text-2xl text-foreground mb-6">Reading History</h2>
      <p className="text-muted-foreground">Your reading history — coming soon</p>
    </>
  );
}
