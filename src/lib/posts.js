import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const POSTS_DIR = path.join(process.cwd(), "src/content/posts");

export function getAllPosts() {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const filePath = path.join(POSTS_DIR, filename);
    const source = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(source);

    return {
      slug: data.slug || filename.replace(/\.mdx?$/, ""),
      title: data.title || "제목 없음",
      description: data.description || "",
      thumbnail: data.thumbnail || null,
      category: data.category || "기타",
      tags: Array.isArray(data.tags) ? data.tags : [],
      date: data.date || null,
    };
  });

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

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

  return { all: Array.from(allTagsSet), categories };
}

export function getPaginatedPosts({ page = 1, limit = 6, category = null, tag = null, search = "" }) {
  let posts = getAllPosts();

  if (category) posts = posts.filter((p) => p.category === category);
  if (tag) posts = posts.filter((p) => p.tags.includes(tag));
  if (search) {
    const q = search.toLowerCase();
    posts = posts.filter(
      (p) => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
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

// 상세 페이지용: slug로 게시글 1개 + 마크다운 본문을 HTML로 변환해서 반환
export function getPostBySlug(slug) {
  if (!fs.existsSync(POSTS_DIR)) return null;

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));
  const filename = files.find((f) => {
    const filePath = path.join(POSTS_DIR, f);
    const { data } = matter(fs.readFileSync(filePath, "utf-8"));
    const fileSlug = data.slug || f.replace(/\.mdx?$/, "");
    return fileSlug === slug;
  });

  if (!filename) return null;

  const filePath = path.join(POSTS_DIR, filename);
  const source = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(source);

  return {
    slug: data.slug || filename.replace(/\.mdx?$/, ""),
    title: data.title || "제목 없음",
    description: data.description || "",
    thumbnail: data.thumbnail || null,
    category: data.category || "기타",
    tags: Array.isArray(data.tags) ? data.tags : [],
    date: data.date || null,
    contentHtml: marked.parse(content),
  };
}

// 목록 정렬 순서(날짜 내림차순) 기준 이전글/다음글
export function getAdjacentPosts(slug) {
  const posts = getAllPosts();
  const idx = posts.findIndex((p) => p.slug === slug);
  if (idx === -1) return { prev: null, next: null };

  return {
    prev: idx > 0 ? posts[idx - 1] : null,
    next: idx < posts.length - 1 ? posts[idx + 1] : null,
  };
}