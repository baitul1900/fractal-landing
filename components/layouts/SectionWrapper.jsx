import React from "react";

export default function SectionWrapper({ children, className }) {
  return (
    <section className={`md:pt-[100px] pt-8 ${className}`}>
      <div className="container mx-auto px-4 md:px-[74px]">{children}</div>
    </section>
  );
}
