"use client";
import { useMemo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

const getArrow1Style = (styleKey) => {
  switch (styleKey) {
    case "down":
      return "[&]:[border:unset] [&]:p-[unset] [&]:bg-[unset]";
    case "right":
      return "[&]:[border:unset] [&]:p-[unset] [&]:bg-[unset] [&]:rounded-[unset]";
  }
};
const getVectorIconStyle = (styleKey) => {
  switch (styleKey) {
    case "down":
      return "[&]:h-1/4 [&]:top-[35.95%] [&]:right-[27.62%] [&]:bottom-[39.05%] [&]:left-[27.86%]";
    case "right":
      return "[&]:h-[44.58%] [&]:top-[27.92%] [&]:right-[38.75%] [&]:bottom-[27.5%] [&]:left-[36.25%]";
  }
};

const Arrow = ({
  className = "",
  variant = "lift",
  vector,
  showArrow,
  arrowHeight,
  arrowWidth,
}) => {
  const variantKey = `${variant}`;

  const arrowStyle = useMemo(() => {
    return {
      height: arrowHeight,
      width: arrowWidth,
    };
  }, [arrowHeight, arrowWidth]);

  return (
    !!showArrow && (
      <button
        className={`cursor-pointer [border:none] p-0 bg-[transparent] h-[2.625rem] w-[2.625rem] relative rounded-radius-full overflow-hidden shrink-0 ${getArrow1Style(
          variantKey
        )} ${className}`}
        style={arrowStyle}
      >
        <Image
          className={`absolute h-[44.52%] w-full top-[27.86%] right-[38.57%] bottom-[27.62%] left-[36.43%] max-w-full overflow-hidden max-h-full ${getVectorIconStyle(
            variantKey
          )}`}
          width={10.5}
          height={18.7}
          sizes="100vw"
          alt=""
          src={vector}
        />
      </button>
    )
  );
};

Arrow.propTypes = {
  className: PropTypes.string,
  vector: PropTypes.string.isRequired,
  showArrow: PropTypes.bool,

  /** Variant props */
  variant: PropTypes.string,

  /** Style props */
  arrowHeight: PropTypes.string,
  arrowWidth: PropTypes.string,
};

export default Arrow;