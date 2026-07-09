"use client";

import Image from "next/image";

const Arrow = ({
  variant = "right",
  vector,
  showArrow,
  arrowHeight,
  arrowWidth,
  className = "",
}) => {
  // 컴포넌트 내부의 변수나 스타일 매핑 로직이 있다면 그대로 유지됩니다.
  const variantKey = variant === "lift" ? "rotate-180" : ""; 

  return (
    !!showArrow && (
      /* ⚠️ 에러 해결: 부모 컴포넌트(IconActionPlas)의 <button>과 중첩되지 않도록 <div>로 변경 */
      <div
        className={`cursor-pointer [border:none] p-0 bg-[transparent] h-[2.625rem] w-[2.625rem] relative rounded-radius-full overflow-hidden flex items-center justify-center ${variantKey} ${className}`}
        style={{ height: arrowHeight, width: arrowWidth }}
      >
        <Image
          className="h-[42.86%] w-[23.81%] relative max-w-full overflow-hidden max-h-full"
          width={10}
          height={18}
          alt=""
          src={vector || "/Vector1.svg"}
        />
      </div>
    )
  );
};

export default Arrow;