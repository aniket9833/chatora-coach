'use client';

import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function PortionSahiBenefits() {
  const benefits = [
    'Keep eating dal, rice, roti, and all your favorite foods',
    'Learn exact portion sizes for Indian dishes and staples',
    'No complex calorie counting or food restrictions',
    'Personalized guidance for your family meals and food preferences',
    'Control refined carbs and ghee without elimination',
    'Support for eating out, celebrations and family functions',
    'Sustainable approach for long-term fat loss',
    'Build healthy habits that respect your culture and lifestyle',
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-4">
            Benefits of Following Portion Sahi
          </h2>
          <p className="text-lg text-muted-foreground">
            Transform your body while honoring your heritage and enjoying the
            foods you love.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex gap-4 group">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-accent to-orange-600 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                <Check className="w-4 h-4 text-white" />
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                {benefit}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-secondary to-secondary/50 rounded-2xl p-8 lg:p-12 text-center border-2 border-accent/20">
          <h3 className="font-serif text-2xl lg:text-3xl font-bold text-primary mb-4">
            Ready to Master Your Portions?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join hundreds of Indians who&apos;ve transformed their bodies
            without giving up their food culture.
          </p>
          <Link href="/plans">
            <Button size="lg" className="px-8">
              GET STARTED TODAY
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
