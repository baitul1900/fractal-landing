import React from "react";

// The Wrapper for the Grid
export const BentoGrid = ({ children, className = "" }) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px] ${className}`}
    >
      {children}
    </div>
  );
};

export const BentoItem = ({
  children,
  className = "",
  bgClass = "",
  bgImage,
}) => {
  // FIX: Check if bgImage is an imported object (use .src) or a string URL
  const backgroundUrl = bgImage?.src || bgImage;

  return (
    <div
      className={`
        relative overflow-hidden rounded-4xl p-8 flex flex-col justify-between
        transition-all duration-300 
        ${bgClass} 
        ${className}
      `}
      style={{
        // Use the extracted backgroundUrl here
        backgroundImage: backgroundUrl ? `url(${backgroundUrl})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      {backgroundUrl && (
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      )}
      
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
};