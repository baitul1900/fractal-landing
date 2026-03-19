import { div } from "framer-motion/client";
import React from "react";

const style = {
  container: "flex flex-col gap-6 md:px-6 px-2 py-6 md:py-8 hover:bg-[#17141f] rounded-xl transition-colors duration-300 ",
  description: "text-[#bab3ce] text-base md:text-lg leading-relaxed",
  tagContainer: "flex flex-wrap gap-2",
  tag: "px-4 py-1.5 rounded-full border border-[#2d2d39] text-white text-xs md:text-sm font-semibold uppercase tracking-wider  transition-colors cursor-default",
  list: "space-y-3",
  listItem: "flex items-start gap-3 text-white text-base",
  checkIcon: "text-[#00C278] flex-shrink-0 w-5 h-5 md:w-6 md:h-6",
  footer: "flex items-start gap-2 text-white font-bold text-sm md:text-base uppercase tracking-wide mt-2",
  footerIcon: "text-[#bab3ce]",
};

const defaultContent = {
  title: "Web App & Admin Dashboard UX",
  description: "We simplify complex workflows by designing intuitive, data-driven web apps and dashboards that enhance productivity. Our UX expertise ensures seamless user navigation, clear data visualization, and efficient task management, allowing users to make informed decisions faster.",
  tags: [
    "INTERACTIVE WIREFRAMES",
    "DASHBOARD",
    "UX/UI DESIGN",
    "USER ROLE-BASED INTERFACES",
  ],
  checklist: [
    "Faster decision-making with clear data representation",
    "Enhanced usability and user satisfaction",
    "Improved efficiency for teams and admins",
  ],
  footer: "EMPOWER USERS WITH STREAMLINED, HIGH-PERFORMING DASHBOARDS.",
};

export default function ServiceContent({ content = defaultContent }) {
  return (
    <div className="border-b border-[#4A4262]">
      <div className={style.container}>
        <h5 className=" text-[#bab3ce] md:text-[28px] text-lg font-semibold font-['Bricolage_Grotesque']">{content.title}</h5>
        <p className={style.description}>
          {content.description}
        </p>

        {/* Tags Row */}
        <div className={style.tagContainer}>
          {content.tags?.map((tag, i) => (
            <span key={i} className={style.tag}>
              {tag}
            </span>
          ))}
        </div>

        {/* Checklist */}
        <ul className={style.list}>
          {content.checklist?.map((item, i) => (
            <li key={i} className={style.listItem}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className={style.checkIcon}
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Bold Footer */}
        <div className={style.footer}>
          <span className={style.footerIcon}>📢</span>
          {content.footer}
        </div>
      </div>
    </div>

  );
}