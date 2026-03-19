import SectionWrapper from "@/components/layouts/SectionWrapper";
import KeenSlider from "@/components/slider/KeenSlider";
import BadgeBanner from "@/components/ui/BadgeBanner";
import React from "react";
import caseStudyImage from "../../../public/images/home/case-success-img.webp";
import Image from "next/image";
import Button from "@/components/ui/Button";

const pageData = {
  title: "Case Studies & Success Stories ",
};

const caseCards = [
  {
    id: 1,
    img: caseStudyImage,
    tag: "SaaS",
    title:
      "Transforming Education with an Intelligent School Management System",
    description:
      "Ideated.lab partnered with a leading educational institution to design and develop a unified School Management System that streamlined academic operations, improved communication, and enhanced decision-making across departments.",
    duration: "4 Months",
    revenue: "10X Business",
    ctaText: "View Case Studies",
    ctaLink: "#", // Replace with the actual link to the case study
  },
  {
     id: 2,
    img: caseStudyImage,
    tag: "SaaS",
    title:
      "Transforming Education with an Intelligent School Management System",
    description:
      "Ideated.lab partnered with a leading educational institution to design and develop a unified School Management System that streamlined academic operations, improved communication, and enhanced decision-making across departments.",
    duration: "4 Months",
    revenue: "10X Business",
    ctaText: "View Case Studies",
    ctaLink: "#", // Replace with the actual link to the case study
  }
];
export default function Portfolio() {
  return (
    <SectionWrapper className={"bg-[#FFF] md:pb-[100px] pb-16"}>
      <div className="flex justify-center">
        <BadgeBanner
          text="Portfolio"
          className="border-[#5D2BE9] text-[#5D2BE9]"
        />
      </div>

      <div className="mt-5 md:mt-4 flex justify-center">
        <h2 className="section-header text-center md:w-[960px] w-full md:mt-0 mt-5">
          {pageData.title}
        </h2>
      </div>

      <div className="md:mt-12 mt-6">
        <KeenSlider slidesPerView={1} autoPlay={false}>
          {/* Mapping the caseCards data to render the content */}
          {caseCards.map((item) => (
            <div
              key={item.id}
              className=" p-8 md:p-16 bg-[#F8F5FF] rounded-[24px] grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
            >
              {/* Left Content Area */}
              <div>
                <div className="">
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
                      <p className="text-gray-500 text-sm md:text-base mb-1">Revenue</p>
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
              </div>

              {/* Right Image Area */}
              <div className="flex justify-center">
                <Image
                  src={item.img}
                  alt={item.title}
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </KeenSlider>
      </div>
    </SectionWrapper>
  );
}
