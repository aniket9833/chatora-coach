'use client';

import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export function PortionSahiHowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Food Assessment',
      description:
        'Tell us your favorite foods, family meals, and dietary preferences. No foods are off-limits—we work with what you love.',
    },
    {
      number: '02',
      title: 'Portion Mapping',
      description:
        'We create a personalized portion guide for your specific dietary choices. Learn exact serving sizes for your favorite dishes.',
    },
    {
      number: '03',
      title: 'Implementation Strategy',
      description:
        'Get practical meal plans, cooking guides, and eating strategies for your daily routine, celebrations, and eating out.',
    },
    {
      number: '04',
      title: 'Weekly Check-ins',
      description:
        'Regular support and adjustments. We monitor your progress and refine your portions as your body transforms.',
    },
    {
      number: '05',
      title: 'Habit Locking',
      description:
        'Build sustainable eating patterns. Your Portion Sahi system becomes your lifestyle, not a temporary diet.',
    },
    {
      number: '06',
      title: 'Results & Maintenance',
      description:
        'Achieve your fat loss goals while maintaining your body, culture, and food enjoyment long-term.',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-4">
            How Portion Sahi Works
          </h2>
          <p className="text-lg text-muted-foreground">
            A six-step process to transform your body using Indian-friendly
            portion management.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="space-y-4 lg:space-y-6">
          {steps.map((step, index) => (
            <div key={step.number}>
              <Card className="p-6 lg:p-8 border-2 border-border hover:border-accent/50 transition-colors bg-white/70 group">
                <div className="flex gap-6 lg:gap-8">
                  {/* Number */}
                  <div className="shrink-0">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-accent to-orange-600 text-white">
                      <span className="font-serif text-2xl font-bold">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex shrink-0 items-end pb-8">
                      <div className="text-accent/30">
                        <ArrowRight className="w-6 h-6 rotate-90" />
                      </div>
                    </div>
                  )}
                </div>
              </Card>

              {/* Mobile Arrow */}
              {index < steps.length - 1 && (
                <div className="lg:hidden flex justify-center py-2">
                  <ArrowRight className="w-5 h-5 text-accent/30 rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 lg:mt-16 p-8 lg:p-12 bg-linear-to-r from-primary/5 to-accent/5 rounded-2xl border-2 border-accent/30 text-center">
          <h3 className="font-serif text-2xl lg:text-3xl font-bold text-primary mb-3">
            Your personalized Portion Sahi journey starts today
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-0">
            Stop restricting foods. Start controlling portions. Get your first
            consultation scheduled with our nutrition coach.
          </p>
        </div>
      </div>
    </section>
  );
}
