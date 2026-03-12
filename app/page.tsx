import {
  Navbar,
  Hero,
  ProblemEmpathy,
  SystemPlan,
  StakesStrip,
  Benefits,
  RulesProtect,
  FAQ,
  CTA,
  Footer,
  TransformationGallery,
} from '@/components/landing';
import { Testimonials } from '@/components/landing/testimonials';
import WhyTrust from '@/components/landing/why-trust';
import { WhyUs } from '@/components/landing/why-us';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <TransformationGallery />
      <Testimonials />
      <WhyTrust />
      {/* <ProblemEmpathy />
      <SystemPlan />
      <StakesStrip />
      <Benefits />
      <RulesProtect />
      <WhyUs />
      <FAQ /> */}
      <CTA />
      <Footer />
    </main>
  );
}
