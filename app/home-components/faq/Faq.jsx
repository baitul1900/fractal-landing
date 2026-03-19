"use client";
import FaqIcon from "@/components/icons/Product";
import SectionWrapper from "@/components/layouts/SectionWrapper";
import BadgeBanner from "@/components/ui/BadgeBanner";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import LeftCard from "./LeftCard";

const pageData = {
  title: "Have Questions? We’ve Got Answers.",
};

export default function Faq({ faqData }) {
  const [openIndex, setOpenIndex] = useState(0); // First one open by default

  const toggleIndex = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const defaultFaqs = [
    {
      id: 1,
      question:
        "What makes IdeatedLab different from other IT service providers?",
      answer:
        "No worries! Life happens. You can mark habits as incomplete, and the app will adjust your streaks and stats accordingly.",
    },
    {
      id: 2,
      question: "Do you handle full digital transformation projects?",
      answer:
        "Yes! The app is completely free to use with optional premium features.",
    },
    {
      id: 3,
      question:
        "Can IdeatedLab build AI or automation solutions for my business?",
      answer:
        "Absolutely! You can create and manage as many habits as you like.",
    },
    {
      id: 4,
      question: "What technologies do you use for app development?",
      answer: "Yes, you can enable reminders to stay on track with your goals.",
    },
    {
      id: 5,
      question: "Do you offer UX/UI design as a standalone service?",
      answer: "Yes, you can enable reminders to stay on track with your goals.",
    },
    {
      id: 6,
      question: "What engagement models do you offer?",
      answer: "Yes, you can enable reminders to stay on track with your goals.",
    },
  ];

  const content = faqData || { title: pageData.title, faqs: defaultFaqs };

  return (
    <SectionWrapper className={"bg-[#FFF] md:pb-[100px] pb-8 "}>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-[60px]">
        <div className="md:col-span-4 col-span-1">
          <BadgeBanner text="FAQ" />
          <LeftCard />
        </div>

        <div className="md:col-span-8 col-span-1 mt-10 md:mt-0">
          <h2 className="section-header w-full md:w-[856px] md:mt-0 mt-5">
            {content.title}
          </h2>

          <p className="text-[#53496d] text-base md:text-2xl leading-normal md:leading-[34px] mt-2.5">
            {content.firstPera || pageData.firstPera}
          </p>

          <p className="text-[#53496d] text-base md:text-2xl leading-normal md:leading-[34px] md:mt-10 mt-2 ">
            {content.secondPera || pageData.secondPera}
          </p>

          <div className="mt-[-10px] md:mt-10 space-y-0">
            {content.faqs?.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.id}
                  className={`border-b border-gray-200 last:border-b-0 transition-all duration-300 ${isOpen ? "border-b-purple-500 bg-white" : "bg-transparent"
                    }`}
                >
                  {/* Question + Toggle */}
                  <button
                    onClick={() => toggleIndex(index)}
                    className="w-full flex items-start justify-between gap-6 py-6 text-left focus:outline-none hover:bg-gray-50/50 transition-colors"
                  >
                    <h3
                      className={`flex-1 md:text-2xl text-lg font-medium leading-7 text-[#1D1F2C] pr-8 ${isOpen ? "text-purple-700" : ""
                        }`}
                    >
                      {faq.question}
                    </h3>

                    {/* Circle Toggle */}
                    <div
                      className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen
                        ? "bg-purple-600 border-purple-600 shadow-md"
                        : "bg-white border-purple-600 hover:bg-purple-50"
                        }`}
                    >
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <ChevronDown
                          className={`h-5 w-5 ${isOpen ? "text-white" : "text-purple-600"
                            }`}
                        />
                      </motion.div>
                    </div>
                  </button>

                  {/* Answer - Animated */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 pl-0 pr-12">
                          <p className="text-base leading-7 text-[#53496d] whitespace-pre-wrap">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* cards  */}
    </SectionWrapper>
  );
}
