"use client";

import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-6">
            What You Get
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need for sustainable fat loss—without feeling
            deprived.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, i) => (
              <Card key={i} className="border-0 shadow-none bg-secondary/20">
                <CardContent className="pt-6 pb-6">
                  <div className="flex gap-4">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">{benefit}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
