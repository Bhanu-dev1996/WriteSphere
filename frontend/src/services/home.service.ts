import { useQuery } from "@tanstack/react-query";
import type { Author, Category, Post } from "@/types";
import { mockAuthors, mockCategories, featuredPosts, latestPosts, trendingPosts } from "@/features/home/mock-data";

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

export function useFeaturedPosts() {
  return useQuery({
    queryKey: ["posts", "featured"],
    queryFn: async () => { await delay(600); return featuredPosts as Post[]; },
    staleTime: 1000 * 60 * 5,
  });
}

export function useLatestPosts(page = 1) {
  return useQuery({
    queryKey: ["posts", "latest", page],
    queryFn: async () => { await delay(400); return { data: latestPosts as Post[], total: latestPosts.length, page, perPage: 6, pages: 1 }; },
    staleTime: 1000 * 60 * 2,
  });
}

export function useTrendingPosts() {
  return useQuery({
    queryKey: ["posts", "trending"],
    queryFn: async () => { await delay(500); return trendingPosts as Post[]; },
    staleTime: 1000 * 60 * 5,
  });
}

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => { await delay(300); return mockCategories as Category[]; },
    staleTime: 1000 * 60 * 10,
  });
}

export function useSuggestedAuthors() {
  return useQuery({
    queryKey: ["user", "suggested"],
    queryFn: async () => { await delay(400); return mockAuthors as Author[]; },
    staleTime: 1000 * 60 * 5,
  });
}
