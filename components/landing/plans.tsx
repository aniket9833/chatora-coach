"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Calendar } from "lucide-react";
import { paymentLinks } from "@/lib/bookingLinks";
import Link from "next/link";

interface PlansProps {
  showPaymentLinks?: boolean;
}

export function Plans({ showPaymentLinks = false }: PlansProps) {
  const plans = [
    {
      name: "Trial",
      duration: "1 Month",
      price: "₹1,999",
      description: "Start your Portion Sahi journey",
      features: [
        "Personalized home-food plan",
        "2 coach consultations",
        "Chat support Mon-Sat",
        "App access",
        "Basic portion guidance",
      ],
      popular: false,
      link: paymentLinks.plan1,
    },
    {
      name: "Standard",
      duration: "3 Months",
      price: "₹4,999",
      description: "Build lasting habits",
      features: [
        "Personalized home-food plan",
        "3 coach consultations",
        "Chat support Mon-Sat",
        "App access",
        "Protein anchors explained",
        "Eating-out & festival rules",
        "Progress tracking",
      ],
      popular: true,
      link: paymentLinks.plan2,
    },
    {
      name: "Premium",
      duration: "3 Months",
      price: "₹8,999",
      description: "Complete transformation (Postpartum only)",
      features: [
        "Personalized home-food plan",
        "4 coach consultations",
        "Priority chat support Mon-Sat",
        "App access",
        "Protein anchors + habit layer",
        "Eating-out, functions & travel rules",
        "Flexible meal swaps",
        "Email support for files/admin",
      ],
      postpartumOnly: true,
      popular: false,
      link: paymentLinks.plan3,
    },
  ];

  return (
    <section id="plans" className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-6">
            Simple, Affordable Plans
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that fits your goals and commitment.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`flex flex-col transition-all duration-300 relative transform hover:scale-105 hover:shadow-2xl ${
                plan.popular
                  ? "border-primary shadow-lg hover:border-primary/80"
                  : "border-border hover:shadow-md hover:border-primary"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className={plan.popular ? "pt-8" : ""}>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.duration}</CardDescription>
                {plan.postpartumOnly && (
                  <Badge variant="outline" className="w-fit mt-2 text-xs">
                    Postpartum Recovery
                  </Badge>
                )}
              </CardHeader>

              <CardContent className="flex-grow">
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">
                    {plan.price}
                  </span>
                  <p className="text-sm text-muted-foreground mt-2">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex gap-3 text-sm">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Link
                  href={showPaymentLinks ? plan.link : "/plans"}
                  {...(showPaymentLinks && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className="w-full"
                >
                  <Button
                    className={`w-full transition-all duration-200 hover:opacity-90 ${!plan.popular ? "bg-transparent" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    START
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Refund Policy */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-sm text-muted-foreground">
            💡 <strong>Fair Policy:</strong> Payments are non-refundable. This
            ensures we are committed to your results—and you are committed to
            the process.
          </p>
        </div>

        {/* Free Discovery Call Button */}
        <div className="max-w-2xl mx-auto text-center">
          <Link
            href={paymentLinks.discovery}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              variant="default"
              className="gap-2 transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              Book Your Free Discovery Call
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground mt-4">
            Not sure which plan is right for you? Schedule a free 15-minute call
            with our coaches.
          </p>
        </div>
      </div>
    </section>
  );
}
