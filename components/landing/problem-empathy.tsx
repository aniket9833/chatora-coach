"use client";

import { AlertCircle, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ProblemEmpathy() {
  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-6 text-balance">
            Why Strict Diets Fail in Real Indian Life
          </h2>
          <p className="text-lg text-muted-foreground">
            The problem isn&apos;t you. Your plan was unrealistic.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Problems - External */}
          <Card className="border-0 shadow-none bg-background/50">
            <CardContent className="pt-8">
              <div className="flex gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-4">The Real Problem</h3>
                </div>
              </div>

              <ul className="space-y-4">
                {[
                  "Strict diets demand separate meals—not realistic for Indian homes where everyone eats together",
                  "Every environment pushes unhealthy choices: office snacks, family meals, functions, travel",
                  "Online advice conflicts: keto vs detox vs fasting. You feel confused and stuck",
                ].map((problem, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <span className="text-primary font-bold flex-shrink-0">
                      •
                    </span>
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Empathy - Internal + Who It's For */}
          <Card className="border-0 shadow-none bg-primary/5">
            <CardContent className="pt-8">
              <div className="flex gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-4">
                    What You&apos;re Feeling
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Guilt</strong> after
                  eating normal food.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Low confidence:</strong>{" "}
                  &quot;I cannot stick to any plan.&quot;
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Mental fatigue:</strong>{" "}
                  Overthinking every bite.
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-primary">
                    👉 If you&apos;ve &quot;started Monday&quot; many times,
                    you&apos;re not weak—your plan was.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Who It's For / Not For */}
        <div className="mt-12 max-w-3xl mx-auto">
          <h3 className="font-semibold text-lg text-center mb-8">
            Is This For You?
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="font-bold text-primary mb-4">✓ Perfect For:</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  ✓ Foodies who want fat loss without quitting favourite foods
                </li>
                <li>✓ Postpartum recovery (Premium plan only)</li>
                <li>✓ Managing PCOS, thyroid, BP naturally</li>
                <li>✓ Busy professionals juggling home, office, functions</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-destructive mb-4">✗ Not For:</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✗ Unwilling to log food once per day</li>
                <li>✗ Looking for magic pills or 7-day fixes</li>
                <li>✗ Want to eat anything without structure</li>
                <li>✗ Medical diagnosis (follow doctor guidance)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
