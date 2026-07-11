"use client";

import Image from "next/image";
import FrameComponent from "./frame-component";
import PropTypes from "prop-types";

const MainContentArea = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch min-h-screen flex flex-col items-start justify-between gap-[1.5rem] max-w-full shrink-0 pt-[3rem] pb-[2rem] ${className}`}
    >
      <FrameComponent />
      
      {/* 메인 레이아웃 상자 (중앙 캐릭터 영역) */}
      <div className="self-stretch flex-1 flex items-center py-[0rem] px-[2.25rem] box-border max-w-full mt-[0.5rem]">
        <div className="flex-1 flex items-center justify-between gap-[1.625rem] max-w-full mq1225:flex-wrap justify-center">
          
          {/* 왼쪽 장식 이미지 */}
          <Image
            className="h-[35rem] w-[9rem] object-cover mq1225:hidden"
            loading="lazy"
            width={144}
            height={560}
            sizes="100vw"
            alt=""
            src="/images/Group-28@2x.png"
          />
          
          {/* 중앙 콘텐츠 영역 */}
          <section className="flex-1 flex flex-col items-center box-border max-w-full text-center text-[2.5rem] text-color-primary-400 font-['BR_B']">
            
            <div className="flex flex-col items-center gap-[0.5rem] max-w-full mb-[1.5rem]">
              <div className="flex items-center justify-center gap-[0.75rem] max-w-full flex-wrap">
                <Image
                  className="h-[2.5rem] w-[10.25rem] object-cover"
                  loading="lazy"
                  width={164}
                  height={40}
                  sizes="100vw"
                  alt=""
                  src="/images/Group-6@2x.png"
                />
                <h2 className="m-0 relative text-[length:inherit] leading-[120%] font-normal font-[inherit] inline-block max-w-full mq450:text-[1.5rem] mq750:text-[2rem]">
                  에 오신 것을 환영합니다!
                </h2>
              </div>
              <h3 className="m-0 relative text-[1.25rem] leading-[120%] font-bold font-[Pretendard] text-color-gray-500 mq450:text-[1rem]">
                marelog는 UXUI디자이너 최하은의 포트폴리오 & 블로그입니다.
              </h3>
            </div>

            <div className="w-full max-w-[55rem] flex flex-col items-center gap-[1.5rem] relative px-[1rem]">
              <div className="w-[18rem] h-[18rem] flex items-center justify-center z-[1]">
                <Image
                  className="w-full h-full object-cover"
                  width={288}
                  height={288}
                  sizes="100vw"
                  alt="캐릭터"
                  src="/images/all-1@2x.png"
                />
              </div>

              {/* 버튼 영역 생략 (기존 구조 동일하게 유지됨) */}
            </div>
          </section>
          
          {/* 오른쪽 장식 이미지 */}
          <Image
            className="h-[35rem] w-[9rem] object-contain mq1225:hidden"
            loading="lazy"
            width={144}
            height={560}
            sizes="100vw"
            alt=""
            src="/images/Group-29@2x.png"
          />
        </div>
      </div>

      {/* 하단 영역 묶음 */}
      <div className="w-full flex flex-col items-center gap-[1.5rem] shrink-0 mt-auto">
        
        {/* [수정] 컴포넌트 파일 없이 직관적으로 넣은 아래 방향 화살표 */}
        <div className="w-[2.625rem] h-[2.625rem] flex items-center justify-center transform rotate-90">
          <img
            className="w-full h-full object-contain"
            src="/images/arrow.svg" // 만약 public/Vector.svg 면 "/Vector.svg" 로 변경
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

MainContentArea.propTypes = {
  className: PropTypes.string,
};

export default MainContentArea;