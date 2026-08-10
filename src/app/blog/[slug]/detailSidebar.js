"use client";

import { useRouter } from "next/navigation";
import Sidebar from "../sidebar";

export default function DetailSidebar({ sidebarData }) {
  const router = useRouter();

  return (
    <Sidebar
      sidebarData={sidebarData}
      selectedCategory={null}
      selectedTag={null}
      onSelect={() => router.push("/blog")}
    />
  );
}