/** @type {import('tailwindcss').Config} */
module.exports = {
  // src 폴더 내부의 모든 js, ts, jsx, txs 파일들을 테일윈드가 추적할 수 있도록 경로를 수정했습니다.
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-gray-600": "#868e96",
        "color-primary-400": "#70a5eb",
        "color-gray-500": "#adb5bd",
        "color-gray-100": "#f1f3f5",
        "color-gray-400": "#ced4da",
        "color-gray-700": "#495057",
        "color-gray-50": "#f8f9fa",
        "color-opacity-black-15": "rgba(0, 0, 0, 0.15)",
        "color-gray-300": "#dee2e6",
        "color-gray-0": "#fff",
        "color-primary-300": "#6ebae5",
        "color-primary-4001": "#49a2d8",
        "color-gray-200": "#e9ecef",
      },
      spacing: {
        "space-36": "36px",
        "space-12": "12px",
        "space-24": "24px",
        "space-8": "8px",
        "space-16": "16px",
        "space-48": "48px",
        "space-4": "4px",
        "space-6": "6px",
        "space-32": "32px",
        "space-20": "20px",
      },
      borderRadius: {
        "radius-md": "12px",
        "radius-full": "999999px",
      },
    },
    fontSize: {
      "typo-heading-h4": "1rem",
      "typo-display-medium": "3rem",
      "typo-heading-h2": "1.5rem",
      "typo-heading-h3": "1.25rem",
      "typo-display-large": "4rem",
      "typo-body-large": "1.125rem",
      "typo-body-medium": "1rem",
      "typo-body-small": "0.875rem",
      "typo-display-small": "2.25rem",
    },
    screens: {},
  },
  corePlugins: {
    preflight: false,
  },
};