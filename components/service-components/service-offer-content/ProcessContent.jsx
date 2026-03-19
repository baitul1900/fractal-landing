import React from "react";

const style = {
  container: "pb-6 pt-2 pl-0 md:pl-10 pr-4", // Added padding-left to align with title indent
  description: "text-[#94969C] text-sm md:text-base leading-relaxed mb-6",
  tagsWrapper: "flex flex-wrap gap-3 mb-6",
  tag: "px-4 py-2 rounded-full border border-[#2D2D39] text-[#CECFD2] text-xs md:text-sm font-medium hover:border-[#B7E92B] transition-colors cursor-default bg-[#1A1A20]",
  footer: "text-[#667085] text-sm"
};

export default function ProcessContent({ description, tags = [], footerText }) {
  return (
    <div className={style.container}>
      <p className={style.description}>{description}</p>
      
      {tags.length > 0 && (
        <div className={style.tagsWrapper}>
          {tags.map((tag, index) => (
            <span key={index} className={style.tag}>
              {tag}
            </span>
          ))}
        </div>
      )}

      {footerText && (
        <p className={style.footer}>{footerText}</p>
      )}
    </div>
  );
}