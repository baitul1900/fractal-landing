"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import {
  SOLUTION,
  TECH,
  PORTFOLIO,
  ABOUT,
  CONTACT,
  SHOP,
  ARTISTS,
  PROCESS,
} from "../../util/pageRoute";
import Image from "next/image";
import logoImage from "@/public/images/logo/logo.webp";
import { pages } from "@/util/route";
import { scrollToId } from "../../util/scroll";

import { useLanguage } from "@/context/LanguageContext";

const styles = {
  baseLink:
    "text-[#FFE3C9] text-base font-normal leading-6 hover:text-[#ffe6d0] transition-colors duration-200 py-2 md:py-0 font-[var(--font-founders)]",
  nav: "hidden lg:flex space-x-8 lg:space-x-10 items-center",
  mobileMenu:
    "fixed inset-0 z-[60] bg-black/60 backdrop-blur-md md:hidden flex flex-col items-center px-4 pt-24 font-[var(--font-founders)]",
  closeButton:
    "absolute top-6 right-6 text-white p-2 transition-colors",
  mobileLinksContainer: "flex flex-col w-full bg-[#FFE6D0] rounded-[24px] p-6 mb-4",
  mobileLink: "text-black text-[18px] font-bold block py-4 border-b border-black/10 last:border-b-0 uppercase font-[var(--font-founders)]",
  mobileButtonContainer: "w-full",
  reservationCard: "w-full bg-[#FFE6D0] rounded-full py-5 px-6 flex items-center justify-center gap-3 text-black font-bold uppercase text-[18px] font-[var(--font-founders)]",
  header:
    "fixed left-0 w-full z-[70] top-0",
  container:
    "container mx-auto px-6 md:px-10 lg:px-16 py-4 flex justify-between items-center relative h-20",
  logoLink: "flex items-center space-x-2",
  rightActions: "flex items-center gap-2 md:gap-4",
  menuButton:
    "lg:hidden text-white p-2 transition-colors",
  menuButtonOpen: "",
};

const handleScroll = (e, href, onHit) => {
  if (href.startsWith("#")) {
    e.preventDefault();
    scrollToId(href);
    onHit?.();
  }
};

// Link that smooth-scrolls to in-page section and (optionally) triggers onHit (to close mobile menu)
const NavLink = ({ name, href, onHit, className = "" }) => (
  <a
    href={href}
    onClick={(e) => handleScroll(e, href, onHit)}
    className={clsx(styles.baseLink, className)}
  >
    {name}
  </a>
);

const NavLinks = () => {
  const { t } = useLanguage();
  return (
    <nav className={styles.nav}>
      <NavLink name={t("navbar.about_us")} href={ABOUT} />
      <NavLink name={t("navbar.artists")} href={ARTISTS} />
      <NavLink name={t("navbar.process")} href={PROCESS} />
    </nav>
  );
};

const MobileMenu = ({ isOpen, toggleMenu }) => {
  const { lang, setLang, t } = useLanguage();
  const menuVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={styles.mobileMenu}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="w-full max-w-[400px]">
            <motion.div
              className={styles.mobileLinksContainer}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <NavLink name={t("navbar.about_us")} href={ABOUT} className={styles.mobileLink} onHit={toggleMenu} />
              <NavLink name={t("navbar.artists")} href={ARTISTS} className={styles.mobileLink} onHit={toggleMenu} />
              <NavLink name={t("navbar.process")} href={PROCESS} className={styles.mobileLink} onHit={toggleMenu} />
              
              {/* Mobile Language Switcher */}
              <div className="flex items-center gap-2 pt-4 uppercase font-[var(--font-founders)] text-[18px] font-bold text-black/40">
                <button 
                  onClick={() => setLang("ES")}
                  className={clsx("transition-colors duration-200", lang === "ES" ? "text-black" : "hover:text-black")}
                >
                  ES
                </button>
                <span className="text-black/20">/</span>
                <button 
                  onClick={() => setLang("EN")}
                  className={clsx("transition-colors duration-200", lang === "EN" ? "text-black" : "hover:text-black")}
                >
                  EN
                </button>
              </div>
            </motion.div>

            <motion.div
              className={styles.mobileButtonContainer}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <a
                href={pages.contactUs}
                onClick={(e) => handleScroll(e, pages.contactUs, toggleMenu)}
                className={styles.reservationCard}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.5795 3.22123L4.11651 8.71023C4.0491 8.73264 3.99011 8.77504 3.94737 8.83178C3.90464 8.88853 3.88018 8.95693 3.87725 9.02791C3.87432 9.09888 3.89306 9.16907 3.93097 9.22914C3.96888 9.28922 4.02418 9.33633 4.08951 9.36423L10.1395 11.9572C10.1712 11.971 10.2059 11.9762 10.2403 11.9726C10.2746 11.9689 10.3074 11.9564 10.3355 11.9362L16.2665 7.69823C16.4505 7.56823 16.6765 7.79423 16.5465 7.97823L12.3085 13.9092C12.2887 13.9373 12.2765 13.97 12.273 14.0041C12.2695 14.0383 12.2748 14.0727 12.2885 14.1042L14.8805 20.1542C14.9083 20.2196 14.9553 20.2749 15.0154 20.3129C15.0754 20.3509 15.1455 20.3698 15.2165 20.3669C15.2875 20.3641 15.3559 20.3398 15.4127 20.2971C15.4695 20.2545 15.512 20.1956 15.5345 20.1282L21.0235 3.66423C21.0442 3.60252 21.0472 3.53627 21.0323 3.47293C21.0174 3.40958 20.9851 3.35165 20.9391 3.30564C20.8931 3.25962 20.8351 3.22735 20.7718 3.21244C20.7085 3.19753 20.6412 3.20057 20.5795 3.22123Z"
                    fill="black"
                  />
                </svg>
                RESERVATION
              </a>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang, setLang, t, mounted } = useLanguage();
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // change header style on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock page scroll when mobile menu is open
  useEffect(() => {
    const originalStyle = document.documentElement.style.overflow;
    if (isMenuOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = originalStyle;
    }
    return () => {
      document.documentElement.style.overflow = originalStyle;
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((v) => !v);

  const headerVariants = {
    initial: {
      backgroundColor: "rgba(0,0,0,0)",
      backdropFilter: "blur(0px)",
      boxShadow: "0 0 0 rgba(0,0,0,0)",
    },
    scrolled: {
      backgroundColor: "rgba(0,0,0,0.2)", // Dark background with opacity
      backdropFilter: "blur(12px)",
      boxShadow:
        "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",
    },
  };

  return (
    <>
      <motion.header
        initial="initial"
        animate={scrolled ? "scrolled" : "initial"}
        variants={headerVariants}
        transition={{ duration: 0.3 }}
        className={styles.header}
      >
        <div className={styles.container}>
          {/* Logo */}
          <a href="/" className={styles.logoLink}>
            {/* Replace this SVG with your new logo */}
            <Image src={logoImage} alt="Logo" width={80} height={80} priority />
          </a>

          {/* Desktop nav */}
          <NavLinks />

          <div className={styles.rightActions}>
            {/* Desktop Language Switcher */}
            <div className="hidden lg:flex items-center gap-2 text-[#FFE3C9] text-base font-normal font-[var(--font-founders)] leading-6 mr-6 opacity-60">
              {mounted && (
                <>
                  <button 
                    onClick={() => setLang("ES")}
                    className={clsx("transition-colors duration-200", lang === "ES" ? "text-white opacity-100 font-medium" : "hover:text-white hover:opacity-100")}
                  >
                    ES
                  </button>
                  <span className="opacity-50">/</span>
                  <button 
                    onClick={() => setLang("EN")}
                    className={clsx("transition-colors duration-200", lang === "EN" ? "text-white opacity-100 font-medium" : "hover:text-white hover:opacity-100")}
                  >
                    EN
                  </button>
                </>
              )}
            </div>

            <a
              href={pages.contactUs}
              onClick={(e) => handleScroll(e, pages.contactUs)}
              className="hidden lg:flex items-center gap-2 text-[#FFE3C9] text-base font-normal font-[var(--font-founders)] leading-6 hover:text-[#ffe6d0] transition-colors duration-200"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transform  -gpu transition-transform duration-200 group-hover:translate-x-1"
              >
                <g style={{ mixBlendMode: "difference" }}>
                  <path
                    d="M20.5795 3.22123L4.11651 8.71023C4.0491 8.73264 3.99011 8.77504 3.94737 8.83178C3.90464 8.88853 3.88018 8.95693 3.87725 9.02791C3.87432 9.09888 3.89306 9.16907 3.93097 9.22914C3.96888 9.28922 4.02418 9.33633 4.08951 9.36423L10.1395 11.9572C10.1712 11.971 10.2059 11.9762 10.2403 11.9726C10.2746 11.9689 10.3074 11.9564 10.3355 11.9362L16.2665 7.69823C16.4505 7.56823 16.6765 7.79423 16.5465 7.97823L12.3085 13.9092C12.2887 13.9373 12.2765 13.97 12.273 14.0041C12.2695 14.0383 12.2748 14.0727 12.2885 14.1042L14.8805 20.1542C14.9083 20.2196 14.9553 20.2749 15.0154 20.3129C15.0754 20.3509 15.1455 20.3698 15.2165 20.3669C15.2875 20.3641 15.3559 20.3398 15.4127 20.2971C15.4695 20.2545 15.512 20.1956 15.5345 20.1282L21.0235 3.66423C21.0442 3.60252 21.0472 3.53627 21.0323 3.47293C21.0174 3.40958 20.9851 3.35165 20.9391 3.30564C20.8931 3.25962 20.8351 3.22735 20.7718 3.21244C20.7085 3.19753 20.6412 3.20057 20.5795 3.22123Z"
                    fill="#FFE3C9"
                  />
                </g>
              </svg>
              {t("navbar.reservation")}
            </a>

            <button
              onClick={toggleMenu}
              className={clsx(
                styles.menuButton,
                isMenuOpen && styles.menuButtonOpen,
              )}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="18"
                  viewBox="0 0 32 18"
                  fill="none"
                >
                  <path
                    d="M10 2H30M2 9H30M16 16H30"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  );
}
