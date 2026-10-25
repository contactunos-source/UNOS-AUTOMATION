import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StepJourneySection from "@/components/StepJourneySection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StepJourneySection />
        <ServicesSection />
        <ProjectsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
