import React from "react";
import Image from "next/image";

const style = {
  container: "pt-4 pb-8 flex flex-col space-y-6",
  subHeader: "text-[#5d2be9] text-lg font-bold flex items-center gap-2",
  description: "text-[#475467] text-base leading-relaxed",
  techTitle: "text-[#475467] font-bold text-xs md:text-sm tracking-wider mb-6",
  techGrid: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-y-10 gap-x-4 mb-10",
  techFlex: "flex justify-start items-center gap-x-1 md:gap-x-4 mb-6",
  techItem: "flex flex-col items-center",
  iconCircle: "relative w-18 h-18 md:w-[100px] md:h-[100px] rounded-full border border-[#EBEAED] flex items-center justify-center bg-white hover:shadow-md transition-shadow duration-300",
  iconWrapper: "relative w-[68px] h-[68px] md:w-36 md:h-36",
  techName: "text-[#3B3854] text-xs md:text-[16px] font-medium text-center",
  excelTitle: "text-[#5d2be9] font-semibold text-base",
  listContainer: "flex flex-col",
  listItem: "text-[#475467] text-sm md:text-base leading-relaxed whitespace-pre-wrap",
  boldLabel: "font-bold text-[#3B3854]",
  highlightBox: "bg-[#F9F5FF] border border-[#E9D7FE] rounded-lg p-4 flex gap-3 items-center mt-2 -mt-6",
  highlightIcon: "relative min-w-8 h-8 md:w-9 md:h-9 flex items-center justify-center", // Lightning bolt color
  highlightText: "text-[#475467] text-sm font-medium leading-relaxed",
};

export default function ExpertiseContent({
  subHeader,
  icon = "🎨",
  description,
  excelTitle,
  excelItems = [],
  excelSections = [], // New prop for multiple sections
  techSections = [], // New prop for technology icons
  highlightText
}) {
  return (
    <div className={style.container}>
      {/* Sub Header */}
      {subHeader && (
        <h4 className={style.subHeader}>
          <span>
            {icon && icon.startsWith("/") ? (
              <Image src={icon} alt="icon" width={32} height={32} className="object-contain" />
            ) : (
              icon
            )}
          </span>
          {subHeader}
        </h4>
      )}

      {/* Main Description */}
      <p className={style.description}>{description}</p>

      {/* Excel List Section(s) */}
      <div className="flex flex-col gap-6">
        {/* Render multiple sections if provided */}
        {excelSections.length > 0 ? (
          excelSections.map((section, sIdx) => (
            <div key={sIdx}>
              {section.title && <h5 className={style.excelTitle}>{section.title}</h5>}
              <ul className={style.listContainer}>
                {(section.items || []).map((item, idx) => (
                  <li key={idx} className={style.listItem}>
                    {item.label && <span className={style.boldLabel}>{item.label}</span>} {item.text}
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          /* Fallback to single section for backward compatibility */
          (excelTitle || excelItems.length > 0) && (
            <div>
              {excelTitle && <h5 className={style.excelTitle}>{excelTitle}</h5>}
              <ul className={style.listContainer}>
                {excelItems?.map((item, idx) => (
                  <li key={idx} className={style.listItem}>
                    {item.label && <span className={style.boldLabel}>{item.label}</span>} {item.text}
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>

      <div>
        {/* Technology Icons Sections */}
        {techSections.length > 0 && (
          <div className="flex flex-col">
            {techSections.map((section, sIdx) => (
              <div key={sIdx}>
                {section.title && <h5 className={style.techTitle}>{section.title}</h5>}
                <div className={style.techFlex}>
                  {section.items.map((tech, tIdx) => (
                    <div key={tIdx} className={style.techItem}>
                      {/* <div className={style.iconCircle}> */}
                      <div className={style.iconWrapper}>
                        <Image
                          src={tech.icon}
                          alt={tech.name || "Technology icon"}
                          fill
                          className="object-contain"
                        />
                      </div>
                      {/* </div> */}
                      <span className={style.techName}>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Highlight Box */}
        <div className={style.highlightBox}>
          <div className={style.highlightIcon}>
            <Image src="/images/service-mobile/flash-lightning.webp" alt="lightning" width={32} height={32} className="w-8 h-8 md:w-9 md:h-9" />
          </div>
          <p className={style.highlightText}>{highlightText}</p>
        </div>
      </div>
    </div>
  );
}