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
} from "../../util/pageRoute";
import Image from "next/image";
import logoImage from "@/public/images/logo/logo.webp";
import Button from "../ui/Button";
import { pages } from "@/util/route";

const styles = {
  baseLink:
    "text-[#FFE3C9] text-base font-normal leading-6 hover:text-[#ffe6d0] transition-colors duration-200 py-2 md:py-0 font-[var(--font-founders)]",
  nav: "hidden md:flex space-x-8 lg:space-x-10 items-center",
  mobileMenu:
    "fixed inset-0 z-[60] bg-gray-900/95 backdrop-blur-xl md:hidden p-6 pt-20 flex flex-col items-start space-y-6",
  closeButton:
    "absolute top-4 right-4 text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors",
  mobileLinksContainer: "flex flex-col space-y-6 w-full",
  mobileLink: "text-white text-3xl font-bold block ",
  mobileButtonContainer: "mt-6 w-full",
  header:
    "fixed left-0 w-full z-50 top-0 border-b border-[#F0EDF8] md:border-b-0",
  container:
    "container mx-auto px-6 md:px-10 lg:px-16 py-4 flex justify-between items-center relative h-20",
  logoLink: "flex items-center space-x-2",
  rightActions: "flex items-center gap-2 md:gap-4",
  menuButton:
    "md:hidden text-grey-600 p-2 rounded-full bg-grey-900 hover:bg-gray-600 transition-colors",
  menuButtonOpen: "invisible pointer-events-none",
};

const navItems = [
  { name: "ABOUT US", href: ABOUT },
];

const mobileNavItems = [
  ...navItems,
  { name: "RESERVATION", href: pages.contactUs },
];

// Link that smooth-scrolls to in-page section and (optionally) triggers onHit (to close mobile menu)
const NavLink = ({ name, href, onHit, className = "" }) => (
  <a
    href={href}
    onClick={(e) => {
      const id = href.startsWith("#") ? href.slice(1) : null;
      const el = id && document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        // history.replaceState(null, "", href); // Keeping history manipulation optional
        onHit?.();
      }
    }}
    className={clsx(styles.baseLink, className)}
  >
    {name}
  </a>
);

const NavLinks = () => (
  <nav className={styles.nav}>
    {navItems.map((item) => (
      <NavLink key={item.name} {...item} />
    ))}
  </nav>
);

const MobileMenu = ({ isOpen, toggleMenu }) => {
  const menuVariants = {
    closed: { x: "100%" },
    open: { x: "0%" },
  };
  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 + i * 0.1, duration: 0.3 },
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={styles.mobileMenu}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <button
            onClick={toggleMenu}
            className={styles.closeButton}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>

          <motion.div
            className={styles.mobileLinksContainer}
            initial="closed"
            animate="open"
            transition={{ staggerChildren: 0.1 }}
          >
            {/* Services Link */}
            <motion.div variants={linkVariants} custom={0}>
              <NavLink
                name="Services"
                href={SOLUTION}
                className={styles.mobileLink}
                onHit={toggleMenu}
              />
            </motion.div>

            {/* Other Nav Items */}
            {mobileNavItems.map((item, index) => (
              <motion.div
                key={item.name}
                variants={linkVariants}
                custom={index + 1}
              >
                <NavLink
                  {...item}
                  className={styles.mobileLink}
                  onHit={toggleMenu}
                />
              </motion.div>
            ))}
          </motion.div>

          <div className={styles.mobileButtonContainer}>
            <Button
              variant="fill"
              size="md"
              href={pages.contactUs}
              className="w-full gap-2"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g style={{ mixBlendMode: "difference" }}>
                  <path
                    d="M20.5795 3.22123L4.11651 8.71023C4.0491 8.73264 3.99011 8.77504 3.94737 8.83178C3.90464 8.88853 3.88018 8.95693 3.87725 9.02791C3.87432 9.09888 3.89306 9.16907 3.93097 9.22914C3.96888 9.28922 4.02418 9.33633 4.08951 9.36423L10.1395 11.9572C10.1712 11.971 10.2059 11.9762 10.2403 11.9726C10.2746 11.9689 10.3074 11.9564 10.3355 11.9362L16.2665 7.69823C16.4505 7.56823 16.6765 7.79423 16.5465 7.97823L12.3085 13.9092C12.2887 13.9373 12.2765 13.97 12.273 14.0041C12.2695 14.0383 12.2748 14.0727 12.2885 14.1042L14.8805 20.1542C14.9083 20.2196 14.9553 20.2749 15.0154 20.3129C15.0754 20.3509 15.1455 20.3698 15.2165 20.3669C15.2875 20.3641 15.3559 20.3398 15.4127 20.2971C15.4695 20.2545 15.512 20.1956 15.5345 20.1282L21.0235 3.66423C21.0442 3.60252 21.0472 3.53627 21.0323 3.47293C21.0174 3.40958 20.9851 3.35165 20.9391 3.30564C20.8931 3.25962 20.8351 3.22735 20.7718 3.21244C20.7085 3.19753 20.6412 3.20057 20.5795 3.22123Z"
                    fill="#FFE3C9"
                  />
                </g>
              </svg>
              RESERVATION
            </Button>
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
            <Image src={logoImage} alt="Logo" priority />
          </a>

          {/* Desktop nav */}
          <NavLinks />

          <div className={styles.rightActions}>
            <a
              href={pages.contactUs}
              className="hidden md:flex items-center gap-2 text-[#FFE3C9] text-base font-normal font-[var(--font-founders)] leading-6 hover:text-[#ffe6d0] transition-colors duration-200"
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
              RESERVATION
            </a>

            <button
              onClick={toggleMenu}
              className={clsx(
                styles.menuButton,
                isMenuOpen && styles.menuButtonOpen,
              )}
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10 5H20M4 12H20M4 19H14"
                  stroke="#0E121D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  );
}
