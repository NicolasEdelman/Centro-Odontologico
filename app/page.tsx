import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import DentistProfiles from "@/components/dentist-profiles"
import ServicesSection from "@/components/services-section"
import TeamSection from "@/components/team-section"
import CompanyAgreements from "@/components/company-agreements"
import MissionVision from "@/components/mission-vision"
import VideosSection from "@/components/videos-section"
import InstagramFeed from "@/components/instagram-feed"
import ContactSection from "@/components/contact-section"
import DentalTips from "@/components/dental-tips"
import SpecialistsSection from "@/components/specialists-section"
import AnimatedSection from "@/components/animated-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />
      <DentistProfiles />

      <AnimatedSection variant="slideUp" fullWidth>
        <SpecialistsSection />
      </AnimatedSection>

      <AnimatedSection variant="bounce" fullWidth>
        <TeamSection />
      </AnimatedSection>

      <AnimatedSection variant="slideLeft" fullWidth>
        <ServicesSection />
      </AnimatedSection>

      <AnimatedSection variant="rotate" fullWidth>
        <CompanyAgreements />
      </AnimatedSection>

      <AnimatedSection variant="scale" fullWidth>
        <MissionVision />
      </AnimatedSection>

      <AnimatedSection variant="slideRight" fullWidth>
        <VideosSection />
      </AnimatedSection>

      <AnimatedSection variant="bounce" fullWidth>
        <DentalTips />
      </AnimatedSection>

      <AnimatedSection variant="slideUp" fullWidth>
        <InstagramFeed />
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection variant="scale" delay={0.2} fullWidth>
        <section className="w-full py-16 bg-gradient-to-r from-brand-blue-light to-brand-blue">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Listo para una sonrisa perfecta?</h2>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
              Agenda tu consulta hoy y comienza tu camino hacia una salud bucal óptima
            </p>
            <Button size="lg" className="bg-white text-brand-blue hover:bg-gray-100">
              Agendar Consulta
            </Button>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection variant="fadeIn" delay={0.3} fullWidth>
        <ContactSection />
      </AnimatedSection>
    </main>
  )
}

