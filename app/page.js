
'use client';

import { useState, useEffect } from 'react';
import Hero from "./home-components/Hero";
import Faq from "./home-components/faq/Faq";
import CtaSection from "./home-components/cta-section/CtaSection";
import OurService from "./home-components/our-service/OurService";
import IndustriesEmpower from "./home-components/industries-empower/IndustriesEmpower";
import Portfolio from "./home-components/portfolio /Portfolio";
import TechPartner from "./home-components/technology-partner/TechPartner";
import Testimonial from "./home-components/testimonial/Testimonial";
import BlogSection from "./home-components/blog/BlogSection";
import LeadCollection from "./home-components/lead-collection/LeadCollection";
import FooterLayoutWrapper from "./home-components/footer-layout/FooterLayoutWrapper";
import Loader from "@/components/ui/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate waiting for assets to load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <main>
      <Hero/>
      <section id="services">
        <OurService/>
      </section>
      <IndustriesEmpower/>
      <section id="portfolio">
        <Portfolio/>
      </section>
      <section id="tech-stack">
        <TechPartner/>
      </section>
      <Testimonial/>
      <Faq/>
      <BlogSection/>
      <CtaSection/>
      <section id="contact">
        <LeadCollection/>
      </section>
      <FooterLayoutWrapper/>
    </main>

  );
}
