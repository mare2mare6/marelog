'use client';

import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

// 💡 Lottie 플레이어를 클라이언트 사이드에서만 안전하게 로드합니다.
const DotLottiePlayer = dynamic(
  () => import('@dotlottie/react-player').then((mod) => mod.DotLottiePlayer),
  { ssr: false }
);

export default function Home() {
  const [isBlinking, setIsBlinking] = useState(false);
  const [isMouthOpen, setIsMouthOpen] = useState(false);
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });
  const [faceOffset, setFaceOffset] = useState({ x: 0, y: 0 }); 
  
  const containerRef = useRef(null);

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

  const leftMenus = ['Main Menu', 'Projects'];
  const rightMenus = ['About Me', 'Tech Blog'];

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeaveContainer}
      className="flex min-h-screen flex-col items-center justify-between bg-slate-900 text-white select-none py-16 overflow-y-auto"
    >
      {/* ---------------- [상단 영역: 예전 완벽한 이미지 강아지 인터랙션 화면] ---------------- */}
      <div className="max-w-4xl w-full grid grid-cols-3 items-center justify-items-center gap-8 px-4 mt-8">
        
        {/* [왼쪽 메뉴] */}
        <div className="flex flex-col gap-12 w-full text-right">
          {leftMenus.map((menu, idx) => (
            <div
              key={idx}
              onMouseEnter={() => handleTextHover(true)}
              onMouseLeave={() => handleTextHover(false)}
              className="text-2xl font-bold tracking-wide text-slate-400 hover:text-teal-400 cursor-pointer transition-all duration-200 transform hover:-translate-x-2"
            >
              {menu}
            </div>
          ))}
        </div>

        {/* [중앙 강아지 캐릭터 공간] */}
        <div className="relative w-64 h-64 flex items-center justify-center bg-slate-800 rounded-full border border-slate-700 shadow-2xl overflow-hidden">
          
          {/* 1. 몸 & 얼굴 베이스 레이어 */}
          <img 
            src="/images/main_dog/body.png" 
            alt="강아지 몸" 
            className="absolute top-0 left-0 w-full h-full object-contain" 
          />

          {/* 2. 코 & 눈썹 레이어 */}
          <img 
            src="/images/main_dog/nose.png" 
            alt="코와 눈썹" 
            className="absolute top-0 left-0 w-full h-full object-contain" 
            style={{
              transform: `translate(${faceOffset.x}px, ${faceOffset.y}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          />

          {/* 3. 눈 레이어 (깜빡임 + 위치 연동) */}
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

          {/* 4. 입 레이어 */}
          <img 
            src={isMouthOpen ? "/images/main_dog/mouse_open.png" : "/images/main_dog/mouse_close.png"} 
            alt="강아지 입" 
            className="absolute top-0 left-0 w-full h-full object-contain" 
          />

        </div>

        {/* [오른쪽 메뉴] */}
        <div className="flex flex-col gap-12 w-full text-left">
          {rightMenus.map((menu, idx) => (
            <div
              key={idx}
              onMouseEnter={() => handleTextHover(true)}
              onMouseLeave={() => handleTextHover(false)}
              className="text-2xl font-bold tracking-wide text-slate-400 hover:text-teal-400 cursor-pointer transition-all duration-200 transform hover:translate-x-2"
            >
              {menu}
            </div>
          ))}
        </div>

      </div>

      {/* ---------------- [하단 영역: 에펙 Lottie 제이손 파일 단독 프리뷰 공간] ---------------- */}
      <div className="flex flex-col items-center gap-4 border-t border-dashed border-slate-700 pt-12 mt-16 w-full max-w-xl">
        <span className="text-xs font-semibold tracking-widest text-teal-400 uppercase bg-teal-950/50 px-3 py-1 rounded-full border border-teal-800">
          👀 Lottie JSON Live Preview (하단 테스트용)
        </span>
        
        <div className="w-64 h-64 bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden flex items-center justify-center">
          {DotLottiePlayer && (
            <DotLottiePlayer
              src="/lottieData.json" 
              autoplay
              loop
              style={{ width: '100%', height: '100%' }}
              // 💡 Lottie JSON 파일 자체에서 u: "images/" 로 경로를 맞췄으므로
              // 골칫거리였던 rendererSettings는 깔끔하게 지웠습니다!
            />
          )}
        </div>
        
        <p className="text-xs text-slate-500 text-center px-4">
          위에서는 예전 강아지가 깜빡거리며 정상 작동하고,<br/>
          아래 상자에서는 꼬인 경로를 맞춰준 에펙 애니메이션이 렌더링됩니다!
        </p>
      </div>

    </div>
  );
}