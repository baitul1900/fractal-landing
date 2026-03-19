
import SectionWrapper from "@/components/layouts/SectionWrapper";
import BadgeBanner from "@/components/ui/BadgeBanner";
import Button from "@/components/ui/Button";
import React from "react";

const pageData = {
  title: "Ideation Meets Engineering Excellence",
  firstPera:
    "Founded with a vision to merge creativity with technology, Ideated Lab is a global IT solutions company helping organizations harness digital transformation.",
  secondPera:
    "Our multidisciplinary teams combine strategic thinking, design innovation, and engineering precision to deliver solutions that drive measurable results. We don’t just develop software — we design ecosystems that empower people, processes, and performance.",
  buttonText: "About Us",
  buttonLink: "/about-us",
};



export default function AboutHome() {
  return (
    <SectionWrapper className={"bg-[#FFF] md:pb-[100px] pb-16"}>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-1.5">
        <div className="md:col-span-4 col-span-1">
          <BadgeBanner text="About Us" />
        </div>

        <div className="md:col-span-8 col-span-1">
          <h2 className="section-header w-full md:w-[800px] md:mt-0 mt-5">
            {pageData.title}
          </h2>

          <p className="text-[#53496d] text-base md:text-2xl leading-normal md:leading-[34px] mt-2.5">
            {pageData.firstPera}
          </p>

          <p className="text-[#53496d] text-base md:text-2xl leading-normal md:leading-[34px] md:mt-10 mt-2 ">
            {pageData.secondPera}
          </p>

          <div className="mt-9 md:mt-8">
            <Button
              variant="fill"
              size="md"
              href={pageData.buttonLink}
              className="mt-8 w-full md:w-auto"
            >
              {pageData.buttonText}
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
