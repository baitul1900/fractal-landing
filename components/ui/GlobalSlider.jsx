"use client";
import { motion } from "framer-motion";
import { Children, useState, useEffect } from "react";
import useMeasure from "react-use-measure";

// Configuration for spacing
const GAP = 24; // The gap between cards (px)

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const GlobalSlider = ({
  children,
  showButtons = true,
  centerIfFew = false,
  isDraggable = false,
  dragOnMobileOnly = false,
  hideButtonsOnMobile = false,
  hideButtonsIfFew = false
}) => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  // 1. Responsive State: Initialize with safe defaults
  const [cardWidth, setCardWidth] = useState(300);
  const [padding, setPadding] = useState({ left: 16, right: 16 });

  const arrayChildren = Children.toArray(children);
  const isMobile = width < BREAKPOINTS.lg;

  // 2. Adjust dimensions based on screen width
  useEffect(() => {
    if (width >= BREAKPOINTS.lg) {
      // Desktop: Wide cards (416px) + Large Side Buffers (260px)
      setCardWidth(416);
      if (centerIfFew && (416 + GAP) * arrayChildren.length - GAP < width) {
        // Center items if they don't fill the screen
        const contentWidth = (416 + GAP) * arrayChildren.length - GAP;
        const sidePadding = (width - contentWidth) / 2;
        setPadding({ left: sidePadding, right: sidePadding });
      } else {
        setPadding({ left: 260, right: 260 });
      }
    } else if (width >= BREAKPOINTS.sm) {
      // Tablet: Medium cards (340px) + Normal Padding
      setCardWidth(340);
      setPadding({ left: 32, right: 32 });
    } else {
      // Mobile: Narrower cards (80% of screen or fixed) + Small Padding
      // Subtracting roughly padding+gap to peek the next card
      setCardWidth(width > 0 ? width * 0.8 : 280);
      setPadding({ left: 16, right: 16 });
    }
  }, [width, centerIfFew, arrayChildren.length]);

  const CARD_SIZE = cardWidth + GAP;

  // 3. Calculate Scroll Limits
  const totalContentWidth =
    (CARD_SIZE * arrayChildren.length) - GAP + padding.left + padding.right;

  const maxScroll = Math.max(0, totalContentWidth - width);

  const CAN_SHIFT_LEFT = offset < 0;
  const CAN_SHIFT_RIGHT = Math.abs(offset) < maxScroll - 5;

  const canDrag = isDraggable && (dragOnMobileOnly ? isMobile : true);
  const effectiveShowButtons = showButtons && !(hideButtonsOnMobile && isMobile) && !(hideButtonsIfFew && !isMobile);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) return;
    setOffset((pv) => Math.min(pv + CARD_SIZE, 0));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) return;
    setOffset((pv) => Math.max(pv - CARD_SIZE, -maxScroll));
  };

  const onDragEnd = (event, info) => {
    if (!canDrag) return;
    const { offset: dragOffset } = info;
    setOffset((prev) => {
      let newOffset = prev + dragOffset.x;
      if (newOffset > 0) newOffset = 0;
      if (newOffset < -maxScroll) newOffset = -maxScroll;

      const snapIndex = Math.round(newOffset / CARD_SIZE);
      return snapIndex * CARD_SIZE;
    });
  };

  return (
    <section ref={ref} className="w-full overflow-hidden">
      {/* Slider Track */}
      <motion.div
        drag={canDrag ? "x" : false}
        dragConstraints={canDrag ? { left: -maxScroll, right: 0 } : undefined}
        dragElastic={0.05}
        onDragEnd={onDragEnd}
        animate={{ x: offset }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className={`flex ${canDrag ? "cursor-grab active:cursor-grabbing" : ""}`}
        style={{
          gap: `${GAP}px`,
          paddingLeft: `${padding.left}px`,
          paddingRight: `${padding.right}px`
        }}
      >
        {Children.map(arrayChildren, (child) => (
          <div
            className="shrink-0 transition-[width] duration-300 ease-in-out"
            style={{ width: `${cardWidth}px` }}
          >
            {child}
          </div>
        ))}
      </motion.div>

      {/* Navigation Buttons */}
      {effectiveShowButtons && (
        <div className="container mx-auto px-4 md:px-[74px] mt-8 flex justify-end gap-3">
          <button
            className={`flex h-12 w-12 items-center justify-center rounded-full border border-[#E4E7EC] bg-white text-[#0E121D] transition-all hover:bg-gray-50 ${!CAN_SHIFT_LEFT ? "opacity-30 cursor-not-allowed" : ""
              }`}
            disabled={!CAN_SHIFT_LEFT}
            onClick={shiftLeft}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            className={`flex h-12 w-12 items-center justify-center rounded-full border border-[#E4E7EC] bg-white text-[#0E121D] transition-all hover:bg-gray-50 ${!CAN_SHIFT_RIGHT ? "opacity-30 cursor-not-allowed" : ""
              }`}
            disabled={!CAN_SHIFT_RIGHT}
            onClick={shiftRight}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};

export default GlobalSlider;