"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "I lost 8 kgs in 3 months without giving up my favorite foods. The portion guidance changed everything for me!",
    author: "Priya S.",
    role: "Working Professional",
    rating: 5,
  },
  {
    quote:
      "As a new mom, I needed something flexible. The home-food plan fit perfectly into my chaotic schedule.",
    author: "Ananya R.",
    role: "New Mother",
    rating: 5,
  },
  {
    quote:
      "My thyroid numbers improved significantly. The accountability calls kept me motivated throughout.",
    author: "Meera K.",
    role: "Teacher",
    rating: 5,
  },
  {
    quote:
      "Finally, a nutrition plan that doesn't feel like a punishment. Simple, practical, and actually sustainable!",
    author: "Deepak M.",
    role: "Entrepreneur",
    rating: 5,
  },
];

const quotes = [
  {
    text: "Your body is a reflection of your lifestyle, not a project with an expiration date.",
    author: "NutriLife Philosophy",
  },
  {
    text: "Small changes, consistently applied, lead to remarkable transformations.",
    author: "Coach Wisdom",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            Success Stories
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Real People, Real Results
          </h2>
          <p className="text-lg text-muted-foreground">
            Join hundreds of satisfied clients who have transformed their health
            with our guidance.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.author}
              className="bg-card border-border hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {`"${testimonial.quote}"`}
                </p>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Inspirational Quotes */}
        <div className="grid md:grid-cols-2 gap-8">
          {quotes.map((quote) => (
            <div
              key={quote.author}
              className="relative bg-card rounded-2xl p-8 lg:p-10 border border-border"
            >
              <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />
              <blockquote className="relative z-10">
                <p className="font-serif text-xl lg:text-2xl text-foreground mb-4 leading-relaxed pl-4">
                  {`"${quote.text}"`}
                </p>
                <footer className="pl-4">
                  <cite className="not-italic text-sm font-medium text-muted-foreground">
                    — {quote.author}
                  </cite>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
