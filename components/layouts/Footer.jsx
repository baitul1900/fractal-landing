import React from "react";
import SectionWrapper from "./SectionWrapper";
import FooterLogo from "./FooterLogo";
import FooterNav from "./FooterNav";
import FooterBottom from "./FooterBottom";
import LastSegmentedFooter from "./LastSegmentedFooter";

const styles = {
  footer: "text-white bg-[#0f0d14]",
  mainDiv: "",
  gridDiv: "grid grid-cols-2 md:grid-cols-12 gap-10 pb-16 border-b border-gray-700",
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <SectionWrapper>
        <div className={styles.mainDiv}>
          {/* --- Main Footer Content Grid --- */}
          {/* Responsive grid setup: 2 columns on mobile/tablet, 4 on large screens */}
          <div className={styles.gridDiv}>
            <FooterLogo />
            <FooterNav />
          </div>

          {/* --- Bottom Footer (Copyright & Social) --- */}
          <FooterBottom />

          <div className="md:mt-7">
            <LastSegmentedFooter />
          </div>
        </div>
      </SectionWrapper>
    </footer>
  );
}
