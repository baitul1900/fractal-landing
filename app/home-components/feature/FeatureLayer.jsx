'use client';
import SectionWrapper from "@/components/layouts/SectionWrapper";
import BadgeBanner from "@/components/ui/BadgeBanner";
import React, { useState } from "react";
import homeData from "../../../data/home.json";
import PosAndBillingSystem from "./PosAndBillingSystem";
import KDS from "./KDS";
import RegistrationModal from "../RegistrationModal";
import kdsImage from "../../../public/images/feature/kitchen-display-system.webp";
import inventoryStock from "../../../public/images/feature/inventory-stock.webp";
import taleBooking from "../../../public/images/feature/tale-booking.webp";
import posImage from "../../../public/images/feature/pos-billing-system.webp";
import menuReportsImage from "../../../public/images/feature/menu-reports.webp";

const FeatureLayer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGetStartedClick = () => {
    setIsModalOpen(true);
  };

  return (
    <SectionWrapper className={"bg-[#F0F1FA] md:pb-[100px] pb-10"}>
      <div className="text-center">
        <BadgeBanner
          text="Our Best Features "
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
            >
              <path
                d="M3 18V16H17V18H3ZM3 14.5L1.725 6.475C1.69167 6.475 1.65417 6.47917 1.6125 6.4875C1.57083 6.49583 1.53333 6.5 1.5 6.5C1.08333 6.5 0.729167 6.35417 0.4375 6.0625C0.145833 5.77083 0 5.41667 0 5C0 4.58333 0.145833 4.22917 0.4375 3.9375C0.729167 3.64583 1.08333 3.5 1.5 3.5C1.91667 3.5 2.27083 3.64583 2.5625 3.9375C2.85417 4.22917 3 4.58333 3 5C3 5.11667 2.9875 5.225 2.9625 5.325C2.9375 5.425 2.90833 5.51667 2.875 5.6L6 7L9.125 2.725C8.94167 2.59167 8.79167 2.41667 8.675 2.2C8.55833 1.98333 8.5 1.75 8.5 1.5C8.5 1.08333 8.64583 0.729167 8.9375 0.4375C9.22917 0.145833 9.58333 0 10 0C10.4167 0 10.7708 0.145833 11.0625 0.4375C11.3542 0.729167 11.5 1.08333 11.5 1.5C11.5 1.75 11.4417 1.98333 11.325 2.2C11.2083 2.41667 11.0583 2.59167 10.875 2.725L14 7L17.125 5.6C17.0917 5.51667 17.0625 5.425 17.0375 5.325C17.0125 5.225 17 5.11667 17 5C17 4.58333 17.1458 4.22917 17.4375 3.9375C17.7292 3.64583 18.0833 3.5 18.5 3.5C18.9167 3.5 19.2708 3.64583 19.5625 3.9375C19.8542 4.22917 20 4.58333 20 5C20 5.41667 19.8542 5.77083 19.5625 6.0625C19.2708 6.35417 18.9167 6.5 18.5 6.5C18.4667 6.5 18.4292 6.49583 18.3875 6.4875C18.3458 6.47917 18.3083 6.475 18.275 6.475L17 14.5H3ZM4.7 12.5H15.3L15.95 8.325L13.325 9.475L10 4.9L6.675 9.475L4.05 8.325L4.7 12.5Z"
                fill="#0057FF"
              />
            </svg>
          }
        />
      </div>

      <h1 className=" mb-2 header-font-size text-center">
        <span className="header-text-dark">Simplify.</span>{" "}
        <span className="header-text-gradient">Automate. Grow.</span>
      </h1>

      <div className="flex justify-center items-center">
        <p className=" text-[#4a4c56] md:text-lg text-center text-sm font-medium md:w-[800px] w-full  md:leading-7 leading-normal">
          {homeData["feature-section-subtext"]}
        </p>
      </div>

      {/* features  */}
      <div className="md:mt-12 mt-8">
        <PosAndBillingSystem
          title="POS & Billing System"
          subtitle="Fast, error-free billing with digital receipts and multiple payment options."
          features={[
            "Smart POS Counter",
            "Kitchen Display System (KDS)",
            "Inventory & Stock Control",
            "Sales Analytics & Owner Dashboard",
          ]}
          buttonText="Get Started"
          imageUrl={posImage}
          onClick={handleGetStartedClick}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:mt-6 mt-5">
        <KDS
          title="Kitchen Display System (KDS)"
          subtitle="Orders update instantly in the kitchen — no delays, no confusion."
          imageUrl={kdsImage}
        />
        <KDS
          title="Inventory & Stock Control"
          subtitle="Track ingredients, auto-update stock, and get low-stock alerts in real-time."
          imageUrl={inventoryStock}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:mt-6 mt-5">
        <div className="col-span-1 md:col-span-4">
          <KDS
            title="Table Booking"
            subtitle="Fast, error-free billing with digital receipts and multiple payment options."
            imageUrl={taleBooking}
          />
        </div>

        <div className="col-span-1 md:col-span-8">
          <PosAndBillingSystem
            title="Menu, Reports & KDS Counter Manage"
            subtitle="Fast, error-free billing with digital receipts and multiple payment options."
            features={[""]}
            buttonText="Get Started"
            imageUrl={menuReportsImage}
            onClick={handleGetStartedClick}
          />
        </div>
      </div>

      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </SectionWrapper>
  );
};

export default FeatureLayer;
