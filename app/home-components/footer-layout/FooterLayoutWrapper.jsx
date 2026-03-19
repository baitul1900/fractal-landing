import SectionWrapper from "@/components/layouts/SectionWrapper";
import Button from "@/components/ui/Button";
import React from "react";

const styles = {
  ctaBottomSection:
    "bg-[url('/images/cta/bottom-cta-section.webp')] bg-no-repeat bg-cover bg-center py-10 rounded-3xl px-10 md:h-[349px] h-full",
  textContainer: "md:w-3/5 mx-auto text-center w-full",
  visitText:
    "text-[#f8f7fc] md:text-5xl font-bold font-['Bricolage_Grotesque'] md:leading-[57.60px] leading-noarmal text-[32px]",
  ideatedLabText:
    "text-[#b7e92b] md:text-5xl text-[32px] font-bold font-['Bricolage_Grotesque'] md:leading-[57.60px] leading-noarmal",
  subText: "mt-3 text-[#f2effa] text-xl font-medium leading-[30px] text-center",
};

const texts = {
  visit: "Visit ",
  ideatedLab: "IdeatedLab Agency",
  rest: " — Where Technology Meets Imagination",
  subText:
    "From branding to UX, we craft experiences that move people and grow businesses.",
  buttonText: "Go to iDeatedLab agency →",
  buttonUrl: "/",
};

export default function FooterLayoutWrapper() {
  return (
    <SectionWrapper className={"bg-[#0f0d14]"}>
      <div className={styles.ctaBottomSection}>
        <h1 className={styles.textContainer}>
          <span className={styles.visitText}>{texts.visit}</span>
          <span className={styles.ideatedLabText}>{texts.ideatedLab}</span>
          <span className={styles.visitText}>{texts.rest}</span>
        </h1>

        <div className={styles.subText}>{texts.subText}</div>

        <div className="mt-10 flex justify-center">
          <Button variant="fillGreen" href={texts.buttonUrl}>
            {texts.buttonText}
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
