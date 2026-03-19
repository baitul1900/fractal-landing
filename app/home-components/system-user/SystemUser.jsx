import SectionWrapper from "@/components/layouts/SectionWrapper";
import BadgeBanner from "@/components/ui/BadgeBanner";
import React from "react";
import Card from "./Card";
import OwnerIcon from "@/components/icons/Strategic";
import ChefIcon from "@/components/icons/Ai";
import CashierIcon from "@/components/icons/Building";
import PeopleIcon from "@/components/icons/UI";

const cards = [
  {
    id: 1,
    title: "Owners",
    description: "Real-time insight into every branch’s performance.",
    icon: <OwnerIcon />,
    iconBgColor: "bg-[#D8EFF8]",
  },
  {
    id: 2,
    title: "Chefs",
    description: "Organized KDS with clear orders and timers.",
    icon: <ChefIcon />,
    iconBgColor: "bg-[#F1E4DF]",
  },
  {
    id: 3,
    title: "Cashiers",
    description: "Fast, simple POS with one-tap billing.",
    icon: <CashierIcon />,
    iconBgColor: "bg-[#E0E6F8]",
  },
];

export default function SystemUser() {
  return (
    <SectionWrapper className={"bg-[#F8F8F8] md:pb-[100px] pb-8 "}>
      <div className="text-center">
        <BadgeBanner text="Who can use our system" icon={<PeopleIcon />} />
      </div>

      <div className="md:w-[970px] w-full mx-auto">
        <h1 className=" mb-2 header-font-size text-center ">
          <span className="header-text-gradient">Built for Every Corner</span>{" "}
          <span className="header-text-dark">of Your Restaurant</span>
        </h1>
      </div>

      {/* cards  */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
