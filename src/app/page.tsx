import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import GallerySection from "../components/GallerySection";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import FooterSection from "../components/FooterSection";

export default function Home() {
  return (
    <main className="w-full">
      <Navigation />
      <HeroSection />
      <GallerySection />
      <FeaturesSection />
      <TestimonialsSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
