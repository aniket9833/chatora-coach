import {
  Navbar,
  PortionSahiHero,
  PortionSahiSystem,
  PortionSahiBenefits,
  PortionSahiGallery,
  PortionSahiHowItWorks,
  CTA,
  Footer,
} from '@/components/landing';

export default function PortionSahiPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <PortionSahiHero />
      <PortionSahiSystem />
      <PortionSahiBenefits />
      <PortionSahiGallery />
      <PortionSahiHowItWorks />
      <CTA />
      <Footer />
    </main>
  );
}
