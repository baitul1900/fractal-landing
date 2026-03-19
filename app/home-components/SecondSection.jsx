import SectionWrapper from "@/components/layouts/SectionWrapper";

const SecondSection = () => {
  return (
    <SectionWrapper className="mt-[60px] pt-[149px] second-section">
      <div className="sticky top-[35vh] flex justify-center w-full z-10">
        <div className="w-[938px] mix-blend-difference text-center text-[#FFE6D0] text-[80px] font-medium font-[var(--font-founders)] uppercase leading-[76px] tracking-[-8px]">
          Our work<br />is not about ornament.<br />It is about alignment.
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SecondSection;
