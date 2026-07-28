import { getPaginatedPosts, getSidebarData } from "@/lib/posts";
import BlogPageClient from "./blogPageClient";
import Header from "../header";

export default function BlogPage() {
  const { posts, hasMore } = getPaginatedPosts({ page: 1, limit: 6 });
  const sidebarData = getSidebarData();

  return (
    <>
      <Header />
      <BlogPageClient
        initialPosts={posts}
        initialHasMore={hasMore}
        sidebarData={sidebarData}
      />
    </>
  );
}