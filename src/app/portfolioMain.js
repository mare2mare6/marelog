"use client";

import { useState } from "react";
import Image from "next/image";
import HeroSection from "./heroSection";
import Arrow from "./arrow";
import Chip from "./chip";
import CommonButton from "./commonButton";
import BlogCard from "./blogCard";
import ContactSection from "./contactSection";

const PortfolioMain = () => {
  const [chipItems] = useState([
    { variant: "default", prop: "감정일기", chipBorder: "", chipHeight: "2rem" },
    { variant: "default", prop: "AI채팅", chipBorder: "", chipHeight: "2rem" },
    { variant: "default", prop: "나만의_사진첩", chipBorder: "", chipHeight: "2rem" },
  ]);
  const [chipItems1] = useState([
    { variant: "default", prop: "감정일기", chipBorder: "", chipHeight: "" },
    { variant: "default", prop: "AI채팅", chipBorder: "", chipHeight: "" },
    { variant: "default", prop: "나만의_사진첩", chipBorder: "", chipHeight: "" },
  ]);
  const [chipItems2] = useState([
    { variant: "default", prop: "감정일기", chipBorder: "", chipHeight: "" },
    { variant: "default", prop: "AI채팅", chipBorder: "", chipHeight: "" },
    { variant: "default", prop: "나만의_사진첩", chipBorder: "", chipHeight: "" },
  ]);
  const [chipItems3] = useState([
    { variant: "default", prop: "감정일기", chipBorder: "", chipHeight: "" },
    { variant: "default", prop: "AI채팅", chipBorder: "", chipHeight: "" },
    { variant: "default", prop: "나만의_사진첩", chipBorder: "", chipHeight: "" },
  ]);
  const [commonButtonItems] = useState([
    { variant: "primary", variant2: "Default", variant3: "small", prop: "최근 글", endIcon: false, startIcon: false, iconActionPlasHeight: "2rem", iconActionPlasFlex: "unset", variant1: "right", showArrow: false, arrowHeight: "", arrowWidth: "" },
    { variant: "outline-2", variant2: "Default", variant3: "small", prop: "프로젝트 회고", endIcon: false, startIcon: false, iconActionPlasHeight: "2rem", iconActionPlasFlex: "unset", variant1: "right", showArrow: false, arrowHeight: "", arrowWidth: "" },
    { variant: "outline-2", variant2: "Default", variant3: "small", prop: "프로젝트 회고", endIcon: false, startIcon: false, iconActionPlasHeight: "2rem", iconActionPlasFlex: "unset", variant1: "right", showArrow: false, arrowHeight: "", arrowWidth: "" },
    { variant: "outline-2", variant2: "Default", variant3: "small", prop: "공부", endIcon: false, startIcon: false, iconActionPlasHeight: "2rem", iconActionPlasFlex: "unset", variant1: "right", showArrow: false, arrowHeight: "", arrowWidth: "" },
    { variant: "outline-2", variant2: "Default", variant3: "small", prop: "지식나눔", endIcon: false, startIcon: false, iconActionPlasHeight: "2rem", iconActionPlasFlex: "unset", variant1: "right", showArrow: false, arrowHeight: "", arrowWidth: "" },
    { variant: "outline-2", variant2: "Default", variant3: "small", prop: "기타", endIcon: false, startIcon: false, iconActionPlasHeight: "2rem", iconActionPlasFlex: "unset", variant1: "right", showArrow: false, arrowHeight: "", arrowWidth: "" },
  ]);
  const [blogCardItems] = useState([
    { chipVariant: "small", chipVariant1: "small", chipProp: "태그명", chipProp1: "태그명", chipBorder: "", chipBorder1: "", chipHeight: "1.5rem", chipHeight1: "1.5rem" },
    { chipVariant: "small", chipVariant1: "small", chipProp: "태그명", chipProp1: "태그명", chipBorder: "", chipBorder1: "", chipHeight: "1.5rem", chipHeight1: "1.5rem" },
    { chipVariant: "small", chipVariant1: "small", chipProp: "태그명", chipProp1: "태그명", chipBorder: "", chipBorder1: "", chipHeight: "1.5rem", chipHeight1: "1.5rem" },
  ]);

  return (
    <div className="w-full h-auto relative bg-color-gray-0 overflow-hidden flex flex-col items-start pb-[12.25rem] box-border gap-[2.625rem] leading-[normal] tracking-[normal] mq750:gap-[1.313rem]">
      
      {/* 메인 비주얼 영역 */}
      <HeroSection />

      <main className="self-stretch flex items-start pt-[0rem] px-[0rem] pb-[3.693rem] box-border max-w-full shrink-0 text-left text-[3rem] text-color-gray-0 font-[Pretendard] mq750:pb-[1.25rem] mq1225:pb-[1.563rem]">
        <div className="flex-1 flex items-start relative isolate max-w-full">
          
          <div className="flex-1 flex flex-col items-center max-w-full z-[1] text-[1.25rem] text-color-gray-500">
            <div className="self-stretch flex flex-col items-start py-[0rem] px-[2.25rem] box-border gap-[3rem] max-w-full text-[3rem] text-color-primary-400 font-['BR_B'] mq750:gap-[1.5rem]">
              
              {/* About me 섹션 */}
              <div className="self-stretch flex flex-col items-center gap-[3rem] max-w-full mq750:gap-[1.5rem]">
                <div className="self-stretch h-[3.625rem] flex items-center flex-wrap content-center gap-[1rem] mq1050:h-auto">
                  <h2 className="m-0 relative text-[length:inherit] leading-[120%] font-normal font-[inherit] mq450:text-[1.813rem] mq750:text-[2.375rem]">
                    About me
                  </h2>
                  <div className="h-[0.063rem] flex-1 relative border-color-gray-400 border-solid border-t-[1px] box-border min-w-[39.75rem] mq750:min-w-full" />
                </div>
                <div className="self-stretch flex flex-col items-center justify-center py-[0rem] px-[5rem] box-border gap-[2rem] max-w-full mq750:gap-[1rem] mq1225:p-[2.5rem]">
                  <section className="w-[65.5rem] flex items-center gap-[1.437rem] max-w-full text-left text-[4rem] text-[#000] font-[Pretendard]">
                    <div className="h-[21rem] w-[24.188rem] flex flex-col items-start gap-[0.75rem] mq750:h-auto">
                      <Image
                        className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
                        loading="lazy"
                        width={387}
                        height={254}
                        alt=""
                        src="/images/hellodog.svg"
                      />
                      
                      {/* 스킬 아이콘 가로 정렬 영역 - 이미지가 상자를 꽉 채우도록 반영 완료 */}
                      <div className="self-stretch flex items-center justify-between gap-[1.05rem] mq750:flex-wrap">
                        
                        {/* 1. Figma 아이콘 */}
                        <div className="h-[4rem] w-[4rem] rounded-radius-md bg-[#000] overflow-hidden shrink-0 flex items-center justify-center">
                          <Image className="w-full h-full relative object-cover" loading="lazy" width={40} height={40} src="/images/figma.svg" alt="Figma" />
                        </div>

                        {/* 2. VS Code 아이콘 */}
                        <div className="h-[4rem] w-[4rem] rounded-radius-md bg-color-gray-0 border-color-gray-400 border-solid border-[1px] box-border overflow-hidden shrink-0 flex items-center justify-center">
                          <Image className="w-full h-full relative object-cover" loading="lazy" width={40} height={40} src="/images/vscode.svg" alt="VS Code" />
                        </div>

                        {/* 3. 포토샵 아이콘 */}
                        <div className="h-[4rem] w-[4rem] rounded-radius-md bg-color-gray-0 overflow-hidden shrink-0 flex items-center justify-center">
                          <Image className="w-full h-full relative object-cover" loading="lazy" width={64} height={64} src="/images/ps.svg" alt="Photoshop" />
                        </div>

                        {/* 4. 일러스트레이터 아이콘 */}
                        <div className="h-[4rem] w-[4rem] rounded-radius-md bg-color-gray-0 overflow-hidden shrink-0 flex items-center justify-center">
                          <Image className="w-full h-full relative object-cover" loading="lazy" width={64} height={64} src="/images/ai.svg" alt="Illustrator" />
                        </div>

                        {/* 5. 노션 아이콘 */}
                        <div className="h-[4rem] w-[4rem] rounded-radius-md bg-color-gray-0 overflow-hidden shrink-0 flex items-center justify-center">
                          <Image className="w-full h-full relative object-cover" loading="lazy" width={64} height={64} src="/images/notion.svg" alt="Notion" />
                        </div>

                      </div>
                    </div>
                    
                    <div className="flex-1 flex flex-col items-start gap-[1.5rem] max-w-full">
                      <div className="self-stretch flex items-center justify-between gap-[1.25rem] max-w-full mq750:flex-wrap">
                        <h1 className="m-0 relative text-[length:inherit] leading-[120%] font-semibold font-[inherit] inline-block max-w-full mq450:text-[2.375rem] mq750:text-[3.188rem]">
                          che ha-eun
                        </h1>
                        <div className="py-[1.25rem] px-[0rem] bg-[transparent] flex items-center gap-[0.25rem]">
                          <div className="relative text-[1.125rem] leading-[150%] font-[Pretendard] text-color-gray-500 text-left">
                            이력서 보기
                          </div>
                          <Arrow variant="right" vector="/images/arrow-right.svg" showArrow arrowHeight="1.5rem" arrowWidth="1.5rem" />
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start gap-[0.75rem] text-[1.25rem]">
                        <b className="self-stretch relative leading-[120%] mq450:text-[1rem]">
                          <span>{`프론트엔드 이해도를 바탕으로 개발자와 소통하며,기획부터 일러스트까지.<br/>실전에 바로 투입 가능한 `}</span>
                          <span className="text-[#498adf]">프로덕트 디자이너 최하은</span>
                          <span>입니다.</span>
                        </b>
                        <div className="self-stretch relative text-[1rem] leading-[150%] text-color-gray-700">
                          <span>제품을 처음 마주한 사용자가 헤매는 순간은 곧 </span>
                          <span className="font-semibold">UX의 실패</span>
                          <span>{`라고 믿기에, '백지상태'의 `}</span>
                          <span className="font-semibold">사용자 시선에서 인지적 부담을 최소화</span>
                          <span>한 직관적인 인터페이스를 설계합니다. 프론트엔드 개발을 공부했던 경험과 퍼블리싱 역량을 바탕으로 시스템 구조를 깊이 이해하며, </span>
                          <span className="font-semibold">개발 팀과 완벽하게 소통</span>
                          <span>합니다. 12개 이상의 실무형 프로젝트를 주도하며 복잡한 </span>
                          <span className="font-semibold">기획부터 디테일한 UX/UI 디자인까지</span>
                          <span> 탄탄하게 소화해 왔습니다. 이에 그치지 않고 캐릭터 디자인과 일러스트레이션 역량까지 겸비하여 프로덕트에 고유한 브랜드 감성을 더할 수 있는 올라운더입니다. 최신 AI 툴을 활용해 린(Lean)하게 시안을 테스트하며 의사결정 속도를 높이지 않고, </span>
                          <span className="font-semibold">끊임없이 배우는 자세로 사용자와 팀 모두에게 편안함을 주는 디자이너가 되겠습니다.</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <div className="w-[65.5rem] h-[15rem] relative rounded-radius-md bg-color-gray-50 overflow-hidden shrink-0" />
                </div>
              </div>

              {/* Project 섹션 */}
              <div className="self-stretch flex flex-col items-center gap-[3rem] mq750:gap-[1.5rem]">
                <div className="self-stretch h-[3.625rem] flex items-center flex-wrap content-center gap-[1rem] mq1050:h-auto">
                  <h2 className="m-0 relative text-[length:inherit] leading-[120%] font-normal font-[inherit] mq450:text-[1.813rem] mq750:text-[2.375rem]">
                    Project
                  </h2>
                  <div className="h-[0.063rem] flex-1 relative border-color-gray-400 border-solid border-t-[1px] box-border min-w-[42.25rem] mq1050:min-w-full" />
                </div>
                <div className="self-stretch flex flex-col items-center justify-center py-[0rem] px-[5rem] gap-[3.5rem] mq750:gap-[1.75rem] mq1225:p-[2.5rem]">
                  <div className="self-stretch grid grid-cols-[repeat(auto-fit,_minmax(342px,_1fr))] [align-content:start] [column-gap:24px] [row-gap:56px]">
                    
                    {/* Project 카드 1 */}
                    <section className="flex flex-col items-start gap-[1.5rem] text-left text-[3rem] text-[#d19e34] font-[Pretendard]">
                      <div className="self-stretch flex flex-col items-start gap-[0.5rem]">
                        <div className="flex items-end gap-[0.375rem] mq450:flex-wrap">
                          <h2 className="m-0 relative text-[length:inherit] leading-[120%] font-semibold font-[inherit] mq450:text-[1.813rem] mq750:text-[2.375rem]">hear</h2>
                          <div className="relative text-[0.875rem] leading-[150%] text-color-gray-500">2026.06.12~2026.7.1</div>
                        </div>
                        <b className="self-stretch relative text-[1.25rem] leading-[120%] text-[#000] mq450:text-[1rem]">털어놓으면 일기가 되고, 쌓이면 내 마음이 보이는 AI 감정 기록 서비스</b>
                      </div>
                      <div className="self-stretch flex flex-col items-start gap-[1rem] text-[1rem] text-[#eebc52]">
                        <Image className="self-stretch shadow-[0px_0px_5px_rgba(0,_0,_0,_0.15)] max-w-full overflow-hidden max-h-full object-cover" loading="lazy" width={512} height={287} src="/Details-Padding@2x.png" alt="" />
                        <div className="self-stretch flex items-center gap-[0.5rem] mq750:flex-wrap">
                          <div className="flex items-center gap-[0.25rem]">
                            <div className="relative leading-[150%] font-semibold">Design</div>
                            <div className="relative leading-[150%] text-color-gray-600">기여도</div>
                          </div>
                          <div className="h-[1rem] flex-1 rounded-radius-full bg-color-gray-50 border-color-gray-300 border-solid border-[1px] box-border flex flex-col items-start min-w-[14.438rem]">
                            <div className="self-stretch flex-1 relative rounded-radius-full [background:linear-gradient(90deg,_#ffde85,_#eebc51)] overflow-hidden" />
                          </div>
                          <div className="flex items-center"><div className="relative leading-[150%] font-semibold">100</div><div className="relative leading-[150%] text-color-gray-600">%</div></div>
                        </div>
                      </div>
                      <div className="flex items-center gap-[0.75rem] mq450:flex-wrap">
                        {chipItems.map((item, index) => <Chip key={index} variant={item.variant} prop={item.prop} chipBorder={item.chipBorder} chipHeight={item.chipHeight} />)}
                      </div>
                    </section>

                    {/* Project 카드 2 */}
                    <section className="flex flex-col items-start gap-[1.5rem] text-left text-[3rem] text-[#d19e34] font-[Pretendard]">
                      <div className="self-stretch flex flex-col items-start gap-[0.5rem]">
                        <div className="flex items-end gap-[0.375rem] mq450:flex-wrap">
                          <h2 className="m-0 relative text-[length:inherit] leading-[120%] font-semibold font-[inherit] mq450:text-[1.813rem] mq750:text-[2.375rem]">hear</h2>
                          <div className="relative text-[0.875rem] leading-[150%] text-color-gray-500">2026.06.12~2026.7.1</div>
                        </div>
                        <b className="self-stretch relative text-[1.25rem] leading-[120%] text-[#000] mq450:text-[1rem]">털어놓으면 일기가 되고, 쌓이면 내 마음이 보이는 AI 감정 기록 서비스</b>
                      </div>
                      <div className="self-stretch flex flex-col items-start gap-[1rem] text-[1rem] text-[#eebc52]">
                        <Image className="self-stretch shadow-[0px_0px_5px_rgba(0,_0,_0,_0.15)] max-w-full overflow-hidden max-h-full object-cover" width={512} height={287} src="/Frame-1430105842@2x.png" alt="" />
                        <div className="self-stretch flex items-center gap-[0.5rem] mq750:flex-wrap">
                          <div className="flex items-center gap-[0.25rem]">
                            <div className="relative leading-[150%] font-semibold">Design</div>
                            <div className="relative leading-[150%] text-color-gray-600">기여도</div>
                          </div>
                          <div className="h-[1rem] flex-1 rounded-radius-full bg-color-gray-50 border-color-gray-300 border-solid border-[1px] box-border flex flex-col items-start min-w-[14.438rem]">
                            <div className="self-stretch flex-1 relative rounded-radius-full [background:linear-gradient(90deg,_#ffde85,_#eebc51)] overflow-hidden" />
                          </div>
                          <div className="flex items-center"><div className="relative leading-[150%] font-semibold">100</div><div className="relative leading-[150%] text-color-gray-600">%</div></div>
                        </div>
                      </div>
                      <div className="flex items-center gap-[0.75rem] mq450:flex-wrap">
                        {chipItems1.map((item, index) => <Chip key={index} variant={item.variant} prop={item.prop} chipBorder={item.chipBorder} chipHeight={item.chipHeight} />)}
                      </div>
                    </section>

                    {/* Project 카드 3 */}
                    <section className="flex flex-col items-start gap-[1.5rem] text-left text-[3rem] text-[#d19e34] font-[Pretendard]">
                      <div className="self-stretch flex flex-col items-start gap-[0.5rem]">
                        <div className="flex items-end gap-[0.375rem] mq450:flex-wrap">
                          <h2 className="m-0 relative text-[length:inherit] leading-[120%] font-semibold font-[inherit] mq450:text-[1.813rem] mq750:text-[2.375rem]">hear</h2>
                          <div className="relative text-[0.875rem] leading-[150%] text-color-gray-500">2026.06.12~2026.7.1</div>
                        </div>
                        <b className="self-stretch relative text-[1.25rem] leading-[120%] text-[#000] mq450:text-[1rem]">털어놓으면 일기가 되고, 쌓이면 내 마음이 보이는 AI 감정 기록 서비스</b>
                      </div>
                      <div className="self-stretch flex flex-col items-start gap-[1rem] text-[1rem] text-[#eebc52]">
                        <Image className="self-stretch shadow-[0px_0px_5px_rgba(0,_0,_0,_0.15)] max-w-full overflow-hidden max-h-full object-cover" width={512} height={287} src="/Frame-1430105842@2x.png" alt="" />
                        <div className="self-stretch flex items-center gap-[0.5rem] mq750:flex-wrap">
                          <div className="flex items-center gap-[0.25rem]">
                            <div className="relative leading-[150%] font-semibold">Design</div>
                            <div className="relative leading-[150%] text-color-gray-600">기여도</div>
                          </div>
                          <div className="h-[1rem] flex-1 rounded-radius-full bg-color-gray-50 border-color-gray-300 border-solid border-[1px] box-border flex flex-col items-start min-w-[14.438rem]">
                            <div className="self-stretch flex-1 relative rounded-radius-full [background:linear-gradient(90deg,_#ffde85,_#eebc51)] overflow-hidden" />
                          </div>
                          <div className="flex items-center"><div className="relative leading-[150%] font-semibold">100</div><div className="relative leading-[150%] text-color-gray-600">%</div></div>
                        </div>
                      </div>
                      <div className="flex items-center gap-[0.75rem] mq450:flex-wrap">
                        {chipItems2.map((item, index) => <Chip key={index} variant={item.variant} prop={item.prop} chipBorder={item.chipBorder} chipHeight={item.chipHeight} />)}
                      </div>
                    </section>

                    {/* Project 카드 4 */}
                    <section className="flex flex-col items-start gap-[1.5rem] text-left text-[3rem] text-[#d19e34] font-[Pretendard]">
                      <div className="self-stretch flex flex-col items-start gap-[0.5rem]">
                        <div className="flex items-end gap-[0.375rem] mq450:flex-wrap">
                          <h2 className="m-0 relative text-[length:inherit] leading-[120%] font-semibold font-[inherit] mq450:text-[1.813rem] mq750:text-[2.375rem]">hear</h2>
                          <div className="relative text-[0.875rem] leading-[150%] text-color-gray-500">2026.06.12~2026.7.1</div>
                        </div>
                        <b className="self-stretch relative text-[1.25rem] leading-[120%] text-[#000] mq450:text-[1rem]">털어놓으면 일기가 되고, 쌓이면 내 마음이 보이는 AI 감정 기록 서비스</b>
                      </div>
                      <div className="self-stretch flex flex-col items-start gap-[1rem] text-[1rem] text-[#eebc52]">
                        <Image className="self-stretch shadow-[0px_0px_5px_rgba(0,_0,_0,_0.15)] max-w-full overflow-hidden max-h-full object-cover" width={512} height={287} src="/Frame-1430105842@2x.png" alt="" />
                        <div className="self-stretch flex items-center gap-[0.5rem] mq750:flex-wrap">
                          <div className="flex items-center gap-[0.25rem]">
                            <div className="relative leading-[150%] font-semibold">Design</div>
                            <div className="relative leading-[150%] text-color-gray-600">기여도</div>
                          </div>
                          <div className="h-[1rem] flex-1 rounded-radius-full bg-color-gray-50 border-color-gray-300 border-solid border-[1px] box-border flex flex-col items-start min-w-[14.438rem]">
                            <div className="self-stretch flex-1 relative rounded-radius-full [background:linear-gradient(90deg,_#ffde85,_#eebc51)] overflow-hidden" />
                          </div>
                          <div className="flex items-center"><div className="relative leading-[150%] font-semibold">100</div><div className="relative leading-[150%] text-color-gray-600">%</div></div>
                        </div>
                      </div>
                      <div className="flex items-center gap-[0.75rem] mq450:flex-wrap">
                        {chipItems3.map((item, index) => <Chip key={index} variant={item.variant} prop={item.prop} chipBorder={item.chipBorder} chipHeight={item.chipHeight} />)}
                      </div>
                    </section>

                  </div>
                  <CommonButton variant="outline" variant2="Default" variant3="medium" prop="더 많은 프로젝트 보기" endIcon startIcon={false} iconActionPlasHeight="3rem" iconActionPlasFlex="unset" variant1="right" showArrow arrowHeight="1.5rem" arrowWidth="1.5rem" />
                </div>
              </div>

              {/* Blog 섹션 */}
              <div className="self-stretch flex flex-col items-center gap-[3rem] mq750:gap-[1.5rem]">
                <div className="self-stretch h-[3.625rem] flex items-center gap-[1rem]">
                  <h2 className="m-0 relative text-[length:inherit] leading-[120%] font-normal font-[inherit]">Blog</h2>
                  <div className="h-[0.063rem] flex-1 relative border-color-gray-400 border-solid border-t-[1px] box-border" />
                </div>
                <div className="self-stretch flex flex-col items-start py-[0rem] px-[5rem] mq1225:p-[2.5rem]">
                  <div className="self-stretch rounded-xl bg-color-gray-100 flex flex-col items-center py-[2.25rem] px-[1.5rem] gap-[2rem] mq750:gap-[1rem] mq750:py-[1.438rem]">
                    <div className="flex items-center gap-[0.5rem] mq1050:flex-wrap">
                      {commonButtonItems.map((item, index) => (
                        <CommonButton key={index} variant={item.variant} variant2={item.variant2} variant3={item.variant3} prop={item.prop} endIcon={item.endIcon} startIcon={item.startIcon} iconActionPlasHeight={item.iconActionPlasHeight} iconActionPlasFlex={item.iconActionPlasFlex} variant1={item.variant1} showArrow={item.showArrow} arrowHeight={item.arrowHeight} arrowWidth={item.arrowWidth} />
                      ))}
                    </div>
                    <section className="self-stretch flex items-center justify-center flex-wrap content-center gap-[1.25rem]">
                      <Arrow variant="lift" vector="/Vector2.svg" showArrow />
                      <div className="flex-1 flex items-center justify-center gap-[1.5rem] min-w-[35.563rem] mq1050:flex-wrap mq1050:min-w-full">
                        {blogCardItems.map((item, index) => (
                          <BlogCard key={index} chipVariant={item.chipVariant} chipVariant1={item.chipVariant1} chipProp={item.chipProp} chipProp1={item.chipProp1} chipBorder={item.chipBorder} chipBorder1={item.chipBorder1} chipHeight={item.chipHeight} chipHeight1={item.chipHeight1} />
                        ))}
                      </div>
                      <Arrow variant="right" vector="/Vector1.svg" showArrow arrowHeight="2.625rem" arrowWidth="2.625rem" />
                    </section>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
      <ContactSection />
    </div>
  );
};

export default PortfolioMain;