"use client";

const Arrow = ({
  variant = "right",
  vector,
  showArrow = true,
  arrowHeight = "2.625rem", // 기본 크기 보장
  arrowWidth = "2.625rem",  // 기본 크기 보장
  className = "",
}) => {
  // 방향 회전 처리 (lift면 180도 돌리기)
  const variantKey = variant === "lift" ? "rotate-180" : ""; 

  // 아래 방향 화살표일 때 위에서 준 variant="down"을 대응하기 위한 회전식 (필요시)
  const directionClass = variant === "down" ? "rotate-90" : variantKey;

  if (!showArrow) return null;

  return (
    <div
      className={`flex items-center justify-center overflow-hidden ${directionClass} ${className}`}
      style={{ 
        height: arrowHeight, 
        width: arrowWidth,
        minWidth: arrowWidth, // 부모 컨테이너에 의해 찌그러지는 것 방지
        minHeight: arrowHeight 
      }}
    >
      <img
        className="w-full h-full object-contain" // 이미지가 구겨지지 않고 꽉 차게 나옴
        alt="화살표 아이콘"
        // 1. 넘겨받은 vector 경로가 있으면 쓰고, 없으면 무조건 public/images/arrow.svg를 바라봅니다.
        src={vector || "/images/arrow.svg"} 
        // 혹시 public 폴더 바로 밑에 Vector.svg로 넣으셨다면 아래 주석을 풀고 위를 지우세요!
        // src={vector || "/Vector.svg"} 
      />
    </div>
  );
};

export default Arrow;