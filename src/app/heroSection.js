"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Header from "./header"; // Header로 명칭 통일
import PropTypes from "prop-types";

const HeroSection = ({ className = "" }) => {
  const [isBlinking, setIsBlinking] = useState(false);
  const [isMouthOpen, setIsMouthOpen] = useState(false);
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });
  const [faceOffset, setFaceOffset] = useState({ x: 0, y: 0 }); 
  
  const containerRef = useRef(null);
  
  // 💡 가로 드래그 스크롤을 제어하기 위한 Ref 및 변수
  const scrollRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // 1. 1.5초마다 눈 깜빡이는 애니메이션
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => {
        setIsBlinking(false);
      }, 150);
    }, 1500);

    return () => clearInterval(blinkInterval);
  }, []);

  // 2. 마우스 움직임에 따라 눈동자와 코/눈썹 위치 계산
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const dogCenterX = rect.left + rect.width / 2;
    const dogCenterY = rect.top + rect.height / 2;

    const deltaX = e.clientX - dogCenterX;
    const deltaY = e.clientY - dogCenterY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    
    if (distance === 0) {
      setEyeOffset({ x: 0, y: 0 });
      setFaceOffset({ x: 0, y: 0 });
    } else {
      const maxEyeMove = 4; 
      const eyeX = (deltaX / distance) * Math.min(maxEyeMove, distance * 0.035);
      const eyeY = (deltaY / distance) * Math.min(maxEyeMove, distance * 0.035);
      setEyeOffset({ x: eyeX, y: eyeY });

      const maxFaceMove = 2; 
      const faceX = (deltaX / distance) * Math.min(maxFaceMove, distance * 0.01);
      const faceY = (deltaY / distance) * Math.min(maxFaceMove, distance * 0.01);
      setFaceOffset({ x: faceX, y: faceY });
    }
  };

  const handleMouseLeaveContainer = () => {
    setEyeOffset({ x: 0, y: 0 });
    setFaceOffset({ x: 0, y: 0 });
  };

  const handleTextHover = (open) => {
    setIsMouthOpen(open);
  };

  // 💡 드래그 스크롤 마우스 이벤트 핸들러
  const handleDragStart = (e) => {
    if (!scrollRef.current) return;
    isDown.current = true;
    scrollRef.current.classList.add("dragging");
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleDragEnd = () => {
    isDown.current = false;
    if (scrollRef.current) {
      scrollRef.current.classList.remove("dragging");
    }
  };

  const handleDragMove = (e) => {
    if (!isDown.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // 스크롤 민감도 배율
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // 무한 스크롤용 해시태그 목록 데이터
  const hashtags = [
    "#프로덕트_디자이너", "#퍼블리싱_가능", "#개발자_협업다수", 
    "#실전투입_가능", "#AI_친화", "#사용자_친화", 
    "#성장하는", "#완성형", "#실전에_강한", 
    "#UXUI", "#일러스트", "#기획"
  ];

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeaveContainer}
      className={`self-stretch min-h-screen flex flex-col items-start justify-between gap-[1.5rem] max-w-full shrink-0 pt-[3rem] pb-[2rem] select-none ${className}`}
    >
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .marquee-wrapper {
          overflow-x: auto;
          scrollbar-width: none; /* Firefox 스크롤바 숨김 */
          cursor: grab;
        }
        .marquee-wrapper::-webkit-scrollbar {
          display: none; /* Chrome/Safari 스크롤바 숨김 */
        }
        .marquee-wrapper.dragging {
          cursor: grabbing;
        }
        .marquee-container {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        /* 드래그하고 있거나 마우스를 올렸을 때는 무한 루프 애니메이션을 멈춰 연동을 자연스럽게 만듭니다 */
        .marquee-wrapper:hover .marquee-container,
        .marquee-wrapper.dragging .marquee-container {
          animation-play-state: paused;
        }
      `}</style>

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
              
              {/* 중앙 강아지 캐릭터 움직임 공간 */}
              <div className="w-[20.5rem] h-[20.5rem] relative flex items-center justify-center z-[1] overflow-hidden">
                <img 
                  src="/images/main_dog/body.png" 
                  alt="강아지 몸" 
                  className="absolute top-0 left-0 w-full h-full object-contain" 
                />
                <img 
                  src="/images/main_dog/nose.png" 
                  alt="코와 눈썹" 
                  className="absolute top-0 left-0 w-full h-full object-contain" 
                  style={{
                    transform: `translate(${faceOffset.x}px, ${faceOffset.y}px)`,
                    transition: 'transform 0.1s ease-out'
                  }}
                />
                {isBlinking ? (
                  <img 
                    src="/images/main_dog/eye_close.png" 
                    alt="감은 눈" 
                    className="absolute top-0 left-0 w-full h-full object-contain" 
                    style={{
                      transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)`
                    }}
                  />
                ) : (
                  <img 
                    src="/images/main_dog/eye_open.png" 
                    alt="뜬 눈" 
                    className="absolute top-0 left-0 w-full h-full object-contain"
                    style={{
                      transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)`,
                      transition: 'transform 0.06s ease-out'
                    }}
                  />
                )}
                <img 
                  src={isMouthOpen ? "/images/main_dog/mouse_open.png" : "/images/main_dog/mouse_close.png"} 
                  alt="강아지 입" 
                  className="absolute top-0 left-0 w-full h-full object-contain" 
                />
              </div>

              {/* 윗줄 버튼 2개 (About Me, Project) */}
              <div className="absolute top-[32%] left-0 right-0 flex justify-between pointer-events-none z-[2] px-[1.5rem] mq750:relative mq750:top-0 mq750:flex-col mq750:items-center mq750:gap-[1rem] mq750:pointer-events-auto">
                <div 
                  onMouseEnter={() => handleTextHover(true)}
                  onMouseLeave={() => handleTextHover(false)}
                  className="cursor-pointer [border:none] p-0 bg-[transparent] flex items-center pointer-events-auto hover:scale-105 transition-transform"
                >
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

                <div 
                  onMouseEnter={() => handleTextHover(true)}
                  onMouseLeave={() => handleTextHover(false)}
                  className="cursor-pointer [border:none] p-0 bg-[transparent] flex items-center pointer-events-auto hover:scale-105 transition-transform"
                >
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
                <div 
                  onMouseEnter={() => handleTextHover(true)}
                  onMouseLeave={() => handleTextHover(false)}
                  className="cursor-pointer [border:none] p-0 bg-[transparent] flex items-center pointer-events-auto hover:scale-105 -translate-y-[5rem] translate-x-[2rem] transition-transform"
                >
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

                <div 
                  onMouseEnter={() => handleTextHover(true)}
                  onMouseLeave={() => handleTextHover(false)}
                  className="cursor-pointer [border:none] p-0 bg-[transparent] flex items-center pointer-events-auto hover:scale-105 -translate-y-[5rem] transition-transform"
                >
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

        {/* [수정] 무한 롤링 및 마우스 핸드 드래그가 결합된 가로 해시태그 바 */}
        <div className="self-stretch w-full bg-color-gray-100 overflow-hidden flex items-center py-[1rem] box-border text-left text-[1.25rem] text-color-gray-500 font-[Pretendard]">
          <div 
            ref={scrollRef}
            onMouseDown={handleDragStart}
            onMouseLeave={handleDragEnd}
            onMouseUp={handleDragEnd}
            onMouseMove={handleDragMove}
            className="marquee-wrapper w-full select-none"
          >
            <div className="marquee-container gap-[2em] px-[1.25rem]">
              
              {/* 오리지널 텍스트 세트 */}
              <div className="flex items-center gap-[2rem] shrink-0">
                {hashtags.map((tag, idx) => (
                  <h3 key={`orig-${idx}`} className="m-0 relative text-[length:inherit] leading-[120%] font-bold font-[inherit] whitespace-nowrap">
                    {tag}
                  </h3>
                ))}
              </div>

              {/* 끊김 방지 클론 세트 */}
              <div className="flex items-center gap-[2rem] shrink-0" aria-hidden="true">
                {hashtags.map((tag, idx) => (
                  <h3 key={`clone-${idx}`} className="m-0 relative text-[length:inherit] leading-[120%] font-bold font-[inherit] whitespace-nowrap">
                    {tag}
                  </h3>
                ))}
              </div>

            </div>
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