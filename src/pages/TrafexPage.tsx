import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { TrendingUp, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TrafexPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Banner */}
      <div className="bg-foreground py-3 text-center text-sm text-background">
        Take a quick tour experience how simple it is to manage a global network of contractors with Trafex compliantly
        <Button 
          variant="link" 
          className="ml-2 text-background underline cursor-pointer" 
          onClick={() => alert('Starting tour...')}
        >
          Learn more
        </Button>
      </div>

      {/* Navigation */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold">✦ trafex</div>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm">
              <a href="#" className="font-medium cursor-pointer hover:text-primary" onClick={(e) => { e.preventDefault(); alert('Opening Platform...'); }}>Platform</a>
              <a href="#" className="text-muted-foreground hover:text-foreground cursor-pointer" onClick={(e) => { e.preventDefault(); alert('Opening Solutions...'); }}>Solutions</a>
              <a href="#" className="text-muted-foreground hover:text-foreground cursor-pointer" onClick={(e) => { e.preventDefault(); alert('Opening Resources...'); }}>Resources</a>
              <a href="#" className="text-muted-foreground hover:text-foreground cursor-pointer" onClick={(e) => { e.preventDefault(); alert('Opening Pricing...'); }}>Pricing</a>
            </nav>
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => alert('Opening login...')}>Login</Button>
              <Button variant="default" onClick={() => alert('Getting started...')}>Get started</Button>
              <Button variant="outline" size="sm" asChild>
                <Link to="/">Back</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <h1 className="mb-6 text-7xl font-bold leading-tight">
              Onboard,{' '}
              <span className="relative">
                <span className="relative z-10">manage</span>
                <span className="absolute inset-0 -rotate-2 rounded-lg bg-foreground opacity-10" />
              </span>{' '}
              and pay
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Hiring talent abroad? Get with the market leader in contractor management
            </p>
            <div className="flex gap-4">
              <Button size="lg" onClick={() => alert('Getting started with Trafex...')}>Get Started</Button>
              <Button size="lg" variant="outline" onClick={() => alert('Booking a demo...')}>
                Book a demo
              </Button>
            </div>
          </div>

          {/* Right - Dashboard Preview */}
          <div className="relative">
            <div className="grid gap-4">
              {/* Top Dashboard Card */}
              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <Button variant="ghost" size="sm" className="text-white" onClick={() => {}}>
                      London ▼
                    </Button>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">Show variances</span>
                      <Switch />
                    </div>
                  </div>
                  <div className="mb-2 text-sm text-gray-400">Salaries</div>
                  <div className="mb-1 flex items-baseline gap-2">
                    <span className="text-4xl font-bold">R$440,120</span>
                    <Badge className="bg-green-500/20 text-green-400">
                      <TrendingUp className="mr-1 h-3 w-3" />
                      +8.2%
                    </Badge>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-400">Pensions</div>
                      <div className="text-2xl font-bold">$24,675</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                        👤
                      </div>
                      <div className="text-2xl font-bold">+5</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Invoice Cards */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-muted/50">
                  <CardContent className="p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-medium">invoice-710</span>
                    </div>
                    <div className="text-2xl font-bold">$370.00</div>
                  </CardContent>
                </Card>
                <Card className="bg-muted/50">
                  <CardContent className="p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-medium">invoice-711</span>
                    </div>
                    <div className="text-2xl font-bold">$210.00</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Team Image */}
            <div className="mt-6 overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_34854c5a-cbd6-4e28-903d-f6dea3183945.jpg"
                alt="Contractor team collaboration"
                className="h-64 w-full object-cover hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-8 md:grid-cols-4 text-center">
          <div>
            <div className="text-5xl font-bold text-primary mb-2">150+</div>
            <div className="text-muted-foreground">Countries Supported</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-primary mb-2">10k+</div>
            <div className="text-muted-foreground">Active Contractors</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-primary mb-2">$2B+</div>
            <div className="text-muted-foreground">Payments Processed</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime Guarantee</div>
          </div>
        </div>
      </section>

      {/* Visual Features Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-2 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-4">Streamline Your Contractor Payments</h2>
              <p className="text-xl text-muted-foreground mb-6">
                Automate payroll, track invoices, and manage contracts all in one place. Save time and reduce errors with our intelligent payment system.
              </p>
              <Button size="lg" onClick={() => alert('Learning more about payments...')}>Learn More</Button>
            </div>
            <div className="overflow-hidden rounded-lg shadow-xl">
              <img
                src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_69e979af-c491-40af-aa52-90dbb9a93f77.jpg"
                alt="Payroll dashboard"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1 overflow-hidden rounded-lg shadow-xl">
              <img
                src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_f70a6bbf-1d80-4ecc-a276-0efe3f176ee7.jpg"
                alt="HR onboarding"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold mb-4">Onboard Contractors in Minutes</h2>
              <p className="text-xl text-muted-foreground mb-6">
                Digital contracts, automated compliance checks, and instant verification. Get your contractors working faster with our streamlined onboarding process.
              </p>
              <Button size="lg" onClick={() => alert('Starting onboarding demo...')}>Try Demo</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contract Signing Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Secure Digital Contracts</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            E-signatures, version control, and automatic renewals. Manage all your contractor agreements with confidence.
          </p>
        </div>
        <div className="max-w-4xl mx-auto overflow-hidden rounded-lg shadow-2xl">
          <img
            src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_d3272998-575c-4614-8be2-3792c475a8c8.jpg"
            alt="Contract signing"
            className="w-full h-96 object-cover"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Everything you need for global contractor management
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 text-4xl">🌍</div>
                <h3 className="mb-2 text-xl font-semibold">Global Compliance</h3>
                <p className="text-muted-foreground">
                  Stay compliant with local laws and regulations across 150+ countries
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 text-4xl">⚡</div>
                <h3 className="mb-2 text-xl font-semibold">Fast Onboarding</h3>
                <p className="text-muted-foreground">
                  Onboard contractors in minutes with automated workflows and contracts
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 text-4xl">💰</div>
                <h3 className="mb-2 text-xl font-semibold">Easy Payments</h3>
                <p className="text-muted-foreground">
                  Pay contractors in their local currency with competitive exchange rates
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>© 2026 Trafex. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
