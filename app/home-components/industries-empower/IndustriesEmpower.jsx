import SectionWrapper from "@/components/layouts/SectionWrapper";
import BadgeBanner from "@/components/ui/BadgeBanner";
import CardCarousel from "./CardCarousel";

const pageData = {
  title: "Transforming Industries Through Technology ",
  subText:
    "Our solutions serve clients across diverse industries, helping them leverage technology for sustainable growth.",
};
export default function IndustriesEmpower() {
  return (
    <>
      <SectionWrapper className={"bg-[#0F0D14] md:pb-[100px] pb-16"}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-1.5">
          <div className="md:col-span-4 col-span-1">
            <BadgeBanner
              text="Industries We Empower"
              className="border-[#F8F7FC] text-[#F8F7FC]"
            />
          </div>

          <div className="md:col-span-8 col-span-1">
            <h2 className="section-header-white  md:w-[960px] w-full md:mt-0 mt-5">
              {pageData.title}
            </h2>

            <p className=" text-[#bab3ce] md:text-2xl text-base font-normal leading-normal md:leading-[34px] mt-[11px]">
              {pageData.subText}
            </p>
          </div>
        </div>
      </SectionWrapper>

      <CardCarousel />
    </>
  );
}
