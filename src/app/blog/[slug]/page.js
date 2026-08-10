import { notFound } from "next/navigation";
import { getPostBySlug, getAdjacentPosts, getSidebarData } from "@/lib/posts";
import Header from "../../header";
import BlogLayout from "../blogLayout";
import DetailSidebar from "./detailSidebar";
import PostContent from "./postContent";
import PostNavigation from "./postNavigation";
import ShareButton from "./shareButton";

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  const { prev, next } = getAdjacentPosts(slug);
  const sidebarData = getSidebarData();

  return (
    <>
      <Header />
      <BlogLayout sidebar={<DetailSidebar sidebarData={sidebarData} />}>
        <article>
          <div className="flex items-start justify-between gap-4">
            <h1 className="text-2xl font-bold text-gray-900">{post.title}</h1>
            <span className="text-sm text-gray-400 whitespace-nowrap pt-1">{post.date}</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 mt-4">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-500">
                # {tag}
              </span>
            ))}
            <ShareButton className="ml-auto" />
          </div>

          <hr className="my-6 border-gray-100" />

          <PostContent html={post.contentHtml} />
        </article>

        <PostNavigation prev={prev} next={next} />
      </BlogLayout>
    </>
  );
}