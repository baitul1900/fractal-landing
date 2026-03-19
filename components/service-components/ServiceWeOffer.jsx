"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "../layouts/SectionWrapper";
import ServiceContent from "./service-offer-content/ServiceContent";
import { renderTextWithHighlight } from "@/util/helper";


// --- Accordion Item Component ---
const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className={style.accordionItemContainer}>
      <button onClick={onClick} className={style.accordionButton}>
        <h4 className={style.accordionTitle}>{title}</h4>
        <div
          className={`${style.accordionIconContainer} ${isOpen ? style.accordionIconOpen : style.accordionIconHover
            }`}
        >
          {/* Arrow Icon */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`${style.accordionSvg} ${isOpen ? style.accordionSvgOpen : style.accordionSvgClosed
              }`}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className={style.accordionDescription}>
              {Array.isArray(content) ? (
                content?.map((item, index) => (
                  <ServiceContent key={index} content={item} />
                ))
              ) : (
                <ServiceContent content={content} />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main Component ---
export default function ServiceWeOffer({
  headerText = {
    fullText: "What We Can Do For You Service We Offer",
    highlight: "Service We Offer",
  },
  subtext = "We design engaging, high-performance digital experiences that turn users into customers and products into success stories. Whether it’s SaaS, e-commerce, or AI/Web3, we create UX that boosts revenue, maximizes retention, and drives real growth.",
  buttonText = "Become a Client",
  services = [],
}) {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SectionWrapper className={style.section}>
      <div className={style.mainContainer}>
        {/* Left: Button */}
        <div className={style.buttonContainer}>
          <button className={style.ctaButton}>
            <span className={style.ctaButtonText}>{buttonText}</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0e121d"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </button>
        </div>

        {/* Right: Content Area */}
        <div className={style.contentArea}>
          <div className={style.headerSubtextContainer}>
            <h3 className={style.headerText}>
              {renderTextWithHighlight(
                headerText.fullText,
                headerText.highlight,
                style.highlightText
              )}
            </h3>

            <div className={style.subtext}>{subtext}</div>
          </div>

          <div className={style.accordionList}>
            {services?.map((service, index) => (
              <AccordionItem
                key={service.id}
                title={service.title}
                content={service.content}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

const style = {
  section: "bg-[#0F0D14] md:py-[100px] py-[52px]",
  headerText:
    "text-[32px] text-left md:text-[64px] font-['Bricolage_Grotesque'] leading-[1.1] font-bold text-[#F8F7FC]",
  highlightText:
    "bg-gradient-to-r from-[#B7E92B] to-[#FAFFEB] bg-clip-text text-transparent font-['Bricolage_Grotesque'] text-[32px] md:text-[64px] font-bold leading-[38.4px] md:leading-[76.8px]",
  accordionTitle:
    "text-[#F2EFFA] text-[24px] md:text-[40px] font-['Bricolage_Grotesque'] font-semibold leading-[32px] md:leading-normal transition-colors duration-300 group-hover:text-[#B7E92B]",
  accordionItemContainer: "border-b border-[#2d2d39] last:border-none",
  accordionButton:
    "w-full flex items-center justify-between py-6 md:py-8 text-left group focus:outline-none",
  accordionIconContainer:
    "relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#2d2d39] transition-all duration-300",
  accordionIconOpen: "bg-white border-white",
  accordionIconHover: "group-hover:border-[#B7E92B]",
  accordionSvg: "w-5 h-5 md:w-6 md:h-6 transition-transform duration-300",
  accordionSvgOpen: "text-black rotate-180",
  accordionSvgClosed: "text-white",
  accordionDescription: "pb-8 max-w-[95%]", // Removed text styling here as it's now handled by the child component
  mainContainer:
    "flex flex-col md:flex-row justify-between items-start md:gap-x-16 gap-10",
  buttonContainer: "md:sticky md:top-24 flex-shrink-0",
  ctaButton:
    "px-6 py-3 bg-white rounded-full inline-flex justify-center items-center gap-2 transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]",
  ctaButtonText:
    "text-[#0e121d] text-sm md:text-base font-semibold font-['Inter']",
  contentArea: "w-full md:w-4/6",
  headerSubtextContainer: "mb-12 md:mb-16 border-b border-[#2d2d39] pb-10",
  subtext:
    "mt-6 text-[#bab3ce] text-lg md:text-xl font-medium font-['Inter'] leading-relaxed md:w-[90%]",
  accordionList: "w-full",
};