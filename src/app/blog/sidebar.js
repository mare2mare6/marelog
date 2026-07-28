"use client";

import { useState } from "react";

function ChevronIcon({ open }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      className={`text-gray-400 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
    >
      <path
        d="M6 9L12 15L18 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Sidebar({
  sidebarData,
  selectedCategory,
  selectedTag,
  onSelect,
}) {
  // sidebarData 데이터가 비어있거나 undefined일 경우를 대비한 방어 코드
  const allTags = sidebarData?.all ?? [];
  const categories = sidebarData?.categories ?? [];

  const sections = [
    { name: "전체보기", tags: allTags },
    ...categories,
  ];

  const [openSections, setOpenSections] = useState({ "전체보기": true });

  const toggleSection = (name) => {
    setOpenSections((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <aside className="w-[240px] shrink-0 sticky top-20 self-start max-h-[calc(100vh-6rem)] overflow-y-auto pr-2 custom-scrollbar">
      <nav className="flex flex-col">
        {sections.map((section) => {
          const isOpen = !!openSections[section.name];
          const tags = section.tags ?? [];

          return (
            <div key={section.name} className="border-b border-gray-100">
              <button
                type="button"
                onClick={() => toggleSection(section.name)}
                className="w-full flex items-center justify-between py-3 text-sm font-semibold text-gray-800 hover:text-gray-900 transition-colors"
              >
                <span>{section.name}</span>
                <ChevronIcon open={isOpen} />
              </button>

              {isOpen && (
                <div className="flex flex-col gap-1 pb-3 pl-1">
                  {tags.length === 0 ? (
                    <span className="text-xs text-gray-300 py-1 pl-2">
                      아직 등록된 태그가 없어요
                    </span>
                  ) : (
                    tags.map((tag) => {
                      const isCategorySection = section.name !== "전체보기";
                      const active =
                        selectedTag === tag &&
                        (isCategorySection
                          ? selectedCategory === section.name
                          : true);

                      return (
                        <button
                          key={`${section.name}-${tag}`}
                          type="button"
                          onClick={() =>
                            onSelect({
                              category: isCategorySection ? section.name : null,
                              tag,
                            })
                          }
                          className={`text-left text-sm px-2.5 py-1.5 rounded-md transition-all ${
                            active
                              ? "bg-blue-50 text-blue-600 font-semibold"
                              : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
                          }`}
                        >
                          #{tag}
                        </button>
                      );
                    })
                  )}
                </div>
              )}
            </div>
          );
        })}

        {(selectedCategory || selectedTag) && (
          <button
            type="button"
            onClick={() => onSelect({ category: null, tag: null })}
            className="mt-4 text-xs text-gray-400 hover:text-gray-600 text-left transition-colors flex items-center gap-1"
          >
            <span>✕</span> 필터 초기화
          </button>
        )}
      </nav>
    </aside>
  );
}