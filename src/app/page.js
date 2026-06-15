'use client';

import { useState, useEffect, useRef } from 'react';

export default function Home() {
  // 상태 관리: 눈 깜빡임, 입 벌림, 눈동자 위치
  const [isBlinking, setIsBlinking] = useState(false);
  const [isMouthOpen, setIsMouthOpen] = useState(false);
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });
  
  const containerRef = useRef(null);

  // 1. 1.5초마다 눈 깜빡이는 애니메이션 (150ms 동안 감았다가 뜸)
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => {
        setIsBlinking(false);
      }, 150);
    }, 1500);

    return () => clearInterval(blinkInterval);
  }, []);

  // 2. 마우스 움직임에 따라 눈동자 위치 계산
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const dogCenterX = rect.left + rect.width / 2;
    const dogCenterY = rect.top + rect.height / 2;

    const deltaX = e.clientX - dogCenterX;
    const deltaY = e.clientY - dogCenterY;

    // 이미지 크기에 맞게 눈동자가 움직일 최대 범위 제한 (필요시 숫자 조절!)
    const maxMove = 8; 
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    
    if (distance === 0) {
      setEyeOffset({ x: 0, y: 0 });
    } else {
      const moveX = (deltaX / distance) * Math.min(maxMove, distance * 0.015);
      const moveY = (deltaY / distance) * Math.min(maxMove, distance * 0.015);
      setEyeOffset({ x: moveX, y: moveY });
    }
  };

  // 마우스가 화면을 벗어나면 눈동자를 정중앙으로
  const handleMouseLeaveContainer = () => {
    setEyeOffset({ x: 0, y: 0 });
  };

  // 텍스트에 마우스가 호버되면 입을 벌림
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
      className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white select-none overflow-hidden"
    >
      <div className="max-w-4xl w-full grid grid-cols-3 items-center justify-items-center gap-8 px-4">
        
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

          {/* 2. 눈 레이어 (★ 감았을 때도 눈동자 무빙 위치를 유지하도록 style 추가!) */}
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
                transition: 'transform 0.08s ease-out'
              }}
            />
          )}

          {/* 3. 입 레이어 (Hover 상태에 따라 스위칭) */}
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

      <p className="mt-12 text-sm text-slate-500 animate-pulse">
        메뉴에 마우스를 올리거나 화면 안에서 움직여 보세요!
      </p>
    </div>
  );
}