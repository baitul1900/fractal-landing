import Hero from "./home-components/Hero";
import SecondSection from "./home-components/SecondSection";
import ArtifactsSection from "./home-components/ArtifactsSection";
import VideoSection from "./home-components/VideoSection";
import FourthSection from "./home-components/FourthSection";
import FifthSection from "./home-components/FifthSection";
import SixthSection from "./home-components/SixthSection";
import ContactSection from "./home-components/ContactSection";
import CustomFooter from "./home-components/CustomFooter";

export default function Home() {
  return (
    <main>
      <Hero/>
      <SecondSection />
      <VideoSection />
      <ArtifactsSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <ContactSection />
      <CustomFooter />
    </main>
  );
}
