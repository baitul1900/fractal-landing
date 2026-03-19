import React from "react";
import SectionWrapper from "../layouts/SectionWrapper";
import mishuImage from "../../public/images/about-us/mishu.webp";
import Image from "next/image";

const pageDataDefault = {
  mainText:
    "At Ideated Lab, our web design seamlessly integrates your brand strategy and business goals. We focus on creating designs that not only look great but also align with your brands and objectives, ensuring every element works to engage your audience and drive results.",
  profile: {
    name: "Mosaddiqur Rahim",
    designation: "Founder & CEO",
    image: mishuImage,
  },
  // Added steps data matching the reference image
  steps: [
    { number: "/01", title: "Discovery" },
    { number: "/02", title: "Strategic Design" },
    { number: "/03", title: "User Focus" },
    { number: "/04", title: "Brand Consistency" },
    { number: "/05", title: "Result-Driven" },
  ],
};

export default function ServicePlan({
  mainText = pageDataDefault.mainText,
  profile = pageDataDefault.profile,
  steps = pageDataDefault.steps, // New prop for the cards
}) {
  return (
    <SectionWrapper className={style.sectionWrapper}>
      {/* Top Part (Your Existing Code) */}
      <div className={style.container}>
        <div className={style.profileChip}>
          <div className={style.imageWrapper}>
            <Image
              src={profile.image}
              alt={profile.name}
              fill
              className="object-cover"
            />
          </div>
          <div className={style.profileInfo}>
            <span className={style.name}>{profile.name}</span>
            <span className={style.role}>{profile.designation}</span>
          </div>
        </div>

        <h2 className={style.titleStyle}>{mainText}</h2>
      </div>

      {/* Bottom Part (New Process Cards) */}
      <div className={style.cardsContainer}>
        {steps?.map((step, index) => (
          <div key={index} className={style.card}>
            <span className={style.cardNumber}>{step.number}</span>
            <h4 className={style.cardTitle}>{step.title}</h4>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

const style = {
  sectionWrapper: "md:py-[100px] py-10 bg-white",
  container: "flex flex-col md:flex-row justify-between items-start gap-10 mb-12", // Added mb-12 for spacing

  // Main Text Style
  titleStyle:
    "md:text-[30px] text-2xl font-semibold  md:leading-[1.3] leading-snug text-[#0f0d14] w-full md:w-[60%]",

  // Profile Chip Styles
  profileChip:
    "flex items-center gap-3 pl-1.5 pr-6 py-1.5 bg-white border border-[#EBEAED] rounded-full shadow-sm hover:shadow-md transition-shadow duration-300 w-fit h-fit",
  imageWrapper:
    "relative w-12 h-12 rounded-full overflow-hidden bg-[#C6EA4F] flex items-center justify-center",
  profileInfo: "flex flex-col justify-center",
  name: "text-[#0E121D] font-bold text-sm md:text-base leading-tight",
  role: "text-[#857D9E] text-xs md:text-sm font-medium leading-tight",

  // --- New Card Styles (Matches image_0a8fa7.webp) ---
  cardsContainer: "grid grid-cols-2 md:grid-cols-5 gap-4 w-full",
  card: "bg-[#F5F3FF] p-6 rounded-lg flex flex-col justify-between h-[140px] md:h-[160px] transition-colors hover:bg-[#F3EFFF]",
  cardNumber: "text-[#9E77ED] text-sm md:text-base font-medium opacity-80",
  cardTitle: "text-[#1d1042] text-lg md:text-xl font-bold leading-tight",
};