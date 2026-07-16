"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Chip from "./chip";
import CommonButton from "./commonButton"; // 명칭 통일을 위해 변경
import PropTypes from "prop-types";

// lottie-react는 브라우저 전용(document 필요)이라 SSR을 꺼야 빌드 에러가 안 남
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const ContactSection = ({ className = "" }) => {
  const [animationData, setAnimationData] = useState(null);
  const [animationError, setAnimationError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    fetch("/lottieData.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`lottieData.json fetch 실패: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (!isMounted) return;

        // assets의 이미지 경로를 public/images 절대경로로 보정
        // 원본: { "u": "images/", "p": "img_0.png" } -> "images/img_0.png" (상대경로, 깨질 수 있음)
        // 보정: { "u": "/images/", "p": "img_0.png" } -> "/images/img_0.png" (public 루트 기준 절대경로)
        const fixedAssets = data.assets.map((asset) => {
          if (asset.p && !asset.p.startsWith("http") && !asset.p.startsWith("data:")) {
            return { ...asset, u: "/images/" };
          }
          return asset;
        });

        setAnimationData({ ...data, assets: fixedAssets });
      })
      .catch((err) => {
        console.error("Lottie 애니메이션 로드 실패, 정적 이미지로 대체합니다:", err);
        if (isMounted) setAnimationError(true);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const [chipItems] = useState([
    { variant: "default", prop: "uxui", chipBorder: "none", chipHeight: "" },
    { variant: "default", prop: "일러스트레이터", chipBorder: "none", chipHeight: "" },
    { variant: "default", prop: "프로덕트디자이너", chipBorder: "none", chipHeight: "" },
    { variant: "default", prop: "캐릭터", chipBorder: "none", chipHeight: "" },
    { variant: "default", prop: "기획", chipBorder: "none", chipHeight: "" },
    { variant: "default", prop: "외주", chipBorder: "none", chipHeight: "" },
    { variant: "default", prop: "구직", chipBorder: "none", chipHeight: "" },
  ]);

  const [commonButtonItems] = useState([
    { variant: "primary", variant2: "Default", variant3: "medium", prop: "이력서 다운로드", endIcon: false, startIcon: false, iconActionPlasHeight: "3rem", iconActionPlasFlex: 1, variant1: "right", showArrow: false, arrowHeight: "", arrowWidth: "" },
    { variant: "outline", variant2: "Default", variant3: "medium", prop: "포트폴리오 보러가기", endIcon: false, startIcon: false, iconActionPlasHeight: "3rem", iconActionPlasFlex: 1, variant1: "right", showArrow: false, arrowHeight: "", arrowWidth: "" },
    { variant: "outline", variant2: "Default", variant3: "medium", prop: "깃허브 보러가기", endIcon: false, startIcon: false, iconActionPlasHeight: "3rem", iconActionPlasFlex: 1, variant1: "right", showArrow: false, arrowHeight: "", arrowWidth: "" },
    { variant: "outline", variant2: "Default", variant3: "medium", prop: "링크드인 바로가기", endIcon: false, startIcon: false, iconActionPlasHeight: "3rem", iconActionPlasFlex: 1, variant1: "right", showArrow: false, arrowHeight: "", arrowWidth: "" },
  ]);

  return (
    <section
      className={`w-[74.069rem] flex flex-col items-end py-[0rem] pl-[0rem] pr-[1.25rem] box-border gap-[1.25rem] max-w-full shrink-0 ${className}`}
    >
      <div className="w-[74.256rem] max-w-[102%] flex items-start gap-[0.312rem] z-[2] shrink-0 mq1050:flex-wrap">
        {/* 기존 정적 이미지를 Lottie 애니메이션으로 교체 */}
        <div className="w-[27.256rem] h-[32.375rem] relative max-w-full mq1050:flex-1 overflow-hidden">
          {animationData && !animationError ? (
            <Lottie
              animationData={animationData}
              loop={true}
              autoplay={true}
              style={{ width: "100%", height: "100%" }}
            />
          ) : (
            // 로딩 중이거나 에러 시 폴백 (레이아웃 깨짐 방지)
            <Image
              className="w-full h-full relative object-cover max-w-full"
              loading="lazy"
              width={436.1}
              height={518}
              sizes="100vw"
              alt=""
              src="/image-5@2x.png"
            />
          )}
        </div>

        <section className="h-[27.188rem] flex-1 flex flex-col items-center justify-center gap-[2rem] min-w-[30.375rem] text-left text-[3rem] text-color-primary-400 font-['BR_B'] mq750:h-auto mq750:gap-[1rem] mq750:min-w-full">
          <div className="self-stretch flex items-center [row-gap:20px] mq750:flex-wrap">
            <Image
              className="h-[4.063rem] w-[3.5rem] relative rounded-md object-contain"
              loading="lazy"
              width={56}
              height={65}
              sizes="100vw"
              alt=""
              src="/Polygon-4.svg"
            />
            <div className="flex-1 rounded-radius-md bg-color-gray-100 overflow-hidden flex items-center justify-center py-[1.25rem] px-[0rem] box-border min-w-[10.563rem] ml-[-0.5rem] relative mq450:ml-0">
              <h2 className="m-0 relative text-[length:inherit] leading-[120%] font-normal font-[inherit] mq450:text-[1.813rem] mq450:leading-[2.188rem] mq750:text-[2.375rem] mq750:leading-[2.875rem]">
                Contact
              </h2>
            </div>
          </div>
          <div className="w-[44.875rem] flex flex-col items-center gap-[1.5rem] text-center text-[2.25rem] text-[#000] font-[Pretendard]">
            <div className="self-stretch flex flex-col items-center gap-[1.25rem]">
              <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[120%] font-semibold font-[inherit] mq450:text-[1.375rem] mq450:leading-[1.625rem] mq750:text-[1.813rem] mq750:leading-[2.188rem]">
                mare2mare6@gmail.com
              </h2>
              <div className="self-stretch flex flex-col items-center gap-[0.75rem] text-[1.125rem] text-color-gray-700">
                <div className="self-stretch relative leading-[150%]">
                  안녕하세요! 사용자 경험을 설계하는 UX/UI·프로덕트 디자인부터,
                  <br />
                  브랜드에 생동감을 더하는 일러스트 및 캐릭터 디자인까지 경계
                  없이 작업하는 디자이너 최하은입니다.
                </div>
                <div className="relative leading-[150%]">
                  <span className="leading-[150%]">{`현재 신규 프로젝트 `}</span>
                  <span className="font-semibold leading-[150%]">외주</span>
                  <span className="leading-[150%]">{`(재택) 및 파트타임 협업 문의를 환영하며,<br/>함께 성장할 좋은 기업과의 `}</span>
                  <span className="font-semibold leading-[150%]">
                    정규직 채용 기회
                  </span>
                  <span className="leading-[150%]">
                    (면접)도 적극적으로 열어두고 있습니다.
                  </span>
                </div>
                <div className="relative leading-[150%]">
                  아이디어를 시각화하는 파트너가 필요하시거나
                  <br />
                  함께할 인재를 찾고 계신다면 언제든 편하게 연락 부탁드립니다.
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[0.375rem] mq750:flex-wrap">
              {chipItems.map((item, index) => (
                <Chip
                  key={index}
                  variant={item.variant}
                  prop={item.prop}
                  chipBorder={item.chipBorder}
                  chipHeight={item.chipHeight}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className="w-[65.631rem] flex items-start justify-end py-[0rem] px-[1.5rem] box-border max-w-full shrink-0">
        <div className="flex-1 flex items-center gap-[1.25rem] max-w-full mq1050:flex-wrap">
          {commonButtonItems.map((item, index) => (
            <CommonButton
              key={index}
              variant={item.variant}
              variant2={item.variant2}
              variant3={item.variant3}
              prop={item.prop}
              endIcon={item.endIcon}
              startIcon={item.startIcon}
              iconActionPlasHeight={item.iconActionPlasHeight}
              iconActionPlasFlex={item.iconActionPlasFlex}
              variant1={item.variant1}
              showArrow={item.showArrow}
              arrowHeight={item.arrowHeight}
              arrowWidth={item.arrowWidth}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

ContactSection.propTypes = {
  className: PropTypes.string,
};

export default ContactSection;