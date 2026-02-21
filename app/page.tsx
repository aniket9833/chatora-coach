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
} from '@/components/landing';
import { Testimonials } from '@/components/landing/testimonials';
import { WhyUs } from '@/components/landing/why-us';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <ProblemEmpathy />
      <SystemPlan />
      <StakesStrip />
      <Benefits />
      <RulesProtect />
      <WhyUs />
      <FAQ />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
