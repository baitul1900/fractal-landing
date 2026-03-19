import React from "react";
import SectionWrapper from "../layouts/SectionWrapper";
import { renderTextWithHighlight } from "@/util/helper";

const defaultPageData = {
  headerText: {
    fullText: "Support & Collaboration – Partnering for Success",
    highlight: "Partnering for Success",
  },
  // Added card data matching image_0aeddd.webp
  cards: [
    {
      id: 1,
      number: "/01",
      title: "Full Transparency & Communication",
      description: "Clear, ongoing communication with direct access to the team.",
    },
    {
      id: 2,
      number: "/02",
      title: "Tailored Design Solutions",
      description: "Custom designs that align with your unique business goals.",
    },
    {
      id: 3,
      number: "/03",
      title: "Ongoing Support & Maintenance",
      description: "Continuous updates, performance optimization, and support.",
    },
    {
      id: 4,
      number: "/04",
      title: "Agile & Flexible Process",
      description: "Adaptable timelines and iterative development to suit evolving needs.",
    },
    {
      id: 5,
      number: "/05",
      title: "Scale Your Brand",
      description: "Scalable solutions for sustainable growth.",
    },
  ],
};

// --- Helper Card Component ---
const SupportCard = ({ number, title, description }) => (
  <div className={style.card}>
    <span className={style.cardNumber}>{number}</span>
    <div className="mt-8 md:mt-12">
      <h4 className={style.cardTitle}>{title}</h4>
      <p className={style.cardDescription}>{description}</p>
    </div>
  </div>
);

export default function SupportCollaboration({
  headerText = defaultPageData.headerText,
  cards = defaultPageData.cards,
}) {
  // Split cards to match the layout: 2 on top, 3 on bottom
  const topRow = (cards || []).slice(0, 2);
  const bottomRow = (cards || []).slice(2);

  return (
    <SectionWrapper className={style.sctionWrapper}>


      {/* Header */}
      <div className="w-full md:w-3/5 text-center mx-auto mb-12 md:mb-16">
        <h3 className={style.headerText}>
          {renderTextWithHighlight(
            headerText.fullText,
            headerText.highlight,
            style.highlightText
          )}
        </h3>
      </div>

      {/* Content Grid */}
      <div className="flex flex-col gap-6">
        {/* Top Row: 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topRow.map((card) => (
            <SupportCard
              key={card.id}
              number={card.number}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

        {/* Bottom Row: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bottomRow.map((card) => (
            <SupportCard
              key={card.id}
              number={card.number}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>


    </SectionWrapper>
  );
}

const style = {
  sctionWrapper: "bg-[#0F0D14] md:py-[100px] py-[52px]",
  headerText:
    "text-[32px] md:text-[64px] font-['Bricolage_Grotesque'] leading-[1.1] font-bold text-[#F8F7FC]",
  highlightText:
    "bg-gradient-to-r from-[#B7E92B] to-[#FAFFEB] bg-clip-text text-transparent font-['Bricolage_Grotesque'] text-[32px] md:text-[64px] font-bold leading-[38.4px] md:leading-[76.8px]",

  // Card Styles
  card: "bg-[#131316] border border-[#232329] rounded-[20px] p-8 flex flex-col justify-between hover:border-[#3E3E4A] transition-colors duration-300 min-h-[280px]",
  cardNumber: "text-[#94969C] text-sm font-medium font-mono",
  cardTitle: "text-white text-xl md:text-2xl font-bold mb-3",
  cardDescription: "text-[#94969C] text-sm md:text-base leading-relaxed",
};