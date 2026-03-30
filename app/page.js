'use client';

import Hero from "./home-components/Hero";
import SecondSection from "./home-components/SecondSection";
import ArtifactsSection from "./home-components/ArtifactsSection";
import FourthSection from "./home-components/FourthSection";
import FifthSection from "./home-components/FifthSection";
import SixthSection from "./home-components/SixthSection";
import ContactSection from "./home-components/ContactSection";

export default function Home() {
  return (
    <main>
      <Hero/>
      <SecondSection />
      <ArtifactsSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <ContactSection />
    </main>
  );
}
