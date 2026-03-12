'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Leaf } from 'lucide-react';
import Link from 'next/link';

export function PortionSahiHero() {
  return (
    <section
      id="portion-sahi-home"
      className="relative min-h-screen flex items-center pt-12 sm:pt-4 lg:pt-0 overflow-hidden bg-background"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-linear-to-br from-secondary/30 via-background to-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(227,94,4,0.08),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8 sm:pt-8 lg:pt-30">
            <div className="animate-fade-in-up">
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm font-medium"
              >
                <CheckCircle className="w-4 h-4 mr-2 fill-accent text-accent" />
                Portion Control Made Simple
              </Badge>
            </div>

            <h1 className="animate-fade-in-up animation-delay-100 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance text-primary">
              Portion <span className="text-accent">Sahi</span> System
            </h1>

            <p className="animate-fade-in-up animation-delay-200 text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Master your nutrition without giving up your favorite Indian
              foods.
              <strong className="capitalize">
                {' '}
                Keep your foods → Fix portions → Transform your body
              </strong>
            </p>

            <p className="animate-fade-in-up animation-delay-250 text-sm sm:text-base text-muted-foreground max-w-xl italic">
              Science-backed portion management for sustainable fat loss while
              enjoying your culture, family meals, and favorite dishes.
            </p>

            <div className="animate-fade-in-up animation-delay-300 flex flex-col sm:flex-row gap-4">
              <Link href="/plans">
                <Button size="lg" className="text-base px-8 group">
                  START YOUR JOURNEY
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="animate-fade-in-up animation-delay-400 flex flex-wrap gap-3 sm:gap-4 lg:gap-6 pt-2 sm:pt-4">
              {['Indian Diets', 'Portion Guides', 'No Food Restrictions'].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground"
                  >
                    <Leaf className="h-5 w-5 text-accent shrink-0" />
                    <span>{item}</span>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="animate-fade-in-up animation-delay-200 relative h-80 sm:h-96 lg:h-125 flex items-center justify-center">
            <div className="relative w-full h-full bg-linear-to-br from-secondary to-secondary/50 rounded-2xl overflow-hidden flex items-center justify-center border-2 border-accent/20">
              <div className="text-center">
                <Leaf className="w-20 h-20 text-accent/40 mx-auto mb-4" />
                <p className="text-muted-foreground text-sm">
                  Balanced Indian Portion
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
