import { FAQ, Footer, Navbar } from '@/components/landing';
import { Plans } from '@/components/landing/plans';

export const metadata = {
  title: 'Plans | Chatora Coach',
  description: 'Choose the perfect plan for your fitness and wellness journey.',
};

export default function PlansPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Plans showPaymentLinks={true} />
      <FAQ />
      <Footer />
    </main>
  );
}
