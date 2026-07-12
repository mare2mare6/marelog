"use client";

import Image from "next/image";
import PropTypes from "prop-types";

const Arrow = ({
  variant = "right",
  vector = "/Vector1.svg",
  showArrow = true,
  arrowHeight = "1.5rem",
  arrowWidth = "1.5rem",
  className = "",
}) => {
  if (!showArrow) return null;

  // 회전 각도 계산
  const getRotationClass = () => {
    switch (variant) {
      case "left":
        return "rotate-180";
      case "lift": // 위를 바라보는 경우
        return "-rotate-90";
      case "down": // 아래를 바라보는 경우
        return "rotate-90";
      case "right":
      default:
        return "rotate-0";
    }
  };

  return (
    /* [수정 완료] 하이드레이션 에러 해결을 위해 <button>을 <div>로 변경 */
    <div
      className={`inline-flex items-center justify-center cursor-pointer transition-transform hover:scale-105 ${getRotationClass()} ${className}`}
      style={{
        width: arrowWidth,
        height: arrowHeight,
      }}
    >
      <Image
        className="w-full h-full object-contain"
        loading="lazy"
        width={24}
        height={24}
        src={vector}
        alt="화살표 아이콘"
      />
    </div>
  );
};

Arrow.propTypes = {
  variant: PropTypes.oneOf(["left", "right", "lift", "down"]),
  vector: PropTypes.string,
  showArrow: PropTypes.bool,
  arrowHeight: PropTypes.string,
  arrowWidth: PropTypes.string,
  className: PropTypes.string,
};

export default Arrow;