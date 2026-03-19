import React from "react";
import SectionWrapper from "../layouts/SectionWrapper";
import { renderTextWithHighlight } from "@/util/helper";
import convertIcon from "../../public/images/service-ux/dummy-group-image.webp";
import GlobalSlider from "../ui/GlobalSlider";
import RevealCard from "../ui/RevealCard";
import Image from "next/image";

export default function ServiceDemand({ demandData = defaultDemandData }) {
  return (
    <div className={style.sectionstyle}>
      <SectionWrapper>
        <div className="w-full md:w-3/4 mx-auto md:text-center text-left mb-12">
          <h3 className={style.headerText}>
            {renderTextWithHighlight(
              demandData.headerText.fullText,
              demandData.headerText.highlight,
              style.highlightText
            )}
          </h3>
        </div>
      </SectionWrapper>
      <GlobalSlider>
        {demandData.cards.map((card) => (
          <RevealCard
            key={card.id}
            title={card.title}
            className="w-full h-full bg-[#F8F7FC]"
            initialContent={
              <div className="flex flex-col h-full relative">
                <div className="grow flex items-center justify-center pb-32">
                  <div className="relative w-24 h-24 md:w-32 md:h-32 opacity-80">
                    <Image
                      src={card.iconImage}
                      alt="Icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            }
            // --- REVEALED CONTENT RENDER ---
            revealedContent={
              <div className="flex flex-col h-full text-[#0E121D]">
                {/* Main Card Title */}
                <h3 className="text-xl font-bold mb-4 border-b border-gray-100 pb-3 pr-12">
                  {card.title}
                </h3>

                {/* Details Section */}
                <div className="space-y-6 mb-auto">
                  {card.details.map((detail, idx) => (
                    <div key={idx} className="space-y-3">
                      {/* Block Header (Title & Subtitle from new data) */}
                      <div>

                        <p className="text-sm text-gray-500">
                          {detail.subtitle}
                        </p>
                      </div>

                      {/* Tags List using the existing checkmark style */}
                      <div className="space-y-3 pt-1 flex flex-wrap">
                        {detail.tags?.map((tagText, tagIdx) => (
                          <div key={tagIdx} className="px-4 py-2 rounded-[100px] outline-1 -outline-offset-1 outline-[#bab3ce] inline-flex justify-center items-center gap-2">
                            <div className="justify-start text-[#53496d] text-xs font-semibold font-['Bricolage_Grotesque'] uppercase">
                              {tagText}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom CTA Section (Unchanged) */}
                <div className="mt-8">

                  <button className="bg-[#b7e92b] text-[#0f0d14] px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#C6EA4F] transition-colors w-fit">
                    Need This
                  </button>
                </div>
              </div>
            }
          />
        ))}
      </GlobalSlider>
    </div>
  );
}

const style = {
  sectionstyle: `bg-[#Fff] md:py-[100px] py-[52px]`,
  headerText:
    "md:w-4/6 w-full mx-auto text-[28px] md:text-[64px] font-['Bricolage_Grotesque'] md:leading-[70px] leading-none font-bold text-[#0f0d14] my-2 whitespace-pre-line md:text-center text-left",
  highlightText: "bg-gradient-to-r from-[#5d2be9] to-[#a78bfa] bg-clip-text text-transparent",
};
