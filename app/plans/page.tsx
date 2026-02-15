import { Plans } from "@/components/landing/plans";

export const metadata = {
  title: "Plans | Chatora Coach",
  description: "Choose the perfect plan for your fitness and wellness journey.",
};

export default function PlansPage() {
  return (
    <main className="min-h-screen">
      <Plans showPaymentLinks={true} />
    </main>
  );
}
