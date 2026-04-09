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
    <footer className="custom-footer w-full h-auto min-h-[600px] lg:h-[950px] px-6 md:px-10 lg:px-16 relative font-[var(--font-founders)] py-20 lg:py-0">
      <div className="container mx-auto max-w-[1440px] pt-16 md:pt-14 h-full flex flex-col justify-start relative z-10">
        {/* Merged Seventh Section Typography block */}
        <div className="flex flex-col justify-center mb-16 md:mb-24">
          <h2 className="text-white text-[48px] md:text-[60px] lg:text-[72px] font-medium leading-[48px] md:leading-[60px] lg:leading-[72px] tracking-[-2.276px] mb-2 font-[var(--font-founders)]">
            Lets Create
          </h2>
          <h3 className="text-[#828282] text-[48px] md:text-[60px] lg:text-[72px] font-medium leading-[48px] md:leading-[60px] lg:leading-[72px] tracking-[-2.276px] min-h-[80px] font-[var(--font-founders)]">
            something {text}
            <span
              className="w-[4px] md:w-[6px] h-[64px] bg-[#828282] inline-block ml-2 animate-pulse align-middle opacity-80"
              style={{ transform: "translateY(-4px)" }}
            ></span>
          </h3>
        </div>

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-4 mb-6 border-b border-[#FFFFFF]">
          {/* Email */}
          <div className="flex flex-col gap-3">
            <span className="text-[#828282] text-[14px]">Email</span>
            <a
              href="mailto:fractal@art.design"
              className="text-white text-[18px] md:text-[20px] font-medium hover:text-[#bbb] transition-colors"
            >
              fractal@art.design
            </a>
          </div>

          {/* Call Me */}
          <div className="flex flex-col gap-3">
            <span className="text-[#828282] text-[14px]">Call Me</span>
            <a
              href="#"
              className="text-white text-[18px] md:text-[20px] font-medium hover:text-[#bbb] transition-colors"
            >
              Book Now
            </a>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-3 md:items-end">
            <div className="w-full flex md:justify-end">
              <span className="text-[#828282] text-[14px] w-full max-w-[280px] text-left">
                Social
              </span>
            </div>
            <div className="flex items-center gap-3 w-full max-w-[280px]">
              {/* X / Twitter */}
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:text-black hover:bg-[#C99D85] transition-opacity  bg-[#1A1A1A]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
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
              {/* Dribbble */}
              <a
                href="#"
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
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
                </svg>
              </a>
              {/* Behance */}
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-[#C99D85] hover:text-black transition-colors bg-[#1A1A1A]"
              >
                <span className="font-bold text-[14px]">Bē</span>
              </a>
              {/* LinkedIn */}
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-[#C99D85] hover:text-black transition-colors bg-[#1A1A1A]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Menu & Copyright */}
        <div className="mt-2 flex justify-between items-end w-full">
          {/* Menu Section */}
          <div>
            <span className="text-[#828282] text-[14px] mb-3 md:mb-4 block">
              Menu
            </span>
            <div className="grid grid-cols-2 gap-x-12 gap-y-3 md:gap-y-4 max-w-[280px]">
              <a
                href="#about"
                onClick={(e) => handleScroll(e, "#about")}
                className="text-white text-[16px] md:text-[18px] font-medium hover:text-[#bbb] transition-colors"
              >
                About us
              </a>
              <a
                href="#process"
                onClick={(e) => handleScroll(e, "#process")}
                className="text-white text-[16px] md:text-[18px] font-medium hover:text-[#bbb] transition-colors"
              >
                Process
              </a>
              <a
                href={pages.contactUs}
                onClick={(e) => handleScroll(e, pages.contactUs)}
                className="text-white text-[16px] md:text-[18px] font-medium hover:text-[#bbb] transition-colors"
              >
                Reservation
              </a>
              <a
                href="#artists"
                onClick={(e) => handleScroll(e, "#artists")}
                className="text-white text-[16px] md:text-[18px] font-medium hover:text-[#bbb] transition-colors"
              >
                Artist
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-white font-medium text-[14px] md:text-[16px] tracking-wider z-20 shrink-0">
            © 2026 FRACTAL
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CustomFooter;
