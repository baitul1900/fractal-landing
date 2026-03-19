"use client";
import React from "react";
import SectionWrapper from "../layouts/SectionWrapper";

const CapabilityPill = ({ label, iconPath }) => {
    return (
        <div className="flex items-center gap-3 px-3 py-2 rounded-full border border-white/10 bg-[#1D1B20B2] hover:border-white/20 transition-all group">
            <div className="flex items-center justify-center w-8 h-8 md:w-[50px] md:h-[50px] rounded-full bg-white shrink-0 overflow-hidden">
                {iconPath && (
                    <img
                        src={iconPath}
                        alt={label}
                        className="w-5 h-5 md:w-[30px] md:h-[30px] object-contain"
                    />
                )}
            </div>
            <span className="text-white text-base md:text-lg leading-[30px] font-medium font-['Inter'] whitespace-nowrap">
                {label}
            </span>
        </div>
    );
};

export default function ServiceCapabilities({
    badgeText,
    headerText,
    categories = [],
}) {
    return (
        <section className="bg-[#0F0D14] py-12 md:py-24">
            <SectionWrapper className="py-0!">
                {/* Header Layout: Centered */}
                <div className="flex flex-col items-center text-center mb-12 md:mb-20">
                    {/* Badge */}
                    {badgeText && (
                        <div className="p-px rounded-full bg-linear-to-r from-[#B7E92B] to-[#FAFFEB] mb-6 md:mb-10">
                            <div className="px-4 py-2 md:px-6 md:py-3 rounded-full bg-[#0F0D14] w-fit">
                                <span className="bg-linear-to-r from-[#B7E92B] to-[#FAFFEB] bg-clip-text text-transparent text-base md:text-xl leading-6 md:leading-0 font-medium md:uppercase tracking-wider">
                                    {badgeText}
                                </span>
                            </div>
                        </div>
                    )}

                    {/* Title */}
                    <h2 className="text-[32px] md:text-[48px] leading-[38px] md:leading-[58px] font-bold text-white font-['Bricolage_Grotesque'] md:font-['Inter'] max-w-[898px]">
                        {headerText.fullText}
                    </h2>
                </div>

                {/* Categories List */}
                <div className="flex flex-col">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className={`py-8 md:py-12 border-b border-white/10 last:border-0 ${index === 0 ? "pt-0" : ""}`}
                        >
                            <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
                                {/* Category Title */}
                                <div className="">
                                    <h3 className="text-[26px] md:text-[28px] leading-[32px] md:leading-10 font-semibold text-white font-['Bricolage_Grotesque'] md:max-w-[304px]">
                                        {category.title}
                                    </h3>
                                </div>

                                {/* Capabilities Pills */}
                                <div className="flex flex-wrap w-full md:max-w-[970px] gap-[23px] md:flex-1">
                                    {category.capabilities.map((cap, capIdx) => (
                                        <CapabilityPill
                                            key={capIdx}
                                            label={cap.label}
                                            iconPath={cap.iconPath}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionWrapper>
        </section>
    );
}
