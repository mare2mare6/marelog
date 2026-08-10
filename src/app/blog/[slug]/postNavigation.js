import Link from "next/link";

export default function PostNavigation({ prev, next }) {
  return (
    <div className="mt-16 grid grid-cols-2 gap-4 border-t border-gray-100 pt-8">
      <div>
        {prev ? (
          <Link
            href={`/blog/${prev.slug}`}
            className="group flex flex-col gap-1 p-4 rounded-lg border border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <span className="text-xs text-gray-400">← 이전 글</span>
            <span className="text-sm font-medium text-gray-800 group-hover:text-blue-500 line-clamp-1">
              {prev.title}
            </span>
          </Link>
        ) : (
          <div className="invisible p-4">
            <span className="text-xs">placeholder</span>
          </div>
        )}
      </div>

      <div>
        {next ? (
          <Link
            href={`/blog/${next.slug}`}
            className="group flex flex-col gap-1 items-end text-right p-4 rounded-lg border border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <span className="text-xs text-gray-400">다음 글 →</span>
            <span className="text-sm font-medium text-gray-800 group-hover:text-blue-500 line-clamp-1">
              {next.title}
            </span>
          </Link>
        ) : (
          <div className="invisible p-4">
            <span className="text-xs">placeholder</span>
          </div>
        )}
      </div>
    </div>
  );
}