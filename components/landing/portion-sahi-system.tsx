'use client';

import { Card } from '@/components/ui/card';
import { CheckCircle, Leaf, Target, TrendingUp } from 'lucide-react';

export function PortionSahiSystem() {
  const systemPillars = [
    {
      icon: Leaf,
      title: 'Keep Your Foods',
      description:
        'No need to follow bland diet lists. Your favorite Indian foods, local dishes, and family meals stay on the table. We work with what you love.',
    },
    {
      icon: Target,
      title: 'Fix Your Portions',
      description:
        'Learn scientifically-backed portion sizes using simple, practical methods. Understand serving sizes for dal, rice, ghee, and all your staples.',
    },
    {
      icon: TrendingUp,
      title: 'Lock Your Routine',
      description:
        'Create sustainable eating patterns that fit your lifestyle. Consistency beats perfection—we help you build habits that last.',
    },
  ];

  const indianDietExamples = [
    {
      title: 'Dal & Rice',
      portions: '½ cup cooked dal + ¾ cup rice',
      benefits: 'Protein + Carbs',
    },
    {
      title: 'Roti & Curry',
      portions: '2 rotis + 1 cup curry',
      benefits: 'Complete meal',
    },
    {
      title: 'Refined Carbs Control',
      portions: 'Measured portions of paratha, biryani',
      benefits: 'Controlled macros',
    },
    {
      title: 'Ghee & Oils',
      portions: '1-2 tablespoons per meal',
      benefits: 'Nutrient absorption',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-4">
            The <span className="text-accent">Portion Sahi</span> Approach
          </h2>
          <p className="text-lg text-muted-foreground">
            A simple, three-pillar system designed specifically for Indians who
            want to lose fat without losing their food culture.
          </p>
        </div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 my-12 lg:my-16">
          {systemPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={pillar.title}
                className="p-6 lg:p-8 border-2 border-border hover:border-accent/50 transition-colors bg-white/50"
              >
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Indian Diet Examples */}
        <div className="mt-16 lg:mt-20">
          <h3 className="font-serif text-2xl lg:text-3xl font-bold text-primary mb-8">
            Indian Meal Portion Examples
          </h3>

          <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
            {indianDietExamples.map((example, idx) => (
              <Card
                key={idx}
                className="p-6 border-l-4 border-l-accent border-r border-t border-b border-border bg-gradient-to-br from-white/70 to-secondary/20"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h4 className="font-bold text-primary mb-2">
                      {example.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {example.portions}
                    </p>
                    <span className="inline-block text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {example.benefits}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
