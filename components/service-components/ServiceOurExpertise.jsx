"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "../layouts/SectionWrapper";
import { renderTextWithHighlight } from "@/util/helper";
import ExpertiseContent from "./service-offer-content/ExpertiseContent";



const defaultAccordionData = [
  {
    id: 1,
    title: "Design Excellence & User Engagement",
    contentProps: {
      subHeader: "Crafting Seamless, High-Impact User Experiences",
      description: "We specialize in creating intuitive, user-centric interfaces that blend aesthetics with functionality to captivate users and drive conversions. From early-stage prototypes to polished interfaces, our designs focus on user engagement and optimizing every step of the user journey.",
      excelTitle: "What We Excel In",
      excelItems: [
        { label: "/User-Centered Design –", text: "Focusing on creating interfaces that prioritize user needs and behaviors." },
        { label: "/Prototyping & Testing –", text: "Using tools like Figma, Adobe XD, and Sketch for iterative design and usability testing to ensure a seamless experience." },
        { label: "/Responsive Design –", text: "Crafting designs that work seamlessly across all devices, from desktops to mobile apps." }
      ],
      highlightText: "Our UI/UX design solutions are focused on maximizing user engagement and ensuring that your platform is not only visually appealing but also intuitive and conversion-focused."
    }
  },
  {
    id: 2,
    title: "Scalable UI/UX & AI for Growth & Conversion",
    contentProps: {
      subHeader: "Scaling with Intelligence",
      description: "We build systems that grow with you, utilizing AI to predict user behavior and optimize conversion paths dynamically.",
      excelTitle: "Core Competencies",
      excelItems: [
        { label: "/Scalable Systems –", text: "Design systems that ensure consistency as you grow." },
        { label: "/AI Integration –", text: "Leveraging machine learning for personalized user experiences." }
      ],
      highlightText: "Growth isn't just about traffic, it's about retaining users through smart, scalable design architecture."
    }
  },
  {
    id: 3,
    title: "Continuous Optimization & Innovation",
    contentProps: {
      subHeader: "Never Stop Improving",
      description: "Digital products are never 'done'. We provide ongoing analysis and iterative improvements based on real user data.",
      excelTitle: "Our Process",
      excelItems: [
        { label: "/A/B Testing –", text: "Data-driven decisions to find what works best." },
        { label: "/Feedback Loops –", text: "Integrating user feedback directly into the design cycle." }
      ],
      highlightText: "Innovation is a continuous process of learning, testing, and refining to stay ahead of the curve."
    }
  }
];

// --- Accordion Item Component ---
const AccordionItem = ({ title, contentProps, isOpen, onClick }) => {
  return (
    <div className="border-b border-[#E4E7EC] last:border-none">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-4 text-left group focus:outline-none"
      >
        <h4 className="text-[#0f0d14] text-lg md:text-[24px] font-bold font-['Bricolage_Grotesque']">
          {title}
        </h4>
        <div
          className={`shrink-0 flex items-center justify-center w-10 h-10 rounded-full border transition-colors duration-300 ${isOpen
              ? "bg-[#F9F5FF] border-[#E9D7FE] text-[#5d2be9]" // Minus state style
              : "bg-white border-[#E4E7EC] text-[#667085] hover:bg-gray-50" // Plus state style
            }`}
        >
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          )}
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
            {/* Pass all content data to the separate component */}
            <ExpertiseContent {...contentProps} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main Component ---
const expertiseData = {
  headerText: {
    fullText: "Our Expertise AI-Powered, Conversion-Focused UI/UX",
    highlight: "AI-Powered, Conversion-Focused UI/UX",
  },
};

export default function ServiceOurExpertise({
  headerText = expertiseData.headerText,
  accordionItems = defaultAccordionData, // New prop for accordion data
}) {
  const [openIndex, setOpenIndex] = useState(0); // Default first one open

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SectionWrapper className={style.sectionWrapper}>
      <div className="text-center mb-12">
        <h3 className={style.headerText}>
          {renderTextWithHighlight(
            headerText.fullText,
            headerText.highlight,
            style.highlightText
          )}
        </h3>
      </div>

      {/* Accordion Section */}
      <div className="">
        {accordionItems.map((item, index) => (
          <AccordionItem
            key={item.id}
            title={item.title}
            contentProps={item.contentProps}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

const style = {
  sectionWrapper: "bg-[#Fff] md:pb-[100px] pb-[52px]",
  headerText:
    "md:w-4/6 w-full text-left md:text-center md:mx-auto text-[28px] md:text-[64px] font-['Bricolage_Grotesque'] md:leading-[70px] leading-none font-bold text-[#0f0d14] my-2",
  highlightText: "text-[#5d2be9]",
};