"use client";

import { useEffect, useRef } from "react";
import BlogCard from "./blog_blogCard"; // ⚠️ blog_blogCard.js 내부의 export default 확인!

export default function BlogGrid({ posts, hasMore, loading, onLoadMore }) {
  const sentinelRef = useRef(null);
  const onLoadMoreRef = useRef(onLoadMore);
  onLoadMoreRef.current = onLoadMore;

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // loading이 아니고, 불러올 데이터가 더 있을 때만 트리거
        if (entries[0].isIntersecting && hasMore && !loading) {
          onLoadMoreRef.current();
        }
      },
      { rootMargin: "300px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasMore, loading]); // 의존성 배열에 추가하여 불필요한 관찰 방지

  return (
    <div className="flex-1 min-w-0">
      {posts.length === 0 && !loading ? (
        <p className="text-center text-gray-400 py-24">조건에 맞는 게시글이 없어요.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {posts.map((post) => (
            <BlogCard key={post.slug || post.id} post={post} />
          ))}
        </div>
      )}

      {/* 무한스크롤 트리거 */}
      <div ref={sentinelRef} className="h-10" />

      {loading && <p className="text-center text-gray-400 text-sm py-6">불러오는 중...</p>}
      {!hasMore && posts.length > 0 && !loading && (
        <p className="text-center text-gray-300 text-sm py-6">모든 글을 확인했어요</p>
      )}
    </div>
  );
}