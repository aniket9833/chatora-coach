"use client";

import { Shield, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function RulesProtect() {
  const rules = [
    {
      title: "Support Hours",
      description: "Monday to Saturday. Sunday off (even coaches need rest!).",
    },
    {
      title: "Response Time",
      description: "We reply to your queries within 24 hours.",
    },
    {
      title: "Food Logging",
      description: "Minimum once per day (non-negotiable—consistency is key).",
    },
    {
      title: "Daily Steps",
      description: "Target: 8,000+ steps per day (movement matters).",
    },
    {
      title: "Non-Medical",
      description:
        "We don't treat medical conditions. Always follow doctor's guidance.",
    },
    {
      title: "Non-Refundable",
      description: "Payments are non-refundable. We're committed if you are.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex justify-center mb-4">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-6">
            Rules That Protect Your Results
          </h2>
          <p className="text-lg text-muted-foreground">
            These aren&apos;t restrictions. They&apos;re guardrails for your
            success.
          </p>
        </div>

        {/* Rules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {rules.map((rule, i) => (
            <Card key={i} className="border-0 shadow-none bg-secondary/20">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-3 text-foreground">
                  {rule.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {rule.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button size="lg" className="px-8">
            START NOW
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
