import React from "react";
import SectionWrapper from "../layouts/SectionWrapper";
import teamImage from "../../public/images/service-ux/team.webp";
import Image from "next/image";
import { renderTextWithHighlight } from "@/util/helper";
import logo from "../../public/images/service-ux/ideatedlab.webp";
import Button from "../ui/Button";

const defaultTeamServiceData = {
  headerText: {
    fullText:
      "Need a Dedicated UX/UI  Team Without Hiring In-House? Let’s Support Your Growth.",
    highlight: "Dedicated UX/UI  Team",
  },
  teamImage: teamImage,
  problems: [
    "Hiring full-time UX designers is costly & slow",
    "Freelancers lack long-term consistency",
    "Your team needs UX expertise, but without the overhead",
  ],
  solutions: [
    "Embedded UI/UX Designers → Integrated with your team",
    "On-Demand UI/UX Experts → Flexible, scalable support",
    "Full-Service UI/UX Partnership → Strategy, execution & optimization",
    "Budget vs. Quality Dilemma → High-Quality Design Within Your Budget",
    "Vision Misalignment → Designs That Truly Align with Your Goals",
  ],
};

export default function ServiceTeam({
  teamData = defaultTeamServiceData.teamImage,
  headerText = defaultTeamServiceData.headerText,
  problems = defaultTeamServiceData.problems,
  solutions = defaultTeamServiceData.solutions,
}) {
  return (
    <SectionWrapper className={style.sectionstyle}>
      <div className="flex justify-between">
        <div>
          <Image
            src={teamData}
            alt="Team Image"
            width={200}
            height={200}
            className="rounded-lg"
          />
        </div>

        <div className="w-full md:w-[70%] mb-12 md:mb-16">
          <h3 className={style.headerText}>
            {renderTextWithHighlight(
              headerText.fullText,
              headerText.highlight,
              style.highlightText
            )}
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Left Card: Problems */}
        <div className={style.problemCard}>
          <h4 className="text-white text-2xl md:text-3xl font-bold mb-8">
            Problems
          </h4>
          <ul className="space-y-6">
            {problems?.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="mt-1 shrink-0 text-[#FF4444]">
                  {/* Red X Icon */}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </div>
                <span className="text-[#bab3ce] text-lg leading-relaxed font-medium">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Card: Solutions */}
        <div className={style.solutionCard}>
          <h4 className="text-[#0F0D14] text-2xl md:text-3xl font-bold mb-8">
            How We Fix It
          </h4>
          <ul className="space-y-5">
            {solutions?.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="mt-1 shrink-0 text-[#00C278]">
                  {/* Green Check Icon */}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-[#475467] text-base md:text-lg leading-relaxed font-medium">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-[#342758]/30 rounded-3xl shadow-[inset_0px_1px_8px_4px_rgba(149,119,233,0.50)] border px-5 py-4 flex items-center justify-between gap-4">
        <div className="flex justify-center items-center gap-2">
          <Image
            src={logo}
            alt="Ideated Lab Logo"
            width={48}
            height={48}
            className="rounded-full"
          />

          <h1 className="text-[#f8f7fc] md:text-2xl text-xl font-semibold font-['Bricolage_Grotesque'] leading-8">
            Let’s Partner to Boost Conversions and Growth!
          </h1>
        </div>

        <div>
          <Button variant="fillGreen" size="lg">
            Book a call
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}

const style = {
  sectionstyle: "py-16 px-4 md:px-8 lg:px-16 bg-[#0E121D]",
  headerText:
    "text-[32px] md:text-[64px] font-['Bricolage_Grotesque'] leading-[1.1] font-bold text-[#F8F7FC]",
  highlightText:
    "bg-gradient-to-r from-[#B7E92B] to-[#FAFFEB] bg-clip-text text-transparent font-['Bricolage_Grotesque'] text-[32px] md:text-[64px] font-bold leading-[38.4px] md:leading-[76.8px]",
  problemCard:
    "bg-[#131316] border border-[#232329] rounded-[32px] p-8 md:p-12 flex flex-col h-full",
  solutionCard:
    "bg-white border border-gray-200 rounded-[32px] p-8 md:p-12 flex flex-col h-full",
};
