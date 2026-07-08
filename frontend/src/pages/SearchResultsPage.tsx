import { Helmet } from "react-helmet-async";

export function SearchResultsPage() {
  return (
    <>
      <Helmet>
        <title>Search — WriteSphere</title>
      </Helmet>
      <div className="max-w-5xl mx-auto px-6 py-12 text-center text-muted-foreground">
        Search results — coming soon
      </div>
    </>
  );
}
