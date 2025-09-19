'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Target,
  Users,
  Award,
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Heart,
  Lightbulb,
  Calculator,
  Clock,
  Shield,
} from 'lucide-react';

export default function About() {
  const handleReadStory = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewTeam = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const values = [
    {
      icon: Target,
      title: 'Accuracy First',
      description:
        "We're committed to providing precise invoicing and accounting tools that eliminate errors and ensure financial compliance for every business.",
    },
    {
      icon: Lightbulb,
      title: 'Smart Automation',
      description:
        'We leverage AI technology to automate repetitive tasks, letting you focus on growing your business instead of managing paperwork.',
    },
    {
      icon: Heart,
      title: 'Small Business Focused',
      description:
        'Every feature is designed with freelancers and small business owners in mind, making professional invoicing accessible to all.',
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description:
        'Your financial data is protected with bank-level security, ensuring complete privacy and compliance with industry standards.',
    },
  ];

  const stats = [
    { value: '2021', label: 'Founded', icon: Award },
    { value: '50K+', label: 'Monthly Invoices', icon: Calculator },
    { value: '15hrs', label: 'Saved Monthly', icon: Clock },
    { value: '99.9%', label: 'Uptime', icon: TrendingUp },
  ];

  const team = [
    {
      name: 'Alex Thompson',
      role: 'CEO & Co-Founder',
      image: 'AT',
      bio: 'Former CFO at FinTech Corp. 12+ years in financial software and small business solutions.',
    },
    {
      name: 'Maria Santos',
      role: 'CTO & Co-Founder',
      image: 'MS',
      bio: 'Ex-Stripe engineer. Expert in payment processing and financial automation systems.',
    },
    {
      name: 'James Wilson',
      role: 'Head of Product',
      image: 'JW',
      bio: 'Former QuickBooks product manager. Passionate about user-friendly financial tools.',
    },
    {
      name: 'Lisa Chang',
      role: 'VP of Customer Success',
      image: 'LC',
      bio: 'Small business advocate with 10+ years helping entrepreneurs streamline operations.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            About Invoicely
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Simplifying Business Finance
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              One Invoice at a Time
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're a dedicated team of financial technology experts and small business advocates on a
            mission to make professional invoicing and accounting accessible to everyone.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2021 by frustrated small business owners, we experienced firsthand the
                pain of managing invoices, chasing payments, and keeping books organized while
                trying to grow a business.
              </p>
              <p>
                After struggling with complex accounting software and expensive solutions designed
                for large corporations, we knew small businesses deserved better. So we built
                Invoicely - simple, powerful, and affordable.
              </p>
              <p>
                Today, we're proud to process over 50,000 invoices monthly, helping freelancers and
                small businesses get paid 3x faster while saving 15 hours per month on
                administrative tasks.
              </p>
            </div>
            <Button onClick={handleReadStory} className="group">
              Start Your Free Trial
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Every small business deserves professional invoicing tools without the
                      enterprise price tag."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- Alex Thompson, CEO</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="text-center border-border/50 hover:border-primary/20 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Values</h3>
            <p className="text-muted-foreground">
              The principles that drive our commitment to making business finance simple and
              accessible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-border/50 hover:border-primary/20 transition-all duration-300 group"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Meet Our Team</h3>
            <p className="text-muted-foreground">
              Financial technology experts and small business advocates working to simplify your
              invoicing experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-primary/20 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button onClick={handleViewTeam} variant="outline" className="group">
              Start 14-Day Free Trial
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "Invoicely transformed our billing process completely. We went from chasing payments
                for weeks to getting paid in days. The automated reminders alone saved us countless
                hours."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  SM
                </div>
                <div className="text-left">
                  <div className="font-semibold">Sarah Mitchell</div>
                  <div className="text-sm text-muted-foreground">
                    Founder, Creative Design Studio
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
