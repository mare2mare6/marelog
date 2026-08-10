"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Sidebar from "./sidebar";
import BlogGrid from "./blogGrid";
import BlogLayout from "./blogLayout";

const LIMIT = 6;

export default function BlogPageClient({ initialPosts, initialHasMore, sidebarData }) {
  const [posts, setPosts] = useState(initialPosts);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [filters, setFilters] = useState({ category: null, tag: null });
  const isFirstRender = useRef(true);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 300);
    return () => clearTimeout(timer);
  }, [search]);

  const fetchPosts = useCallback(async (pageNum, replace, currentFilters, currentSearch) => {
    setLoading(true);
    const params = new URLSearchParams({ page: String(pageNum), limit: String(LIMIT) });
    if (currentFilters.category) params.set("category", currentFilters.category);
    if (currentFilters.tag) params.set("tag", currentFilters.tag);
    if (currentSearch) params.set("search", currentSearch);

    try {
      const res = await fetch(`/api/posts?${params.toString()}`);
      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      const data = await res.json();
      setPosts((prev) => (replace ? data.posts : [...prev, ...data.posts]));
      setHasMore(data.hasMore);
      setPage(pageNum);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
      if (replace) setPosts([]);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    fetchPosts(1, true, filters, debouncedSearch);
  }, [filters, debouncedSearch, fetchPosts]);

  const handleSelect = (next) => setFilters(next);
  const handleLoadMore = () => {
    if (!loading && hasMore) fetchPosts(page + 1, false, filters, debouncedSearch);
  };

  return (
    <BlogLayout
      sidebar={
        <Sidebar
          sidebarData={sidebarData}
          selectedCategory={filters.category}
          selectedTag={filters.tag}
          onSelect={handleSelect}
        />
      }
    >
      <div className="flex justify-center mb-10">
        <div className="w-full max-w-xl flex items-center gap-2 border border-gray-200 rounded-full px-5 py-2.5 shadow-sm">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 text-gray-300">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path d="M20 20L16.5 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="검색어를 입력해주세요"
            className="flex-1 outline-none text-sm placeholder:text-gray-300"
          />
        </div>
      </div>

      <BlogGrid posts={posts} hasMore={hasMore} loading={loading} onLoadMore={handleLoadMore} />
    </BlogLayout>
  );
}