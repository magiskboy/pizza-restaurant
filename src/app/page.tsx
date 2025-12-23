import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import MenuHighlightsSection from "@/components/sections/MenuHighlightsSection";
import FullMenuSection from "@/components/sections/FullMenuSection";
import SpecialOffersSection from "@/components/sections/SpecialOffersSection";
import LocationSection from "@/components/sections/LocationSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <MenuHighlightsSection />
      <FullMenuSection />
      <SpecialOffersSection />
      <LocationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
