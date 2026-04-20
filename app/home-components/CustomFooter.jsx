import React, { useState, useEffect } from "react";
import { pages } from "../../util/route";
import { scrollToId } from "../../util/scroll";

const CustomFooter = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    scrollToId(id);
  };

  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const phrases = ["permanent together.", "amazing today.", "meaningful here."];

  useEffect(() => {
    let timer;
    const handleType = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1),
      );

      let speed = isDeleting ? 40 : 100;

      if (!isDeleting && text === fullText) {
        speed = 2500;
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        speed = 500;
      }

      setTypingSpeed(speed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, phrases]);

  return (
    <footer className="custom-footer w-full h-auto min-h-[600px] lg:h-[950px] px-6 md:px-10 lg:px-16 relative font-[var(--font-founders)] py-4 lg:py-0">
      <div className="container mx-auto max-w-[1440px] pt-1 md:pt-14 h-full flex flex-col justify-start relative z-10">
        {/* Merged Seventh Section Typography block */}
        <div className="flex flex-col justify-center mb-12 md:mb-24 px-1">
          <h2 className="text-white text-[42px] md:text-[60px] lg:text-[72px] font-medium leading-[44px] md:leading-[60px] lg:leading-[72px] tracking-[-1.5px] md:tracking-[-2.276px] mb-1 font-[var(--font-founders)]">
            Lets Create
          </h2>
          <h3 className="text-[#828282] text-[42px] md:text-[60px] lg:text-[72px] font-medium leading-[44px] md:leading-[60px] lg:leading-[72px] tracking-[-1.5px] md:tracking-[-2.276px] min-h-[90px] md:min-h-[80px] font-[var(--font-founders)]">
            something {text}
            <span
              className="w-[3px] md:w-[6px] h-[40px] md:h-[64px] bg-[#828282] inline-block ml-2 animate-pulse align-middle opacity-80"
              style={{ transform: "translateY(-2px)" }}
            ></span>
          </h3>
        </div>

        {/* Top Section: Email & Call Me */}
        <div className="grid grid-cols-2 md:grid-cols-3 md:gap-y-10 gap-y-4 gap-x-4 pb-1 md:pb-4 mb-6">
          {/* Email */}
          <div className="flex flex-col gap-2 md:gap-3">
            <span className="text-[#828282] text-[14px]">Email</span>
            <a
              href="mailto:fractal@art.design"
              className="text-white text-[16px] md:text-[20px] font-medium hover:text-[#bbb] transition-colors break-words"
            >
              fractal@art.design
            </a>
          </div>

          {/* Call Me */}
          <div className="flex flex-col gap-2 md:gap-3">
            <span className="text-[#828282] text-[14px]">Call Me</span>
            <a
              href="#"
              className="text-white text-[16px] md:text-[20px] font-medium hover:text-[#bbb] transition-colors"
            >
              Book Now
            </a>
          </div>

          {/* Socials - Spans 2 columns on mobile, 1 on md */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-3 md:items-end">
            <div className="w-full flex md:justify-end">
              <span className="text-[#828282] text-[14px] w-full max-w-[280px] text-left">
                Social
              </span>
            </div>
            <div className="flex items-center gap-3 w-full max-w-[280px]">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/fractalttt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-[#C99D85] hover:text-black transition-colors bg-[#1A1A1A]"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* Pinterest */}
              <a
                href="https://www.pinterest.com/elicostart/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-[#C99D85] hover:text-black transition-colors bg-[#1A1A1A]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C10.09 13 13 10.09 13 6.5C13 2.91 10.09 0 6.5 0ZM1 6.5C1.00037 5.34123 1.36671 4.21218 2.04676 3.27395C2.72681 2.33571 3.68582 1.63624 4.78695 1.27532C5.88808 0.914407 7.07507 0.910495 8.17856 1.26414C9.28204 1.61779 10.2456 2.31093 10.9319 3.24466C11.6181 4.17839 11.9919 5.305 11.9999 6.46374C12.0079 7.62248 11.6497 8.75415 10.9764 9.69727C10.3032 10.6404 9.34927 11.3468 8.25077 11.7156C7.15228 12.0845 5.96535 12.097 4.85933 11.7513C5.14132 11.3089 5.36537 10.8321 5.526 10.3327L5.87 9.01467C6.01218 9.21783 6.20291 9.3822 6.42485 9.49282C6.64678 9.60343 6.89285 9.65678 7.14067 9.648C8.83067 9.648 10.0187 8.112 10.0187 6.204C10.0187 4.37133 8.522 3.002 6.60267 3.002C4.21133 3.002 2.94133 4.60867 2.94133 6.35467C2.94133 7.17 3.37267 8.17933 4.06533 8.504C4.168 8.55133 4.23533 8.504 4.25133 8.42867C4.26733 8.35333 4.362 7.974 4.40533 7.79933C4.41222 7.77179 4.41223 7.74298 4.40537 7.71543C4.39851 7.68788 4.38499 7.66243 4.366 7.64133C4.1035 7.27306 3.96482 6.83089 3.97 6.37867C3.96881 6.05416 4.03343 5.73279 4.15997 5.43397C4.28651 5.13516 4.47233 4.8651 4.7062 4.64014C4.94007 4.41518 5.21714 4.23998 5.52064 4.12514C5.82415 4.0103 6.14779 3.95821 6.472 3.972C6.77565 3.95424 7.07967 3.99996 7.36467 4.10626C7.64966 4.21255 7.90937 4.37708 8.12723 4.58935C8.34508 4.80163 8.5163 5.05698 8.62996 5.33912C8.74361 5.62126 8.79721 5.92399 8.78733 6.228C8.78733 7.724 8.02733 8.76533 7.046 8.76533C6.91922 8.77499 6.79198 8.75397 6.67503 8.70407C6.55808 8.65417 6.45487 8.57684 6.37411 8.47863C6.29336 8.38042 6.23744 8.2642 6.21108 8.13982C6.18472 8.01543 6.18869 7.88653 6.22267 7.764C6.27867 7.53067 6.35333 7.29 6.42533 7.05533C6.55667 6.63 6.682 6.22533 6.682 5.91933C6.69564 5.81986 6.68764 5.71862 6.65854 5.62252C6.62945 5.52642 6.57994 5.43774 6.51342 5.36254C6.44689 5.28734 6.36491 5.2274 6.27307 5.1868C6.18124 5.14621 6.08173 5.12592 5.98133 5.12733C5.42667 5.12733 4.97933 5.70533 4.97933 6.47333C4.97533 6.74467 5.026 7.014 5.13 7.26533L4.47667 10.036C4.39722 10.5597 4.39722 11.0923 4.47667 11.616C4.046 11.4456 3.63874 11.2211 3.26467 10.948C2.3457 10.2775 1.65571 9.34007 1.28867 8.26333C1.09639 7.69537 0.998862 7.09963 1 6.5Z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-full h-px bg-white/20 mb-2 md:mb-16"></div>

        {/* Bottom Section: Menu & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-2 md:gap-0">
          {/* Menu Section */}
          <div className="w-full md:w-auto">
            <span className="text-[#828282] text-[14px] mb-2 md:mb-6 block">
              Menu
            </span>
            <div className="grid grid-cols-2 gap-x-12 gap-y-2 md:gap-y-5 max-w-[320px]">
              <a
                href="#about"
                onClick={(e) => handleScroll(e, "#about")}
                className="text-white lg:text-[18px] text-[16px] font-medium hover:text-[#C99D85] transition-colors"
              >
                About us
              </a>
              <a
                href="#process"
                onClick={(e) => handleScroll(e, "#process")}
                className="text-white lg:text-[18px] text-[16px] font-medium hover:text-[#C99D85] transition-colors"
              >
                Process
              </a>
              <a
                href={pages.contactUs}
                onClick={(e) => handleScroll(e, pages.contactUs)}
                className="text-white lg:text-[18px] text-[16px] font-medium hover:text-[#C99D85] transition-colors"
              >
                Reservation
              </a>
              <a
                href="#artists"
                onClick={(e) => handleScroll(e, "#artists")}
                className="text-white lg:text-[18px] text-[16px] font-medium hover:text-[#C99D85] transition-colors"
              >
                Artists
              </a>
            </div>
          </div>

          {/* Copyright - On mobile, this will be above FRACTAL */}
          <div className="w-full md:w-auto flex flex-col lg:items-end items-end  gap-2 md:gap-4 relative">
            <div className="text-white/60 font-medium text-[14px] md:text-[16px] tracking-wider md:mb-4">
              © 2026 FRACTAL
            </div>
          </div>
        </div>

        {/* Big FRACTAL Text at the bottom */}

      </div>
    </footer>
  );
};

export default CustomFooter;
