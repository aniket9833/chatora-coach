'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-12 sm:pt-4 lg:pt-0 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-accent/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(74,222,128,0.08),transparent_50%)]" />

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
                1000+ Clients | 3000+ Diets
              </Badge>
            </div>

            <h1 className="animate-fade-in-up animation-delay-100 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance">
              Fat loss coaching <span className="text-primary">Diet nahi,</span>{' '}
              portion sahi.
            </h1>

            <p className="animate-fade-in-up animation-delay-200 text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed">
              <strong>Portion Sahi System:</strong> Keep your foods → Fix
              portions → Lock routine
            </p>

            <p className="animate-fade-in-up animation-delay-250 text-sm sm:text-base text-muted-foreground max-w-xl italic">
              Fat loss should not require quitting your culture, family meals,
              or favourite foods.
            </p>

            <div className="animate-fade-in-up animation-delay-300 flex flex-col sm:flex-row gap-4">
              <Link href="/plans">
                <Button size="lg" className="text-base px-8 group">
                  START
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              {/* <Button
                size="lg"
                variant="outline"
                className="text-base px-8 bg-transparent"
              >
                Learn More
              </Button> */}
            </div>

            {/* Trust Indicators */}
            <div className="animate-fade-in-up animation-delay-400 flex flex-wrap gap-3 sm:gap-4 lg:gap-6 pt-2 sm:pt-4">
              {['Keep Your Foods', 'Fix Portions', 'Lock Routine'].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground"
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Image Grid */}
          <div className="animate-fade-in-up animation-delay-300 relative">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/hero-nutrition.jpg"
                    alt="Healthy Indian meals with roti and rice"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
                <div className="bg-card p-2 sm:p-4 rounded-xl shadow-lg border border-border">
                  <p className="font-semibold text-foreground text-xs sm:text-sm">
                    Roti, rice, curry—all allowed
                  </p>
                  <p className="text-xs text-muted-foreground leading-tight">
                    Just the right portions
                  </p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-card p-2 sm:p-4 rounded-xl shadow-lg border border-border">
                  <p className="text-base sm:text-lg font-bold text-primary mb-1 sm:mb-2">
                    3000+
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Diets Delivered
                  </p>
                </div>
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl mt-2 sm:mt-0">
                  <Image
                    src="/images/healthy-lifestyle.jpg"
                    alt="Real-life eating at home, office, and functions"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 -top-8 -right-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -z-10 -bottom-8 -left-8 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
