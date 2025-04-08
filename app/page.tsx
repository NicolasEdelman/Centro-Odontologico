
import HeroSection from "@/components/hero-section";
import DentistProfiles from "@/components/dentist-profiles";
import ServicesSection from "@/components/services-section";
import TeamSection from "@/components/team-section";
import CompanyAgreements from "@/components/company-agreements";
import MissionVision from "@/components/mission-vision";
import VideosSection from "@/components/videos-section";
import InstagramFeed from "@/components/instagram-feed";
import ContactSection from "@/components/contact-section";
import DentalTips from "@/components/dental-tips";
import SpecialistsSection from "@/components/specialists-section";
import AnimatedSection from "@/components/animated-section";
import { CTA } from "@/components/call-to-action";
import DentistProfiles2 from "@/components/dentist-profiles2";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />
      {/* <DentistProfiles2 /> */}
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


      <AnimatedSection variant="scale" fullWidth>
        <MissionVision />
      </AnimatedSection>

      <AnimatedSection variant="rotate" fullWidth>
        <CompanyAgreements />
      </AnimatedSection>

      <AnimatedSection variant="slideRight" fullWidth>
        <VideosSection />
      </AnimatedSection>

      <div className="relative w-full bg-cover bg-center py-16">
        <img
          src="/images/MAgua.png"
          alt=""
          className="hidden md:block absolute left-0 bottom-10 h-[50%] object-contain z-0 opacity-20 transform rotate-180"
        />
        <img
          src="/images/MAgua.png"
          alt=""
          className="hidden md:block absolute right-0 top-10  h-[50%] object-contain z-0 opacity-20"
        />

        <div className="relative z-10">
          <AnimatedSection variant="bounce" fullWidth>
            <DentalTips />
          </AnimatedSection>

          <AnimatedSection variant="slideUp" fullWidth>
            <InstagramFeed />
          </AnimatedSection>
        </div>
      </div>

      <AnimatedSection variant="scale" delay={0.2} fullWidth>
        <CTA />
      </AnimatedSection>

      <AnimatedSection variant="fadeIn" delay={0.3} fullWidth>
        <ContactSection />
      </AnimatedSection>
    </main>
  );
}
