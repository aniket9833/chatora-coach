'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function CTA() {
  return (
    <section
      id="contact"
      className="py-16 lg:py-24 relative overflow-hidden"
      style={{ backgroundColor: '#FFF4E6' }} // Cream background
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(11,60,93,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(232,93,4,0.06),transparent_50%)]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h2
            className="font-serif text-3xl lg:text-5xl font-bold mb-6 text-balance"
            style={{ color: '#0B3C5D' }} // Navy
          >
            Ready to Start Your Portion Sahi Journey?
          </h2>

          {/* Paragraph */}
          <p
            className="text-lg mb-10 max-w-xl mx-auto leading-relaxed"
            style={{ color: '#1F1F1F' }} // Charcoal
          >
            Fat loss with your favourite foods. No guilt, no restriction—just
            smarter portions and sustainable habits.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/plans">
              <Button
                size="lg"
                className="text-base px-8 group text-white hover:opacity-90 transition"
                style={{ backgroundColor: '#E85D04' }} // Orange accent
              >
                START
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
