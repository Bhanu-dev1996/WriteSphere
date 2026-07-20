export interface Author {
  id: string;
  username: string;
  name: string;
  avatarUrl: string | null;
  bio: string | null;
  followersCount: number;
  postsCount: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  postCount: number;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string | null;
  readTime: number;
  publishedAt: string;
  author: Author;
  category: Category;
  tags: string[];
  likesCount: number;
  commentsCount: number;
  bookmarksCount: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  perPage: number;
  pages: number;
}
