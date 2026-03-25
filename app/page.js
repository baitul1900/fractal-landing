
'use client';

import Hero from "./home-components/Hero";
import SecondSection from "./home-components/SecondSection";
import ArtifactsSection from "./home-components/ArtifactsSection";

export default function Home() {
  return (
    <main>
      <Hero/>
      <SecondSection />
      <ArtifactsSection />
    </main>
  );
}
