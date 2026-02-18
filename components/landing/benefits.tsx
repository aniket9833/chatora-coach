"use client";

import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Benefits() {
  const benefits = [
    "Personalized home-food plan (your foods, your portions)",
    "Monthly one-on-one coach consultations",
    "Chat support Mon-Sat for quick questions & adjustments",
    "Protein anchors + portion science explained",
    "Fallback rules for eating out, functions & travel",
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-background">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            What You Get
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Everything you need for sustainable fat loss—without feeling
            deprived.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="w-full">
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex gap-3 sm:gap-4">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-12 text-center">
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
