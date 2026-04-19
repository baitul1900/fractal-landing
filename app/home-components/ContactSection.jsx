import React from "react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-[#050505] text-white w-full py-10 md:py-32 px-6 md:px-10 lg:px-16"
      style={{ background: "#0a0a0a" }}
    >
      <div className="container mx-auto max-w-[1440px]">
        {/* Top Content */}
        <div className="mb-4 md:mb-20 max-w-2xl">
          <h2 className="text-[#FAFAFA] text-[42px] md:text-[52px] font-semibold md:font-bold leading-[40px] md:leading-[56px] tracking-[-1.8px] font-[var(--font-founders)]">
            Where to
            <br className="hidden md:block" /> {" "}
            Find Us
          </h2>

          <a
            href="https://www.instagram.com/fractal.bodyarchives/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 md:mt-8 mt-4 text-white hover:text-[#FFE6D0] transition-colors w-fit group"
          >
            {/* Instagram Icon */}
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:scale-110 transition-transform"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span className="text-[18px] font-normal leading-[24px] font-[var(--font-founders)] border-b border-transparent group-hover:border-[#FFE6D0] pb-0.5">
              fractal
            </span>
          </a>

          <p className="text-[#A2A2A2] md:text-[#7E7E7E] text-[16px] font-normal leading-normal mt-3 md:mt-6 font-[var(--font-founders)] max-w-[500px]">
            Jay founded Stokt in 2012 after spending the early part of his
            career in agencies. His ambition has always been to bring movement
            into traditionally static brand systems.
          </p>
        </div>

        {/* Form Box */}
        <div className="bg-[#121212] rounded-[24px] md:rounded-[32px] p-3.5 md:p-12 lg:p-16 w-full text-white">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 md:gap-y-14">
            {/* Row 1 */}
            <div className="flex items-center border-b border-[#333] pb-3 md:pb-4 gap-5">
              <label className="text-white   shrink-0 font-normal lg:text-[20px] text-[18px] leading-5 lg:leading-[20px] font-[var(--font-founders)]">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="Jhon smith"
                className="bg-transparent text-white w-full outline-none font-[var(--font-founders)] font-normal text-[18px] lg:text-[20px] leading-5 lg:leading-[20px] placeholder:text-[#7E7E7E]"
              />
            </div>

            <div className="flex items-center border-b border-[#333] pb-3 md:pb-4 gap-5">
              <label className="text-white shrink-0 font-normal lg:text-[20px] text-[18px] leading-5 lg:leading-[20px] font-[var(--font-founders)]">
                City
              </label>
              <input
                type="text"
                placeholder="Spain"
                className="bg-transparent text-white w-full outline-none font-[var(--font-founders)] font-normal text-[18px] lg:text-[20px] leading-5 lg:leading-[20px] placeholder:text-[#7E7E7E]"
              />
            </div>

            {/* Row 2 */}
            <div className="flex items-center border-b border-[#333] pb-3 md:pb-4 gap-5">
              <label className="text-white shrink-0 font-normal lg:text-[20px] text-[18px] leading-5 lg:leading-[20px] font-[var(--font-founders)]">
                Body Placement
              </label>
              <input
                type="text"
                placeholder="Neck"
                className="bg-transparent text-white w-full outline-none font-[var(--font-founders)] font-normal text-[18px] lg:text-[20px] leading-5 lg:leading-[20px] placeholder:text-[#7E7E7E]"
              />
            </div>

            <div className="flex items-center border-b border-[#333] pb-3 md:pb-4 gap-5">
              <label className="text-white shrink-0 font-normal lg:text-[20px] text-[18px] leading-5 lg:leading-[20px] font-[var(--font-founders)]">
                Email *
              </label>
              <input
                type="email"
                placeholder="example@mail.com"
                className="bg-transparent text-white w-full outline-none font-[var(--font-founders)] font-normal text-[18px] lg:text-[20px] leading-5 lg:leading-[20px] placeholder:text-[#7E7E7E]"
              />
            </div>

            {/* Row 3 */}
            <div className="flex items-center border-b border-[#333] pb-3 md:pb-4 gap-5">
              <label className="text-white shrink-0 font-normal lg:text-[20px] text-[18px] leading-5 lg:leading-[20px] font-[var(--font-founders)]">
                Phone *
              </label>
              <input
                type="tel"
                placeholder="0123456789"
                className="bg-transparent text-white w-full outline-none font-[var(--font-founders)] font-normal text-[18px] lg:text-[20px] leading-5 lg:leading-[20px] placeholder:text-[#7E7E7E]"
              />
            </div>

            <div className="flex items-center border-b border-[#333] pb-3 md:pb-4 gap-5">
              <label className="text-white shrink-0 font-normal lg:text-[20px] text-[18px] leading-5 lg:leading-[20px] font-[var(--font-founders)]">
                Inspiration
              </label>
              <input
                type="text"
                placeholder="file link"
                className="bg-transparent text-white w-full outline-none font-[var(--font-founders)] font-normal text-[18px] lg:text-[20px] leading-5 lg:leading-[20px] placeholder:text-[#7E7E7E]"
              />
            </div>

            {/* Row 4 - Full Width */}
            <div className="md:col-span-2 flex items-center border-b border-[#333] pb-3 md:pb-4 gap-5">
              <label className="text-white shrink-0 font-normal lg:text-[20px] text-[18px] leading-5 lg:leading-[20px] font-[var(--font-founders)]">
                Description
              </label>
              <input
                type="text"
                placeholder="write a description"
                className="bg-transparent text-white w-full outline-none font-[var(--font-founders)] font-normal text-[18px] lg:text-[20px] leading-5 lg:leading-[20px] placeholder:text-[#7E7E7E]"
              />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-end mt-8 md:mt-12">
              {/* Desktop Submit Button */}
              <button
                type="submit"
                className="hidden md:flex items-center gap-3 text-white hover:text-gray-300 transition-colors group cursor-pointer"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="transform -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                >
                  <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" />
                </svg>
                <span className="text-[14px] font-[var(--font-founders)] font-semibold tracking-widest uppercase border-b border-white pb-1 group-hover:border-gray-300 transition-colors">
                  SEND RESERVATION
                </span>
              </button>

              {/* Mobile Submit Button (Pill Design) */}
              <button
                type="submit"
                className="md:hidden w-full bg-[#FFE6D0] text-black rounded-full py-3 flex items-center justify-center gap-3 font-normal uppercase text-[16px] leading-[24px] tracking-wide font-[var(--font-founders)]"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="transform -rotate-45"
                >
                  <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" />
                </svg>
                RESERVATION
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
