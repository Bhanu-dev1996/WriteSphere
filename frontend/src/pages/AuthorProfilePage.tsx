import { Helmet } from "react-helmet-async";

export function AuthorProfilePage() {
  return (
    <>
      <Helmet>
        <title>Author — WriteSphere</title>
      </Helmet>
      <div className="max-w-4xl mx-auto px-6 py-12 text-center text-muted-foreground">
        Author profile — coming soon
      </div>
    </>
  );
}
