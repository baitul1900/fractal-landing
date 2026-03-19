import React, { forwardRef } from "react";
import clsx from "clsx"; // Utility for combining class names

// --- 1. GLOBAL BUTTON COMPONENT (components/ui/Button.jsx content) ---

/**
 * A reusable global Button component.
 * Handles linking via a standard <a> tag or standard onClick actions.
 * @param {object} props - Component props
 * @param {React.ReactNode} props.children - The content inside the button.
 * @param {'sm' | 'md' | 'lg'} [props.size='md'] - Defines the button size.
 * @param {'fill' | 'outline' | 'ghost'} [props.variant='fill'] - Defines the button visual style.
 * @param {string} [props.href] - If provided, the element acts as an <a> tag.
 * @param {function} [props.onClick] - Click handler for action buttons.
 * @param {string} [props.className] - Additional Tailwind CSS classes to apply.
 * @param {'button' | 'submit' | 'reset'} [props.type='button'] - The native button type (only relevant if not using 'href').
 */
const Button = forwardRef(
  (
    {
      children,
      size = "md",
      variant = "fill",
      href,
      onClick,
      className,
      type = "button",
      ...rest
    },
    ref
  ) => {
    // --- Base & Size Classes ---
    const baseClasses = clsx(
      "inline-flex items-center justify-center  rounded-[100px]  font-semibold tracking-wide transition-all duration-300 ease-in-out cursor-pointer",
      "focus:outline-none focus:ring-4",
      ""
    );

    const sizeClasses = {
      sm: "px-4 py-2 text-xs sm:text-sm",
      md: "px-6 py-3 text-sm md:text-base",
      lg: "px-8 py-4 text-base md:text-lg",
    };

    // --- Variant Classes (Mimicking the uploaded image style for 'fill') ---
    const variantClasses = {
      // Primary solid dark button
      fill: "bg-[#120f1d] text-white gap-3  hover:bg-[#0f0c1a] hover:shadow-lg hover:shadow-[#120f1d]/40 active:bg-[#0a0712] active:shadow-md ring-[#120f1d]/50",
      fillWhite:
        "bg-[#F8F7FC] text-[#0E121D] gap-3 hover:text-white hover:bg-[#0f0c1a] hover:shadow-lg hover:shadow-[#120f1d]/40 active:bg-[#0a0712] active:shadow-md ring-[#120f1d]/50",
      // Secondary button style
      outline:
        "bg-transparent border border-[#0f0d14] text-[#0f0d14] hover:bg-[#0f0c1a] hover:text-white hover:border-[#0f0c1a] hover:shadow-lg hover:shadow-gray-600/40 active:bg-gray-800 ring-gray-600/50",

      // Tertiary/Text button style
      ghost:
        "bg-transparent text-blue-400 hover:text-blue-300 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/20 active:bg-white/20 ring-blue-500/50",
      fillGreen:
        "bg-[#b7e92b] text-[#0f0d14] gap-3 hover:bg-[#9bc925] hover:shadow-lg hover:shadow-[#b7e92b]/40 active:bg-[#7a9e1a] active:shadow-md ring-[#b7e92b]/50",
    };

    const combinedClasses = clsx(
      baseClasses,
      sizeClasses[size],
      variantClasses[variant],
      className
    );

    // --- Rendering Logic ---

    if (href) {
      return (
        <a
          href={href}
          className={combinedClasses}
          onClick={onClick}
          ref={ref}
          {...rest}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        type={type}
        onClick={onClick}
        className={combinedClasses}
        ref={ref}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
