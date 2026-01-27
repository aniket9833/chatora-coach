"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Utensils,
  Calendar,
  Phone,
  Smartphone,
  Gift,
  BookOpen,
} from "lucide-react";

const features = [
  {
    icon: Utensils,
    title: "Personalised Home-Food Plan",
    description:
      "Customized meal plans using ingredients you already have at home. No fancy supplements needed.",
  },
  {
    icon: Calendar,
    title: "Monthly Coach Consultations",
    description:
      "Regular check-ins with your dedicated nutrition coach to track progress and adjust plans.",
  },
  {
    icon: Phone,
    title: "Follow-up Calls",
    description:
      "Accountability calls from health experts to keep you motivated and on track.",
  },
  {
    icon: Smartphone,
    title: "App Access",
    description:
      "Food & mood journaling app to track your daily habits and identify patterns.",
  },
  {
    icon: BookOpen,
    title: "Lifestyle Guidance",
    description:
      "Expert tips for managing cravings, eating out, and navigating festivals healthily.",
  },
  {
    icon: Gift,
    title: "Bonus Resources",
    description:
      "Free recipe book and kitchen scale included with long-term plans.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/healthy-lifestyle.jpg"
                alt="Healthy meal preparation"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 md:right-8 bg-card p-6 rounded-xl shadow-xl border border-border max-w-xs">
              <p className="font-serif text-lg font-semibold text-foreground mb-2">
                {'"Sometimes you don\'t need a coach in your pocket 24/7"'}
              </p>
              <p className="text-sm text-muted-foreground">
                You just need a smart, sustainable plan and accountability to
                stay on track.
              </p>
            </div>

            {/* Decorative */}
            <div className="absolute -z-10 -top-8 -left-8 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <Badge variant="outline" className="mb-4">
              Why Choose Us
            </Badge>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Why Choose Essential Plans?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              We focus on building a strong foundation with home food, portion
              science, and habit coaching for lasting results.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
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
