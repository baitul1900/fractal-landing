import React from "react";
import SectionWrapper from "../layouts/SectionWrapper";
import { renderTextWithHighlight } from "@/util/helper";
import Image from "next/image";

// Import images
import cardOneImg from "../../public/images/service-ux/card-one.webp";
import cardtImg from "../../public/images/service-ux/card-2.webp";
import cardthrImg from "../../public/images/service-ux/card-3.webp";
import cardfourImg from "../../public/images/service-ux/card-4.webp";
import cardFiveImg from "../../public/images/service-ux/card-5.webp";

const defaultPageData = {
  headerText: {
    fullText: "Struggling to Find the Right Design Partner?",
    highlight: "Right Design Partner?",
  },
  subText: "We get it—it's frustrating, and here’s why",
  cards: [
    {
      id: 1,
      title: "Vision Misalignment",
      description:
        "You need a partner who truly understands your goals, not just another 'designer.'",
      image: cardOneImg,
    },
    {
      id: 2,
      title: "Generic Solutions",
      description:
        "Industry expertise matters. Without it, designs miss your unique edge.",
      image: cardtImg,
    },
    {
      id: 3,
      title: "Communication Breakdowns",
      description:
        "Ever feel like your team's in the dark? Poor communication slows everything down.",
      image: cardthrImg,
    },
    {
      id: 4,
      title: "Budget vs. Quality Dilemma",
      description:
        "Finding the balance between cost and great design is harder than it sounds.",
      image: cardfourImg,
    },
    {
      id: 5,
      title: "Freelancer Risk",
      description:
        "Freelancers can be great, but can you rely on them for consistency and delivery?",
      image: cardFiveImg,
    },
  ],
};

const StruggleCard = ({ title, description, image }) => {
  return (
    <div className="bg-[#181520] border border-[#232329] rounded-[20px] p-6 md:p-8 flex flex-col items-start gap-4 md:gap-6 hover:border-[#3E3E4A] transition-colors duration-300 h-full">
      <div className="w-10 h-10 md:w-12 md:h-12 relative flex-shrink-0">
        <Image src={image} alt={title} fill className="object-contain" />
      </div>
      <div>
        <h4 className="text-white font-['Bricolage_Grotesque'] text-lg md:text-xl font-bold mb-2 md:mb-3">
          {title}
        </h4>
        <p className="text-[#94969C] text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function ServiceStruggle({
  headerText = defaultPageData.headerText,
  subText = defaultPageData.subText,
  cards = defaultPageData.cards,
}) {
  // Split cards for the layout: Top 2, Bottom 3
  const topRowCards = (cards || []).slice(0, 2);
  const bottomRowCards = (cards || []).slice(2);

  return (
    <SectionWrapper className={style.sectionstyle}>
      {/* Header Section */}
      <div className="w-full md:w-3/4 mb-12 md:mb-16">
        <h3 className={style.headerText}>
          {renderTextWithHighlight(
            headerText.fullText,
            headerText.highlight,
            style.highlightText
          )}
        </h3>
        <p className={style.subStyle}>{subText}</p>
      </div>

      {/* Layout Grid */}
      <div className="flex flex-col gap-6">
        {/* Top Row: 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topRowCards.map((card) => (
            <StruggleCard
              key={card.id}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          ))}
        </div>

        {/* Bottom Row: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bottomRowCards.map((card) => (
            <StruggleCard
              key={card.id}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

const style = {
  sectionstyle: "bg-[#0F0D14] md:py-[100px] py-[52px]",
  headerText:
    "text-[32px] md:text-[64px] font-['Bricolage_Grotesque'] leading-[1.1] font-bold text-[#F8F7FC]",
  highlightText:
    "bg-gradient-to-r from-[#B7E92B] to-[#FAFFEB] bg-clip-text text-transparent font-['Bricolage_Grotesque'] text-[32px] md:text-[64px] font-bold leading-[38.4px] md:leading-[76.8px]",
  subStyle:
    "text-[#bab3ce] text-lg md:text-2xl font-medium font-['Inter'] leading-relaxed mt-4 md:mt-6 max-w-[800px]",
};
