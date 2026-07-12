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
  
  // 💡 가로 드래그, 휠 스크롤 및 무한 루프 처리를 위한 최적화 변수
  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const dragOffset = useRef(0); 
  const wheelOffset = useRef(0); // 휠/터치패드 가로 스크롤 누적값
  const baseOffset = useRef(0); 

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

  // 💡 RequestAnimationFrame 기반 무한 애니메이션 + 드래그 + 휠 통합 엔진
  useEffect(() => {
    let animationFrameId;

    const updateLoop = () => {
      const track = trackRef.current;
      if (!track) return;

      const halfWidth = track.scrollWidth / 2;
      if (halfWidth <= 0) {
        animationFrameId = requestAnimationFrame(updateLoop);
        return;
      }

      // 사용자가 드래그 중이 아닐 때만 자동 스크롤(왼쪽으로 자연스럽게 흘러감)
      if (!isDragging.current) {
        baseOffset.current -= 1.0; 
      }

      // 최종 이동 거리 계산 = 자동 축적값 + 실시간 드래그값 + 실시간 가로 휠 축적값
      let totalTranslate = baseOffset.current + dragOffset.current + wheelOffset.current;

      // [핵심] 좌우 100% 한계 없는 무한 궤도 좌표 연동 보정
      if (totalTranslate <= -halfWidth) {
        const overflow = totalTranslate % halfWidth;
        baseOffset.current = overflow - dragOffset.current - wheelOffset.current;
        totalTranslate = baseOffset.current + dragOffset.current + wheelOffset.current;
      } else if (totalTranslate > 0) {
        const overflow = totalTranslate % halfWidth;
        baseOffset.current = (overflow - halfWidth) - dragOffset.current - wheelOffset.current;
        totalTranslate = baseOffset.current + dragOffset.current + wheelOffset.current;
      }

      track.style.transform = `translateX(${totalTranslate}px)`;
      animationFrameId = requestAnimationFrame(updateLoop);
    };

    animationFrameId = requestAnimationFrame(updateLoop);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // 💡 드래그(잡아끌기) 이벤트 핸들러
  const handleDragStart = (e) => {
    isDragging.current = true;
    startX.current = e.pageX;
    if (trackRef.current) {
      trackRef.current.style.cursor = "grabbing";
    }
  };

  const handleDragMove = (e) => {
    if (!isDragging.current) return;
    const currentX = e.pageX;
    dragOffset.current = (currentX - startX.current) * 1.2;
  };

  const handleDragEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    
    // 마우스를 놓는 순간 드래그 오프셋을 베이스에 자연스럽게 흡수
    baseOffset.current += dragOffset.current;
    dragOffset.current = 0;
    
    if (trackRef.current) {
      trackRef.current.style.cursor = "grab";
    }
  };

  // 💡 휠/터치패드 가로 스크롤(제스처) 감지 핸들러
  const handleWheelScroll = (e) => {
    // 세로 휠 스크롤(deltaY)과 가로 휠 스크롤(deltaX) 중 값이 더 큰 쪽을 반영
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    
    // 자동 스크롤 방향과 어우러지도록 누적값에 변조 대입
    wheelOffset.current -= delta * 0.8;
  };

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

        {/* 💡 [완벽 해결] 잡아 끌기(Drag)와 터치패드 가로휠 스크롤(Wheel) 둘 다 무한 반복되는 하단 바 */}
        <div 
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onWheel={handleWheelScroll}
          className="self-stretch w-full bg-color-gray-100 overflow-hidden flex items-center py-[1rem] box-border text-left text-[1.25rem] text-color-gray-500 font-[Pretendard]"
          style={{ cursor: "grab" }}
        >
          <div 
            ref={trackRef}
            className="flex gap-[2rem] px-[1.25rem] will-change-transform"
            style={{ width: "max-content" }}
          >
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
    </section>
  );
};

HeroSection.propTypes = {
  className: PropTypes.string,
};

export default HeroSection;