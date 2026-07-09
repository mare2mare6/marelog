import Image from "next/image";
import FrameComponent from "./frame-component";
import Arrow from "./arrow";
import PropTypes from "prop-types";

const MainContentArea = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch h-[45.188rem] flex flex-col items-start gap-[1.5rem] max-w-full shrink-0 mq1050:h-auto ${className}`}
    >
      <FrameComponent />
      <div className="self-stretch flex items-start py-[0rem] px-[2.25rem] box-border max-w-full">
        <div className="flex-1 flex items-start gap-[1.625rem] max-w-full">
          <Image
            className="h-[40rem] w-[10rem] relative object-cover"
            loading="lazy"
            width={160}
            height={640}
            sizes="100vw"
            alt=""
            src="/Group-28@2x.png"
          />
          <section className="flex-1 flex flex-col items-start pt-[3.625rem] pb-[0rem] pl-[0rem] pr-[1.562rem] box-border max-w-full text-left text-[3rem] text-color-primary-400 font-['BR_B'] mq750:pt-[2.375rem] mq750:box-border mq750:min-w-full">
            <div className="self-stretch flex flex-col items-end gap-[8.5rem] max-w-full mq450:gap-[2.125rem] mq1050:gap-[4.25rem]">
              <div className="flex items-start justify-end py-[0rem] px-[3rem] box-border max-w-full mq1050:pl-[1.5rem] mq1050:pr-[1.5rem] mq1050:box-border">
                <div className="self-stretch flex-1 flex flex-col items-center gap-[0.75rem] max-w-full">
                  <div className="flex items-center gap-[1rem] max-w-full mq1050:flex-wrap">
                    <Image
                      className="h-[2.938rem] w-[12.063rem] relative object-cover"
                      loading="lazy"
                      width={193}
                      height={47}
                      sizes="100vw"
                      alt=""
                      src="/Group-6@2x.png"
                    />
                    <h2 className="m-0 relative text-[length:inherit] leading-[120%] font-normal font-[inherit] inline-block max-w-full mq450:text-[1.813rem] mq450:leading-[2.188rem] mq750:text-[2.375rem] mq750:leading-[2.875rem]">
                      에 오신 것을 환영합니다!
                    </h2>
                  </div>
                  <h3 className="m-0 relative text-[1.5rem] leading-[120%] font-bold font-[Pretendard] text-color-gray-500 text-center mq450:text-[1.188rem] mq450:leading-[1.438rem]">{`marelog는 UXUI디자이너 최하은의 포트폴리오& 블로그입니다.`}</h3>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-end pt-[0rem] px-[0rem] pb-[0.312rem] box-border gap-[2rem] max-w-full mq450:gap-[1rem]">
                <div className="self-stretch flex items-start justify-between relative isolate gap-[1.25rem] mq750:flex-wrap mq750:gap-[1.25rem]">
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex items-center [transform:_rotate(180deg)] z-[0] shrink-0">
                    <Image
                      className="h-[1.688rem] w-[1.5rem] relative rounded-sm object-contain [transform:_rotate(-180deg)] z-[1]"
                      loading="lazy"
                      width={24}
                      height={27}
                      sizes="100vw"
                      alt=""
                      src="/Polygon-4.svg"
                    />
                    <div className="flex-1 rounded-radius-md bg-color-gray-100 overflow-hidden flex items-center justify-center py-[1rem] px-[1.5rem] z-[2] ml-[-0.25rem] relative">
                      <h3 className="m-0 relative text-[1.25rem] leading-[120%] font-bold font-[Pretendard] text-color-gray-600 text-left [transform:_rotate(180deg)]">
                        About Me 바로가기
                      </h3>
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex items-center z-[1] shrink-0">
                    <Image
                      className="h-[1.688rem] w-[1.5rem] relative rounded-sm object-contain z-[1]"
                      width={24}
                      height={27}
                      sizes="100vw"
                      alt=""
                      src="/Polygon-4.svg"
                    />
                    <div className="flex-1 rounded-radius-md bg-color-gray-100 overflow-hidden flex items-center justify-center py-[1rem] px-[1.5rem] z-[2] ml-[-0.25rem] relative">
                      <h3 className="m-0 relative text-[1.25rem] leading-[120%] font-bold font-[Pretendard] text-color-gray-600 text-left">
                        Project 바로가기
                      </h3>
                    </div>
                  </button>
                  <Image
                    className="h-[20.625rem] w-[20.625rem] absolute !!m-[0 important] right-[14.25rem] bottom-[-11.687rem] object-cover z-[2] shrink-0"
                    width={330}
                    height={330}
                    sizes="100vw"
                    alt=""
                    src="/all-1@2x.png"
                  />
                </div>
                <div className="w-[46.813rem] flex items-start justify-end py-[0rem] px-[1.5rem] box-border max-w-full">
                  <div className="flex-1 flex items-start justify-between gap-[1.25rem] max-w-full mq750:flex-wrap mq750:gap-[1.25rem]">
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex items-center [transform:_rotate(180deg)]">
                      <Image
                        className="h-[1.688rem] w-[1.5rem] relative rounded-sm object-contain [transform:_rotate(-180deg)] z-[1]"
                        width={24}
                        height={27}
                        sizes="100vw"
                        alt=""
                        src="/Polygon-4.svg"
                      />
                      <div className="flex-1 rounded-radius-md bg-color-gray-100 overflow-hidden flex items-center justify-center py-[1rem] px-[1.5rem] z-[2] ml-[-0.25rem] relative">
                        <h3 className="m-0 relative text-[1.25rem] leading-[120%] font-bold font-[Pretendard] text-color-gray-600 text-left [transform:_rotate(180deg)]">
                          Blog 바로가기
                        </h3>
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex items-center">
                      <Image
                        className="h-[1.688rem] w-[1.5rem] relative rounded-sm object-contain z-[1]"
                        width={24}
                        height={27}
                        sizes="100vw"
                        alt=""
                        src="/Polygon-4.svg"
                      />
                      <div className="flex-1 rounded-radius-md bg-color-gray-100 overflow-hidden flex items-center justify-center py-[1rem] px-[1.5rem] z-[2] ml-[-0.25rem] relative">
                        <b className="relative text-[1.25rem] leading-[120%] font-[Pretendard] text-color-gray-600 text-left">
                          Contact 바로가기
                        </b>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-[49.125rem] flex items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
                <Arrow
                  variant="down"
                  vector="/Vector.svg"
                  showArrow
                  arrowHeight="2.625rem"
                  arrowWidth="2.625rem"
                />
              </div>
            </div>
          </section>
          <Image
            className="h-[40rem] w-[10rem] relative object-contain"
            loading="lazy"
            width={160}
            height={640}
            sizes="100vw"
            alt=""
            src="/Group-29@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

MainContentArea.propTypes = {
  className: PropTypes.string,
};

export default MainContentArea;