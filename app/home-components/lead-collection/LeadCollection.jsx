"use client";
import SectionWrapper from "@/components/layouts/SectionWrapper";
import LeadForm from "./LeadForm";

export const styles = {
  sectionWrapper: "bg-[#D3CCE5] md:pb-[100px] pb-8",
  grid: "grid grid-cols-1 md:grid-cols-2 gap-3",
  header:
    "text-[#0E121D] font-bold text-3xl xl:text-6xl md:leading-[1.2] leading-normal font-['Bricolage_Grotesque']",
  description:
    "text-[#53496d] md:text-xl text-base font-medium md:leading-[30px] leading-6 mt-3",
  whatHappensContainer: "md:mt-20 mt-8",
  whatHappensTitle: "text-[#0e121d] text-xl font-semibold leading-[30px]",
  whatHappensList: "mt-6 space-y-4",
  whatHappensItem: "flex items-start gap-3",
  whatHappensNumber:
    "text-[#53496d] text-xl font-normal font-['Inter'] leading-[30px]",
  whatHappensText:
    "text-[#53496d] text-xl font-normal font-['Inter'] leading-[30px]",
  formContainer: "flex items-center justify-center",
  formCard: "w-full bg-white p-6 rounded-2xl shadow-2xl shadow-gray-500/50",
  form: "space-y-4",
  label: "text-sm font-medium text-gray-700",
  input:
    "w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#5d2be9] text-sm mt-1 transition duration-200",
  gridTwoCol: "grid grid-cols-1 sm:grid-cols-2 gap-4",
  select:
    "w-full border border-gray-300 rounded-xl px-4 py-3 appearance-none bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#5d2be9] text-sm mt-1 transition duration-200 cursor-pointer text-gray-500",
  option: "text-gray-900",
  selectArrowContainer:
    "pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700 mt-1",
  selectArrow: "fill-current h-4 w-4",
  textarea:
    "w-full border border-gray-300 rounded-xl px-4 py-3 h-32 resize-none bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#5d2be9] text-sm mt-1 transition duration-200",
  attachmentContainer: "pt-2",
  attachmentLabel: "flex items-center gap-3 cursor-pointer group w-fit",
  attachmentIconContainer:
    "p-3 rounded-full bg-[#f3f0f7] text-[#5d2be9] group-hover:bg-[#d3cce5] transition-colors",
  attachmentText:
    "text-sm font-medium text-[#0e121d] group-hover:text-[#5d2be9] transition-colors",
  attachmentSubText: "text-xs text-gray-500",
  attachmentInput: "hidden",
  button: "w-full mt-4",
};

const whatHappenNext = [
  {
    id: 1,
    text: "An expert contacts you after having analyzed your requirements.",
  },
  {
    id: 2,
    text: "If needed, we sign an NDA to ensure the highest privacy level.",
  },
  {
    id: 3,
    text: "We submit a comprehensive project proposal with estimates, timelines, CVs, etc.",
  },
];

export default function LeadCollection() {
  return (
    <SectionWrapper className={styles.sectionWrapper}>
      <div className={styles.grid}>
        {/* 1st grid  */}
        <div>
          <h1 className={styles.header}>Work with iDeatedLab</h1>
          <p className={styles.description}>
            Submit RFPs or collaborate on digital projects within our expertise.
          </p>

          <div className={styles.whatHappensContainer}>
            <h6 className={styles.whatHappensTitle}>What happens next?</h6>

            <div className={styles.whatHappensList}>
              {whatHappenNext.map((item) => (
                <div key={item.id} className={styles.whatHappensItem}>
                  <div className={styles.whatHappensNumber}>{item.id}.</div>
                  <p className={styles.whatHappensText}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2nd grid  */}
        <LeadForm />
      </div>
    </SectionWrapper>
  );
}
