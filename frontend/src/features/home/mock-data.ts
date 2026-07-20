import type { Author, Category, Post } from "@/types";

const now = new Date().toISOString();

export const mockAuthors: Author[] = [
  { id: "1", username: "elenavoss", name: "Elena Voss", avatarUrl: null, bio: "Writer & engineer exploring tech and philosophy.", followersCount: 128, postsCount: 47 },
  { id: "2", username: "marcuschen", name: "Marcus Chen", avatarUrl: null, bio: "Product leader. Startup advisor.", followersCount: 342, postsCount: 89 },
  { id: "3", username: "sarahkim", name: "Dr. Sarah Kim", avatarUrl: null, bio: "Physicist & science communicator.", followersCount: 561, postsCount: 124 },
  { id: "4", username: "jordanlee", name: "Jordan Lee", avatarUrl: null, bio: "Designing the future of digital products.", followersCount: 203, postsCount: 56 },
  { id: "5", username: "priyapatel", name: "Priya Patel", avatarUrl: null, bio: "Culture critic & essayist.", followersCount: 87, postsCount: 32 },
];

export const mockCategories: Category[] = [
  { id: "1", name: "Technology", slug: "technology", description: "Software, hardware, and the digital world", postCount: 234 },
  { id: "2", name: "Writing", slug: "writing", description: "Craft, style, and the writer's life", postCount: 156 },
  { id: "3", name: "Science", slug: "science", description: "Discoveries, research, and natural phenomena", postCount: 98 },
  { id: "4", name: "Culture", slug: "culture", description: "Society, arts, and human expression", postCount: 145 },
  { id: "5", name: "Business", slug: "business", description: "Markets, strategy, and entrepreneurship", postCount: 112 },
  { id: "6", name: "Lifestyle", slug: "lifestyle", description: "Health, travel, and everyday living", postCount: 78 },
];

export const mockPosts: Post[] = [
  {
    id: "1", title: "The Art of Thoughtful Writing in a Noisy World", slug: "thoughtful-writing",
    excerpt: "How to cut through the noise and craft content that truly resonates with your audience. In an age of constant information overload, the ability to write clearly has never been more valuable.",
    content: "", coverImage: null, readTime: 8, publishedAt: now,
    author: mockAuthors[0], category: mockCategories[1],
    tags: ["Writing", "Craft"], likesCount: 142, commentsCount: 23, bookmarksCount: 67,
  },
  {
    id: "2", title: "Building Products That Matter", slug: "products-that-matter",
    excerpt: "Lessons from a decade of product development across startups and enterprise. The best products solve real problems for real people.",
    content: "", coverImage: null, readTime: 12, publishedAt: now,
    author: mockAuthors[1], category: mockCategories[0],
    tags: ["Technology", "Product"], likesCount: 98, commentsCount: 15, bookmarksCount: 42,
  },
  {
    id: "3", title: "Understanding Complex Systems Through Simple Models", slug: "complex-systems",
    excerpt: "Why the best engineers and thinkers rely on first-principles reasoning to make sense of the world around us.",
    content: "", coverImage: null, readTime: 10, publishedAt: now,
    author: mockAuthors[2], category: mockCategories[2],
    tags: ["Science", "Thinking"], likesCount: 215, commentsCount: 31, bookmarksCount: 89,
  },
  {
    id: "4", title: "The Rise of Digital Gardens", slug: "digital-gardens",
    excerpt: "How a new generation of writers is reclaiming the web as a space for slow, thoughtful publishing outside the walled gardens of social media.",
    content: "", coverImage: null, readTime: 6, publishedAt: now,
    author: mockAuthors[3], category: mockCategories[3],
    tags: ["Culture", "Writing"], likesCount: 76, commentsCount: 12, bookmarksCount: 34,
  },
  {
    id: "5", title: "Why Great Leaders Read Poetry", slug: "leaders-read-poetry",
    excerpt: "The surprising connection between literary reading and effective leadership in the modern workplace.",
    content: "", coverImage: null, readTime: 7, publishedAt: now,
    author: mockAuthors[4], category: mockCategories[4],
    tags: ["Business", "Culture"], likesCount: 134, commentsCount: 28, bookmarksCount: 55,
  },
  {
    id: "6", title: "The Quiet Revolution in Sustainable Living", slug: "sustainable-living",
    excerpt: "Small changes that make a big impact — how individuals and communities are rethinking consumption.",
    content: "", coverImage: null, readTime: 9, publishedAt: now,
    author: mockAuthors[0], category: mockCategories[5],
    tags: ["Lifestyle", "Environment"], likesCount: 89, commentsCount: 19, bookmarksCount: 71,
  },
];

export const featuredPost: Post = mockPosts[0];
export const featuredPosts: Post[] = mockPosts.slice(0, 3);
export const latestPosts: Post[] = mockPosts;
export const trendingPosts: Post[] = [...mockPosts].sort((a, b) => b.likesCount - a.likesCount).slice(0, 5);
