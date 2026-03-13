'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Check, Calendar } from 'lucide-react';
import { paymentLinks } from '@/lib/bookingLinks';
import Link from 'next/link';
import Image from 'next/image';

interface PlansProps {
  showPaymentLinks?: boolean;
}

interface Plan {
  name: string;
  duration: string;
  price: string;
  description: string;
  features: string[];
  fullDescription?: string;
  benefits?: string[];
  image?: string;
  popular: boolean;
  postpartumOnly?: boolean;
  link: string;
}

export function Plans({ showPaymentLinks = false }: PlansProps) {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const plans: Plan[] = [
    {
      name: 'Starter',
      duration: '20 days',
      price: '₹1,999',
      description: 'Start your Portion Sahi journey',
      features: [
        '1 Initial Diet Setup Call (30 min)',
        '1 Follow-up Call (15 min)',
        'Basic portion guidance',
        'App access',
      ],
      fullDescription:
        'Perfect for those just starting their Portion Sahi journey. Get personalized guidance on portion control and start building healthier eating habits.',
      benefits: [
        'Personalized nutrition assessment',
        'Initial diet setup with portion guidelines',
        'Follow-up support to track progress',
        'Access to Portion Sahi app',
        'Basic meal planning guidance',
      ],
      image: '/images/food.jpg',
      popular: false,
      link: paymentLinks.plan1,
    },
    {
      name: 'Standard',
      duration: '12 Weeks',
      price: '₹4,999',
      description: 'Build lasting habits',
      features: [
        '1 Initial Diet Setup Call (30 min)',
        '6 Follow-up Calls (15 min)',
        'Recipes + swaps included',
        'App access',
      ],
      fullDescription:
        'Our most popular plan. Transform your eating habits over 12 weeks with regular support, recipes, and personalized meal swaps.',
      benefits: [
        'Initial diet assessment & setup',
        'Weekly follow-up coaching calls',
        'Customized recipes tailored to your taste',
        'Smart meal swaps for favorites',
        'Progress tracking & adjustments',
        'Portion Sahi app access with meal plans',
        'Ongoing motivation & support',
      ],
      image: '/images/diet.jpg',
      popular: true,
      link: paymentLinks.plan2,
    },
    {
      name: 'Premium',
      duration: '12 Weeks',
      price: '₹8,999',
      description: 'Complete transformation (Postpartum only)',
      features: [
        '1 Initial Diet Setup Call (30 min)',
        '12 Follow-up Calls (weekly, 15 min)',
        'Workouts included ONLY in Premium',
        'Recipes + swaps included',
        'App access',
      ],
      fullDescription:
        'Complete postpartum recovery and transformation package. Get personalized nutrition, fitness guidance, and intensive support for maximum results.',
      benefits: [
        'Initial diet assessment & setup',
        'Weekly 1-on-1 coaching calls',
        'Customized postpartum-safe workout plans',
        'Specialized recipes for lactation & recovery',
        'Smart meal swaps & food combinations',
        'Progress tracking with photos & metrics',
        'Portion Sahi app with full access',
        'Direct messaging support for questions',
        'Intensive motivation & accountability',
      ],
      image: '/images/diet2.jpg',
      postpartumOnly: true,
      popular: false,
      link: paymentLinks.plan3,
    },
  ];

  return (
    <>
      <section id="plans" className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-6">
              Simple, Affordable Plans
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the plan that fits your goals and commitment.
            </p>
          </div>

          {/* Plans Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`flex flex-col transition-all duration-300 relative transform hover:scale-105 hover:shadow-2xl ${
                  plan.popular
                    ? 'border-primary shadow-lg hover:border-primary/80'
                    : 'border-border hover:shadow-md hover:border-primary'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className={plan.popular ? 'pt-8' : ''}>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.duration}</CardDescription>
                  {plan.postpartumOnly && (
                    <Badge variant="outline" className="w-fit mt-2 text-xs">
                      Postpartum Recovery
                    </Badge>
                  )}
                </CardHeader>

                <CardContent className="grow">
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">
                      {plan.price}
                    </span>
                    <p className="text-sm text-muted-foreground mt-2">
                      {plan.description}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex gap-3 text-sm">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="flex gap-3">
                  <Link
                    href={showPaymentLinks ? plan.link : '/plans'}
                    {...(showPaymentLinks && {
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    })}
                    className="flex-1"
                  >
                    <Button
                      className="w-full transition-all duration-200 hover:opacity-90"
                      variant="default"
                    >
                      START
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    onClick={() => setSelectedPlan(plan)}
                    className="flex-1 hover:bg-[#0B3C5D] hover:text-white hover:border-[#0B3C5D]"
                  >
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Refund Policy */}
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-sm text-muted-foreground">
              💡 <strong>Fair Policy:</strong> Payments are non-refundable. This
              ensures we are committed to your results—and you are committed to
              the process.
            </p>
          </div>

          {/* Free Discovery Call Button */}
          <div className="max-w-2xl mx-auto text-center">
            <Link
              href={paymentLinks.discovery}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="default"
                className="gap-2 transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                <Calendar className="w-5 h-5" />
                Book Your Free Discovery Call
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground mt-4">
              Not sure which plan is right for you? Schedule a free 15-minute
              call with our coaches.
            </p>
          </div>
        </div>
      </section>

      {/* Plan Details Modal */}
      <Dialog open={!!selectedPlan} onOpenChange={() => setSelectedPlan(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedPlan && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl">
                  {selectedPlan.name}
                </DialogTitle>
                <DialogDescription className="text-base">
                  {selectedPlan.description}
                </DialogDescription>
              </DialogHeader>

              {/* Plan Image */}
              {selectedPlan.image && (
                <div className="relative w-full h-64 mb-4">
                  <Image
                    src={selectedPlan.image}
                    alt={selectedPlan.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              )}

              {/* Price and Duration */}
              <div className="bg-secondary/50 p-4 rounded-lg mb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="text-xl font-semibold">
                      {selectedPlan.duration}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Investment</p>
                    <p className="text-3xl font-bold text-primary">
                      {selectedPlan.price}
                    </p>
                  </div>
                </div>
              </div>

              {/* Full Description */}
              {selectedPlan.fullDescription && (
                <div className="mb-4">
                  <p className="text-muted-foreground">
                    {selectedPlan.fullDescription}
                  </p>
                </div>
              )}

              {/* Benefits */}
              {selectedPlan.benefits && selectedPlan.benefits.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-3">
                    What&apos;s Included:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedPlan.benefits.map((benefit, i) => (
                      <li key={i} className="flex gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Features List */}
              {selectedPlan.features && selectedPlan.features.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {selectedPlan.features.map((feature, i) => (
                      <li key={i} className="flex gap-3 text-sm">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Payment Button */}
              <div className="flex gap-3 mt-8">
                <Link
                  href={showPaymentLinks ? selectedPlan.link : '/plans'}
                  {...(showPaymentLinks && {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  })}
                  className="flex-1"
                >
                  <Button className="w-full" size="lg">
                    Get Started Now
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setSelectedPlan(null)}
                  className="flex-1"
                >
                  Close
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
