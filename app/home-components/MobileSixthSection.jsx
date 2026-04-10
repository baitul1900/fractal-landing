"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const MobileSixthSection = ({ archives }) => {
  const [revealedId, setRevealedId] = useState(null);

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1.2,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: {
          perView: 2.2,
          spacing: 20,
        },
      },
    },
  });

  const toggleReveal = (id) => {
    setRevealedId(revealedId === id ? null : id);
  };

  return (
    <section className="lg:hidden bg-[#0a0a0a] text-white w-full py-16 px-6 overflow-hidden">
      <h2 className="text-white text-[28px] md:text-[32px] font-semibold leading-tight mb-8 font-[var(--font-founders)]">
        Body Archives
      </h2>

      <div ref={sliderRef} className="keen-slider !overflow-visible">
        {archives.map((item) => (
          <div
            key={item.id}
            onClick={() => toggleReveal(item.id)}
            className="keen-slider__slide group relative overflow-hidden rounded-2xl w-full aspect-[4/5] cursor-pointer bg-[#18181A]"
          >
            {/* Default Image Background */}
            <Image
              src={item.image}
              alt={item.name}
              className={`w-full h-full object-cover transition-transform duration-[700ms] ${
                revealedId === item.id ? "scale-[1.05]" : ""
              }`}
            />

            {/* Default Bottom Bar */}
            <div
              className={`absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center gap-3 transition-opacity duration-500 ${
                revealedId === item.id ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-white overflow-hidden flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white text-[15px] font-medium leading-[20px] font-[var(--font-founders)]">
                  {item.name}
                </span>
                <span className="text-white/60 text-[13px] leading-[18px] font-[var(--font-founders)]">
                  Age: {item.age}
                </span>
              </div>
            </div>

            {/* Reveal Overlay */}
            <div
              className={`absolute inset-x-0 bottom-0 bg-[#161616] p-6 flex flex-col justify-start transform transition-transform duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] w-full h-full z-10 border border-[#222] rounded-2xl ${
                revealedId === item.id ? "translate-y-0" : "translate-y-[101%]"
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-white">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-[15px] font-medium leading-[22px] font-[var(--font-founders)]">
                    {item.name}
                  </span>
                  <span className="text-white/50 text-[13px] leading-[18px] font-[var(--font-founders)]">
                    Age: {item.age}
                  </span>
                </div>
              </div>
              <p className="text-white/80 text-[15px] leading-[22px] font-normal font-[var(--font-founders)]">
                "{item.quote}"
              </p>

              {/* Close indicator/button for better UX on mobile */}
              <div className="absolute top-4 right-4 text-white/40">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MobileSixthSection;
