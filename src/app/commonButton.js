"use client";

import { useMemo } from "react";
import Image from "next/image";
import Arrow from "./arrow";
import PropTypes from "prop-types";

const getCommonButtonStyle = (styleKey) => {
  switch (styleKey) {
    case "outline-Default-medium":
      return "[&]:border-color-primary-300 [&]:border-solid [&]:border-[1px] [&]:bg-color-gray-0";
    case "primary-Default-small":
      return "[&]:bg-color-primary-400 [&]:rounded-[999999px]";
    case "outline-2-Default-small":
      return "[&]:border-color-gray-400 [&]:border-solid [&]:border-[1px] [&]:bg-color-gray-0 [&]:rounded-[999999px]";
    default:
      return "";
  }
};

const getButtonIconStyle = (styleKey) => {
  switch (styleKey) {
    case "primary-Default-small":
    case "outline-2-Default-small":
      return "[&]:shrink-0";
    default:
      return "";
  }
};

const getTextStyle = (styleKey) => {
  switch (styleKey) {
    case "outline-Default-medium":
      return "[&]:text-color-primary-400";
    case "primary-Default-small":
      return "[&]:shrink-0";
    case "outline-2-Default-small":
      return "[&]:text-color-gray-600 [&]:shrink-0";
    default:
      return "";
  }
};

const CommonButton = ({
  className = "",
  variant = "primary",
  variant2 = "Default",
  variant3 = "medium",
  prop,
  endIcon = false,
  startIcon = false,
  iconActionPlasHeight,
  iconActionPlasFlex,
  variant1 = "lift",
  showArrow,
  arrowHeight,
  arrowWidth,
}) => {
  const variantKey = [variant, variant2, variant3].join("-");

  const commonButtonStyle = useMemo(() => {
    return {
      height: iconActionPlasHeight,
      flex: iconActionPlasFlex,
    };
  }, [iconActionPlasHeight, iconActionPlasFlex]);

  return (
    <button
      className={`cursor-pointer [border:none] py-[0rem] px-[1.5rem] bg-color-primary-300 h-[3rem] flex-1 rounded-md flex items-center justify-center box-border gap-[0.5rem] ${getCommonButtonStyle(
        variantKey
      )} ${className}`}
      style={commonButtonStyle}
    >
      {!!startIcon && (
        <Image
          className={`h-[1.5rem] w-[1.5rem] relative ${getButtonIconStyle(
            variantKey
          )}`}
          width={24}
          height={24}
          sizes="100vw"
          alt=""
          src="/icon-action-plas.svg"
        />
      )}
      <div
        className={`relative text-[1rem] leading-[150%] font-semibold font-[Pretendard] text-color-gray-0 text-left ${getTextStyle(
          variantKey
        )}`}
      >
        {prop}
      </div>
      
      {/* Arrow 내부가 div로 수정되었으므로 button 중첩 오류가 완벽하게 방지됩니다 */}
      <Arrow
        variant={variant1}
        vector="/Vector1.svg"
        showArrow={showArrow}
        arrowHeight={arrowHeight}
        arrowWidth={arrowWidth}
      />
    </button>
  );
};

CommonButton.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  endIcon: PropTypes.bool,
  startIcon: PropTypes.bool,
  variant1: PropTypes.any,
  showArrow: PropTypes.bool,
  arrowHeight: PropTypes.any,
  arrowWidth: PropTypes.any,
  variant: PropTypes.string,
  variant2: PropTypes.string,
  variant3: PropTypes.string,
  iconActionPlasHeight: PropTypes.string,
  iconActionPlasFlex: PropTypes.string,
};

export default CommonButton;