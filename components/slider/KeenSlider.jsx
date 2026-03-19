"use client";

import React, { useRef, useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import clsx from "clsx";

const KeenSlider = ({
  children,
  slidesPerView = 1,
  slidesPerViewMobile = 1,
  loop = true,
  autoPlay = true,
  interval = 3000,
  showDots = true,
  showArrows = false,
  className,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerViewState, setSlidesPerViewState] = useState(slidesPerView);
  const timer = useRef(null);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop,
    slides: {
      perView: slidesPerViewState,
      spacing: 16,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created(slider) {
      if (autoPlay) {
        timer.current = setInterval(() => {
          slider.next();
        }, interval);
      }
    },
  });

  // Adjust slidesPerView based on window size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerViewState(slidesPerViewMobile);
      } else {
        setSlidesPerViewState(slidesPerView);
      }
    };

    handleResize(); // Set initial value based on window size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [slidesPerView, slidesPerViewMobile]);
  return (
    <div className={clsx("relative", className)}>
      <div ref={sliderRef} className="keen-slider">
        {React.Children.map(children, (child, idx) => (
          <div className="keen-slider__slide" key={idx}>
            {child}
          </div>
        ))}
      </div>

      {showArrows && (
        <>
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow hover:bg-white"
          >
            ←
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow hover:bg-white"
          >
            →
          </button>
        </>
      )}

      {showDots && (
        <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {React.Children.map(children, (_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={clsx(
                "w-3 h-3 rounded-full transition-all duration-300",
                currentSlide === idx ? "w-5 bg-[#3F63F6]" : "bg-[#e1e1dd]"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default KeenSlider;
