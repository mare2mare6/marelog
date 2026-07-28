import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "src/content/posts");

/**
 * posts 폴더의 모든 .md/.mdx 파일을 읽어 frontmatter를 파싱해서 배열로 반환
 */
export function getAllPosts() {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const filePath = path.join(POSTS_DIR, filename);
    const source = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(source);

    // tags가 단일 문자열로 들어오거나 없을 경우 안전하게 배열 변환
    let formattedTags = [];
    if (Array.isArray(data.tags)) {
      formattedTags = data.tags;
    } else if (typeof data.tags === "string") {
      formattedTags = data.tags.split(",").map((t) => t.trim());
    }

    return {
      slug: data.slug || filename.replace(/\.mdx?$/, ""),
      title: data.title || "제목 없음",
      description: data.description || "",
      thumbnail: data.thumbnail || null,
      category: data.category || "기타",
      tags: formattedTags,
      date: data.date ? new Date(data.date).toISOString() : null,
    };
  });

  // 날짜 기준 내림차순 정렬 (날짜가 없거나 유효하지 않은 경우 안전하게 처리)
  return posts.sort((a, b) => {
    const timeA = a.date ? new Date(a.date).getTime() : 0;
    const timeB = b.date ? new Date(b.date).getTime() : 0;
    return timeB - timeA;
  });
}

/**
 * 사이드바용 데이터: 전체 태그 + 카테고리별 태그 목록
 */
export function getSidebarData() {
  const posts = getAllPosts();
  const categoryMap = new Map();
  const allTagsSet = new Set();

  posts.forEach((post) => {
    post.tags.forEach((tag) => allTagsSet.add(tag));

    if (!categoryMap.has(post.category)) {
      categoryMap.set(post.category, new Set());
    }
    post.tags.forEach((tag) => categoryMap.get(post.category).add(tag));
  });

  const categories = Array.from(categoryMap.entries()).map(([name, tagSet]) => ({
    name,
    tags: Array.from(tagSet),
  }));

  return {
    all: Array.from(allTagsSet),
    categories,
  };
}

/**
 * 페이지네이션 + 필터링 (무한스크롤용)
 */
export function getPaginatedPosts({
  page = 1,
  limit = 6,
  category = null,
  tag = null,
  search = "",
} = {}) { // = {} 기본값을 지정해서 인자 없이 호출 시 에러 방지
  let posts = getAllPosts();

  // 카테고리 필터링
  if (category) {
    posts = posts.filter((p) => p.category === category);
  }

  // 태그 필터링
  if (tag) {
    posts = posts.filter((p) => p.tags.includes(tag));
  }

  // 검색어 필터링
  if (search) {
    const q = search.toLowerCase();
    posts = posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }

  const start = (page - 1) * limit;
  const end = start + limit;

  return {
    posts: posts.slice(start, end),
    hasMore: end < posts.length,
    total: posts.length,
  };
}