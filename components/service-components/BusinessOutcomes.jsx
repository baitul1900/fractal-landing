"use client";
import React from "react";
import SectionWrapper from "../layouts/SectionWrapper";
import GlobalSlider from "../ui/GlobalSlider";

const OutcomeCard = ({ iconPath, title, description, width }) => {
    return (
        <div className="bg-white px-5 py-6 md:px-6 md:py-7 rounded-xl md:rounded-2xl transition-shadow h-full">
            {/* Icon */}
            {iconPath && (
                <div className="mb-10 md:mb-20">
                    <img
                        src={iconPath}
                        alt={title}
                        className="w-8 h-8 object-contain"
                    />
                </div>
            )}

            {/* Title */}
            <h3 className="text-[28px] font-bold text-[#0F0D14] mb-2 font-['Inter'] md:font-['Bricolage_Grotesque'] leading-6 md:leading-[34px]">
                {title}
            </h3>

            {/* Description */}
            <p className={`text-base md:text-lg text-[#534A6D] leading-6 md:leading-[27px] font-['Inter'] ${width}`}>
                {description}
            </p>
        </div>
    );
};

export default function BusinessOutcomes({
    badgeText,
    headerText,
    description1,
    description2,
    outcomes = [],
}) {
    return (
        <section className="bg-[#F0EDF8] py-12 md:py-24">
            <SectionWrapper className="py-0!">
                {/* Header: Desktop 2-column (Badge left, Title/Description right), Mobile Stacked */}
                <div className="flex flex-col md:flex-row gap-[22px] md:gap-[202px] mb-8 md:mb-16">
                    {/* Left Column: Badge */}
                    <div className="shrink-0">
                        {badgeText && (
                            <div className="px-4 py-2 md:px-6 md:py-3 rounded-full border border-[#867D9E] bg-white text-[#534A6D] text-sm md:text-base font-medium w-fit">
                                {badgeText}
                            </div>
                        )}
                    </div>

                    {/* Right Column: Title & Description */}
                    <div className="flex flex-col gap-4 md:gap-6 flex-1 md:max-w-[856px]">
                        {/* Title */}
                        <h2 className="text-[32px] md:text-[48px] leading-[38px] md:leading-[58px] font-bold text-[#0F0D14] font-['Bricolage_Grotesque'] md:font-['Inter']">
                            {headerText}
                        </h2>

                        {/* Descriptions */}
                        <div className="flex flex-col">
                            {description1 && (
                                <p className="text-base md:text-2xl text-[#534A6D] leading-5 md:leading-[34px] font-normal font-['Inter']">
                                    {description1}
                                </p>
                            )}
                            {description2 && (
                                <p className="text-base md:text-2xl text-[#534A6D] leading-5 md:leading-[34px] font-normal font-['Inter']">
                                    {description2}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Desktop Grid */}
                <div className="hidden md:grid md:grid-cols-6 md:auto-rows-fr gap-6">
                    {/* First Row: 3 cards (spanning 2 columns each) */}
                    {outcomes.slice(0, 3).map((outcome) => (
                        <div key={outcome.id} className="col-span-2">
                            <OutcomeCard
                                iconPath={outcome.iconPath}
                                title={outcome.title}
                                description={outcome.description}
                                width="md:max-w-[368px]"
                            />
                        </div>
                    ))}

                    {/* Second Row: 2 cards (spanning 3 columns each) */}
                    {outcomes.slice(3, 5).map((outcome) => (
                        <div key={outcome.id} className="col-span-3">
                            <OutcomeCard
                                iconPath={outcome.iconPath}
                                title={outcome.title}
                                description={outcome.description}
                                width="md:max-w-[586px]"
                            />
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            {/* Mobile/Tablet Slider */}
            <div className="md:hidden">
                <GlobalSlider
                    isDraggable={true}
                    dragOnMobileOnly={true}
                    showButtons={false}
                    centerIfFew={false}
                >
                    {outcomes.map((outcome) => (
                        <OutcomeCard
                            key={outcome.id}
                            iconPath={outcome.iconPath}
                            title={outcome.title}
                            description={outcome.description}
                            width=""
                        />
                    ))}
                </GlobalSlider>
            </div>
        </section>
    );
}
