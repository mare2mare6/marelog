"use client";

import Image from "next/image";
import FrameComponent from "./frame-component";
import Arrow from "./arrow";
import PropTypes from "prop-types";

const MainContentArea = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start max-w-full shrink-0 pt-[4.5rem] ${className}`}
    >
      <FrameComponent />
      
      <div className="self-stretch flex items-start py-[0rem] px-[2.25rem] box-border max-w-full mt-[2rem]">
        <div className="flex-1 flex items-center justify-between gap-[1.625rem] max-w-full mq1225:flex-wrap justify-center">
          
          <Image
            className="h-[40rem] w-[10rem] object-cover mq1225:hidden"
            loading="lazy"
            width={160}
            height={640}
            sizes="100vw"
            alt=""
            src="/images/Group-28@2x.png"
          />
          
          <section className="flex-1 flex flex-col items-center box-border max-w-full text-center text-[3rem] text-color-primary-400 font-['BR_B']">
            
            <div className="flex flex-col items-center gap-[0.75rem] max-w-full mb-[3rem]">
              <div className="flex items-center justify-center gap-[1rem] max-w-full flex-wrap">
                <Image
                  className="h-[2.938rem] w-[12.063rem] object-cover"
                  loading="lazy"
                  width={193}
                  height={47}
                  sizes="100vw"
                  alt=""
                  src="/images/Group-6@2x.png"
                />
                <h2 className="m-0 relative text-[length:inherit] leading-[120%] font-normal font-[inherit] inline-block max-w-full mq450:text-[1.813rem] mq750:text-[2.375rem]">
                  에 오신 것을 환영합니다!
                </h2>
              </div>
              <h3 className="m-0 relative text-[1.5rem] leading-[120%] font-bold font-[Pretendard] text-color-gray-500 mq450:text-[1.188rem]">
                marelog는 UXUI디자이너 최하은의 포트폴리오 & 블로그입니다.
              </h3>
            </div>

            <div className="w-full max-w-[60rem] flex flex-col items-center gap-[1.5rem] relative px-[1rem]">
              
              <div className="w-[20.625rem] h-[20.625rem] flex items-center justify-center z-[1]">
                <Image
                  className="w-full h-full object-cover"
                  width={330}
                  height={330}
                  sizes="100vw"
                  alt="캐릭터"
                  src="/images/all-1@2x.png"
                />
              </div>

              {/* 윗줄 버튼 2개 (About Me, Project) - 기존 원본 유지 */}
              <div className="absolute top-[30%] left-0 right-0 flex justify-between pointer-events-none z-[2] px-[2rem] mq750:relative mq750:top-0 mq750:flex-col mq750:items-center mq750:gap-[1rem] mq750:pointer-events-auto">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex items-center [transform:_rotate(180deg)] pointer-events-auto hover:scale-105 transition-transform">
                  <Image
                    className="h-[1.688rem] w-[1.5rem] relative rounded-sm object-contain [transform:_rotate(-180deg)] z-[1]"
                    loading="lazy"
                    width={24}
                    height={27}
                    src="/images/Polygon-4.svg"
                    alt=""
                  />
                  <div className="rounded-radius-md bg-color-gray-100 overflow-hidden flex items-center justify-center py-[1rem] px-[1.5rem] z-[2] ml-[-0.25rem] relative">
                    <h3 className="m-0 relative text-[1.25rem] leading-[120%] font-bold font-[Pretendard] text-color-gray-600 [transform:_rotate(180deg)] whitespace-nowrap">
                      About Me 바로가기
                    </h3>
                  </div>
                </button>

                <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex items-center pointer-events-auto hover:scale-105 transition-transform">
                  <Image
                    className="h-[1.688rem] w-[1.5rem] relative rounded-sm object-contain z-[1]"
                    width={24}
                    height={27}
                    src="/images/Polygon-4.svg"
                    alt=""
                  />
                  <div className="rounded-radius-md bg-color-gray-100 overflow-hidden flex items-center justify-center py-[1rem] px-[1.5rem] z-[2] ml-[-0.25rem] relative">
                    <h3 className="m-0 relative text-[1.25rem] leading-[120%] font-bold font-[Pretendard] text-color-gray-600 whitespace-nowrap">
                      Project 바로가기
                    </h3>
                  </div>
                </button>
              </div>

              {/* 아랫줄 버튼 2개 (Blog, Contact) */}
              {/* 🛠️ 구조는 건드리지 않고, 각 button 태그에 -translate-y-[2.5rem]를 주어 본인만 쏙 위로 올렸습니다. */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-between pointer-events-none z-[2] px-[4rem] mq750:relative mq750:top-0 mq750:flex-col mq750:items-center mq750:gap-[1rem] mq750:pointer-events-auto">
                
                {/* Blog 버튼 개별 이동 */}
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex items-center [transform:_rotate(180deg)] pointer-events-auto hover:scale-105 -translate-y-[4rem] transition-transform">
                  <Image
                    className="h-[1.688rem] w-[1.5rem] relative rounded-sm object-contain [transform:_rotate(-180deg)] z-[1]"
                    width={24}
                    height={27}
                    src="/images/Polygon-4.svg"
                    alt=""
                  />
                  <div className="rounded-radius-md bg-color-gray-100 overflow-hidden flex items-center justify-center py-[1rem] px-[1.5rem] z-[2] ml-[-0.25rem] relative">
                    <h3 className="m-0 relative text-[1.25rem] leading-[120%] font-bold font-[Pretendard] text-color-gray-600 [transform:_rotate(180deg)] whitespace-nowrap">
                      Blog 바로가기
                    </h3>
                  </div>
                </button>

                {/* Contact 버튼 개별 이동 */}
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex items-center pointer-events-auto hover:scale-105 -translate-y-[4rem] transition-transform">
                  <Image
                    className="h-[1.688rem] w-[1.5rem] relative rounded-sm object-contain z-[1]"
                    width={24}
                    height={27}
                    src="/images/Polygon-4.svg"
                    alt=""
                  />
                  <div className="rounded-radius-md bg-color-gray-100 overflow-hidden flex items-center justify-center py-[1rem] px-[1.5rem] z-[2] ml-[-0.25rem] relative">
                    <b className="relative text-[1.25rem] leading-[120%] font-[Pretendard] text-color-gray-600 whitespace-nowrap">
                      Contact 바로가기
                    </b>
                  </div>
                </button>
                
              </div>

            </div>

            <div className="w-full flex items-center justify-center mt-[6rem]">
              <Arrow
                variant="down"
                vector="/Vector.svg"
                showArrow
                arrowHeight="2.625rem"
                arrowWidth="2.625rem"
              />
            </div>
          </section>
          
          <Image
            className="h-[40rem] w-[10rem] object-contain mq1225:hidden"
            loading="lazy"
            width={160}
            height={640}
            sizes="100vw"
            alt=""
            src="/images/Group-29@2x.png"
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