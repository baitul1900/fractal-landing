import React from "react";
import { renderTextWithHighlight } from "@/util/helper";

const style = {
    header:
        "md:pt-[180px] pt-30 home-hero md:pb-[140px] pb-[65px] overflow-hidden h-full bg-gradient-to-b from-[#F4F1FF] to-[#E0D8FF]",
    container:
        "container mx-auto px-4 md:px-[74px] flex flex-col items-center text-center",
    badge:
        "px-2 md:px-5 py-2 bg-white/50 rounded-full backdrop-blur-[10px] inline-flex justify-center items-center gap-2.5 mb-6",
    badgeDot: "md:size-3 size-3 bg-[#5d2be9] rounded-full",
    badgeText:
        "text-center justify-start text-[#0e121d] text-lg font-normal font-['Inter'] leading-6 px-4 md:px-0",
    headerContainer: "w-full mx-auto",
    headerText:
        "w-full md:max-w-[1044px] mx-auto text-[28px] md:text-[58px] font-['Inter'] md:leading-[70px] leading-tight font-bold text-[#867D9E] md:my-4 my-2",
    highlightText: "text-[#0E121D]",
    subText:
        "w-full md:max-w-[1044px] mx-auto md:text-[22px] text-base font-medium md:leading-[28px] leading-6 text-[#857d9e]",
    subTextHighlight: "text-[#0f0d14]",
};

export default function PortfolioHero({
    badgeText,
    headerText,
    subText,
}) {
    return (
        <header className={style.header}>
            <div className={style.container}>
                {/* Badge */}
                {/* {badgeText && (
                    <div className={style.badge}>
                        <div className={style.badgeDot} />
                        <div className={style.badgeText}>{badgeText}</div>
                    </div>
                )} */}
                <p className={style.badgeText}>{badgeText}</p>

                {/* Header Content */}
                <div className={style.headerContainer}>
                    <h1 className={style.headerText}>
                        {renderTextWithHighlight(
                            headerText.fullText,
                            headerText.highlight,
                            style.highlightText
                        )}
                    </h1>
                    <p className={style.subText}>
                        {renderTextWithHighlight(
                            subText.fullText,
                            subText.highlight,
                            style.subTextHighlight
                        )}
                    </p>
                </div>
            </div>
        </header>
    );
}
