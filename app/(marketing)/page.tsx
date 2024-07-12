import ClientSection from "@/components/landing/client-section";
import CallToActionSection from "@/components/landing/cta-section";
import { FAQ } from "@/components/landing/faq-section";
import HeroSection from "@/components/landing/hero-section";
import PricingSection from "@/components/landing/pricing-section";
import {
  SocialProofTestimonials,
  TestimonialCard,
} from "@/components/landing/testimonials-section";
import Particles from "@/components/magicui/particles";
import { SphereMask } from "@/components/magicui/sphere-mask";

export default async function Page() {
  return (
    <>
      <HeroSection />
      {/* <ClientSection /> */}
      <SocialProofTestimonials />
      <SphereMask />
      <PricingSection />
      <CallToActionSection />
      <FAQ />
      <Particles
        className="absolute inset-0 -z-10"
        quantity={50}
        ease={70}
        size={0.05}
        staticity={40}
        color={"#ffffff"}
      />
    </>
  );
}
