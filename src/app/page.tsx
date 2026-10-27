import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StepJourneySection from "@/components/StepJourneySection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SectionTransition from "@/components/SectionTransition";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />

        <SectionTransition delay={0.02}>
          <StepJourneySection />
        </SectionTransition>

        <SectionTransition delay={0.02}>
          <ServicesSection />
        </SectionTransition>

        <SectionTransition delay={0.02}>
          <ProjectsSection />
        </SectionTransition>

        <SectionTransition delay={0.02}>
          <FaqSection />
        </SectionTransition>

        <SectionTransition delay={0.02}>
          <ContactSection />
        </SectionTransition>
      </main>
      <Footer />
    </>
  );
}
