import SectionWrapper from "@/components/layouts/SectionWrapper";
import BadgeBanner from "@/components/ui/BadgeBanner";
import React from "react";
import Ai from "@/components/icons/Ai";
import Building from "@/components/icons/Building";
import Code from "@/components/icons/Code";
import Cyber from "@/components/icons/Cyber";
import Data from "@/components/icons/Data";
import Mobile from "@/components/icons/Mobile";
import Product from "@/components/icons/Product";
import Strategic from "@/components/icons/Strategic";
import UI from "@/components/icons/UI";
import Card from "./Card";

const pageData = {
  title: "Comprehensive IT Solutions for the Modern Enterprise",
};

const serviceOfferings = [
  {
    id: 1,
    title: "Digital Transformation & Enterprise Modernization",
    description:
      "Rebuild legacy into agility. Modernize your systems, integrate cloud platforms, and future-proof enterprise operations.",
    icon: <Building />,
  },
  {
    id: 2,
    title: "AI & Automation Systems",
    description:
      "Work smarter, scale faster. Deploy AI and LLM-driven automation that reduces costs and accelerates delivery.",
    icon: <Ai />,
  },
  {
    id: 3,
    title: "Smart Industry Solutions",
    description:
      "Industry 4.0, activated. IoT, robotics, and data-driven operations for smarter manufacturing and logistics.",
    icon: <Code />,
  },
  {
    id: 4,
    title: "Product Engineering & System Integration",
    description:
      "From idea to launch. Full-cycle engineering that integrates with your ecosystem and scales as you grow.",
    icon: <Product />,
  },
  {
    id: 5,
    title: "Data Intelligence & Analytics",
    description:
      "Turn data into decisions. AI dashboards and predictive insights for real-time visibility and smarter choices.",
    icon: <Data />,
  },
  {
    id: 6,
    title: "Strategic Advisory & Innovation Consulting",
    description:
      "Your roadmap to digital success. Strategy, innovation, and transformation plans crafted by senior tech consultants.",
    icon: <Strategic />,
  },
  {
    id: 7,
    title: "Mobile App Design & Development",
    description:
      "Experience that converts. Scalable, high-performance mobile and web apps built with enterprise security in mind.",
    icon: <Mobile />,
  },
  {
    id: 8,
    title: "UX/UI Design",
    description:
      "Design that delivers. Intuitive, beautiful interfaces focused on engagement and conversion.",
    icon: <UI />,
  },
  {
    id: 9,
    title: "Cyber Security",
    description:
      "Stay safe. Stay scalable. Proactive audits, data protection, and 24/7 threat monitoring for peace of mind.",
    icon: <Cyber />,
  },
];

export default function OurService() {
  return (
    <SectionWrapper className={"bg-[#F0EDF8] md:pb-[100px] pb-16"}>
      <div className="flex justify-center">
        <BadgeBanner
          text="Our Services"
          className="border-[#5D2BE9] text-[#5D2BE9]"
        />
      </div>

      <div className="mt-5 md:mt-4 flex justify-center">
        <h2 className="section-header text-center md:w-[960px] w-full md:mt-0 mt-5">
          {pageData.title}
        </h2>
      </div>

      <div className="md:mt-12 mt-11 grid md:grid-cols-3 grid-cols-1 gap-6 md:gap-8">
        {serviceOfferings.map((service) => (
          <Card
            key={service.id}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
