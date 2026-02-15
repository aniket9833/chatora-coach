"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section
      id="contact"
      className="py-16 lg:py-24 bg-primary relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(255,255,255,0.05),transparent_50%)]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl lg:text-5xl font-bold mb-6 text-primary-foreground text-balance">
            Ready to Start Your Portion Sahi Journey?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-10 max-w-xl mx-auto leading-relaxed">
            Fat loss with your favourite foods. No guilt, no restriction—just
            smarter portions and sustainable habits.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/plans">
              <Button
                size="lg"
                variant="secondary"
                className="text-base px-8 group"
              >
                START
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground bg-transparent"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
