import React from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import logo from "../../public/images/logo/footer-logo.webp";
import Button from "../ui/Button";

const styles = {
  logoDiv: "col-span-4",
  logoImage: "mb-6",
  emailDiv:
    "text-[#B7E92B] text-base font-semibold leading-7 mt-5 flex items-center gap-2",
  buttonDiv: "text-[#f8f8f8] text-base font-normal leading-7 mt-5",
};

const FooterLogo = () => (
  <div className={styles.logoDiv}>
    <div className={styles.logoImage}>
      <Image src={logo} alt="ideatedlab Logo" width={150} height={30} />
    </div>
    <div className={styles.emailDiv}>
      <Mail />
      <a href="">hello@ideatedlab.com</a>
    </div>
    <p className={styles.buttonDiv}>
      <Button variant="fillGreen" className="px-4 py-2 mt-5">
        Company Deck
      </Button>
    </p>
  </div>
);

export default FooterLogo;
