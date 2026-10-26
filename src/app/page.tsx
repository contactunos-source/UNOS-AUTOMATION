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
        <SectionTransition targetId="home">
          <HeroSection />
        </SectionTransition>

        <SectionTransition targetId="journey" delay={0.04}>
          <StepJourneySection />
        </SectionTransition>

        <SectionTransition targetId="services" delay={0.04}>
          <ServicesSection />
        </SectionTransition>

        <SectionTransition targetId="projects" delay={0.04}>
          <ProjectsSection />
        </SectionTransition>

        <SectionTransition targetId="faq" delay={0.04}>
          <FaqSection />
        </SectionTransition>

        <SectionTransition targetId="contact" delay={0.04}>
          <ContactSection />
        </SectionTransition>
      </main>
      <Footer />
    </>
  );
}
