import Link from "next/link";
import Chip from "../chip";

// 참고: 이미 src/app/blogCard.js에 동일한 역할의 컴포넌트가 있다면
// 아래 마크업/클래스를 참고해서 기존 파일에 병합해도 됩니다.
export default function BlogCard({ post }) {
  const visibleTags = post.tags.slice(0, 2);
  const extraCount = post.tags.length - visibleTags.length;

  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <div className="w-full aspect-[4/3] rounded-xl bg-gray-200 overflow-hidden">
        {/* 임시 이미지 링크 - 추후 실제 썸네일 업로드 기능 연결 예정 */}
        <img
          src={post.thumbnail || "https://placehold.co/600x450/e5e7eb/e5e7eb"}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <h3 className="mt-4 text-base font-bold text-gray-900 group-hover:text-blue-500 transition-colors line-clamp-1">
        {post.title}
      </h3>

      <p className="mt-2 text-sm text-gray-500 line-clamp-2 leading-relaxed">
        {post.description}
      </p>

      <div className="mt-3 flex items-center gap-2 flex-wrap">
        {visibleTags.map((tag) => (
          <Chip key={tag} label={tag} />
        ))}
        {extraCount > 0 && <span className="text-xs text-gray-400">+{extraCount}</span>}
      </div>
    </Link>
  );
}