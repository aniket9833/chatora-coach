import {
  Navbar,
  PortionSahiHero,
  PortionSahiSystem,
  PortionSahiBenefits,
  PortionSahiGallery,
  PortionSahiHowItWorks,
  CTA,
  Footer,
  ProblemEmpathy,
  SystemPlan,
  StakesStrip,
  Benefits,
  RulesProtect,
  WhyUs,
} from '@/components/landing';

export default function PortionSahiPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <PortionSahiHero />
      <ProblemEmpathy />
      <SystemPlan />
      <StakesStrip />
      <Benefits />
      <RulesProtect />
      <WhyUs />
      <PortionSahiSystem />
      <PortionSahiBenefits />
      <PortionSahiGallery />
      <PortionSahiHowItWorks />
      <CTA />
      <Footer />
    </main>
  );
}
