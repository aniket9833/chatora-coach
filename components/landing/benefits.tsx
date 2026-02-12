"use client";

import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Benefits() {
  const benefits = [
    "Personalized home-food plan (your foods, your portions)",
    "Monthly one-on-one coach consultations",
    "Chat support Mon-Sat for quick questions & adjustments",
    "Protein anchors + portion science explained",
    "Fallback rules for eating out, functions & travel",
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto px-4 lg:px-8 max-w-5xl">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-6">
            What You Get
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need for sustainable fat loss—without feeling
            deprived.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="w-full">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex gap-4">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-base text-muted-foreground leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button size="lg" className="px-8">
            GET STARTED
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
