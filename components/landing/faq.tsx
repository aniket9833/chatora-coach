"use client";

import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can I eat roti and rice?",
    answer:
      "Yes! Roti, rice, curry, bread—everything is allowed. The Portion Sahi system is about portion control and protein anchors, not food restriction. Your favourite foods stay on the plate; we just fix the portions.",
  },
  {
    question: "Is Postpartum recovery included in all plans?",
    answer:
      "Postpartum coaching is available in the Premium plan only. This plan includes stage-wise nutrition rules and support tailored for postpartum recovery and mothers managing energy demands.",
  },
  {
    question:
      "I have medical conditions (PCOS, thyroid, BP). Can you coach me?",
    answer:
      "We provide nutrition coaching for health optimization, not medical treatment. If you have diagnosed conditions, always follow your doctor's guidance. We work within their framework to help you with sustainable nutrition habits.",
  },
  {
    question: "How does the coaching work?",
    answer:
      "Primary communication is through Practice Better (our coaching app) where you log food, get feedback, and chat with your coach. WhatsApp and email are used only for file sharing and admin convenience.",
  },
  {
    question: "What's your refund policy?",
    answer:
      "Payments are non-refundable. This ensures both you and our team are committed to the process. No trial periods or money-back guarantees—just results through consistency.",
  },
  {
    question: "Do I need to log every meal?",
    answer:
      "Minimum requirement is logging once per day. This helps us track patterns and adjust your plan. Consistency in logging = consistency in results.",
  },
  {
    question: "What if I have questions about eating out or functions?",
    answer:
      "Every plan includes fallback rules and guidance for eating out, office snacks, family functions, and travel situations. You'll never feel lost in real-life eating scenarios.",
  },
  {
    question: "Can this work if I have a busy schedule?",
    answer:
      "Yes. Portion Sahi is designed for real life—home, office, functions. You're not cooking separate meals or following complicated recipes. Just eat your home food with the right portions.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-6 text-balance">
              Your Questions, Answered
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about Portion Sahi and our coaching
              approach.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
