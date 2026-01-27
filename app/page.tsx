import {
  Navbar,
  Hero,
  ProblemEmpathy,
  SystemPlan,
  StakesStrip,
  Benefits,
  Plans,
  RulesProtect,
  FAQ,
  CTA,
  Footer,
} from "@/components/landing";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <ProblemEmpathy />
      <SystemPlan />
      <StakesStrip />
      <Benefits />
      <Plans />
      <RulesProtect />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
