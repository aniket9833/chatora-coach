'use client';

import { Utensils, Settings2, CheckSquare, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function SystemPlan() {
  const steps = [
    {
      icon: Utensils,
      title: 'Keep Your Foods',
      description: 'Roti, rice, curry—everything you love. No bans.',
    },
    {
      icon: Settings2,
      title: 'Fix Portions',
      description:
        'Protein anchors + portion science. The math is done for you.',
    },
    {
      icon: CheckSquare,
      title: 'Lock Routine',
      description:
        'Repeat the same meals weekly. Consistency beats perfection.',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-6">
            The <span className="text-primary">Portion Sahi</span> System
          </h2>
          <p className="text-lg text-muted-foreground">
            3 simple steps. No chaos. No overthinking.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={index}
                className="border-0 shadow-none bg-secondary/20 hover:shadow-md transition-all"
              >
                <CardContent className="pt-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* How It Works */}
        <div className="mt-16 max-w-3xl mx-auto bg-accent/10 border border-accent/20 rounded-2xl p-8">
          <h3 className="font-bold text-xl mb-6 text-center">How It Works</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              <span className="font-semibold text-foreground">Step 1:</span>{' '}
              Book a Free 15-min Discovery Call.
            </p>
            <p>
              <span className="font-semibold text-foreground">Step 2:</span> If
              we’re a fit, you pick a plan and pay.
            </p>
            <p>
              <span className="font-semibold text-foreground">Step 3:</span>{' '}
              After activation, you book your Initial Diet Setup + follow-ups
              inside Practice Better.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link href="/plans">
            <Button size="lg" className="px-8">
              START
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
