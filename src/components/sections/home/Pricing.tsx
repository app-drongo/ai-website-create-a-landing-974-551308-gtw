'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, DollarSign, FileText, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export default function Pricing() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handleStarterPlan = () => {
    router.push('/');
  };
  const handleProfessionalPlan = () => {
    router.push('/');
  };
  const handleEnterprisePlan = () => {
    router.push('/');
  };
  const handleScheduleDemo = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const plans = [
    {
      name: 'Solo',
      description: 'Perfect for freelancers and independent contractors',
      price: 'Free',
      period: '',
      badge: null,
      icon: <FileText className="size-6 text-primary" />,
      features: [
        'Up to 5 invoices per month',
        'Basic invoice templates',
        'Payment tracking',
        'Client management',
        'Email support',
      ],
      cta: 'Start Invoicing Free',
      popular: false,
      action: handleStarterPlan,
    },
    {
      name: 'Professional',
      description: 'Best for growing businesses and small teams',
      price: '$19',
      period: '/month',
      badge: 'Most Popular',
      icon: <DollarSign className="size-6 text-primary" />,
      features: [
        'Unlimited invoices & estimates',
        'Professional templates',
        'Automated payment reminders',
        'Expense tracking',
        'Financial reporting',
        'Multi-currency support',
        'Online payment processing',
        'Priority support',
      ],
      cta: 'Start 14-Day Free Trial',
      popular: true,
      action: handleProfessionalPlan,
    },
    {
      name: 'Business',
      description: 'For established businesses with advanced needs',
      price: '$49',
      period: '/month',
      badge: 'Advanced',
      icon: <Clock className="size-6 text-primary" />,
      features: [
        'Everything in Professional',
        'Time tracking & billing',
        'Project management',
        'Team collaboration',
        'Advanced analytics',
        'Custom branding',
        'API integrations',
        'Dedicated account manager',
      ],
      cta: 'Upgrade Your Business',
      popular: false,
      action: handleEnterprisePlan,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Invoicely Pricing
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Simple Pricing for
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Smart Invoicing
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Choose the plan that fits your business size. Get paid faster with automated invoicing,
            expense tracking, and financial insights. No setup fees, cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button className="px-4 py-2 text-sm font-medium bg-background text-foreground rounded-md shadow-sm">
              Monthly
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Annual
              <Badge variant="secondary" className="ml-2 text-xs">
                Save 25%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={cn(
                'relative overflow-hidden transition-all duration-300 hover:shadow-lg',
                plan.popular
                  ? 'border-primary/50 shadow-lg shadow-primary/10 scale-105'
                  : 'border-border/50 hover:border-primary/20'
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="size-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Background Gradient */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative text-center pb-8">
                {plan.badge && !plan.popular && (
                  <Badge variant="outline" className="mb-4 mx-auto w-fit">
                    {plan.badge}
                  </Badge>
                )}

                <div className="mb-4 flex justify-center">{plan.icon}</div>

                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-6">{plan.description}</CardDescription>

                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground mb-1">{plan.period}</span>}
                </div>
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={plan.action}
                  className={cn(
                    'w-full text-base py-6',
                    plan.popular ? 'bg-primary hover:bg-primary/90' : ''
                  )}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.popular && <Zap className="size-4 mr-2" />}
                  {plan.cta}
                </Button>

                {plan.name === 'Professional' && (
                  <p className="text-center text-sm text-muted-foreground">
                    14-day free trial • No credit card required
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Need custom invoicing solutions?</h3>
          <p className="text-muted-foreground mb-6">
            We offer tailored invoicing and accounting solutions for enterprises with specific
            workflows. Let's discuss how Invoicely can streamline your financial operations.
          </p>
          <Button onClick={handleScheduleDemo} variant="outline" size="lg">
            Schedule a Demo
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-2">50,000+</div>
              <div className="text-sm text-muted-foreground">Invoices processed monthly</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Payment processing uptime</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">4.8/5</div>
              <div className="text-sm text-muted-foreground">Customer satisfaction rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
