'use client';

import { CheckCircle } from 'lucide-react';

const trustPoints = [
  {
    title: 'Real Results from Real Clients',
    desc: '1000+ clients have transformed their lives using the Portion Sahi System. Our case studies and testimonials speak for themselves.',
  },
  {
    title: 'Science Meets Real Life',
    desc: 'Our approach blends nutrition science with practical wisdom from working with diverse Indian households.',
  },
  {
    title: 'Transparent Communication',
    desc: "We are honest about what works, what doesn't, and what we can't do (medical conditions). No misleading promises.",
  },
  {
    title: 'Continuous Learning',
    desc: 'We invest in ongoing education and stay updated with latest nutrition research and coaching methodologies.',
  },
  {
    title: 'Dedicated Support',
    desc: 'Mon–Sat support with 24-hour response times. Your coach is invested in your success.',
  },
  {
    title: 'Accountability Built In',
    desc: 'Regular check-ins, food logging, and structured progress tracking ensure you stay on track.',
  },
];

export default function WhyTrust() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-12 text-center text-primary">
          Why Trust Chatora Coach?
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {trustPoints.map((item, i) => (
            <div key={i} className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
