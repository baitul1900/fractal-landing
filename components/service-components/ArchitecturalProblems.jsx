"use client";
import React from "react";
import SectionWrapper from "../layouts/SectionWrapper";

const ProblemCard = ({ title, description }) => {
    return (
        <div className="bg-[#FAF9FD] p-6 rounded-xl h-full flex flex-col justify-start">
            <h3 className="text-[22px] md:text-[28px] font-bold text-[#0F0D14] mb-8 md:mb-4 leading-[34px] md:max-w-[582px]">
                {title}
            </h3>
            <p className="text-xl md:text-2xl font-normal text-[#534A6D] leading-normal md:leading-[40px] font-['Inter'] md:max-w-[582px]">
                {description}
            </p>
        </div>
    );
};

export default function ArchitecturalProblems({
    badgeText,
    headerText,
    problems = [],
}) {
    return (
        <section className="bg-white py-12 md:py-24">
            <SectionWrapper className="py-0!">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center gap-4 mb-12 md:max-w-[848px] mx-auto">
                    {badgeText && (
                        <div className="px-4 py-2 md:px-6 md:py-3 rounded-full border border-[#5D2BE9] text-[#5D2BE9] text-base leading-6 md:text-xl md:leading-normal font-medium w-fit bg-white">
                            {badgeText}
                        </div>
                    )}
                    <h2 className="text-[32px] md:text-[48px] leading-[38px] md:leading-[58px] font-bold text-[#0F0D14] font-['Bricolage_Grotesque'] md:font-['Inter']">
                        {headerText}
                    </h2>
                </div>

                {/* Problems Grid */}
                <div className="flex flex-col md:grid md:grid-cols-2 gap-5">
                    {problems.map((problem) => (
                        <ProblemCard
                            key={problem.id}
                            title={problem.title}
                            description={problem.description}
                        />
                    ))}
                </div>
            </SectionWrapper>
        </section>
    );
}
