import React from "react";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "../../public/images/logo/logo-single-bottom.webp";
import Image from "next/image";

const styles = {
  bottomDiv: "flex justify-between flex-wrap items-center py-6",
  copyrightP:
    " text-sm mt-0 leading-[30px] text-[#f2effa] md:text-xl font-medium",
  span: "text-white font-medium",
  socialDiv: "flex gap-3 order-2",
  socialLink:
    "w-8 h-8 flex items-center justify-center rounded-full border border-gray-600 bg-transparent transition-colors duration-200",
  icon: "w-4 h-4 text-white",
};

const socialLinks = [
  { platform: "twitter", icon: Twitter, href: "https://twitter.com/dummy" },
  { platform: "facebook", icon: Facebook, href: "https://facebook.com/dummy" },
  {
    platform: "instagram",
    icon: Instagram,
    href: "https://instagram.com/dummy",
  },
  { platform: "linkedin", icon: Linkedin, href: "https://linkedin.com/dummy" },
];

const FooterBottom = () => (
  <div className={styles.bottomDiv}>
    <p className={styles.copyrightP}>
      © Copyright 2025, All Rights Design by{" "}
      <span className={styles.span}>ideatedlab</span>
    </p>

    <div>
      <Image src={logo} alt="ideatedlab Logo" />
    </div>

    {/* Social Media Icons */}
    <div className={styles.socialDiv}>
      {socialLinks.map((link) => (
        <a key={link.platform} href={link.href} className={styles.socialLink}>
          <link.icon className={styles.icon} />
        </a>
      ))}
    </div>
  </div>
);

export default FooterBottom;
