import SectionWrapper from "@/components/layouts/SectionWrapper";
import BadgeBanner from "@/components/ui/BadgeBanner";
import Button from "@/components/ui/Button";

const styles = {
  sectionWrapper: "bg-white md:pb-[100px] pb-8",
  ctaSection:
    "bg-[url('/images/cta/cta-bg.webp')] bg-cover bg-center bg-no-repeat py-10 md:h-[447px] h-full rounded-3xl px-10",
  badgeBanner: "border-[#F8F7FC] text-[#F8F7FC]",
  header:
    "text-white font-bold md:text-[48px] text-[32px] md:leading-[57.6px] leading-[38px] font-['Bricolage_Grotesque'] md:mt-5 mt-4",
  description:
    "md:mt-4 mt-2 text-[#f2effa] md:text-2xl text-base font-normal leading-normal md:leading-[34px] md:w-2/6 w-full",
  buttonContainer: "mt-4",
  button: "mt-8 md:mt-12",
};

const texts = {
  badge: "Career ",
  header: "Join our mission",
  description:
    "We’re looking for designers, engineers, and strategists who build secure systems that create impact.",
  button: "Join Us",
};

export default function CtaSection() {
  return (
    <SectionWrapper className={styles.sectionWrapper}>
      <div className={styles.ctaSection}>
        <BadgeBanner text={texts.badge} className={styles.badgeBanner} />

        <h1 className={styles.header}>{texts.header}</h1>

        <p className={styles.description}>{texts.description}</p>

        <div className={styles.buttonContainer}>
          <Button variant="fillWhite" className={styles.button}>
            {texts.button}
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
