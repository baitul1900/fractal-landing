import React from "react";
import NavLinks from "./NavLinks";
import { TEAM_PAGE, ABOUT, SOLUTION, PORTFOLIO, CONTACT } from "@/util/pageRoute";

const styles = {
  companyDiv: "col-span-2 md:col-span-3",
  solutionsDiv: "col-span-1 md:col-span-3",
  importantDiv: "col-span-2",
};

// Data for navigation links
const ourCompanyLinks = [
  { label: "Solutions", href: SOLUTION },
  { label: "Portfolio", href: PORTFOLIO },
  { label: "About", href: ABOUT },
  { label: "Team", href: TEAM_PAGE },
  { label: "Contact", href: CONTACT },
];

// 2. New 'Solutions' links
const solutionsLinks = [
  { label: "Digital Transformation", href: "#" },
  { label: "AI & Automation Systems", href: "#" },
  { label: "Smart Industry Solutions", href: "#" },
  { label: "Product Engineering", href: "#" },
];

const importantLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Condition", href: "#" },
];


const FooterNav = () => (
  <>
    {/* 2. Company Links */}
    <div className={styles.companyDiv}>
      <NavLinks title="Company" links={ourCompanyLinks} />
    </div>

    {/* 3. Important Links */}
    <div className={styles.solutionsDiv}>
      <NavLinks title="Important Link" links={solutionsLinks} />
    </div>

    <div className={styles.importantDiv}>
      <NavLinks title="Important Link" links={importantLinks} />
    </div>
  </>
);

export default FooterNav;
