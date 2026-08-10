"use client";

import { useState } from "react";

export default function ShareButton({ className = "" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      console.error("복사 실패:", e);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors ${className}`}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M10 13a5 5 0 0 0 7.07 0l2.83-2.83a5 5 0 0 0-7.07-7.07l-1.5 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 11a5 5 0 0 0-7.07 0L4.1 13.83a5 5 0 0 0 7.07 7.07l1.49-1.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
      {copied ? "복사됨!" : "링크 복사"}
    </button>
  );
}