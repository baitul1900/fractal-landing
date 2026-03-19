import React from "react";
import Button from "../ui/Button"; // Adjust path as needed
import { CONTACT } from "@/util/pageRoute"; // Adjust path as needed
import { renderTextWithHighlight } from "@/util/helper"; // Adjust path as needed
import Image from "next/image";
import iconOne from "../../public/images/service-ux/fluent.webp"
import iconTwo from "../../public/images/service-ux/github-project.webp"

// --- 1. New Feature Card Component ---
const FeatureCard = ({
  icon = "https://placehold.co/40x40/png", // Default placeholder icon
  text = "Default Feature Text",
}) => {
  return (
    <div className="flex items-center gap-4  rounded-full p-2 pr-6 ">
      {/* Icon Wrapper */}
      <div className="w-12 h-12 shrink-0 rounded-full bg-white flex items-center justify-center border border-[#EBEAED]">
        <Image
          src={icon}
          alt="icon"
          width={24}
          height={24}
          className="opacity-70"
        />
      </div>
      {/* Text */}
      <p className="text-[#0e121d] text-sm md:text-base font-medium leading-tight text-left">
        {text}
      </p>
    </div>
  );
};

// --- 1.2 New Stat Card Component ---
const StatCard = ({ number, label }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-[22px] md:text-[28px] font-bold text-[#0e121d] leading-none mb-1">
        {number}
      </h3>
      <p className="text-[#857d9e] text-sm md:text-base font-medium text-center">
        {label}
      </p>
    </div>
  );
};

// --- Updated Page Data with New Features ---
const pageData = {
  badgeText: "Creating High-Impact UX with 40% More Conversions",
  headerText: {
    fullText: "Result-Driven UI/UX – Empowering Brands with Scalable",
    highlight: "Result-Driven UI/UX",
  },
  subText: {
    fullText:
      "Frustrated with poor user engagement and high drop-off rates? Your users deserve an experience that captivates, engages, and converts. We design UI/UX solutions that tackle usability challenges head-on, ensuring seamless, intuitive interfaces that drive long-term user satisfaction, engagement, and business growth.",
    highlight: [
      "poor user engagement",
      "tackle usability challenges",
      "drive long-term user satisfaction",
      "and business growth.",
    ],
  },
  buttonText: "Let’s craft UI/UX that delivers results",
  buttonUrl: CONTACT,
  featureOne: {
    text: "Our Unique framework + AI deliver results 2X faster",
    icon: iconOne, // Placeholder for Stack/AI icon
  },
  featureTwo: {
    text: "Based on 100% Job Success on 50+ Projects",
    icon: iconTwo, // Placeholder for Grid/Success icon
  },
  stats: [],
};

const style = {
  header:
    "md:pt-[180px] pt-30 home-hero md:pb-[179px] pb-[65px] overflow-hidden h-full bg-[#F4F1FF]", // Added bg color to see the white cards better
  container:
    "container mx-auto px-4 md:px-[74px] flex flex-col items-center text-center",
  badge:
    "px-2 md:px-5 py-2 bg-white/50 rounded-full backdrop-blur-[10px] inline-flex justify-center items-center gap-2.5 mb-6",
  badgeDot: "md:size-3 size-3 bg-[#5d2be9] rounded-full",
  badgeText:
    "text-center justify-start text-[#0e121d] md:text-lg text-sm font-normal font-['Inter'] leading-[18px] md:leading-6 max-w-[336px] px-4 md:px-0 md:max-w-none",
  headerText:
    "md:max-w-[1012px] w-full mx-auto text-[32px] md:text-[70px] font-['Bricolage_Grotesque'] md:leading-[70px] leading-none font-bold text-[#0f0d14] md:my-4 my-2",
  highlightText: "text-[#5d2be9]",
  subText:
    "w-full md:max-w-[1012px] mx-auto md:text-lg text-base font-medium md:leading-[27px] leading-6 text-[#857d9e]",
  subTextHighlight: "text-[#0f0d14]",
  buttonContainer: "mt-10 w-full",
  buttonWrapper:
    "flex flex-col sm:flex-row items-center sm:items-center justify-center gap-2 md:gap-4",
  // New Style for Feature Section
  featuresWrapper:
    "mt-12 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-24 w-full",
};

export default function ServiceHero({
  badgeText = pageData.badgeText,
  headerText = pageData.headerText,
  subText = pageData.subText,
  subText2 = null,
  buttonText = pageData.buttonText,
  buttonUrl = pageData.buttonUrl,
  featureOne = pageData.featureOne,
  featureTwo = pageData.featureTwo,
  stats = pageData.stats,
  heroBackgroundClass = "home-hero", // Default to home-hero, can be overridden
}) {
  const headerClassName = `md:pt-[180px] pt-30 ${heroBackgroundClass} md:pb-[179px] pb-[65px] overflow-hidden h-full bg-[#F4F1FF]`;

  return (
    <header className={headerClassName}>
      <div className={style.container}>
        {/* Badge */}
        <div className={style.badge}>
          <div className={style.badgeDot} />
          <div className={style.badgeText}>{badgeText}</div>
        </div>

        {/* Header Content */}
        <div className={style.headerContainer}>
          <h2 className={style.headerText}>
            {renderTextWithHighlight(
              headerText.fullText,
              headerText.highlight,
              style.highlightText
            )}
          </h2>
          <p className={`${style.subText} ${subText2 ? "md:whitespace-nowrap" : ""}`}>
            {renderTextWithHighlight(
              subText.fullText,
              subText.highlight,
              style.subTextHighlight
            )}
          </p>
          {subText2 && (
            <p className={`${style.subText}`}>
              {renderTextWithHighlight(
                subText2.fullText,
                subText2.highlight,
                style.subTextHighlight
              )}
            </p>
          )}
        </div>

        {/* CTA Button */}
        <div className={style.buttonContainer}>
          <div className={style.buttonWrapper}>
            <Button variant="fill" href={buttonUrl}>
              {buttonText}
            </Button>
          </div>
        </div>

        {/* --- 2. New Feature Cards Section --- */}
        <div className={style.featuresWrapper}>
          {stats && stats.length > 0 ? (
            stats.map((stat, index) => (
              <StatCard key={index} number={stat.number} label={stat.label} />
            ))
          ) : (
            <>
              <FeatureCard text={featureOne.text} icon={featureOne.icon} />
              <FeatureCard text={featureTwo.text} icon={featureTwo.icon} />
            </>
          )}
        </div>
      </div>
    </header>
  );
}