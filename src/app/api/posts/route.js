

// src/app/api/posts/route.js 예시 (App Router 기준)
import { NextResponse } from "next/server";
import { getPaginatedPosts } from "@/lib/posts";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 6;
    const category = searchParams.get("category");
    const tag = searchParams.get("tag");
    const search = searchParams.get("search");

    const data = getPaginatedPosts({ page, limit, category, tag, search });

    // ⭕ 반드시 NextResponse.json() 형식으로 리턴해야 합니다!
    return NextResponse.json({
      posts: data.posts || [],
      hasMore: data.hasMore || false,
    });
  } catch (error) {
    console.error("API Error:", error);
    // ⭕ 에러 발생 시에도 빈 응답 대신 JSON을 응답합니다.
    return NextResponse.json(
      { posts: [], hasMore: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}