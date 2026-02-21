'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      "I'm a 31-year-old mom, and Moves n Stretch Studio changed my life. With their diet plan and fun Zumba classes, I lost 12 kilograms and lots of inches. The instructors were so supportive and made every class exciting. Moms, if you want to feel great, check out Moves n Stretch Studio. They're the best!",
    author: 'Akshata Takwale',
    rating: 5,
  },
  {
    quote:
      "Moves n Stretch Studio has truly been a game-changer in my health journey. With their expert instructors and personalized diet plans, I lost 10 kilograms in three months, and my blood markers normalized, leading my doctor to stop my diabetes medication. The care, knowledge, and support provided by the instructors are unparalleled. If you're seeking real, life-changing results, look no further than Moves n Stretch Studio. Highly recommended!",
    author: 'Poonam Bodade',
    rating: 5,
  },
  {
    quote:
      'Joining Moves and stretch studio have not only sculpted my physique but also became a powerful ally in managing my pcod. As I committed to my fitness routine,stamina was nothing short of remarkable.from conquering challenging workouts to embracing energetic group classes, each day unveiled a newfound strength. Beyond physical changes ,the holistic approach of diet and mindfulness activites, guided me towards self discovery and renewed sense of confidence. Moves and stretch studio is a place where commitment to your well being extends beyond the gym creating an environment where PCOD management increase in stamina and positive self image converts into a harmonious empowering experience',
    author: 'Dr. Nupur Tidke',
    rating: 5,
  },
  {
    quote:
      "As a 30-year-old woman with a hectic lifestyle, Moves N Stretch Studio has been a game-changer in my postpartum recovery. Initially, I struggled with fragmented approaches, but their practical, well-researched methods made all the difference. The instructors (Mayur sir & Varsha mam)provide personalized, manageable fitness routines and a diet plan that's easy to follow. Their holistic approach has helped me regain strength and confidence, making the postpartum journey much more manageable. Highly recommended!",
    author: 'Anonymous',
    rating: 5,
  },
];

// const quotes = [
//   {
//     text: "Fat loss should not require quitting your culture, family meals, or favourite foods.",
//     author: "Philosophical belief",
//   },
//   // {
//   //   text: "Small changes, consistently applied, lead to remarkable transformations.",
//   //   author: "Coach Wisdom",
//   // },
// ];

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
            Real People. Real Fat Loss. Real Food
          </h2>
          <p className="text-lg text-muted-foreground">
            Short wins from Chatora Coach clients (online coaching).
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.author}
              className="bg-card border-border hover:shadow-lg transition-shadow h-[420px] flex flex-col"
            >
              <CardContent className="p-6 flex flex-col h-full">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Scrollable Quote */}
                <div className="flex-1 overflow-y-auto pr-2 mb-4 scrollbar-thin">
                  <p className="text-muted-foreground leading-relaxed">
                    {`"${testimonial.quote}"`}
                  </p>
                </div>

                {/* Author */}
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Inspirational Quotes
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
        </div> */}
      </div>
    </section>
  );
}
