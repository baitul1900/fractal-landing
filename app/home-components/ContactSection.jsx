"use client";

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { useLanguage } from "@/context/LanguageContext";

const SuccessModal = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-[#121212] border border-[#FFE6D0]/20 rounded-[32px] p-8 md:p-12 max-w-md w-full text-center shadow-2xl"
          >
            <div className="w-20 h-20 bg-[#FFE6D0] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3 className="text-[#FAFAFA] text-[32px] font-bold mb-4 font-[var(--font-founders)]">
              {t("contact.sent_success")}
            </h3>
            <p className="text-[#A2A2A2] text-[18px] mb-8 font-[var(--font-founders)] leading-relaxed">
              {t("contact.sent_desc")}
            </p>
            <button
              onClick={onClose}
              className="w-full bg-[#FFE6D0] text-black rounded-full py-4 font-bold uppercase tracking-wider hover:bg-white transition-colors font-[var(--font-founders)]"
            >
              {t("contact.close")}
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const ContactSection = () => {
  const { t } = useLanguage();
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // 'success', 'error'
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    // Using environment variables for security and easy configuration
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setStatus("success");
          setIsModalOpen(true);
          formRef.current.reset();

          // Trigger confetti for the "WOW" effect
          confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#FFE6D0", "#ffffff", "#A2A2A2"],
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStatus("error");
          // Even if it fails because of missing template ID,
          // we could show the modal for demo purposes if you want,
          // but better to handle the error properly.
        },
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section
      id="contact"
      className="bg-[#050505] text-white w-full py-10 md:py-32 px-6 md:px-10 lg:px-16"
      style={{ background: "#0a0a0a" }}
    >
      <SuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <div className="container mx-auto max-w-[1440px]">
        {/* Top Content */}
        <div className="mb-4 md:mb-20 max-w-2xl">
          <h2 className="text-[#FAFAFA] text-[42px] md:text-[52px] font-semibold md:font-bold leading-[40px] md:leading-[56px] tracking-[-1.8px] font-[var(--font-founders)]">
            {t("contact.where_to_find")}
            <br className="hidden md:block" /> {t("contact.find_us")}
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

          <p className="text-[#A2A2A2] md:text-[#7E7E7E] text-[16px] font-normal leading-[24px] mt-3 md:mt-6 font-[var(--font-founders)] max-w-[700px] whitespace-pre-line">
            {t("contact.location_desc")}
          </p>
        </div>

        {/* Form Box */}
        <div className="bg-[#121212] rounded-[24px] md:rounded-[32px] p-3.5 md:p-12 lg:p-16 w-full text-white">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 md:gap-y-14"
          >
            {/* Row 1 */}
            <div className="flex items-center border-b border-[#333] pb-3 md:pb-4 gap-5 focus-within:border-[#FFE6D0] transition-colors">
              <label className="text-white shrink-0 font-normal lg:text-[20px] text-[18px] leading-5 lg:leading-[20px] font-[var(--font-founders)]">
                {t("contact.full_name")}
              </label>
              <input
                type="text"
                name="user_name"
                required
                placeholder="Jhon smith"
                className="bg-transparent text-white w-full outline-none font-[var(--font-founders)] font-normal text-[18px] lg:text-[20px] leading-5 lg:leading-[20px] placeholder:text-[#7E7E7E]"
              />
            </div>

            <div className="flex items-center border-b border-[#333] pb-3 md:pb-4 gap-5 focus-within:border-[#FFE6D0] transition-colors">
              <label className="text-white shrink-0 font-normal lg:text-[20px] text-[18px] leading-5 lg:leading-[20px] font-[var(--font-founders)]">
                {t("contact.city")}
              </label>
              <input
                type="text"
                name="city"
                placeholder="Spain"
                className="bg-transparent text-white w-full outline-none font-[var(--font-founders)] font-normal text-[18px] lg:text-[20px] leading-5 lg:leading-[20px] placeholder:text-[#7E7E7E]"
              />
            </div>

            {/* Row 2 */}
            <div className="flex items-center border-b border-[#333] pb-3 md:pb-4 gap-5 focus-within:border-[#FFE6D0] transition-colors">
              <label className="text-white shrink-0 font-normal lg:text-[20px] text-[18px] leading-5 lg:leading-[20px] font-[var(--font-founders)]">
                {t("contact.body_placement")}
              </label>
              <input
                type="text"
                name="body_placement"
                placeholder="Neck"
                className="bg-transparent text-white w-full outline-none font-[var(--font-founders)] font-normal text-[18px] lg:text-[20px] leading-5 lg:leading-[20px] placeholder:text-[#7E7E7E]"
              />
            </div>

            <div className="flex items-center border-b border-[#333] pb-3 md:pb-4 gap-5 focus-within:border-[#FFE6D0] transition-colors">
              <label className="text-white shrink-0 font-normal lg:text-[20px] text-[18px] leading-5 lg:leading-[20px] font-[var(--font-founders)]">
                {t("contact.email")}
              </label>
              <input
                type="email"
                name="user_email"
                required
                placeholder="example@mail.com"
                className="bg-transparent text-white w-full outline-none font-[var(--font-founders)] font-normal text-[18px] lg:text-[20px] leading-5 lg:leading-[20px] placeholder:text-[#7E7E7E]"
              />
            </div>

            {/* Row 3 */}
            <div className="flex items-center border-b border-[#333] pb-3 md:pb-4 gap-5 focus-within:border-[#FFE6D0] transition-colors">
              <label className="text-white shrink-0 font-normal lg:text-[20px] text-[18px] leading-5 lg:leading-[20px] font-[var(--font-founders)]">
                {t("contact.phone")}
              </label>
              <input
                type="tel"
                name="user_phone"
                required
                placeholder="0123456789"
                className="bg-transparent text-white w-full outline-none font-[var(--font-founders)] font-normal text-[18px] lg:text-[20px] leading-5 lg:leading-[20px] placeholder:text-[#7E7E7E]"
              />
            </div>

            <div className="flex items-center border-b border-[#333] pb-3 md:pb-4 gap-5 focus-within:border-[#FFE6D0] transition-colors">
              <label className="text-white shrink-0 font-normal lg:text-[20px] text-[18px] leading-5 lg:leading-[20px] font-[var(--font-founders)]">
                {t("contact.inspiration")}
              </label>
              <input
                type="text"
                name="inspiration"
                placeholder="file link"
                className="bg-transparent text-white w-full outline-none font-[var(--font-founders)] font-normal text-[18px] lg:text-[20px] leading-5 lg:leading-[20px] placeholder:text-[#7E7E7E]"
              />
            </div>

            {/* Row 4 - Full Width */}
            <div className="md:col-span-2 flex items-center border-b border-[#333] pb-3 md:pb-4 gap-5 focus-within:border-[#FFE6D0] transition-colors">
              <label className="text-white shrink-0 font-normal lg:text-[20px] text-[18px] leading-5 lg:leading-[20px] font-[var(--font-founders)]">
                {t("contact.description")}
              </label>
              <input
                type="text"
                name="message"
                placeholder="write a description"
                className="bg-transparent text-white w-full outline-none font-[var(--font-founders)] font-normal text-[18px] lg:text-[20px] leading-5 lg:leading-[20px] placeholder:text-[#7E7E7E]"
              />
            </div>

            {/* Submit Button & Status Message */}
            <div className="md:col-span-2 flex flex-col md:flex-row items-center justify-between mt-8 md:mt-12 gap-4">
              <div className="flex-1">
                {status === "error" && (
                  <p className="text-red-400 font-[var(--font-founders)] text-[16px]">
                    {t("contact.error_msg")}
                  </p>
                )}
              </div>

              {/* Desktop Submit Button */}
              <button
                type="submit"
                disabled={isSending}
                className="hidden md:flex items-center gap-3 text-white hover:text-[#FFE6D0] disabled:opacity-50 disabled:cursor-not-allowed transition-colors group cursor-pointer"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`transform -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ${isSending ? "animate-bounce" : ""}`}
                >
                  <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" />
                </svg>
                <span className="text-[14px] font-[var(--font-founders)] font-semibold tracking-widest uppercase border-b border-white pb-1 group-hover:border-[#FFE6D0] transition-colors">
                  {isSending
                    ? t("contact.sending")
                    : t("contact.send_reservation")}
                </span>
              </button>

              {/* Mobile Submit Button (Pill Design) */}
              <button
                type="submit"
                disabled={isSending}
                className="md:hidden w-full bg-[#FFE6D0] text-black rounded-full py-3 flex items-center justify-center gap-3 font-normal uppercase text-[16px] leading-[24px] tracking-wide font-[var(--font-founders)] disabled:opacity-50"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`transform -rotate-45 ${isSending ? "animate-bounce" : ""}`}
                >
                  <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" />
                </svg>
                {isSending ? t("contact.sending") : t("contact.reservation")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
