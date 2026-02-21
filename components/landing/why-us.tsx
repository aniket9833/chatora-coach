'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import {
  Utensils,
  Calendar,
  Phone,
  Smartphone,
  Gift,
  BookOpen,
} from 'lucide-react';

const features = [
  {
    icon: Utensils,
    title: 'Personalised Home-Food Plan',
    description:
      'Customized meal plans using ingredients you already have at home. No fancy supplements needed.',
  },
  {
    icon: Calendar,
    title: 'Monthly Coach Consultations',
    description:
      'Regular check-ins with your dedicated nutrition coach to track progress and adjust plans.',
  },
  {
    icon: Phone,
    title: 'Follow-up Calls',
    description:
      'Accountability calls from health experts to keep you motivated and on track.',
  },
  {
    icon: Smartphone,
    title: 'App Access',
    description:
      'Food & mood journaling app to track your daily habits and identify patterns.',
  },
  {
    icon: BookOpen,
    title: 'Lifestyle Guidance',
    description:
      'Expert tips for managing cravings, eating out, and navigating festivals healthily.',
  },
  {
    icon: Gift,
    title: 'Bonus Resources',
    description:
      'Free recipe book and kitchen scale included with long-term plans.',
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 lg:py-36 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Section Header — centered above both columns */}
        <div className="text-center mb-16 lg:mb-20">
          <Badge
            variant="outline"
            className="mb-4 tracking-widest text-xs uppercase"
          >
            Why Choose Us
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance leading-tight">
            Why Choose Essential Plans?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We focus on building a strong foundation with home food, portion
            science, and habit coaching for results that actually last.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">
          {/* Left — Image */}
          <div className="relative">
            {/* Decorative blur */}
            <div className="absolute -z-10 -top-10 -left-10 w-56 h-56 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            {/* Image card */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/healthy-lifestyle.jpg"
                alt="Healthy meal preparation"
                fill
                className="object-cover"
              />
              {/* subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating quote card */}
            <div className="absolute -bottom-6 right-4 lg:-right-6 bg-card border border-border rounded-xl shadow-xl p-5 max-w-[280px]">
              <p className="font-serif text-base font-semibold text-foreground mb-2 leading-snug">
                "Sometimes you don't need a coach in your pocket 24/7"
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                You just need a smart, sustainable plan and the accountability
                to stay on track.
              </p>
            </div>

            {/* Bottom spacer so floating card doesn't clip */}
            <div className="h-10 lg:h-0" />
          </div>

          {/* Right — Features grid */}
          <div className="pt-2">
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4 group">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>

                  {/* Text */}
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground text-sm mb-1 leading-snug">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
