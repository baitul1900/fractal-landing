import React from "react";
import SectionWrapper from "../layouts/SectionWrapper";
import offerBg from "../../public/images/service-ux/offer-bg.webp"; // Ensure this path is correct
import { renderTextWithHighlight } from "@/util/helper";
import Button from "../ui/Button";

// --- Default Data ---
const deafultOfferData = {
  headerText: {
    fullText: "UX Audit + 1 Key Page Redesign — Just $199",
    highlight: ["UX Audit + 1"], // Highlighting specific part
  },
  subText: "Limited-Time Offer for Startups & SMEs",
  buttonText: "Claim Your Spot Now",
  footerFeatures: [
    "Money Back Guarantee",
    "Limited to 3 Clients per Month"
  ]
};

export default function OfferSection({
  headerText = deafultOfferData.headerText,
  subText = deafultOfferData.subText,
  buttonText = deafultOfferData.buttonText,
  footerFeatures = deafultOfferData.footerFeatures,
}) {
  return (
    <SectionWrapper className={style.section}>
      <div className={style.container}>
        <div
          className={style.bgContainer}
          style={{ backgroundImage: `url(${offerBg.src})` }}
        >
          {/* Overlay to ensure text readability if needed, though image seems dark enough */}
          {/* <div className="absolute inset-0 bg-black/20 rounded-3xl" /> */}

          <div className={style.contentWrapper}>
            

            {/* Main Heading */}
            <h3 className={style.headerText}>
              {renderTextWithHighlight(
                headerText.fullText,
                headerText.highlight,
                style.highlightText
              )}
            </h3>

            {/* Footer Features (Money Back etc) */}
            <div className={style.footerFeatures}>
              {footerFeatures.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <span className={style.footerText}>{feature}</span>
                  {/* Add divider only if it's not the last item */}
                  {index < footerFeatures.length - 1 && (
                    <div className={style.divider} />
                  )}
                </div>
              ))}
            </div>

            <div className="md:mt-8 mt-4">
              <Button variant="fillGreen" size="lg" >
                Start UX Audit + Redesign
              </Button>
            </div>

          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

const style = {
  section: "bg-[#0F0D14] md:pb-[100px] pb-8",
  container: "",
  bgContainer: "w-full md:min-h-[484px] min-h-[400px] bg-cover bg-center rounded-[32px] relative overflow-hidden flex flex-col items-center justify-center py-12 px-4",
  contentWrapper: "relative z-10 flex flex-col items-center text-center w-full max-w-[900px]",
  
  subTextTag: "mb-6 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white text-sm md:text-base font-medium tracking-wide",
  
  headerText: "w-full text-[32px] md:text-[64px] font-['Bricolage_Grotesque'] md:leading-[1.1] leading-tight font-bold text-white mb-8",
  highlightText: "text-[#B7E92B]", // Matching the lime green highlight style
  
  ctaButton: "px-8 py-4 bg-white text-[#0F0D14] rounded-full text-base md:text-lg font-bold hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]",
  
  footerFeatures: "flex flex-col md:flex-row items-center gap-4 md:gap-0 mt-8 md:mt-0",
  footerText: "text-white text-lg md:text-xl font-bold tracking-tight",
  divider: "hidden md:block w-[1px] h-6 bg-white/40 mx-6",
};