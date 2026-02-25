import { Navbar } from '@/components/landing/navbar';
import { Footer } from '@/components/landing/footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { CertificatesGallery } from './certificates-gallery';
import { Award, CheckCircle, Heart, Users, BookOpen, Zap } from 'lucide-react';

export const metadata = {
  title: 'About Us | Chatora Coach - Our Story & Expertise',
  description:
    'Learn about Chatora Coach, our mission to transform lives through portion-focused coaching, and our certified expertise in nutrition and postpartum recovery.',
};

const values = [
  {
    icon: Heart,
    title: 'Client-Centric Approach',
    description:
      'Your success is our success. We tailor every plan to your life, not the other way around.',
  },
  {
    icon: CheckCircle,
    title: 'Science-Based Methods',
    description:
      'Every recommendation is backed by nutrition science and real-world results from 1000+ clients.',
  },
  {
    icon: Users,
    title: 'Community Support',
    description:
      'You are not alone. Our supportive community celebrates wins and navigates challenges together.',
  },
  {
    icon: Award,
    title: 'Accountability & Transparency',
    description:
      'Clear expectations, honest communication, and measurable progress tracking every step.',
  },
];

const stats = [
  { number: '1000+', label: 'Clients Transformed', color: 'text-orange-600' },
  { number: '3000+', label: 'Diets Delivered', color: 'text-primary' },
  { number: '95%', label: 'Success Rate', color: 'text-rose-600' },
  { number: '4.8★', label: 'Average Rating', color: 'text-emerald-600' },
];

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

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-96 flex items-center pt-24 pb-16 bg-linear-to-br from-background via-background to-secondary/20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(163,177,138,0.08),transparent_50%)]" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-4 gap-2">
              <Zap className="w-3 h-3" />
              OUR STORY
            </Badge>
            <h1 className="font-serif text-4xl lg:text-6xl font-bold mb-6 text-primary leading-tight">
              Building Better Health,{' '}
              <span className="text-accent">One Portion</span> at a Time
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              We are a team of certified nutrition experts and fitness coaches
              dedicated to transforming lives through science-backed coaching
              and real-world wisdom. No shortcuts. No fads. Just sustainable
              results.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card border-t border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p
                  className={`text-3xl lg:text-4xl font-bold ${stat.color} mb-2`}
                >
                  {stat.number}
                </p>
                <p className="text-sm lg:text-base text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To empower food lovers to achieve sustainable fat loss without
                  sacrificing their culture, family meals, or favourite foods.
                  We believe health is not about restriction — it is about smart
                  choices and sustainable habits.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To be the trusted nutrition coaching partner for every Indian
                  household seeking real-life fat loss. We envision a world
                  where weight loss doesn't mean giving up your heritage, your
                  favourite foods, or your time with family.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-6 text-primary">
              Core Values That Guide Us
            </h2>
            <p className="text-lg text-muted-foreground">
              These principles shape every decision we make and every
              recommendation we give.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <Card key={i} className="bg-card border-border">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Certificates (Client Component) ── */}
      <CertificatesGallery />

      {/* Why Trust Us */}
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

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-6 text-primary-foreground">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Join 1000+ clients who have transformed their lives with
              science-backed coaching and real-food nutrition.
            </p>
            <a
              href="/plans"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-md font-medium hover:bg-accent/90 transition-colors"
            >
              Explore Our Plans
              <Zap className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
