import Image from "next/image";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <header
      className={`w-[80rem] [backdrop-filter:blur(6px)] bg-[rgba(255,255,255,0.6)] flex items-center justify-between py-[0.75rem] px-[2.25rem] box-border gap-[1.25rem] ${className}`}
    >
      <Image
        className="w-[8.969rem] relative max-h-full object-contain"
        loading="lazy"
        width={143.5}
        height={30}
        sizes="100vw"
        alt=""
        src="/Group-4@2x.png"
      />
      <nav className="m-0 flex items-center text-left text-[1rem] text-color-gray-600 font-[Pretendard]">
        <div className="flex items-center justify-center py-[0.5rem] px-[1.5rem]">
          <b className="relative leading-[120%]">Resume</b>
        </div>
        <div className="flex items-center justify-center py-[0.5rem] px-[1.5rem]">
          <b className="relative leading-[120%]">Projects</b>
        </div>
        <div className="flex items-center justify-center py-[0.5rem] px-[1.5rem]">
          <b className="relative leading-[120%]">Blog</b>
        </div>
        <div className="flex items-center justify-center py-[0.5rem] px-[1.5rem]">
          <b className="relative leading-[120%]">Contact</b>
        </div>
      </nav>
      <Image
        className="cursor-pointer [border:none] p-0 bg-[transparent] h-[1.844rem] w-[1.844rem] relative object-cover"
        width={29.5}
        height={29.5}
        sizes="100vw"
        alt=""
        src="/Group-4@2x.png"
      />
    </header>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;