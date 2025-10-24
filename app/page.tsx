import AboutSection from "./componet/AboutSection";
import CallToAction from "./componet/CallToAction";
import ClientsSection from "./componet/ClientsSection";
import ContactSection from "./componet/ContactSection";
import FaqSection from "./componet/FaqSection";
import FeaturedSection from "./componet/FeaturedSection";
import FeaturesSection from "./componet/FeaturesSection";
import Footer from "./componet/footer";
import Header from "./componet/header";
import HeroSection from "./componet/HeroSection";
import HowWeWorkSection from "./componet/HowWeWorkSection";
// import PricingSection from "./componet/PricingSection";
import TeamSection from "./componet/TeamSection";
import TestimonialsSection from "./componet/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <ClientsSection />
      <FeaturedSection />
      <HowWeWorkSection />
      <FeaturesSection />
      {/* <PricingSection /> */}
      <FaqSection />
      <CallToAction />
      <TestimonialsSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </>
  );
}
