import React from "react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-[#050505] text-white w-full py-20 md:py-32 px-6 md:px-10 lg:px-16"
      style={{ background: "#0a0a0a" }}
    >
      <div className="container mx-auto max-w-[1440px]">
        {/* Top Content */}
        <div className="mb-16 md:mb-20 max-w-2xl">
          <h2
            className="text-white text-[52px] font-bold leading-[56px] tracking-[-1.8px]"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Where to
            <br />
            Find Us
          </h2>

          <div className="flex items-center gap-2 mt-8 text-white">
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
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span
              className="text-[18px] font-normal leading-[24px]"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              tattoo studio
            </span>
          </div>

          <p className="text-[#7E7E7E] text-[16px] font-normal leading-normal mt-6 font-[var(--font-founders)] max-w-[500px]">
            Jay founded Stokt in 2012 after spending the early part of his
            career in agencies. His ambition has always been to bring movement
            into traditionally static brand systems.
          </p>
        </div>

        {/* Form Box */}
        <div className="bg-[#121212] rounded-[24px] md:rounded-[32px] p-8 md:p-12 lg:p-16 w-full text-white">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-14">
            {/* Row 1 */}
            <div className="flex items-center border-b border-[#333] pb-3 md:pb-4 gap-5">
              <label className="text-white   shrink-0 font-normal text-[20px] leading-[20px] font-[var(--font-founders)]">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="Jhon smith"
                className="bg-transparent text-white w-full outline-none font-[var(--font-founders)] font-normal text-[20px] leading-normal placeholder:text-[#7E7E7E]"
              />
            </div>

            <div className="flex items-center border-b border-[#333] pb-3 md:pb-4 gap-5">
              <label className="text-white   shrink-0 font-normal text-[20px] leading-[20px] font-[var(--font-founders)]">
                City
              </label>
              <input
                type="text"
                placeholder="Spain"
                className="bg-transparent text-white w-full outline-none font-[var(--font-founders)] font-normal text-[20px] leading-normal placeholder:text-[#7E7E7E]"
              />
            </div>

            {/* Row 2 */}
            <div className="flex items-center border-b border-[#333] pb-3 md:pb-4 gap-5">
              <label className="text-white   shrink-0 font-normal text-[20px] leading-[20px] font-[var(--font-founders)]">
                Body Placement
              </label>
              <input
                type="text"
                placeholder="Neck"
                className="bg-transparent text-white w-full outline-none font-[var(--font-founders)] font-normal text-[20px] leading-normal placeholder:text-[#7E7E7E]"
              />
            </div>

            <div className="flex items-center border-b border-[#333] pb-3 md:pb-4 gap-5">
              <label className="text-white   shrink-0 font-normal text-[20px] leading-[20px] font-[var(--font-founders)]">
                Email *
              </label>
              <input
                type="email"
                placeholder="example@mail.com"
                className="bg-transparent text-white w-full outline-none font-[var(--font-founders)] font-normal text-[20px] leading-normal placeholder:text-[#7E7E7E]"
              />
            </div>

            {/* Row 3 */}
            <div className="flex items-center border-b border-[#333] pb-3 md:pb-4 gap-5">
              <label className="text-white   shrink-0 font-normal text-[20px] leading-[20px] font-[var(--font-founders)]">
                Phone *
              </label>
              <input
                type="tel"
                placeholder="0123456789"
                className="bg-transparent text-white w-full outline-none font-[var(--font-founders)] font-normal text-[20px] leading-normal placeholder:text-[#7E7E7E]"
              />
            </div>

            <div className="flex items-center border-b border-[#333] pb-3 md:pb-4 gap-5">
              <label className="text-white   shrink-0 font-normal text-[20px] leading-[20px] font-[var(--font-founders)]">
                Inspiration
              </label>
              <input
                type="text"
                placeholder="file link"
                className="bg-transparent text-white w-full outline-none font-[var(--font-founders)] font-normal text-[20px] leading-normal placeholder:text-[#7E7E7E]"
              />
            </div>

            {/* Row 4 - Full Width */}
            <div className="md:col-span-2 flex items-center border-b border-[#333] pb-3 md:pb-4 gap-5">
              <label className="text-white   shrink-0 font-normal text-[20px] leading-[20px] font-[var(--font-founders)]">
                Description
              </label>
              <input
                type="text"
                placeholder="write a description"
                className="bg-transparent text-white w-full outline-none font-[var(--font-founders)] font-normal text-[20px] leading-normal placeholder:text-[#7E7E7E]"
              />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-end mt-4 md:mt-12">
              <button
                type="submit"
                className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors group cursor-pointer"
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
                <span className="text-[13px] md:text-[14px] font-[var(--font-founders)] font-semibold tracking-widest uppercase border-b border-white pb-1 group-hover:border-gray-300 transition-colors">
                  SEND RESERVATION
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
