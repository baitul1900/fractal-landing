"use client";
import React from "react";
import SectionWrapper from "../layouts/SectionWrapper";
import GlobalSlider from "../ui/GlobalSlider";

export default function WhoWeServe({ data }) {
    if (!data) return null;
    const { badgeText, headerText, subText, subText2, cards } = data;

    return (
        <section className="bg-white py-16 md:py-24">
            <SectionWrapper className="!py-0">
                <div className="flex flex-col items-center text-center mb-12 md:mb-20">
                    {badgeText && (
                        <div className="inline-block px-5 py-2 rounded-full border border-[#5D2BE9] text-[#5D2BE9] text-base font-medium mb-6">
                            {badgeText}
                        </div>
                    )}
                    <h2 className="font-['Bricolage_Grotesque'] md:font-['Inter'] text-[32px] md:text-[48px] leading-[38px] md:leading-[58px] font-bold text-[#0f0d14] mb-6 max-w-[922px]">
                        {headerText}
                    </h2>
                    {subText && (
                        <p className="text-[#534A6D] font-['Inter'] text-base md:text-2xl md:max-w-[922px] font-normal leading-5 md:leading-[34px]">
                            {subText}
                        </p>
                    )}
                    {subText2 && (
                        <p className="text-[#534A6D] font-['Inter'] text-base md:text-2xl md:max-w-[922px] font-normal leading-5 md:leading-[34px]">
                            {subText2}
                        </p>
                    )}
                </div>

                {/* Desktop Grid */}
                <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {cards?.map((card) => (
                        <div
                            key={card.id}
                            className="bg-[#F8F9FF] p-5 md:p-6 rounded-[12px] md:rounded-[16px] transition-all flex flex-col"
                        >
                            <div
                                className="text-[#5D2BE9] mb-8"
                                dangerouslySetInnerHTML={{ __html: card.iconSvg }}
                            />
                            <h3 className="text-xl md:text-2xl font-bold w-full md:max-w-[368px] leading-[34px] text-[#0f0d14] mb-4 mt-auto">
                                {card.title}
                            </h3>
                            <p className="text-[#534A6D] text-base leading-5 md:leading-6 font-normal">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            {/* Mobile/Tablet Slider */}
            <div className="lg:hidden">
                <GlobalSlider
                    isDraggable={true}
                    dragOnMobileOnly={true}
                    showButtons={false}
                    centerIfFew={false}
                >
                    {cards?.map((card) => (
                        <div
                            key={card.id}
                            className="bg-[#F8F9FF] p-5 md:p-6 rounded-[32px] h-full flex flex-col"
                        >
                            <div
                                className="text-[#5D2BE9] mb-8"
                                dangerouslySetInnerHTML={{ __html: card.iconSvg }}
                            />
                            <h3 className="text-xl md:text-2xl font-bold text-[#0f0d14] mb-4 mt-auto">
                                {card.title}
                            </h3>
                            <p className="text-[#534A6D] text-sm leading-5 font-normal">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </GlobalSlider>
            </div>
        </section>
    );
}
