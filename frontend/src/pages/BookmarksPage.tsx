import { Helmet } from "react-helmet-async";

export function BookmarksPage() {
  return (
    <>
      <Helmet>
        <title>Bookmarks — WriteSphere</title>
      </Helmet>
      <h2 className="font-serif text-2xl text-foreground mb-6">Bookmarks</h2>
      <p className="text-muted-foreground">Your bookmarks — coming soon</p>
    </>
  );
}
