import { Helmet } from "react-helmet-async";

export function CreateBlogPage() {
  return (
    <>
      <Helmet>
        <title>Create Blog — WriteSphere</title>
      </Helmet>
      <h2 className="font-serif text-2xl text-foreground mb-6">Create Blog</h2>
      <p className="text-muted-foreground">Blog editor — coming soon</p>
    </>
  );
}
