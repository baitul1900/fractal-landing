import PeopleGroup from "@/components/icons/Mobile";
import Seamless from "@/components/icons/Cyber";
import CloudBased from "@/components/icons/Code";
import Secure from "@/components/icons/Secure";
import Support from "@/components/icons/Support";
import SectionWrapper from "@/components/layouts/SectionWrapper";
import BadgeBanner from "@/components/ui/BadgeBanner";
import WhyChooseCards from "./WhyChooseCards";
import React from "react";


const whyChooseCards = [
    {
        id: 1 ,
        title: "Seamless setup",
        description: "No tech skills needed.",
        icon : <Seamless />
    },
    {
        id: 2 ,
        title: "Cloud based",
        description: "Access your data anywhere, anytime.",
        icon : <CloudBased />
    },
    {
        id: 3 ,
        title: "Secure",
        description: "Your data is protected with top-tier security.",
        icon : <Secure />
    },
    {
        id: 4 ,
        title: "24/7 Support",
        description: "Get help whenever you need it.",
        icon : <Support />
    }
]
export default function WhyChooseUs() {
  return (
    <SectionWrapper className={"bg-[#F8F8F8] md:pb-[100px] pb-8 "}>
      <div className="text-center">
        <BadgeBanner text="Why Choose Us" icon={<PeopleGroup />} />
      </div>

      <div className="md:w-[670px] mx-auto">
        <h1 className="header-font-size header-text-dark mb-2">
          Why Restaurants Choose <span className="header-text-gradient">Restromgr</span> 
        </h1>
      </div>

      {/* cards  */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:mt-12 mt-8">
         {whyChooseCards.map((card) => (
          <WhyChooseCards
            key={card.id}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
