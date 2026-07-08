import { Helmet } from "react-helmet-async";

export function DraftsPage() {
  return (
    <>
      <Helmet>
        <title>Drafts — WriteSphere</title>
      </Helmet>
      <h2 className="font-serif text-2xl text-foreground mb-6">Drafts</h2>
      <p className="text-muted-foreground">Your drafts — coming soon</p>
    </>
  );
}
