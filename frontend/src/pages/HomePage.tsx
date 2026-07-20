import { Helmet } from "react-helmet-async";
import { useFeaturedPosts, useLatestPosts, useTrendingPosts, useCategories, useSuggestedAuthors } from "@/services/home.service";
import { HeroBanner } from "@/features/home/HeroBanner";
import { LatestBlogs } from "@/features/home/LatestBlogs";
import { PopularCategories } from "@/features/home/PopularCategories";
import { TrendingWidget } from "@/features/home/TrendingWidget";
import { TopAuthors } from "@/features/home/TopAuthors";
import { NewsletterCard } from "@/features/home/NewsletterCard";

export function HomePage() {
  const { data: featured, isLoading: featuredLoading } = useFeaturedPosts();
  const { data: latest, isLoading: latestLoading } = useLatestPosts();
  const { data: trending, isLoading: trendingLoading } = useTrendingPosts();
  const { data: categories, isLoading: categoriesLoading } = useCategories();
  const { data: authors, isLoading: authorsLoading } = useSuggestedAuthors();

  return (
    <>
      <Helmet>
        <title>WriteSphere — Editorial Platform</title>
        <meta name="description" content="A sophisticated editorial platform for thoughtful writing and meaningful discussion." />
        <meta property="og:title" content="WriteSphere — Editorial Platform" />
        <meta property="og:description" content="Where ideas find their voice." />
      </Helmet>

      <div className="min-h-screen">
        <HeroBanner post={featured?.[0]} isLoading={featuredLoading} />

        <div className="max-w-7xl mx-auto px-6">
          <hr className="border-outline/30" />
        </div>

        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8">
              <LatestBlogs posts={latest?.data} isLoading={latestLoading} />
              <PopularCategories categories={categories} isLoading={categoriesLoading} />
            </div>
            <aside className="lg:col-span-4 flex flex-col gap-8">
              <TrendingWidget posts={trending} isLoading={trendingLoading} />
              <TopAuthors authors={authors} isLoading={authorsLoading} />
              <NewsletterCard />
            </aside>
          </div>
        </section>
      </div>
    </>
  );
}
