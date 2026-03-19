import React from "react";
import SectionWrapper from "@/components/layouts/SectionWrapper";
import Button from "@/components/ui/Button";

/**
 * ShopHero Component
 * 
 * A specialized hero section for the Shop page with a centered layout 
 * and a soft gradient background.
 */
export default function ShopHero({
    headerText,
    subText,
    buttonText,
    buttonUrl,
    heroBackgroundClass = "home-hero"
}) {
    return (
        <header className={`relative pb-8 pt-[80px] md:pb-[140px] overflow-hidden bg-[#F4F1FF] ${heroBackgroundClass}`}>
            {/* Soft decorative blur circles */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] rounded-full bg-[#E5DEFF] blur-[100px] opacity-50 z-0" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] rounded-full bg-[#F3E8FF] blur-[100px] opacity-50 z-0" />

            <SectionWrapper className="relative z-10">
                <div className="flex flex-col items-center text-center max-w-[9380px] mx-auto">
                    {/* Main Header */}
                    <h1 className="text-[32px] md:text-[80px] font-['Bricolage_Grotesque'] leading-[38px] md:leading-[70px] font-bold text-[#0f0d14] mb-6">
                        {headerText.fullText}
                    </h1>

                    {/* Subtext */}
                    <p className="text-base md:text-[22px] font-normal leading-5 md:leading-7 text-[#5F587A] mb-10 max-w-[938px]">
                        {subText.fullText}
                    </p>

                    {/* CTA Button */}
                    <div className="flex justify-center">
                        <Button variant="fill" href={buttonUrl} className="group flex items-center gap-2">
                            {buttonText}
                            <span className="transition-transform group-hover:translate-x-1">→</span>
                        </Button>
                    </div>
                </div>
            </SectionWrapper>
        </header>
    );
}
