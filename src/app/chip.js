"use client";
import { useMemo } from "react";
import PropTypes from "prop-types";

const getText16Style = (styleKey) => {
  switch (styleKey) {
    case "small":
      return "[&]:text-[0.875rem]";
  }
};

const Chip = ({
  className = "",
  variant = "default",
  prop,
  chipBorder,
  chipHeight,
}) => {
  const variantKey = `${variant}`;

  const chipStyle = useMemo(() => {
    return {
      border: chipBorder,
      height: chipHeight,
    };
  }, [chipBorder, chipHeight]);

  return (
    <div
      className={`h-[2rem] rounded-radius-full bg-color-gray-50 flex flex-col items-start justify-center py-[0rem] px-[0.75rem] box-border text-left text-[1rem] text-[#000] font-[Pretendard] ${className}`}
      style={chipStyle}
    >
      <div className="self-stretch flex items-center gap-[0.25rem]">
        <div className="relative leading-[150%]">#</div>
        <div
          className={`relative leading-[150%] ${getText16Style(variantKey)}`}
        >
          {prop}
        </div>
      </div>
    </div>
  );
};

Chip.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,

  /** Variant props */
  variant: PropTypes.string,

  /** Style props */
  chipBorder: PropTypes.string,
  chipHeight: PropTypes.string,
};

export default Chip;