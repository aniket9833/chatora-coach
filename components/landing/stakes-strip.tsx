"use client";

import { AlertTriangle, CheckCircle } from "lucide-react";

export function StakesStrip() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-destructive/5 via-background to-primary/5">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">
            The Difference a System Makes
          </h2>
          <p className="text-muted-foreground">
            Stop guessing. Start progressing with clarity and structure.
          </p>
        </div>

        {/* Comparison Layout */}
        <div className="relative grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Vertical Divider (Desktop Only) */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-border -translate-x-1/2" />

          {/* Without a System */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-full bg-destructive/10">
                <AlertTriangle className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="font-semibold text-xl">Without a System</h3>
            </div>

            <ul className="space-y-3 text-muted-foreground text-md">
              <li>Yo-yo dieting cycles</li>
              <li>Guilt after normal meals</li>
              <li>Confusion from conflicting advice</li>
              <li>Rebound weight gain</li>
              <li>Constant overthinking</li>
            </ul>
          </div>

          {/* With Portion Sahi */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-full bg-primary/10">
                <CheckCircle className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-xl">With Portion Sahi</h3>
            </div>

            <ul className="space-y-3 text-muted-foreground text-md">
              <li>Control over food choices</li>
              <li>Consistency without restriction</li>
              <li>Sustainable fat loss</li>
              <li>Confidence in daily decisions</li>
              <li>Freedom to eat what you love</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
