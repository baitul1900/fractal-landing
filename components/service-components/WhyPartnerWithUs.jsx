import React from "react";
import Image from "next/image";
import SectionWrapper from "../layouts/SectionWrapper";
import { renderTextWithHighlight } from "@/util/helper";
import logo from "../../public/images/service-ux/ideatedlab.webp";
import ledimg from "../../public/images/service-ux/expert-led.webp";
import highImpactImg from "../../public/images/service-ux/high-impact.svg";
import frictionlessImg from "../../public/images/service-ux/friction-less.svg";
import seamlessImg from "../../public/images/service-ux/seamless.svg";
import Button from "../ui/Button";

const pageDefaultData = {
  headerText: {
    fullText: "Fix What Slows You. Strengthen What Drives You.",
    highlight: "What Drives You.",
  },
  // Added card data matching image_0b0c63.webp
  cards: [
    {
      id: 1,
      icon: ledimg,
      title: "Expert-Led, ROI-Driven Design",
      description: (
        <>
          We create user-first experiences that{" "}
          <strong className="text-[#0E121D]">convert and engage.</strong>
        </>
      ),
    },
    {
      id: 2,
      icon: highImpactImg,
      title: "High-Impact, Future-Ready Solutions",
      description: (
        <>
          Performance-optimized, SEO-friendly, and{" "}
          <strong className="text-[#0E121D]">designed to grow.</strong>
        </>
      ),
    },
    {
      id: 3,
      icon: frictionlessImg,
      title: "Frictionless Execution",
      description: <>No delays, no surprises—just results.</>,
    },
    {
      id: 4,
      icon: seamlessImg,
      title: "Seamless, Scalable Collaboration",
      description: (
        <>
          Hire us for a project or an{" "}
          <strong className="text-[#0E121D]">ongoing partnership.</strong>
        </>
      ),
    },
  ],
};

export default function WhyPartnerWithUs({ pageData = pageDefaultData }) {
  return (
    <SectionWrapper className="bg-[#F0EDF8] md:py-[100px] py-[52px]">
      {/* Section Header */}
      <div className="md:text-center text-left mb-12 md:mb-16">
        <h3 className={style.headerText}>
          {renderTextWithHighlight(
            pageData.headerText.fullText,
            pageData.headerText.highlight,
            style.highlightText
          )}
        </h3>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        {pageData.cards.map((card) => (
          <div key={card.id} className={style.card}>
            {/* Icon */}
            <div className="mb-3 md:mb-6">
              <Image
                src={card.icon}
                alt={card.title}
                width={32}
                height={32}
                className="object-contain md:w-12 md:h-12 w-8 h-8"
              />
            </div>

            {/* Text Content */}
            <div>
              <h4 className={style.cardTitle}>{card.title}</h4>
              <p className={style.cardDescription}>{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#342758]/30 mt-8 rounded-3xl shadow-[inset_0px_1px_8px_4px_rgba(149,119,233,0.50)] px-5 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex justify-center items-center gap-2">
          <Image
            src={logo}
            alt="Ideated Lab Logo"
            width={48}
            height={48}
            className="rounded-full"
          />

          <h1 className="text-[#0F0D14] md:text-[#f8f7fc] md:text-2xl text-xl font-semibold font-['Bricolage_Grotesque'] leading-8">
            Let’s Partner to Boost Conversions and Growth!
          </h1>
        </div>

        <div className="w-full md:w-auto">
          <Button variant="fill" size="lg" href="/contact" className="w-full md:w-auto">
            Book a call
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}

const style = {
  headerText:
    "md:w-4/6 w-full mx-auto text-[28px] md:text-[64px] font-['Bricolage_Grotesque'] md:leading-[70px] leading-none font-bold text-[#0f0d14] my-2 whitespace-pre-line md:text-center text-left",
  highlightText: "bg-gradient-to-r from-[#5d2be9] to-[#a78bfa] bg-clip-text text-transparent",

  // New Card Styles
  card: "bg-white rounded-2xl md:rounded-[32px] px-[10px] py-3 md:p-8 flex flex-col justify-between h-full hover:shadow-lg transition-shadow duration-300",
  cardTitle: "text-[#534A6D] text-sm md:text-xl font-bold leading-tight mb-2 md:mb-4 whitespace-pre-line",
  cardDescription: "text-[#6B7280] text-xs md:text-base leading-relaxed",
};
