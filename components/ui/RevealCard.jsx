"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RevealCard = ({
  initialContent,
  revealedContent,
  className = "bg-white",
  minHeight = "min-h-[493px]",
  title,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function
  const toggleOpen = (e) => {
    e.stopPropagation(); // Stop bubble up
    setIsOpen(!isOpen);
  };

  // Animation variants
  const contentVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.98,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      // Removed layout prop to prevent animation sync issues
      // REMOVED p-8 from here so absolute layers can align to card edges.
      // We will re-add p-8 to the internal containers.
      className={`relative rounded-[32px] flex flex-col justify-between overflow-hidden transition-shadow duration-300 ${minHeight} ${className}`}
    >
      {/* Content Switcher */}
      <div className="relative z-10 h-full w-full pointer-events-none">
        {/* pointer-events-none ensures clicks pass through to button, 
            but we re-enable pointer-events-auto on content if you have links inside text */}
        <AnimatePresence mode="wait" initial={false}>
          {!isOpen ? (
            <motion.div
              key="initial"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              // Re-added p-8 here to protect the initialContent (icon)
              className="h-full w-full p-8 flex flex-col pointer-events-auto relative"
            >
              {initialContent}

              {/* Title moved inside AnimatePresence to sync with icon animation */}
              {/* Uses inset-x-0 bottom-0 to align with card edges, matching the permanent footer */}
              <div className="absolute inset-x-0 bottom-0 h-[120px] px-8 flex justify-between items-center pointer-events-none">
                <div className="pointer-events-auto pr-4 flex-1">
                  {title && (
                    <h3 className="text-[#534A6D] text-lg md:text-[20px] font-bold leading-tight">
                      {title}
                    </h3>
                  )}
                </div>
                {/* Spacer for the toggle button which is outside AnimatePresence */}
                <div className="w-12 h-12 shrink-0 invisible pointer-events-none" />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="revealed"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              // Re-added p-8 here to protect the revealedContent
              className="h-full w-full p-8 flex flex-col pointer-events-auto"
            >
              {revealedContent}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer / Toggle Button Section */}
      <div className="absolute inset-x-0 bottom-0 h-[120px] px-8 z-20 flex justify-between items-center pointer-events-none">

        {/* Left Side: Title Spacer (Title is handled inside AnimatePresence for animation sync) */}
        <div className="flex-1" />

        {/* Right Side: Toggle Button (Container) */}
        <div className="pointer-events-auto shrink-0">
          <motion.button
            // Removed layoutId and layout prop to ensure stability across renders
            onClick={toggleOpen}
            className={`flex h-12 w-12 items-center justify-center rounded-full border transition-colors duration-300 cursor-pointer ${isOpen
              ? "bg-[#F9FAFB] border-[#E4E7EC] text-[#0E121D]"
              : "bg-[#F9FAFB] border-[#E4E7EC] text-[#5D2BE9] hover:bg-[#F2F4F7]"
              }`}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                // Minus Icon
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              ) : (
                // Plus Icon
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              )}
            </motion.div>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default RevealCard;
