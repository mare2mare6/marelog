"use client";

import Chip from "./chip";
import PropTypes from "prop-types";

const BlogCard = ({
  className = "",
  chipVariant = "default",
  chipVariant1 = "default",
  chipProp,
  chipProp1,
  chipBorder,
  chipBorder1,
  chipHeight,
  chipHeight1,
}) => {
  return (
    <div
      className={`h-[21.375rem] w-[17.25rem] rounded-radius-md bg-color-gray-0 border-color-gray-200 border-solid border-[1px] box-border flex items-center p-[1.25rem] text-left text-[1.25rem] text-[#000] font-[Pretendard] ${className}`}
    >
      <div className="flex-1 flex flex-col items-start gap-[0.75rem]">
        {/* 블로그 썸네일 영역 */}
        <div className="self-stretch h-[11.063rem] relative rounded-lg bg-[#d8d8d8] overflow-hidden shrink-0" />
        
        {/* 타이틀 및 본문 본문 미리보기 */}
        <div className="self-stretch flex flex-col items-start gap-[0.312rem]">
          <h3 className="m-0 self-stretch relative text-[length:inherit] leading-[120%] font-bold font-[inherit]">
            블로그제목
          </h3>
          <div className="self-stretch relative text-[1rem] leading-[150%] text-color-gray-700 [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
            블로그 내용을 최대 2줄까지 미리보기를 보여줍니다. 직접지정방식도 좋겠네요.
          </div>
        </div>
        
        {/* 하단 해시태그 칩 영역 */}
        <div className="self-stretch flex items-center gap-[0.375rem] text-[0.875rem] text-color-gray-500">
          <Chip
            variant={chipVariant}
            prop={chipProp}
            chipBorder={chipBorder}
            chipHeight={chipHeight}
          />
          <Chip
            variant={chipVariant1}
            prop={chipProp1}
            chipBorder={chipBorder1}
            chipHeight={chipHeight1}
          />
          <div className="relative leading-[150%]">+2</div>
        </div>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  className: PropTypes.string,
  chipVariant: PropTypes.string,
  chipVariant1: PropTypes.string,
  chipProp: PropTypes.string,
  chipProp1: PropTypes.string,
  chipBorder: PropTypes.string,
  chipBorder1: PropTypes.string,
  chipHeight: PropTypes.string,
  chipHeight1: PropTypes.string,
};

export default BlogCard;