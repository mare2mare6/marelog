"use client";

import Image from "next/image";
import Header from "./header"; // Header로 명칭 통일
import PropTypes from "prop-types";

const HeroSection = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch min-h-screen flex flex-col items-start justify-between gap-[1.5rem] max-w-full shrink-0 pt-[3rem] pb-[2rem] ${className}`}
    >
      <Header />
      
      {/* 메인 레이아웃 상자 (중앙 캐릭터 영역) */}
      <div className="self-stretch flex-1 flex items-center py-[0rem] px-[2.25rem] box-border max-w-full mt-[0.5rem]">
        <div className="w-full flex items-center justify-between gap-[1.75rem] max-w-full mq1225:flex-wrap justify-center">
          
          {/* 왼쪽 장식 이미지 */}
          <div className="h-[37rem] w-[10rem] relative shrink-0 mq1225:hidden">
            <Image
              className="object-contain"
              loading="lazy"
              fill
              sizes="10rem"
              alt=""
              src="/images/Group-28@2x.png"
            />
          </div>
          
          {/* 중앙 콘텐츠 영역 */}
          <section className="flex-1 flex flex-col items-center box-border max-w-full text-center text-[2.65rem] text-color-primary-400 font-['BR_B']">
            
            <div className="flex flex-col items-center gap-[0.6rem] max-w-full mb-[1.75rem]">
              <div className="flex items-center justify-center gap-[0.85rem] max-w-full flex-wrap">
                <Image
                  className="h-[2.75rem] w-[11.25rem] object-cover"
                  loading="lazy"
                  width={180}
                  height={44}
                  sizes="100vw"
                  alt=""
                  src="/images/Group-6@2x.png"
                />
                <h2 className="m-0 relative text-[length:inherit] leading-[120%] font-normal font-[inherit] inline-block max-w-full mq450:text-[1.6rem] mq750:text-[2.1rem]">
                  에 오신 것을 환영합니다!
                </h2>
              </div>
              <h3 className="m-0 relative text-[1.3rem] leading-[120%] font-bold font-[Pretendard] text-color-gray-500 mq450:text-[1.05rem]">
                marelog는 UXUI디자이너 최하은의 포트폴리오 & 블로그입니다.
              </h3>
            </div>

            <div className="w-full max-w-[58rem] flex flex-col items-center gap-[1.5rem] relative px-[1rem]">
              
              {/* 중앙 캐릭터 영역 */}
              <div className="w-[20.5rem] h-[20.5rem] flex items-center justify-center z-[1]">
                <Image
                  className="w-full h-full object-cover"
                  width={328}
                  height={328}
                  sizes="100vw"
                  alt="캐릭터"
                  src="/images/all-1@2x.png"
                />
              </div>

              {/* 윗줄 버튼 2개 (About Me, Project) */}
              <div className="absolute top-[32%] left-0 right-0 flex justify-between pointer-events-none z-[2] px-[1.5rem] mq750:relative mq750:top-0 mq750:flex-col mq750:items-center mq750:gap-[1rem] mq750:pointer-events-auto">
                
                {/* About Me */}
                <div className="cursor-pointer [border:none] p-0 bg-[transparent] flex items-center pointer-events-auto hover:scale-105 transition-transform">
                  <div className="rounded-radius-md bg-color-gray-100 overflow-hidden flex items-center justify-center py-[0.9rem] px-[1.4rem] z-[2] relative">
                    <h3 className="m-0 relative text-[1.18rem] leading-[120%] font-bold font-[Pretendard] text-color-gray-600 whitespace-nowrap">
                      About Me 바로가기
                    </h3>
                  </div>
                  <Image
                    className="h-[1.75rem] w-[1.5rem] relative rounded-sm object-contain z-[1] ml-[-0.25rem] transform rotate-180"
                    loading="lazy"
                    width={24}
                    height={28}
                    src="/images/Polygon-4.svg"
                    alt=""
                  />
                </div>

                {/* Project */}
                <div className="cursor-pointer [border:none] p-0 bg-[transparent] flex items-center pointer-events-auto hover:scale-105 transition-transform">
                  <Image
                    className="h-[1.75rem] w-[1.5rem] relative rounded-sm object-contain z-[1] mr-[-0.25rem]"
                    width={24}
                    height={28}
                    src="/images/Polygon-4.svg"
                    alt=""
                  />
                  <div className="rounded-radius-md bg-color-gray-100 overflow-hidden flex items-center justify-center py-[0.9rem] px-[1.4rem] z-[2] relative">
                    <h3 className="m-0 relative text-[1.18rem] leading-[120%] font-bold font-[Pretendard] text-color-gray-600 whitespace-nowrap">
                      Project 바로가기
                    </h3>
                  </div>
                </div>
              </div>

              {/* 아랫줄 버튼 2개 (Blog, Contact) */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-between pointer-events-none z-[2] px-[3.5rem] mq750:relative mq750:top-0 mq750:flex-col mq750:items-center mq750:gap-[1rem] mq750:pointer-events-auto">
                
                <div className="cursor-pointer [border:none] p-0 bg-[transparent] flex items-center pointer-events-auto hover:scale-105 -translate-y-[5rem] translate-x-[2rem] transition-transform">
                  <div className="rounded-radius-md bg-color-gray-100 overflow-hidden flex items-center justify-center py-[0.9rem] px-[1.4rem] z-[2] relative">
                    <h3 className="m-0 relative text-[1.18rem] leading-[120%] font-bold font-[Pretendard] text-color-gray-600 whitespace-nowrap">
                      Blog 바로가기
                    </h3>
                  </div>
                  <Image
                    className="h-[1.75rem] w-[1.5rem] relative rounded-sm object-contain z-[1] ml-[-0.25rem] transform rotate-180"
                    width={24}
                    height={28}
                    src="/images/Polygon-4.svg"
                    alt=""
                  />
                </div>

                {/* Contact */}
                <div className="cursor-pointer [border:none] p-0 bg-[transparent] flex items-center pointer-events-auto hover:scale-105 -translate-y-[5rem] transition-transform">
                  <Image
                    className="h-[1.75rem] w-[1.5rem] relative rounded-sm object-contain z-[1] mr-[-0.25rem]"
                    width={24}
                    height={28}
                    src="/images/Polygon-4.svg"
                    alt=""
                  />
                  <div className="rounded-radius-md bg-color-gray-100 overflow-hidden flex items-center justify-center py-[0.9rem] px-[1.4rem] z-[2] relative">
                    <b className="relative text-[1.18rem] leading-[120%] font-[Pretendard] text-color-gray-600 whitespace-nowrap">
                      Contact 바로가기
                    </b>
                  </div>
                </div>
              </div>

            </div>
          </section>
          
          {/* 오른쪽 장식 이미지 */}
          <div className="h-[37rem] w-[10rem] relative shrink-0 mq1225:hidden">
            <Image
              className="object-contain"
              loading="lazy"
              fill
              sizes="10rem"
              alt=""
              src="/images/Group-29@2x.png"
            />
          </div>
        </div>
      </div>

      {/* 하단 영역 묶음 */}
      <div className="w-full flex flex-col items-center gap-[1.5rem] shrink-0 mt-auto">
        
        <div className="w-[2.625rem] h-[2.625rem] flex items-center justify-center">
          <img
            className="w-full h-full object-contain"
            src="/images/arrow.svg"
            alt="아래 방향 화살표"
          />
        </div>

        {/* 메인 화살표 아래 배치된 회색 해시태그 바 */}
        <div className="self-stretch w-full bg-color-gray-100 overflow-hidden flex items-center py-[1rem] px-[2.25rem] box-border text-left text-[1.25rem] text-color-gray-500 font-[Pretendard]">
          <div className="w-full flex items-center justify-center gap-[1.5rem] flex-wrap">
            <h3 className="m-0 relative text-[length:inherit] leading-[120%] font-bold font-[inherit] whitespace-nowrap mq450:text-[1rem]">#퍼블리싱_가능</h3>
            <h3 className="m-0 relative text-[length:inherit] leading-[120%] font-bold font-[inherit] whitespace-nowrap mq450:text-[1rem]">#개발자_협업다수</h3>
            <h3 className="m-0 relative text-[length:inherit] leading-[120%] font-bold font-[inherit] whitespace-nowrap mq450:text-[1rem]">#실전투입_가능</h3>
            <h3 className="m-0 relative text-[length:inherit] leading-[120%] font-bold font-[inherit] whitespace-nowrap mq450:text-[1rem]">#AI_친화</h3>
            <h3 className="m-0 relative text-[length:inherit] leading-[120%] font-bold font-[inherit] whitespace-nowrap mq450:text-[1rem]">#사용자_친화</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  className: PropTypes.string,
};

export default HeroSection;