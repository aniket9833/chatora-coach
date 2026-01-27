"use client";

import { AlertTriangle, CheckCircle } from "lucide-react";

export function StakesStrip() {
  return (
    <section className="py-12 lg:py-16 bg-gradient-to-r from-destructive/10 via-background to-primary/10 border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Without a system */}
          <div className="flex gap-4">
            <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-3">Without a System</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Yo-yo dieting cycles</li>
                <li>• Guilt after normal meals</li>
                <li>• Confusion from conflicting advice</li>
                <li>• Rebound weight gain</li>
                <li>• Constant overthinking</li>
              </ul>
            </div>
          </div>

          {/* With Portion Sahi */}
          <div className="flex gap-4">
            <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-3">With Portion Sahi</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Control over food choices</li>
                <li>• Consistency without restriction</li>
                <li>• Sustainable fat loss</li>
                <li>• Confidence in daily decisions</li>
                <li>• Freedom to eat what you love</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
