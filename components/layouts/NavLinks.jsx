import React from "react";
import Link from "next/link";

const styles = {
  container: "flex flex-col",
  title:
    "text-[#bab3ce] md:text-lg text-xl font-medium md:leading-[27px] leading-normal mb-5 whitespace-nowrap",
  list: "space-y-3",
  link: "text-sm md:text-base font-normal leading-6 hover:text-white transition-colors duration-200",
};

// Helper function to render Navigation Links
const NavLinks = ({ title, links }) => (
  <div className={styles.container}>
    <h4 className={styles.title}>{title}</h4>
    <ul className={styles.list}>
      {links.map((link, index) => (
        <li key={index}>
          <Link href={link.href} className={styles.link}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default NavLinks;
