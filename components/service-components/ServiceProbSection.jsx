import React from "react";
import SectionWrapper from "../layouts/SectionWrapper";
import { renderTextWithHighlight } from "@/util/helper";
import RevealCard from "../ui/RevealCard";
import Image from "next/image";
import GlobalSlider from "../ui/GlobalSlider";

// Import your images here


export default function ServiceProbSection({ data = probSectionData, isMobileApp = false }) {
  const { headerText, cards, badgeText, subText, subText2 } = data;

  // Determine if this is the System Architecture page to hide the button and use list layout
  const isSystemArch =
    headerText?.fullText?.toLowerCase().includes("architecture") ||
    headerText?.fullText?.toLowerCase().includes("consulting") ||
    headerText?.fullText?.toLowerCase().includes("governance") ||
    headerText?.fullText?.toLowerCase().includes("analytics") ||
    headerText?.fullText?.toLowerCase().includes("security") ||
    headerText?.fullText?.toLowerCase().includes("iot") ||
    headerText?.fullText?.toLowerCase().includes("cloud") ||
    headerText?.fullText?.toLowerCase().includes("custom enterprise");
  const useListLayout = isMobileApp || isSystemArch;
  const showCTAButton = !isSystemArch;

  return (
    <div className="bg-[#F0EDF8] md:py-[100px] py-[52px]">
      <SectionWrapper className="!py-0">
        {/* !py-0 overrides default padding so we control it with the outer div */}

        {/* Section Header */}
        <div className="mb-12 md:mb-20">
          {isSystemArch ? (
            <div className="flex flex-col md:flex-row gap-5 md:gap-[274px] items-start">
              {badgeText && (
                <div className="shrink-0 px-4 py-2 md:px-6 md:py-3 rounded-full border border-[#0f0d14]/20 text-[#0f0d14] text-base md:text-xl font-medium font-['Inter']">
                  {badgeText}
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-[32px] md:text-[48px] md:max-w-[856px] leading-[38px] md:leading-[58px] font-bold text-[#0f0d14] mb-6">
                  {headerText.fullText}
                </h3>
                {subText && (
                  <p className="text-[#534A6D] text-base leading-5 md:text-2xl md:leading-[34px] md:pr-20 font-medium">
                    {subText}
                  </p>
                )}
                {subText2 && (
                  <p className="text-[#534A6D] text-base leading-5 md:text-2xl md:leading-[34px] md:pr-20 font-medium">
                    {subText2}
                  </p>
                )}
              </div>
            </div>
          ) : (
            <h3 className={style.headerText}>
              {renderTextWithHighlight(
                headerText.fullText,
                headerText.highlight,
                style.highlightText
              )}
            </h3>
          )}
        </div>
      </SectionWrapper>

      {/* Slider Section */}
      <GlobalSlider
        isDraggable={isSystemArch}
        dragOnMobileOnly={true}
        hideButtonsOnMobile={isSystemArch}
        hideButtonsIfFew={isSystemArch && cards?.length <= 3}
        centerIfFew={isSystemArch && cards?.length <= 3}
      >
        {cards?.map((card) => (
          <RevealCard
            key={card.id}
            className="w-full h-full bg-white"
            title={card.title}
            initialContent={
              <div className="flex flex-col h-full relative">
                <div className="grow flex items-center justify-center pb-32">
                  <div className="relative w-24 h-24 md:w-32 md:h-32 opacity-80">
                    <Image
                      src={card.iconImage}
                      alt="Icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            }
            // --- REVEALED CONTENT RENDER ---
            revealedContent={
              <div className="flex flex-col h-full text-[#0E121D]">
                <h3 className="text-xl font-bold mb-4 border-b border-gray-100 pb-3 pr-2">
                  {card.title}
                </h3>

                {useListLayout ? (
                  <div className="mb-4">
                    <h4 className="text-[#332A44] text-base font-medium mb-6 leading-normal">
                      {card.fixHeadline}
                    </h4>
                    <ul className="">
                      {card.details?.map((detail, idx) => (
                        <li key={idx} className="flex gap-3 items-start">
                          <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#332A44] shrink-0" />
                          <span className="text-[#332A44] text-base font-normal">
                            {detail.title}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <>
                    <div className="inline-flex justify-start items-center gap-0.5 mb-4">
                      <div className="w-6 h-6 relative overflow-hidden">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.021 2L20 3.92998L19.9896 4.739L19.992 9.11169L19.9975 10.3032C20.0238 15.4422 17.2339 18.5921 14.9468 20.3091L14.4294 20.6803L13.7067 21.1448L13.2736 21.3953L12.8901 21.6004L12.3082 21.8798L12.021 22L11.7209 21.8743L11.4526 21.7503L11.114 21.582L10.6068 21.3068L10.0239 20.9567L9.51587 20.6207C7.24956 19.0543 4.23311 16.0393 4.01275 11.0042L4 10.4142V3.9417L12.021 2ZM16.7411 9.67138L12.2117 14.6713L11.4706 15.4895L10.7294 14.6713L8.25887 11.9441L9.74111 10.6013L11.4706 12.5105L15.2589 8.32859L16.7411 9.67138Z"
                            fill="#00A563"
                          />
                        </svg>
                      </div>
                      <div className="justify-start text-[#53496d] text-xl font-semibold font-['Inter'] leading-[30px]">
                        How We Fix It
                      </div>
                    </div>

                    <div className="space-y-4 mb-auto">
                      {card.details?.map((detail, idx) => (
                        <div key={idx} className="flex gap-2 items-start">
                          <div className="mt-1 w-5 h-5 rounded-full bg-[#ECFDF3] flex items-center justify-center shrink-0">
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                            >
                              <path
                                d="M10 3L4.5 8.5L2 6"
                                stroke="#12B76A"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="font-semibold text-sm">
                              {detail.title}
                            </p>
                            <p className="text-xs text-gray-500">
                              {detail.subtitle}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {showCTAButton && (
                  <div className="mt-auto pt-6">
                    <button className="cursor-pointer bg-[#0f0d14] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-black transition-colors w-fit">
                      Let’s Fix Your Funnel!
                    </button>
                  </div>
                )}
              </div>
            }
          />
        ))}
      </GlobalSlider>
    </div>
  );
}

const style = {
  headerText:
    "mx-auto text-left md:text-center md:w-4/6 w-full text-[32px] md:text-[64px] font-['Bricolage_Grotesque'] md:leading-[70px] leading-none font-bold text-[#0f0d14] my-2",
  highlightText: "text-[#5d2be9]",
};
