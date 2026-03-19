import React from "react";
import SectionWrapper from "../layouts/SectionWrapper";
import Image from "next/image";
import mishuImage from "../../public/images/about-us/mishu.webp";
import featureImageOne from "../../public/images/service-ux/feature-card-img-1.webp";
import featureImageTwo from "../../public/images/service-ux/feature-card-img-2.webp";
import Button from "../ui/Button";

// --- Data Configuration ---
const featureSectionData = {
  mainText:
    "With over 5+ years of expertise, we’ve partnered with 30+ brands to transform their ideas into seamless, user-centric designs. From improving usability to enhancing engagement, we work closely with you to create UI/UX solutions that drive growth, boost retention, and elevate user satisfaction",
  profile: {
    name: "Mosaddiqur Rahim",
    designation: "Founder & CEO",
    image: mishuImage,
  },
  caseCards: [
    {
      id: 1,
      img: featureImageOne,
      tag: "SaaS",
      title:
        "Transforming Education with an Intelligent School Management System",
      description:
        "IdeatedLab partnered with a leading educational institution to design and develop a unified School Management System that streamlined academic operations, improved communication, and enhanced decision-making across departments.",
      duration: "4 Months",
      revenue: "10X Business",
      ctaText: "View Case Studies",
      ctaLink: "#",
      cardBg: "#F0EDF8",
    },
    {
      id: 2,
      img: featureImageTwo,
      tag: "SaaS",
      title: "Restomgr - RMS Restaurant Management System ",
      description:
        "IdeatedLab partnered with a leading educational institution to design and develop a unified School Management System that streamlined academic operations, improved communication, and enhanced decision-making across departments.",
      duration: "4 Months",
      revenue: "10X Business",
      ctaText: "View Case Studies",
      ctaLink: "#",
      cardBg: "#E0E7FB",
    },
  ],
};

const style = {
  sectionWrapper: "md:py-[100px] py-10 bg-white",
  container: "flex flex-col-reverse md:flex-row justify-between items-start gap-6",

  // Main Text Style (Updated from your snippet)
  titleStyle:
    "md:text-[40px] text-2xl font-semibold md:leading-[1.3] leading-snug text-[#534A6D] w-full md:w-[60%]",

  // Profile Chip Styles (Matches image_e0544c.webp)
  profileChip:
    "flex items-center gap-3 pl-1.5 pr-6 py-1.5 bg-white border border-[#EBEAED] rounded-full shadow-sm hover:shadow-md transition-shadow duration-300 w-fit h-fit",
  imageWrapper:
    "relative w-12 h-12 rounded-full overflow-hidden bg-[#C6EA4F] flex items-center justify-center", // The lime green bg
  profileInfo: "flex flex-col justify-center",
  name: "text-[#0E121D] font-bold text-sm md:text-base leading-tight",
  role: "text-[#857D9E] text-xs md:text-sm font-medium leading-tight",
};

export default function ServiceFeature({ data = featureSectionData }) {
  const { mainText, profile } = data;

  return (
    <SectionWrapper className={style.sectionWrapper}>
      <div className={style.container}>
        <div className={style.profileChip}>
          <div className={style.imageWrapper}>
            <Image
              src={profile.image}
              alt={profile.name || "Profile Image"}
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

        {/* Right: Profile Chip */}
      </div>

      <div className="flex flex-col gap-8 md:mt-16 mt-10">
        {data.caseCards.map((item) => (
          <div
            key={item.id}
            className="p-8 md:px-16 md:py-14 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
            style={{ backgroundColor: item.cardBg }}
          >
            {/* Left Content Area */}
            <div className="md:py-2">
              <p className="text-[#5D2BE9] md:text-[16px] text-sm font-medium mb-3">
                {item.tag}
              </p>

              <h3 className="text-xl md:text-[40px] font-bold text-gray-900 leading-tight mb-6">
                {item.title}
              </h3>

              <p className="text-gray-600 text-base md:text-lg mb-8">
                {item.description}
              </p>

              {/* Metrics */}
              <div className="flex gap-10 mb-10">
                <div>
                  <p className="text-gray-500 text-sm md:text-base mb-1">
                    Project Duration
                  </p>
                  <p className="text-gray-900 text-base md:text-2xl font-semibold">
                    {item.duration}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm md:text-base mb-1">
                    Revenue
                  </p>
                  <p className="text-gray-900 text-base md:text-2xl font-semibold">
                    {item.revenue}
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <Button variant="outline" href={item.ctaLink} size="md">
                {item.ctaText}
              </Button>
            </div>

            {/* Right Image Area */}
            <div className="relative w-full h-[300px] md:h-[468px]">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
