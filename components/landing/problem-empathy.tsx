"use client";

import { AlertCircle, Heart, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ProblemEmpathy() {
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-secondary/40 via-background to-background overflow-hidden">
      <div className="mx-auto px-4 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl lg:text-5xl font-bold mb-6">
            Why Strict Diets Fail in Real Indian Life
          </h2>
          <p className="text-lg text-muted-foreground">
            The problem isn&apos;t you. Your plan was unrealistic.
          </p>
        </div>

        {/* Problem & Empathy Cards */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          {/* Problem Card */}
          <Card className="rounded-2xl border border-border bg-card shadow-sm hover:shadow-lg transition-all">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="font-semibold text-xl">The Real Problem</h3>
              </div>

              <ul className="space-y-5 text-muted-foreground leading-relaxed">
                {[
                  "Strict diets demand separate meals — unrealistic in Indian homes.",
                  "Office snacks, family functions, travel — environment works against you.",
                  "Keto vs detox vs fasting — conflicting advice creates confusion.",
                ].map((problem, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-destructive flex-shrink-0" />
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Empathy Card */}
          <Card className="rounded-2xl border border-border bg-primary/5 shadow-sm hover:shadow-lg transition-all">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl">
                  What You&apos;re Feeling
                </h3>
              </div>

              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Guilt</strong> after
                  eating normal food.
                </p>
                <p>
                  <strong className="text-foreground">Low confidence:</strong>{" "}
                  “I cannot stick to any plan.”
                </p>
                <p>
                  <strong className="text-foreground">Mental fatigue:</strong>{" "}
                  Overthinking every bite.
                </p>

                <div className="pt-6 border-t border-border">
                  <p className="font-semibold text-primary">
                    👉 If you&apos;ve “started Monday” many times, you&apos;re
                    not weak — your plan was.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Who It's For Section */}
        <div className="bg-card border border-border rounded-2xl p-10 shadow-sm">
          <h3 className="font-serif text-2xl font-bold text-center mb-10">
            Is This For You?
          </h3>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Perfect For */}
            <div>
              <p className="font-semibold text-primary mb-6 text-lg">
                ✓ Perfect For
              </p>
              <ul className="space-y-4 text-muted-foreground">
                <li>
                  Food lovers who want fat loss without quitting favourites
                </li>
                <li>Postpartum recovery (Premium plan)</li>
                <li>Managing PCOS, thyroid, BP naturally</li>
                <li>Busy professionals balancing work & home</li>
              </ul>
            </div>

            {/* Not For */}
            <div>
              <p className="font-semibold text-destructive mb-6 text-lg">
                ✗ Not For
              </p>
              <ul className="space-y-4 text-muted-foreground">
                <li>Unwilling to log food once daily</li>
                <li>Looking for 7-day miracle fixes</li>
                <li>Want zero structure</li>
                <li>Active medical cases (follow doctor advice)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-primary/5 px-10 py-8 rounded-2xl border border-primary/20">
            <p className="text-lg font-medium mb-6">
              Ready to stop restarting every Monday?
            </p>
            <Button size="lg" className="px-10 text-base">
              START YOUR JOURNEY
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
