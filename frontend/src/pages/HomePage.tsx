import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>WriteSphere — Editorial Platform</title>
      </Helmet>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
            The Curator's Choice
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 leading-tight">
            Where Ideas Find Their Voice
          </h1>
          <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
            A sophisticated editorial platform for thoughtful writing and meaningful discussion.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              to="/register"
              className="bg-primary text-white px-6 py-3 text-sm font-medium rounded hover:bg-primary-600 transition-colors"
            >
              Start Writing
            </Link>
            <Link
              to="/search"
              className="border border-outline text-foreground px-6 py-3 text-sm font-medium rounded hover:bg-surface-container transition-colors"
            >
              Explore
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-2xl text-foreground">Featured Stories</h2>
          <Link to="/search" className="text-sm text-primary hover:underline">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="col-span-1 md:col-span-2 lg:col-span-2 h-80 bg-surface-container rounded flex items-center justify-center text-muted-foreground">
            Featured story placeholder
          </div>
          <div className="h-80 bg-surface-container rounded flex items-center justify-center text-muted-foreground">
            Featured story placeholder
          </div>
        </div>
      </section>
    </>
  );
}
