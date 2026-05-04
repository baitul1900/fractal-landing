"use client";

import React from "react";
import Image from "next/image";

import MobileSixthSection from "./MobileSixthSection";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

// Review Images
import andreaReview from "../../public/images/review-images/Andrea.webp";
import borjaReview from "../../public/images/review-images/Borja.webp";
import daniReview from "../../public/images/review-images/Dani.webp";
import daniloReview from "../../public/images/review-images/Danilo.webp";
import elenaReview from "../../public/images/review-images/Elena.webp";
import geraldineReview from "../../public/images/review-images/Geraldine.webp";
import joseReview from "../../public/images/review-images/José.webp";
import martaReview from "../../public/images/review-images/Marta.webp";
import michaelReview from "../../public/images/review-images/Michael.webp";
import robertoReview from "../../public/images/review-images/Roberto.webp";
import { useLanguage } from "@/context/LanguageContext";

const SixthSection = () => {
  const { t } = useLanguage();
  const archives = [
    {
      id: 1,
      name: "Danilo",
      rating: 5,
      quote: t("sixth_section.quote_danilo"),
      image: daniloReview,
      userImage: null,
    },
    {
      id: 2,
      name: "Michael Frank",
      rating: 5,
      quote: t("sixth_section.quote_michael"),
      image: michaelReview,
      userImage: null,
    },
    {
      id: 3,
      name: "José Tomás Molina",
      rating: 5,
      quote: t("sixth_section.quote_jose"),
      image: joseReview,
      userImage: null,
    },
    {
      id: 4,
      name: "Andrea Martínez",
      rating: 5,
      quote: t("sixth_section.quote_andrea"),
      image: andreaReview,
      userImage: null,
    },
    {
      id: 5,
      name: "Marta Rivas",
      rating: 5,
      quote: t("sixth_section.quote_marta"),
      image: martaReview,
      userImage: null,
    },
    {
      id: 6,
      name: "Borja Ruiz",
      rating: 5,
      quote: t("sixth_section.quote_borja"),
      image: borjaReview,
      userImage: null,
    },
    {
      id: 7,
      name: "Elena Sánchez",
      rating: 5,
      quote: t("sixth_section.quote_elena"),
      image: elenaReview,
      userImage: null,
    },

    {
      id: 8,
      name: "Dani Pérez",
      rating: 5,
      quote: t("sixth_section.quote_dani"),
      image: daniReview,
      userImage: null,
    },
    {
      id: 9,
      name: "Geraldine Ponte",
      rating: 5,
      quote: t("sixth_section.quote_geraldine"),
      image: geraldineReview,
      userImage: null,
    },
    {
      id: 10,
      name: "Roberto Gallardo",
      rating: 5,
      quote: t("sixth_section.quote_roberto"),
      image: robertoReview,
      userImage: null,
    },
  ];

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3.2,
      spacing: 24,
    },
    breakpoints: {
      "(max-width: 1280px)": {
        slides: { perView: 2.2, spacing: 20 },
      },
    },
  });

  return (
    <>
      {/* Mobile Version Rendering */}
      <MobileSixthSection archives={archives} />

      {/* Desktop Version Rendering */}
      <div className="hidden lg:block w-full">
        <section
          id="section-six"
          className="bg-[#0a0a0a] text-white w-full py-24 px-6 md:px-10 lg:px-16 overflow-hidden"
        >
          <div className="container mx-auto max-w-[1440px]">
            <h2 className="text-white text-[32px] font-semibold leading-[38px] mb-12 text-left font-[var(--font-founders)]">
              {t("sixth_section.body_archives")}
            </h2>

            <div ref={sliderRef} className="keen-slider !overflow-visible">
              {archives.map((item) => (
                <div
                  key={item.id}
                  className="keen-slider__slide group relative overflow-hidden rounded-[32px] w-full aspect-[1/1.4] cursor-pointer bg-[#18181A] border border-[#222]"
                >
                  {/* Default Image Background */}
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Bottom Bar (Initial State) */}
                  <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-700 group-hover:opacity-0 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-[#222]">
                      {item.userImage ? (
                        <Image
                          src={item.userImage}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-white/40 text-xs font-bold uppercase">
                          {item.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <span className="text-white text-xl font-medium font-[var(--font-founders)]">
                      {item.name}
                    </span>
                  </div>

                  {/* Hover Reveal (Screenshot Design) */}
                  <div className="absolute inset-0 bg-[#121212] p-8 md:p-10 flex flex-col transform translate-y-full transition-transform duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-y-0 z-10 border border-[#222]">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-[#222]">
                          {item.userImage ? (
                            <Image
                              src={item.userImage}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-white/40 text-sm font-bold uppercase">
                              {item.name.charAt(0)}
                            </div>
                          )}
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-[#FFF] text-[20px] font-normal font-[var(--font-founders)] leading-[20px]">
                            {item.name}
                          </span>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="#FFB800"
                              >
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-[#FFE6D0] text-[16px] leading-[22px] font-normal font-[var(--font-founders)] whitespace-pre-line">
                        {item.quote}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SixthSection;
