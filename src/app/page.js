import PortfolioMain from "./portfolioMain.js"; // P를 대문자로 변경

export default function Home() {
  return (
    <main>
      {/* 컴포넌트 태그의 첫 글자도 대문자로 수정 */}
      <PortfolioMain />
    </main>
  );
}