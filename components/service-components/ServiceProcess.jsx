"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "../layouts/SectionWrapper";
import { renderTextWithHighlight } from "@/util/helper";
import ProcessContent from "./service-offer-content/ProcessContent";


// --- Default Data from Image ---
const defaultProcessData = {
  headerText: {
    fullText: "Design Process for Better Performance",
    highlight: "Design Process",
  },
  steps: [
    {
      id: 1,
      number: "01.",
      title: "Discovery & Strategy",
      duration: "4-6 Days",
      contentProps: {
        description: "We start by deeply understanding your brand, users, and market. Through user research, market analysis, and stakeholder workshops, we create a roadmap that aligns your business goals with user needs, ensuring every design decision is purposeful.",
        tags: ["Comprehensive research insights", "User personas & journey maps", "Actionable design strategy"],
        footerText: "A strategic foundation that aligns your vision with real user data, ensuring your UI/UX design is driven by both purpose and market relevance."
      }
    },
    {
      id: 2,
      number: "02.",
      title: "Ideation & Strategy",
      duration: "7-10 Days",
      contentProps: {
        description: "Brainstorming and conceptualizing core features to solve user problems effectively.",
        tags: ["Low-fidelity sketches", "User flow diagrams", "Information architecture"],
        footerText: "Turning insights into tangible concepts."
      }
    },
    {
      id: 3,
      number: "03.",
      title: "Prototyping & Testing",
      duration: "10-14 Days",
      contentProps: {
        description: "Creating interactive prototypes to validate workflows and usability before final polish.",
        tags: ["Interactive prototypes", "Usability testing", "Feedback iteration"],
        footerText: "Validating the experience with real users."
      }
    },
    {
      id: 4,
      number: "04.",
      title: "Design & Development Handoff",
      duration: "14-21 Days",
      contentProps: {
        description: "Finalizing high-fidelity UI and preparing assets for seamless developer implementation.",
        tags: ["Design system", "Component library", "Pixel-perfect handoff"],
        footerText: "Ensuring the vision matches the final product."
      }
    },
    {
      id: 5,
      number: "05.",
      title: "Launch & Continuous Optimization",
      duration: "Ongoing",
      contentProps: {
        description: "Monitoring performance post-launch and making data-driven improvements.",
        tags: ["A/B testing", "Heatmap analysis", "Performance tuning"],
        footerText: "Growth doesn't stop at launch."
      }
    },
    {
      id: 6,
      number: "05.", // Kept 05 as per image or 06
      title: "Post-Launch Support, Scaling & Growth",
      duration: "Ongoing",
      contentProps: {
        description: "Supporting your product as it scales with new features and user base growth.",
        tags: ["Feature expansion", "Scalable design updates", "Audit reviews"],
        footerText: "Long-term partnership for sustained success."
      }
    }
  ]
};

// --- Accordion Item Component ---
const AccordionItem = ({ number, title, duration, contentProps, isOpen, onClick }) => {
  return (
    <div className={`mb-4 overflow-hidden rounded-xl border transition-colors duration-300 ${isOpen ? "bg-[#131316] border-[#2D2D39]" : "bg-[#131316] border-transparent hover:border-[#2D2D39]"}`}>
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-6 py-5 text-left group focus:outline-none"
      >
        <div className="flex items-center gap-4 md:gap-6 overflow-hidden">
          {/* Number */}
          <span className="text-[#667085] font-mono text-lg md:text-xl font-medium shrink-0">
            {number}
          </span>

          <div className="flex flex-col md:flex-row md:items-center md:gap-4">
            {/* Title */}
            <h4 className="text-white text-lg md:text-xl font-semibold truncate">
              {title}
            </h4>

            {/* Duration Badge */}
            <span className="text-[#9E77ED] text-sm bg-[#9E77ED]/10 px-3 py-0.5 rounded text-center w-fit mt-1 md:mt-0">
              {duration}
            </span>
          </div>
        </div>

        {/* Arrow Icon */}
        <div className="shrink-0 ml-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`text-[#98A2B3] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          >
            <polyline points="6 9 12 15 18 9"></polyline>
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
            className="overflow-hidden px-6"
          >
            <ProcessContent {...contentProps} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main Component ---
export default function ServiceProcess({
  headerText = defaultProcessData.headerText,
  steps = defaultProcessData.steps,
  badgeText,
  subText,
  subText2,
  isArchitecture = false,
}) {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (isArchitecture) {
    return (
      <section className="bg-[#0F0D14] py-12 md:py-24">
        <SectionWrapper className="!py-0">
          {/* Header Layout: Desktop 2-column (Badge left, Title/Subtext right), Mobile Stacked */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-[262px] mb-9 md:mb-16">
            {/* Left Column: Badge */}
            <div className="shrink-0">
              {badgeText && (
                <div className="px-4 py-2 md:px-8 md:py-3 rounded-full border border-white/20 text-white text-base md:text-xl font-medium w-fit">
                  {badgeText}
                </div>
              )}
            </div>

            {/* Right Column: Title & Subtext */}
            <div className="flex flex-col gap-4 md:gap-6">
              <h2 className="text-[30px] md:text-5xl leading-[38px] md:leading-[58px] font-bold text-white font-['Bricolage_Grotesque'] md:font-['Inter']">
                {renderTextWithHighlight(
                  headerText.fullText,
                  headerText.highlight,
                  "bg-gradient-to-r from-[#B7E92B] to-[#FAFFEB] bg-clip-text text-transparent"
                )}
              </h2>

              <div>
                {subText && (
                  <p className="text-[#98A2B3] text-base md:text-2xl leading-5 md:leading-[34px] font-['Inter'] font-normal md:max-w-[856px]">
                    {subText}
                  </p>
                )}
                {subText2 && (
                  <p className="text-[#98A2B3] text-base md:text-2xl leading-5 md:leading-[34px] font-['Inter'] font-normal md:max-w-[856px]">
                    {subText2}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {steps.map((step) => (
              <div
                key={step.id}
                className="bg-[#1D1B20B2] rounded-[24px] md:rounded-[32px] px-4 py-6 md:p-8 transition-all hover:border-white/10"
              >
                <div className="flex flex-col gap-5 md:gap-6">
                  {/* Stage Badge */}
                  <div className="inline-flex px-4 py-2 md:px-6 md:py-3 rounded-full bg-[#5D2BE9] text-white text-sm md:text-base font-medium w-fit tracking-wide">
                    {step.stage}
                  </div>

                  {/* Title & Description */}
                  <div className="flex flex-col gap-3 md:gap-4">
                    <h3 className="text-xl md:text-4xl font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="text-base md:text-2xl text-[#98A2B3] leading-5 md:leading-9 font-['Inter'] font-normal">
                      {step.description}
                    </p>
                  </div>

                  {/* Output Section: Desktop Horizontal/Items-Center, Mobile Stacked */}
                  <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 mt-2">
                    <span className="text-[#6C6C75] text-lg font-medium leading-7 tracking-wider shrink-0 transition-all font-['Inter']">
                      Output
                    </span>
                    <div className="flex flex-wrap gap-3">
                      {Array.isArray(step.output) ? (
                        step.output.map((item, idx) => (
                          <div
                            key={idx}
                            className="inline-block px-4 py-2 md:px-6 md:py-3 rounded-full border border-[#867D9E] text-[#98A2B3] text-wrap text-sm font-medium leading-[18px] font-['Inter'] w-fit"
                          >
                            {item}
                          </div>
                        ))
                      ) : (
                        <div className="inline-block px-4 py-2 md:px-6 md:py-3 rounded-full border border-[#867D9E] text-[#98A2B3] text-wrap text-sm font-medium leading-[18px] font-['Inter'] w-fit md:w-auto">
                          {step.output}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper >
      </section >
    );
  }

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

      {/* Accordion List */}
      <div className="w-full mx-auto">
        {steps.map((step, index) => (
          <AccordionItem
            key={step.id}
            number={step.number}
            title={step.title}
            duration={step.duration}
            contentProps={step.contentProps}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

const style = {
  sctionWrapper: "bg-[#0F0D14] md:py-[100px] py-[52px]",
  headerText:
    "text-[32px] md:text-[64px] text-left md:text-center font-['Bricolage_Grotesque'] leading-[1.1] font-bold text-[#F8F7FC]",
  highlightText:
    "bg-gradient-to-r from-[#B7E92B] to-[#FAFFEB] bg-clip-text text-transparent font-['Bricolage_Grotesque'] text-[32px] md:text-[64px] font-bold leading-[38.4px] md:leading-[76.8px]",
};