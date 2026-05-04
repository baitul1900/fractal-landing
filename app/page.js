import Hero from "./home-components/Hero";
import SecondSection from "./home-components/SecondSection";
import ArtifactsSection from "./home-components/ArtifactsSection";
import VideoSection from "./home-components/VideoSection";
import FourthSection from "./home-components/FourthSection";
import FifthSection from "./home-components/FifthSection";
import SixthSection from "./home-components/SixthSection";
import ContactSection from "./home-components/ContactSection";
import CustomFooter from "./home-components/CustomFooter";
import { Metadata } from 'next';

export const metadata = {
  title: "FRACTAL™ | Contemporary Tattoo Studio | Seville, Spain | Home",
  description: "Welcome to FRACTAL™, Seville's leading contemporary tattoo studio. Discover our portfolio of modern, minimalist, and geometric tattoo designs. Book your consultation with our expert tattoo artists today.",
  keywords: [
    "tattoo studio Seville",
    "contemporary tattoos Spain",
    "geometric tattoos Seville",
    "minimalist tattoos Andalusia",
    "professional tattoo artists",
    "tattoo consultation Seville",
    "modern tattoo designs",
    "FRACTAL tattoo studio",
    "tattoo booking Spain",
    "custom tattoo designs"
  ],
  openGraph: {
    title: "FRACTAL™ | Contemporary Tattoo Studio | Seville, Spain",
    description: "Seville's premier contemporary tattoo studio. Expert artists creating stunning modern, minimalist, and geometric tattoo designs.",
    url: "https://fractal-tattoo.com",
    siteName: "FRACTAL™ Tattoo Studio",
    images: [
      {
        url: "/images/home/hero-image.jpg",
        width: 1200,
        height: 630,
        alt: "FRACTAL™ Tattoo Studio - Contemporary Tattoo Art in Seville",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FRACTAL™ | Contemporary Tattoo Studio | Seville, Spain",
    description: "Seville's premier contemporary tattoo studio. Expert artists creating modern, minimalist, and geometric tattoo designs.",
    images: ["/images/home/hero-image.jpg"],
  },
};

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
